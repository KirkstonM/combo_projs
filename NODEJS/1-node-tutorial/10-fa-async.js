const {readFile, writeFile} = require("fs");

readFile("./content/first.txt", "utf8", (err, response) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = response;
    readFile("./content/second.txt", "utf8", (err, response) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = response;
        writeFile("./content/async-file.txt", `This is what is written inside of the file : ${first} ${second}`, (err, response) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(response)
        })
    })
})