const http = require("http");
const save = require("./modules/save");
const dashboardHandler = require("./modules/dashboardHandler");
const notFoundHandler = require("./modules/notfoundHandler");
const server = http.createServer((request, response)=>{

    if(request.method === "POST" && request.url === "/save"){
     save(request, response)
    } else if(request.method === "GET" && request.url === "/dashboard"){
     dashboardHandler(request, response)
    } else {
     notFoundHandler(request, response)
    }
})

const PORT = 8083;


server.listen(PORT, ()=>{
    console.log("SERVER RUNNING ON PORT ", PORT)
})