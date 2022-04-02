require("dotenv").config();
require("./api/data/db");
const express=require("express");
const app=express();
const routes=require("./api/routes");

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
})

app.use("/api",routes);

const server=app.listen(process.env.PORT,function(){
    console.log(process.env.PORT_LISTINING_MSG,server.address().port);
})
