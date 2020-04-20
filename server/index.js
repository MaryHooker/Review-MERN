//entry point
let express = require('express');
let app = express();
let portNumber = 2112;

//import and mount route
let api = require('./routes/api');
app.use('/api',api);

// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
const mongoose = require('mongoose');
// connect to database
const mongoDB = 'mongodb+srv://Student:C0d3Cr3w@cluster0-p8fhv.mongodb.net/cs_database?retryWrites=true&w=majority';
//sanity
console.log(`Connecting to mongo @ ${mongoDB}`);
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//listener
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})