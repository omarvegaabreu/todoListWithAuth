const express = require("express");
const router = express.Router();
const { check } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const auth = require("../middleware/auth");
const authRouteController = require("../Controllers/authController.js");

//PUBLIC ROUTE /api/auth
router.get("/", (req, res) => res.json("API works works in heroku"));
// .GET validate logged in user
// router.get("/", auth, authRouteController.getUser);

//.POST once user is logged in, get user information
router.post(
  "/",
  [
    check("email", "Please use a valid email.").isEmail(),
    check("password", "Passwords is required.").exists(),
  ],
  authRouteController.getToken
);

//export to server.js
module.exports = router;
