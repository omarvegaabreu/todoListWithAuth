const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const auth = require("../middleware/auth"); //middleware to protect routes.
const todoController = require("../Controllers/todoController");

//route api/todo
//route is private
router.get("/", auth, todoController.getTodo);

//route api/todo
//ADD todo
//route is private
router.post(
  "/",
  [auth, [check("todo", "Todo is required").not().isEmpty()]],
  todoController.postTodo
);

//route /api/todo/:id
//UPDATE todo
//route is private
router.put("/:id", auth, todoController.putTodo);

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo/:id
//route api/todo
//DELETE todo
//route is private
router.delete("/:id", auth, todoController.deleteTodo);

//export to server.js
module.exports = router;
