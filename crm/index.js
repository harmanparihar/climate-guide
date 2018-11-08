import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'
import cors from 'cors';
const app = express();
const PORT = 8080;
const db_dev= 'mongodb://diego:langara123@ds241133.mlab.com:41133/climate_guide_v0';
// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(db_dev, {
   useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());

routes(app);


// serving static files
app.use(express.static('public'));

app.get('/',(req,res)=>
  res.send(`Node and express server is running on port ${PORT}`)
);
app.listen(PORT,() =>
  console.log(`your server is running on ${PORT}`)
);
