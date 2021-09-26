const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const bcrypt = require("bcryptjs"); //https://www.npmjs.com/package/bcryptjs
const jwt = require("jsonwebtoken"); //  package docs https://jwt.io/
const jwtSecret = process.env.JWT_SECRET; //secret code for JWT config for auth token
const errorCheckResponse = require("../util/errorCheckResponse");

//PUBLIC ROUTE /api/auth
// .GET user login information
router.get("/auth", (req, res) =>
  res.send("get user log in info from auth.js")
);

//.POST once user is logged in, get user information
router.post(
  "/auth",
  [
    check("email", "Please use a valid email.").isEmail(),
    check("password", "Passwords is required.").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    errorCheckResponse(errors, res); //helper function from util folder

    const { email, password } = req.body; //destructure req.body object

    try {
      const user = await User.findOne({ email });
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!user) {
        return res.status(400).json({ msg: "Please use a valid email" });
      }

      if (!passwordMatch) {
        return res
          .status(400)
          .json({ msg: "Invalid password, please try again." });
      }

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
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//export to server.js
module.exports = router;
