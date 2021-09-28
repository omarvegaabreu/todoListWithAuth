const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const auth = require("../middleware/auth"); //middleware to protect routes.
/**Database */
const Todo = require("../models/Todo"); //todo database
const User = require("../models/User"); //user database

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo
//route api/todo
//route is private
router.get("/", auth, async (req, res) => {
  try {
    const todo = await Todo.find({ user: req.user.id }).sort({ date: -1 });
    res.json(todo);
  } catch (error) {
    console.log("ERROR ON LINE 17 TODO.JS ");
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

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
