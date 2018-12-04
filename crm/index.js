import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

import cors from 'cors';
const passport = require('./src/passport');

const app = express();
const PORT = 8080;
const db_dev= 'mongodb://diego:langara123@ds241133.mlab.com:41133/climate_guide_v0';

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const user = require('./src/routes/user');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(db_dev, {
   useMongoClient: true
}).then(
    () => {
        console.log('Connected to Mongo');

    },
    err => {
         /** handle initial connection error */
         console.log('error connecting to Mongo: ')
         console.log(err);

        }
  );

// bodyparser setup
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());




routes(app);

// Sessions

//not working sessions. line 51 isn't saving the session
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false, //required
    saveUninitialized: false //required
  })
)


// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser
app.use('/user', user);


// serving static files
app.use(express.static('public'));

app.get('/',(req,res)=>
  res.send(`Node and express server is running on port ${PORT}`)
);
app.listen(PORT,"localhost", () =>
  console.log(`your server is running on ${PORT}`)
);



/***************************************************************/
/*   Fetch and Create chart data                               */
/*       Modified by: Maggie                                   */
/*       Nov 11, 2018                                          */
/***************************************************************/

const request = require('request');
const fs = require('fs');
let dataArray1 = [[], []];
let dataArray2 = [];
let dataArray3 = [];
let dataArray4 = [];

const urlTemp= "https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt";

request.get(urlTemp, (error, respond, body) => {
    if (!error && respond.statusCode == 200) {

        // loop through the lines of body of txt file then push elements of lines to dataArray
        for (let line of body.split("\n")) {
            dataArray1[0].push({
                "x": line.split("\t")[0],
                "y": line.split("\t")[1]
            });
            dataArray1[1].push({
                "x": line.split("\t")[0],
                "y": line.split("\t")[2].replace("\r", "")
            });
        }
    } else {
        console.log('************************** ' + error);
    }

    // create a new JSON files so that react charts can use
    fs.writeFile('../client/src/components/causes/tempChart/dataSource/dataset.json', JSON.stringify(dataArray1), 'utf8', (error) => {
        if (error) throw error;
    });
});

// end of Temperature data

// Carbon data (fetch from excel)
const excelToJson = require('convert-excel-to-json');
let sourcePath = '../client/src/components/causes/carbonChart/dataSource';

// Fossil Fuel - column B
dataArray2.push(excelToJson({
    sourceFile: sourcePath + '/carbon.xlsx',
    sheets: [{
        name: 'Global Carbon Budget',
        range: 'A42:F78',
        columnToKey: {
            A: 'x',
            B: 'y'
        }
    }]
}));

// Atmospheric Growth - column D
dataArray2.push(excelToJson({
    sourceFile: sourcePath + '/carbon.xlsx',
    sheets: [{
        name: 'Global Carbon Budget',
        range: 'A42:F78',
        columnToKey: {
            A: 'x',
            D: 'y'
        }
    }]
}));

// Land-use Change Emissions - column C
dataArray2.push(excelToJson({
    sourceFile: sourcePath + '/carbon.xlsx',
    sheets: [{
        name: 'Global Carbon Budget',
        range: 'A42:F78',
        columnToKey: {
            A: 'x',
            C: 'y'
        }
    }]
}));

// Land Sink - column E
dataArray2.push(excelToJson({
    sourceFile: sourcePath + '/carbon.xlsx',
    sheets: [{
        name: 'Global Carbon Budget',
        range: 'A42:F78',
        columnToKey: {
            A: 'x',
            E: 'y'
        }
    }]
}));

// Ocean Sink - column F
dataArray2.push(excelToJson({
    sourceFile: sourcePath + '/carbon.xlsx',
    sheets: [{
        name: 'Global Carbon Budget',
        range: 'A42:F78',
        columnToKey: {
            A: 'x',
            F: 'y'
        }
    }]
}));
fs.writeFile(sourcePath + '/dataset.json', JSON.stringify(dataArray2), 'utf8', (error) => {
    if (error) throw error;
});
// end of Carbon


// CO2 (fetch from live URL - FTP protocol)
// const urlCO2= "ftp://aftp.cmdl.noaa.gov/products/trends/co2/co2_annmean_mlo.txt";

const ftp = require('ftp');

let client = new ftp();
client.on('ready', () => {
    client.get('products/trends/co2/co2_annmean_mlo.txt', (error, stream) => {
        if (error) throw error;

        stream.once('close', () => {
            client.end();
        });

        let content = "";
        stream.on('data', (chunk) => {
            content += chunk;
        });

        stream.on('end', () => {
            dataArray3 = content.split('\n');
            for (let line = 57; line < dataArray3.length-1; line++) {
                dataArray4.push({
                    "x": dataArray3[line].trim().split("   ")[0],
                    "y": dataArray3[line].trim().split("   ")[1]
                });
            }
            // console.log(dataArray4);
            fs.writeFile('../client/src/components/causes/co2Chart/dataSource/dataset.json', JSON.stringify(dataArray4), 'utf8', (error) => {
                if (error) throw error;
            });
        });
    });
});
// app.get('/fusionCharts', (req, res) => {
//     res.send({exp: "hibyy"});
// });

client.connect({
    host: "aftp.cmdl.noaa.gov"
});


// SEND FORM SUBMISSION TO EMAIL

const nodemailer = require('nodemailer');

app.post('/api/form', (req, res) =>{
    nodemailer.createTestAccount(( err, account) => {
        const htmlEmail = `
        <div>
        <p>Name: ${req.body.userName}</p>
        <p>Email: ${req.body.userEmail}</p>
        <p>Subject: ${req.body.userSubject}</p>
        <p>Message: ${req.body.userMessage}</p>
        <p>Member of Discussion Board: ${req.body.userSubscribe}</p>
        </div>
        `;

        var transporter = nodemailer.createTransport({
            host: 'smtp.mailgun.org',
            port: 587,
            auth: {
                // user: process.env.GMAIL_EMAIL,
                // pass: process.env.GMAIL_PASS
                user: "postmaster@sandbox3d5d1673a19941b6bad15f59c7585e15.mailgun.org",
                pass: "123456aS"
            }
        });

        let mailOptions = {
            from: req.body.userEmail,
            to:'maggievu91@gmail.com',
            replyTo: req.body.userEmail,
            subject: req.body.userSubject,
            text: req.body.userMessage,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
            console.log('ERROR' + err)
            else
            console.log('INFO' + info);
        });
    })
})
