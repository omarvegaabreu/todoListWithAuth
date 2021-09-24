const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

//INITIAL PAGE PUBLIC ROUTE /api/users

ROUTER.post("/", (req, res) => res.send("users.js"));

ROUTER.post("/", (req, res) => res.send("users.js"));

module.exports = ROUTER;
