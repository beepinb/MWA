const http=require("http");
const fs=require("fs");
require("dotenv").config();
const serveAllRequests=function(req,res){
    let statusCode;
    let fileBuffer;
    if(req.method=='POST'){
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end("{'message' : 'This is Json Type'}");
    }
    if(req.method=='GET'){
        switch(req.url){
            case "/":
                fs.readFile(__dirname+"\\index.html",function(err,buffer){
                    if (err) {
                        statusCode=404;
                        fileBuffer="File Not Found";
                    }else{
                        statusCode=200;
                        fileBuffer=buffer;
                    }
                    res.writeHead(statusCode);
                    res.end(fileBuffer);
                });
                break;
            
            case "/page1.html":
                
                fs.readFile(__dirname+"\\page1.html",function(err,buffer){
                    if (err) {
                        statusCode=404;
                        fileBuffer="File Not Found";
                    }else{
                        statusCode=200;
                        fileBuffer=buffer;
                    }
                    res.writeHead(statusCode);
                    res.end(fileBuffer);
                });
                break;
            case "/page2.html":
                
                fs.readFile(__dirname+"\\page2.html",function(err,buffer){
                    if (err) {
                        statusCode=404;
                        fileBuffer="File Not Found";
                    }else{
                        statusCode=200;
                        fileBuffer=buffer;
                    }
                    res.writeHead(statusCode);
                    res.end(fileBuffer);
                });
                break;
        };
    }
}

const server=http.createServer(serveAllRequests);

server.listen(process.env.PORT,function() {
    console.log(process.env.LISTEN_TO_PORT_MSG,server.address().port);
});
