function dashboardHandler(request,response){
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Welcome to the user dashboard")
}


module.exports = dashboardHandler