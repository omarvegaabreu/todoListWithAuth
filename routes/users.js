const express = require("express");
const router = express.Router();
const User = require("../models/Users"); //user data

//INITIAL PAGE PUBLIC ROUTE /api/users

router.post("/", (req, res) => res.send(req.body));
// router.post("/", (req, res) => res.send("users.js"));

//export to server.js
module.exports = router;
