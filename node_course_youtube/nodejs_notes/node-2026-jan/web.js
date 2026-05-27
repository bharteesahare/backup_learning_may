const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
    fs.readFile("html/web.html", 'utf-8',(err, data)=>{
        if (err){
            res.writable('internal server error');
            res.end()
            return
        }

    })
    
}).listen(3000);