const express = require("express");
const router = express.Router();

const { check } = require("express-validator"); //package docs //https://express-validator.github.io/docs/

const userController = require("../Controllers/userController");

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
  userController.registerUser
);

module.exports = router;
