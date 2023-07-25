const {Router} = require("express");
const {createUser, loginUser} = require("../controllers/users.controllers");
const {loginUserValidator, registerUserValidator} = require('../validators/users.validators')

const router = Router();

router.post("/users",
createUser 
);

router.post("/users", registerUserValidator, createUser)

router.post("/login", loginUserValidator, loginUser);

module.exports = router;    