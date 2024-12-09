const userModel = require("../schemas/user");

const getUsers = async(req, res) => {
    try {
        const result = await userModel.find({})
        res.json({ success: true, data : result})
    } catch (error) {
       res.status(500).json({ success : false, msg : error.message }) 
    }
};

const addUsers = async(req, res) => {
    try {
        const user = req.body;
        const newUser = await new userModel(user);
        newUser.save();
        res.json({ success : true, data : newUser })
    } catch (error) {
        res.status(500).json({ success : false, msg : error.message }) 
    }
};

module.exports = { getUsers, addUsers };