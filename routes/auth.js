const express = require("express");
const router = express.Router();

//PUBLIC ROUTE /api/auth
// .GET user login information
router.get("/auth", (req, res) =>
  res.send("get user log in info from auth.js")
);

//.GET once user is logged in, get user information
router.get("/auth", (req, res) => res.send("once user is logged in auth.js"));

//export to server.js
module.exports = router;
