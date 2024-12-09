const express = require('express');
const app = express();
const PORT = 5000;

/* IN EXPRESS
* res.send() => the data that we want to send back to the web
* res.status() => this allows us to set up http status with our response such as 200, 300, 400
* */
app.get("/", (req, res) => {
    res.status(200).send("This is the homepage")
});

app.get("/about", (req, res) => {
    res.status(200).send("This is the about page")
});

app.all("*", (req, res) => {
    res.status(404).send("404 PAGE NOT FOUND")
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}` )
})


/*
const express = require("express");
const path = require("path");


const app = express();
const PORT = 5000;

app.use(express.static("./public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
})

app.all("*", (req, res) => {
    res.status(404).send("<h1> 404 Error </h1>")
})
app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`)
});
* */