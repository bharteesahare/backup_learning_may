const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req);
})

server.listen(3000); // this is the request log into the cancel.