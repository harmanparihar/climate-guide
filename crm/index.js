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
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
app.use('/user', user);


// serving static files
app.use(express.static('public'));

app.get('/',(req,res)=>
  res.send(`Node and express server is running on port ${PORT}`)
);
app.listen(PORT,() =>
  console.log(`your server is running on ${PORT}`)
);
