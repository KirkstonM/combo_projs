const { people, products} = require("../data");
const getUsers = (req, res) => {
    res.status(200).json({ success: true, data : people })
};

const addUser = (req, res) => {
    const { name, id } = req.body;
    if(!name) {
        return res.status(400).json({ success : false, msg : "Cannot be empty"})
    }
    const newUser = { id, name };
    people.push(newUser)
    return res.status(201).json({ success: true, data : newUser })
};

const editUser = (req, res) => {
    const { id } = req.params;
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const updateUsers = people.filter(person => person.id !== Number(id))
    if(updateUsers.length === people.length) {
        return res.status(404).json({ success: false, msg: `User with id ${id} not found` })
    }
    people.length = 0;
    people.push(...updateUsers);
    res.status(200).json({ success: true, msg: `User with id ${id} deleted` });
};

module.exports = { getUsers, addUser, editUser, deleteUser }