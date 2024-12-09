const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("This is the landing page")
    }else if(req.url === "/about") {
        res.end("This is the about page")
    } else
    res.end(
        `
        <h1> 404 PAGE ERROR </h1>
        <a href="/"> Click to go back </a>
        `
    )
});

server.listen(5000);

/*
const http = require("http");

const server = http.createServer();

server.on("request", (res, req) => {
    res.end("Welcome")
});

server.listen(5000, () => {
    console.log("Running on port 5000")
})
* */