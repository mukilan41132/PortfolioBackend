const express = require("express");
const cors = require("cors");
const app = express();
const baseRouts = require('./Routs/basicRout');
const Mongodb = require('./MongoDbconnection/MongoDbConnection');
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use('/api', baseRouts); 

Mongodb.MongodbConnection().then().catch(function (error) {
    console.log('connection fail');
    console.log(error);
})

app.listen(3000, () => console.log('Server running on port 3000'));