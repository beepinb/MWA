require("dotenv").config();
require("./data/dbConnection").open();
const express=require("express");
const routes=require("./router");
const app=express();

app.use(express.json());
app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});

app.use("/api",routes);

const server=app.listen(process.env.PORT,function(){
    console.log(process.env.LISTEN_TO_PORT_MSG,server.address().port);
});