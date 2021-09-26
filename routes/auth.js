const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const bcrypt = require("bcryptjs"); //https://www.npmjs.com/package/bcryptjs
const jwt = require("jsonwebtoken"); //  package docs https://jwt.io/
const jwtSecret = process.env.JWT_SECRET; //secret code for JWT config for auth token

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
  (req, res) => res.send("user is logged in")
);

//export to server.js
module.exports = router;
