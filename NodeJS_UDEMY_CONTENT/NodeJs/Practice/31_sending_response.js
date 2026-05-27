// if we modified the code always need to restart the server

// const http = require('http');

// const server = http.createServer((req,res) => {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text/html');  // meta data we pass
//     res.write('<html>'); // multiple rwrite respoonse
//     res.write('<head><title>My first page</title></head>');
//     res.write('<body><h1>Hello from my node js server</h1></body>');
//     res.write('</html>');
//     res.end();
// })

// server.listen(3000);


const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello from my node js server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);


// Request & Response Headers
// On both requests and responses, Http headers are added to transport metadata from A to B.

// The following article provides a great overview of available headers and their role: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

// Whilst this article is a great resource, especially to dive deeper, please don't learn this list by heart though! You'll encounter many of these headers throughout the course and I'll explain them when we need them.