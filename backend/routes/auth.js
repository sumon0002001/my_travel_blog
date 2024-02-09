const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

//save user and response

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");
    const { password, ...others } = user._doc;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.cookie("jwt", token).status(200).json(others);
  } catch (err) {
    console.log(err);
  }
});

//logout
router.post("/logout", async (req, res) => {
  try {
    res.clearCookie(
      "jwt",
      { sameSite: "none", secure: true }
        .status(200)
        .send("User logged out successfully!")
    );
  } catch (err) {
    res.status(500).send("Error logging out user!");
  }
});

router.get("/refetch", (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) {
      return res.status(404).json("user not found");
    }
    res.status(200).json(user);
  });
});

module.exports = router;
