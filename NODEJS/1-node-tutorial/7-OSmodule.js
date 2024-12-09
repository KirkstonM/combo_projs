const os = require("os");

//NEED TO CHECK IN THE DOCS BASED ON THE VERSIONS TO SEE WHAT METHODS ARE AVAILABLE
const modelInfor = {
    name : os.type(),
    totalMem : os.totalmem(),
    upTime : os.uptime(),
};

console.log(modelInfor);
