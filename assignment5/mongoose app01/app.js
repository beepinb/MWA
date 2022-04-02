require("dotenv").config();
const express=require("express");
const app=express();

require("./data/db")

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
})


const server=app.listen(process.env.PORT,function(){
    console.log(process.env.PORT_LISTINING_MSG,server.address().port);
})
