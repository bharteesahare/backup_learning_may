// localhost 3000 -> port


// headers -> metadata 
// host: request send
// browser data
// accept data
// cookie-> google analytic cookie

// req.url, req.method, req.headers -> comma seperated 


// const http = require('http');

// const server = http.createServer((req,res) => {
//     console.log(req.url, req.method, req.headers);
//     res.end('Hello from server');
// })

// server.listen(3000);


const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.end('Hello from server');
});

server.listen(3000);

