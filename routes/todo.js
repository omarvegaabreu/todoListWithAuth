const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo

ROUTER.post("/todo", (req, res) => res.send("todo.js"));

module.exports = ROUTER;
