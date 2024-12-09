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
    next()
}

app.get("/", logger, (req, res) => {
    res.send("HOME")
});

app.get("/about", logger, (req, res) => { //THIS IS THE WAY WE PASS MIDDLEWARE ie: logger
    res.send("ABOUT")
});

app.listen(5000, () => {
    console.log("Server running on port 5000")
});


/* ===============================

const express = require("express");
const logger = require("./middleware");
const authorize = require("./authorize");
const app = express();


/* IF WE WANT TO USE A COMMON FUNCTION THAT CAN BE USED IN SEVERAL REQUESTS, THEN WE HAVE TO USE MIDDLEWARE */
/* IN EXPRESS THE PARAMS (req, res, next) ARE AUTOMATICALLY PASSED INTO THE MIDDLEWARE FUNCTION, WE DON'T NEED TO PASS IT MANUALLY*/
// app.use(logger)
/*USE IS USED TO SET MIDDLEWARE, ALL REQUESTS WILL CONTAIN LOGGER AND YOU DON'T NEED TO PASS IT IN THE REQUEST ITSELF
app.get("/", (req, res) => {
    res.send("HOME")
});
THIS WILL HAVE THE LOGGER MIDDLEWARE,
!!! ALSO KNOW THAT PLACEMENT MATTERS, MIDDLEWARE SHOULD BE DECLARED ON TOP OF ROUTES FOR THEM TO HAVE ACCESS TO IT
*/

/*
app.use("/api", logger) => THE MIDDLEWARE WILL ONLY BE APPLIED TO THE ROUTES THAT STARTS WITH /api

app.get("/api/status", (req, res) => {
    res.send("STATUS")
});

app.get("/api/person", (req, res) => { //THIS IS THE WAY WE PASS MIDDLEWARE ie: logger
    res.send("PERSON")
});
*/


//THIS IS HOW YOU SET UP MULTIPLE MIDDLEWARE, ALSO HERE TOO ORDER MATTERS
// app.use([authorize, logger])


// app.get("/", logger, (req, res) => {
//     res.send("HOME")
// });
//
// app.get("/about", logger, (req, res) => { //THIS IS THE WAY WE PASS MIDDLEWARE ie: logger
//     res.send("ABOUT")
// });
//
// app.listen(5000, () => {
//     console.log("Server running on port 5000")
// });
//
// */