require("dotenv").config();
require("./data/dbconnection").open();
const express=require("express");
const app=express();
const routes=require("./router")


app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
})

app.use("/api",routes);


const server=app.listen(process.env.PORT,function(){
    console.log(process.env.LISTEN_TO_PORT_MSG,server.address().port);
})