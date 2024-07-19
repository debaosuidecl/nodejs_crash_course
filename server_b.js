const http = require("http");

// create my server

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader("Content-Type", 'text/plain');
    if(request.url === "/"){
        response.end("Welcome to our home page");
    } else if(request.url === "/about"){
        response.end("We are a cool company that does cool stuff")
    } else{
        response.statusCode = 404 // when the resource is not found
        response.end("Page Not Found so sorry")

    }
})

const PORT = 8081;

server.listen(PORT, ()=>{
    console.log(`Server runnning on port :${PORT}`)
})