// HANDLING QUERY PARAMETERS

const http = require("http");
const url = require("url");


const server = http.createServer((request, response)=>{

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");


    const parsedUrl = url.parse(request.url, true); // parsed the request url

    // /about?v=7239dj2&H=hello&value=ilovepizza

    // pathname => /about .... querystring => v=7239dj2&H=hello&value=ilovepizza;


    const pathname = parsedUrl.pathname;

    const query = parsedUrl.query; // object

    /** how the query string looks
    {
      "v": "7239dj2",
      "H": "hello",
      "value": "ilovepizza"
      "name": "john"
     }
     */


     if(pathname === "/"){
        response.end(`Welcome to the home page. your value query is ${query.H} ${query.value} ${query.v}`)
     }
     else if(pathname === "/about"){
        response.end(`We are a cool company your value query is ${query.H} ${query.value} ${query.v}. and my name is ${query.name}`)

     } else{
        response.statusCode = 404;
        response.end("Page not found")
     }



})

const PORT = 8082;

server.listen(PORT, ()=>{
    console.log("Server running at port: ", PORT)
})