const { readFile, writeFile } = require("fs");

const getFile = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (res, err) => {
            if(err) {
                reject(err);
            } else {
                resolve(res)
            }
        })
    })
};

getFile("./content/first.txt")
    .then(res => res.json())
    .catch(e => console.log(e))