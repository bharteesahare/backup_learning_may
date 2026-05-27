streams & buffers
incoming request
stream ------>req1 body part 1----> req body part 2 ----> req body part 3 ---> req body part 4 ----> fully parsed

Buffer -> bus stop.


buffer -> a consturch which allow you to hold multiple chunks and work with them before they are released.


get request data 
const body = [];
req.on('data', (chunk) => {
    body.push(chunk);
})
req.on('end', () => {
    const parseBody = Buffer.concat(body).toString();
    console.log(parseBody);
    const message = parseBody.split('=')[1]; 
    fs.writeFileSync  ('message.txt', message) 
})


fs.writeFileSync -> syncronoous
huge file

fs.writeFile -> wher its done


