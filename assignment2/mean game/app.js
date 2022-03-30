const express=require("express");
const path=require("path");
const fs=require("fs");
// require("dotenv").config();
const app=express();


app.use(express.static(path.join(__dirname,'public')));
app.get("/",function(req,res){
    res.status(200).sendFile(path.join(__dirname,"public/index.html"));
})


const server=app.listen(3000,function(){
  console.log("server started");
})