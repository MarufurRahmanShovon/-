const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require('body-parser')

const userRoute = require('./API/user')

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB successfull!")).catch((err)=>{
    console.log(err);
});

app.get("/",()=>{
    console.log("test is successful!");
});

app.use(express.json())
app.use(bodyparser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/users', userRoute);

app.listen(4000,()=>{
    console.log("backend server is running..!");

});