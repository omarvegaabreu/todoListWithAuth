const express = require("express");
const router = express.Router();

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo

router.post("/todo", (req, res) => res.send("todo.js"));

//export to server.js
module.exports = router;
