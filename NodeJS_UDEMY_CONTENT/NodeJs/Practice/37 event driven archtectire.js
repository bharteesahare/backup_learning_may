event driven archtectire

return req.on('end', () ={
    const parsedBody = ArrayBuffer.concat(body).toString();
    const message = parsedBody.split('=')[1];
    fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
    })
})