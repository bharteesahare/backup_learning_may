const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url);
    // const url = req.url;
    if (req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from the node js</body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);


// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url === '/') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body>');
//     res.write('<form action="/message" method="POST">');
//     res.write('<input type="text" name="message">');
//     res.write('<button type="submit">Send</button>');
//     res.write('</form>');
//     res.write('</body>');
//     res.write('</html>');
//     return res.end();
//   }

//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title></head>');
//   res.write('<body>Hello from Node.js</body>');
//   res.write('</html>');
//   res.end();
// });

// server.listen(3000);
