const app = require("express");
const { getUsers, addUsers } = require("../controllers/index");

const router = app.Router();

//http://localhost:3001/users
router.get("/users", getUsers);

//http://localhost:3001/users
router.post("/users", addUsers);

module.exports = router;