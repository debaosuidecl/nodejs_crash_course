const http = require("http");


// create a server

const server = http.createServer((request, response)=>{

    response.statusCode = 200; // 200 => the request is okay // 400 - 500 is bad
    response.setHeader("Content-Type", "text/plain");

    response.end("Welcome to my website");
})

const PORT = 8080;


server.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})