const http = require("http");
const url = require("url"); 

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    
    const parsedUrl = url.parse(req.url, true);

    
    if (parsedUrl.pathname === "/") {
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write('<h1 style="color: red;">Hello World!</h1>');
        res.write("<p>I wonder what else we can send...</p>");
        res.end();
    } else if (parsedUrl.pathname === "/route1") {
        // Custom route 1
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write('<h1 style="color: blue;">Custom Route 1</h1>');
        res.write("<p>This is a custom route with a unique experience!</p>");
        res.end();
    } else if (parsedUrl.pathname === "/route2") {
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write('<h1 style="color: green;">Custom Route 2</h1>');
        res.write("<p>Exploring the possibilities of Node.js routes!</p>");
        res.end();
    } else {
        
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("404 Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
