// const express = require("express");
// const { people } = require("./data");
// const app = express();
//
// app.use(express.static("./methods-public"));
// app.use(express.urlencoded({ extended : false }))
// app.use(express.json())
//
// app.get("/api/people", (req, res) => {
//     res.status(200).json(people)
// })
//
// app.post("/api/people", (req, res) => {
//     const { name } = req.body;
//     if(!name) {
//         return res.status(404).json({ success : false, msg: "Please provide a name" })
//     }
//     return res.status(201).json({ success:true, person: name })
// })
// app.post("/login", (req, res) => {
//     const { name } = req.body;
//     if(name) {
//         return res.status(200).send(`Welcome ${name}`)
//     }
//      return res.status(404).send("Please Provide Credentials")
// })
//
// app.put("/api/people/:id", (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     console.log(id, name)
//     res.send("hello")
// })
// app.listen(5000, () => {
//     console.log("Server running on port 5000")
// });
//
//
// /* The purpose of app.use(express.urlencoded({ extended: false })) in an Express.js application is to parse incoming request bodies that contain URL-encoded data (like form submissions). Here's a breakdown of its role:
//
// express.urlencoded(): This middleware parses URL-encoded data sent through the POST request (usually from HTML forms with application/x-www-form-urlencoded encoding). This data is then accessible via req.body in your route handlers.
//
// extended: false: This option determines how the URL-encoded data is parsed.
//
// If set to false, it uses the querystring library to parse URL-encoded data, which only supports simple key-value pairs (i.e., strings or arrays).
// If set to true, it uses the qs library, which allows for rich objects and nested structures (like objects within objects).
// So, app.use(express.urlencoded({ extended: false })) ensures that your Express app can handle simple URL-encoded form data (like plain key-value pairs) and makes it available as req.body.
//
// * */
//
// /*
// *
// The app.use(express.json()) middleware in an Express.js application is used to parse incoming requests with JSON payloads. Here's what it does:
//
// express.json(): This middleware parses the JSON data sent in the body of an HTTP request (typically via POST, PUT, or PATCH requests) and makes it accessible through req.body.
// Use case:
// When a client (like a frontend or an API consumer) sends JSON data in the body of a request (often with the Content-Type: application/json header), express.json() processes the JSON data and converts it into a JavaScript object so that you can work with it easily in your route handlers.
// *
// * */


const express = require("express");
const app = express();

//req => middleware => res

/* IF WE WANT TO USE A COMMON FUNCTION THAT CAN BE USED IN SEVERAL REQUESTS, THEN WE HAVE TO USE MIDDLEWARE */
/* IN EXPRESS THE PARAMS req, res, next ARE AUTOMATICALLY PASSED INTO THE MIDDLEWARE FUCNTION, WE DONT NEED TO PASS IT MANUALLY*/
const logger = (req, res, next) => { //these params are passed automatically
    //the reason we use next() is to call the action that needs to be done after we call in the middleware function
    //without next() the url will just keep loading
    //with next the res.send() method will be invoked
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time) //GET /about 2024
    // next()
}

app.get("/", (req, res) => {
    res.send("HOME")
});

app.get("/about", (req, res) => { //THIS IS THE WAY WE PASS MIDDLEWARE ie: logger
    res.send("ABOUT")
});

app.listen(5000, () => {
    console.log("Server running on port 5000")
});