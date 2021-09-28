const express = require("express");
const router = express.Router();

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo
//route api/todo
//route is private
router.get("/", (req, res) => res.send("get a todo"));

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo
//route api/todo
//ADD todo
//route is private
router.post("/", (req, res) => res.send("add todo"));

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo/:id
//route api/todo
//UPDATE todo
//route is private
router.put("/:id", (req, res) => res.send("update todo"));

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo/:id
//route api/todo
//DELETE todo
//route is private
router.delete("/:id", (req, res) => res.send("delete todo"));

//export to server.js
module.exports = router;
