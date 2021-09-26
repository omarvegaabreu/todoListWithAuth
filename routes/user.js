const express = require("express");
const router = express.Router();
const User = require("../models/User"); //user data
const { check, validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const bcrypt = require("bcryptjs"); //https://www.npmjs.com/package/bcryptjs
const jwt = require("jsonwebtoken"); //  package docs https://jwt.io/
const jwtSecret = process.env.JWT_SECRET; //secret code for JWT config for auth token
// const errorCheckResponse = require("../util/errorCheckResponse");

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

    //checks res.body for response if error log error array or look at res.json
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    // errorCheckResponse(errors);

    //user object received in response from mongodb atlas
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

      //payload is required by package to create token
      const payload = { user: { id: user.id } };
      //secret key is required by package manager to generate token
      //this is information that will be sent to the client
      //expires object should be set back for production code to 3600 one hour
      jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (error, token) => {
        if (error) {
          throw error;
        }
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

//export to server.js
module.exports = router;
