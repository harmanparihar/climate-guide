import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'

import cors from 'cors';
const passport = require('./src/passport');

const app = express();
const PORT = 8080;
const db_dev= 'mongodb://diego:langara123@ds241133.mlab.com:41133/climate_guide_v0';

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const user = require('./src/routes/user')

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
app.listen(PORT,() =>
  console.log(`your server is running on ${PORT}`)
);



/***************************************************************/
/*   Fetch and Create chart data                               */
/*       Modified by: Maggie                                   */
/*       Nov 11, 2018                                          */
/***************************************************************/

const request = require('request');
const fs = require('fs');
let dataArray1 = [];
let dataArray2 = [];
let dataArray3 = [];
let dataArray4 = [];

const urlTemp= "https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt";

request.get(urlTemp, (error, respond, body) => {
    if (!error && respond.statusCode == 200) {

        // loop through the lines of body of txt file then push elements of lines to dataArray
        for (let line of body.split("\n")) {
            dataArray1.push({
                "x": line.split("\t")[0],
                "y": line.split("\t")[1]
            });
            dataArray2.push({
                "x": line.split("\t")[0],
                "y": line.split("\t")[2].replace("\r", "")
            });
        }
    } else {
        console.log('************************** ' + error);
    }

    // create 2 new JSON files so that react charts can use
    fs.writeFile('../client/src/components/causes/tempChart/dataSource/dataset1.json', JSON.stringify(dataArray1), 'utf8');
    fs.writeFile('../client/src/components/causes/tempChart/dataSource/dataset2.json', JSON.stringify(dataArray2), 'utf8');
});

// end of Temperature data

// Carbon data (fetch from excel)
const excelToJson = require('convert-excel-to-json');
let sourcePath = '../client/src/components/causes/carbonChart/dataSource';

// Fossil Fuel - column B
fs.writeFile(sourcePath + '/dataset1.json', JSON.stringify(
    excelToJson({
        sourceFile: sourcePath + '/carbon.xlsx',
        sheets: [{
            name: 'Global Carbon Budget',
            range: 'A42:F78',
            columnToKey: {
            	A: 'x',
        		B: 'y'
            }
        }]
    })
), 'utf8');

// Atmospheric Growth - column D
fs.writeFile(sourcePath + '/dataset2.json', JSON.stringify(
    excelToJson({
        sourceFile: sourcePath + '/carbon.xlsx',
        sheets: [{
            name: 'Global Carbon Budget',
            range: 'A42:F78',
            columnToKey: {
            	A: 'x',
        		D: 'y'
            }
        }]
    })
), 'utf8');

// Land-use Change Emissions - column C
fs.writeFile(sourcePath + '/dataset3.json', JSON.stringify(
    excelToJson({
        sourceFile: sourcePath + '/carbon.xlsx',
        sheets: [{
            name: 'Global Carbon Budget',
            range: 'A42:F78',
            columnToKey: {
            	A: 'x',
        		C: 'y'
            }
        }]
    })
), 'utf8');

// Land Sink - column E
fs.writeFile(sourcePath + '/dataset4.json', JSON.stringify(
    excelToJson({
        sourceFile: sourcePath + '/carbon.xlsx',
        sheets: [{
            name: 'Global Carbon Budget',
            range: 'A42:F78',
            columnToKey: {
            	A: 'x',
        		E: 'y'
            }
        }]
    })
), 'utf8');

// Ocean Sink - column F
fs.writeFile(sourcePath + '/dataset5.json', JSON.stringify(
    excelToJson({
        sourceFile: sourcePath + '/carbon.xlsx',
        sheets: [{
            name: 'Global Carbon Budget',
            range: 'A42:F78',
            columnToKey: {
            	A: 'x',
        		F: 'y'
            }
        }]
    })
), 'utf8');
// end of Carbon


// CO2 (fetch from live URL)
// const urlCO2= "ftp://aftp.cmdl.noaa.gov/products/trends/co2/co2_mm_mlo.txt";

const ftp = require('ftp');
let data = "";
const path = require('path');
const filePath = path.join('../client/src/components/causes/co2Chart/dataSource', 'dataset1.txt');

let client = new ftp();
client.on('ready', () => {
    client.get('products/trends/co2/co2_annmean_mlo.txt', (err, stream) => {
        if (err) throw err;
        stream.once('close', () => {
            client.end();
        });
        stream.pipe(fs.createWriteStream('../client/src/components/causes/co2Chart/dataSource/dataset1.txt'));

        fs.readFile(filePath, {encoding: 'utf-8'}, (error, body) => {
            if (!error) {
                dataArray3 = body.split('\n');
                for (let line = 57; line < dataArray3.length-1; line++) {
                    dataArray4.push({
                        "x": dataArray3[line].trim().split("   ")[0],
                        "y": dataArray3[line].trim().split("   ")[1]
                    });
                }
                fs.writeFile('../client/src/components/causes/co2Chart/dataSource/dataset1.json', JSON.stringify(dataArray4), 'utf8');
            } else {
                console.log('************************* ' + error);
            }
        });
    });
});

client.connect({
    host: "aftp.cmdl.noaa.gov"
});
