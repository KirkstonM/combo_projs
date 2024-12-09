const express = require("express");
const { getUsers, addUser, editUser, deleteUser } = require("../controllers/users");

const router = express.Router();

/*
* GET REQUEST
* URL : http://localhost:5050/users
*/
router.get("/users", getUsers)
/*
* POST REQUEST
* URL : http://localhost:5050/users
*/
router.post("/users", addUser)
/*
* PUT REQUEST
* URL :
*/
router.put("/users/:id", editUser)
/*
* DELETE REQUEST
* URL :
*/
router.delete("/users/:id", deleteUser)

module.exports = router;