const express = require("express");
const router = express.Router();
const User = require("../models/Users"); //user data
const { check, validationResult } = require("express-validator");
//library docs //https://express-validator.github.io/docs/

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
  (req, res) => {
    const errors = validationResult(req); //import express validator

    //checks for name email and password
    !errors.isEmpty()
      ? res.status(400).json({ errors: errors.array() })
      : res.send("passed");
  }
);
// router.post("/", (req, res) => res.send("users.js"));

//export to server.js
module.exports = router;
