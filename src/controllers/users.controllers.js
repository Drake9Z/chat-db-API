const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createUser = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    await Users.create({ username, email, password: hashed });

    res.json(200).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "incorrect email or password" });
    }
    console.log("user", user);
    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword) {
      return res.status(400).json({ message: "incorrect email or password" });
    }
    console.log("validPassword", validPassword);
    const {
      id,
      firstname,
      lastname,
      username,
      profileImage,
      validEmail,
      createdAt,
      updatedAt,
    } = user;
    
    const token = jwt.sign(
      { id, firstname, lastname, email, username },
      process.env.JWT_SECRET,
      { algorithm: "HS512", expiresIn: "10m" }
    );
      console.log("token", token);
    res.json({
      id,
      firstname,
      lastname,
      username,
      email,
      profileImage,
      validEmail,
      createdAt,
      updatedAt,
      token,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createUser,
  loginUser,
};
