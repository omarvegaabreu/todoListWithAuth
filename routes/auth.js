const express = require("express");
const router = express.Router();
const { check } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const auth = require("../middleware/auth");
const authRouteController = require("../Controllers/authController.js");
const cors = require("cors");

//PUBLIC ROUTE /api/auth
// .GET validate logged in user
router.get("/", cors(), auth, authRouteController.getUser);

//.POST once user is logged in, get user information
router.post(
  "/",
  cors(),
  [
    check("email", "Please use a valid email.").isEmail(),
    check("password", "Passwords is required.").exists(),
  ],
  authRouteController.getToken
);

//export to server.js
module.exports = router;
