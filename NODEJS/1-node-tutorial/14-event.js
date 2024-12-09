const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//on => listens to an event
//emit => emits an event

//response or any identifier key word should be the same
customEmitter.on("response", () => {
    console.log("DATA RECIEVED")
});
customEmitter.on("response", (name, id) => { //EXTRA PARAMS ARE CAPTURED AS NORMAL FUNCTIONS
    console.log(`Params recieved ${name} ${id}`)
});
customEmitter.emit("response", "kirk", 26); //YOU CAN PASS EXTRA PARAMS HERE