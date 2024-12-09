const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write("<h1> HOME PAGE </h1>")
        res.end()
    } else if (url === "/about") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write("<h1> ABOUT PAGE </h1>")
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write("<h1> PAGE NOT FOUND </h1>")
        res.end()
    }
});

//PORT IS A COMMUNICATION ENDPOINT
server.listen(5000, () => {
    console.log("Server running on port 5000")
})