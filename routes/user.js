const express = require("express");
const router = express.Router();
const User = require("../models/User"); //user data
const { check, validationResult } = require("express-validator"); //library docs //https://express-validator.github.io/docs/
// const { findOne } = require("../models/User");
const bcrypt = require("bcryptjs"); //https://www.npmjs.com/package/bcryptjs

//INITIAL PAGE PUBLIC ROUTE /api/users

router.post(
  "/",
  [
    check("name", "Please add name, it is required").not().isEmpty(),
    check("email", "Please use a valid email.").isEmail(),
    check(
      "password",
      "Passwords must be at least 6 characters in length."
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req); //import express validator returns promise

    //checks res.body for name email and password
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);
// router.post("/", (req, res) => res.send("users.js"));

//export to server.js
module.exports = router;
