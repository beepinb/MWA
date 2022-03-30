const express=require("express");
const path=require("path");
const fs=require("fs");
require("dotenv").config();
const app=express();


app.post("/json",function(req,res){
    console.log("This is JSON Post");
    res.status(200).json({"message":"Json Data"});
})

app.use(express.static(path.join(__dirname,'public')));

const server=app.listen(process.env.PORT,function(){
    console.log(process.env.LISTEN_TO_PORT_MSG,server.address().port);
})