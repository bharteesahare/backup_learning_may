const http = require('http');


const myServer = http.createServer((req,res) => {
    console.log(req);
    res.end("hello");
})

myServer.listen(8000);