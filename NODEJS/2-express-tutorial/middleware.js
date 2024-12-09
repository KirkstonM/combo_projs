const logger = (req, res, next) => { //these params are passed automatically
    //the reason we use next() is to call the action that needs to be done after we call in the middleware function
    //without next() the url will just keep loading
    //with next the res.send() method will be invoked
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time) //GET /about 2024
    next()
};


module.exports = logger;
