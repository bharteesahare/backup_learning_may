// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write("Hello from Node.js Server");
//     res.end();
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// const server1 = http.createServer((req, res) => {
//     res.write("Hello from Node.js Server 1");
//     res.end();
// });

// server1.listen(3001, () => {
//     console.log("Server running on port 3001");
// });


const arg=process.argv;
console.log("----------", arg);

const env = process.env;
console.log("--env---", env);