const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

//WILL WRITE A NEW FILE TO THE LOCATION YOU HAVE ENTERRED AND THE SECOND PARAMS IS THE VALUE THAT WILL BE INSIDE OF THE FILE
writeFileSync("./content/newFile.txt", `This is what is written inside of the file : ${first} ${second}`) //WRITES NEW FILE
writeFileSync("./content/first.txt", `This is what is written inside of the file : ${first} ${second}`) //OVER-WRITES EXCITING FILE

//APPENDS THE FILE, THAT MEANS WILL APPEND THE NEW DATA TO THE ALREADY EXISTING DATA
writeFileSync("./content/first.txt", `This is what is written inside of the file : ${first} ${second}`, { flags: 'a'})
