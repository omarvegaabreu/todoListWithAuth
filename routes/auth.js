const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

//PUBLIC ROUTE /api/auth
// .GET user login information
ROUTER.get("/auth", (req, res) =>
  res.send("get user log in info from auth.js")
);

//.GET once user is logged in, get user information
ROUTER.get("/auth", (req, res) => res.send("once user is logged in auth.js"));

module.exports = ROUTER;
