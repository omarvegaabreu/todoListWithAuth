const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const bcrypt = require("bcryptjs"); //https://www.npmjs.com/package/bcryptjs
const jwt = require("jsonwebtoken"); //  package docs https://jwt.io/
const jwtSecret = process.env.JWT_SECRET; //secret code for JWT config for auth token
const User = require("../models/User"); //user data
// const errorCheckResponse = require("../util/errorCheckResponse");

//PUBLIC ROUTE /api/auth
// .GET validate logged in user
router.get("/", (req, res) => res.send("get user log in info from auth.js"));

//.POST once user is logged in, get user information
router.post(
  "/",
  [
    check("email", "Please use a valid email.").isEmail(),
    check("password", "Passwords is required.").exists(),
  ],
  async (req, res) => {
    const errorObject = validationResult(req);
    // console.log("errors array line 25 POST/API/AUTH " + { errorObject });
    if (!errorObject.isEmpty()) {
      return res.status(400).json({ errors: errorObject.array() });
    }

    const { email, password } = req.body; //destructure req.body object
    console.log("email from auth line 31 " + email);
    console.log("password from auth line 31 " + password);

    try {
      // let user = await User.findOne({ email });

      let user = await User.find({ email });
      console.log("user auth line 35 " + user);
      if (!user || user.length == 0) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user[0].password);

      // if (!user) {
      //   return res.status(400).json({ msg: "Please use a valid email" });
      // }

      // const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ msg: "Invalid password, please try again." });
      }

      //payload is required by package to create token
      // const payload = { user: { id: user.id } };

      const payload = {
        user: {
          id: user[0]._id,
        },
      };

      console.log("auth line 61 pay load" + payload.user.id);
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
      console.error("auth js line 70 " + error.message);
      res.status(500).send("Server error");
    }
  }
);

//export to server.js
module.exports = router;
