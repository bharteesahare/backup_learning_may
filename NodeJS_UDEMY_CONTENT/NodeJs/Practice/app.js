// need to writer server.js or app.js

// core module

// http -> launch a server and send a request, google map api.
// https -> launch a ssl server.
// fs 
// Path
// os -> operating system

// we will never change this again
// gloabl keyword
//require a take a path
// if you don;t have a path you can core module.
// you can write with ./ ->relative path or / -> absoulute path
const http = require('http');
// request server -> execute the incoming request.
// response => send the response
// one way doing
// function rqListner(req, res) {
// }
// http.createServer(rqListner); // creating server


//second way// event driven architecture
// http.createServer(function(req,res) {

// })


// third way nest js// using arrow function
const server = http.createServer((req,res) => {
    console.log(req);
});

server.listen(3000);