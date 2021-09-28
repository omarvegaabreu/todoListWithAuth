const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const auth = require("../middleware/auth"); //middleware to protect routes.
/**Database */
const TodoSchema = require("../models/Todo"); //todo database
const User = require("../models/User"); //user database
const error500 = require("../util/sendError500");

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo
//route api/todo
//route is private
router.get("/", auth, async (req, res) => {
  try {
    const todo = await TodoSchema.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(todo);
  } catch (error) {
    console.log("ERROR ON LINE 17 TODO.JS ");
    console.error(error.message);
    res.status(500).send("Server error.");
    // error500(res, error);
  }
});

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo
//route api/todo
//ADD todo
//route is private
router.post(
  "/",
  [auth, [check("todo", "Todo is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req); //import express validator returns promise

    //checks res.body for response if error log error array or look at res.json

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    //errorCheckResponse(errors, res); //from util folder to keep code DRY
    // console.log(req.body);
    const { user, todo, date, todoDescription } = req.body;
    // console.log(req.body);

    try {
      const newTodo = new TodoSchema({
        user: req.user.id,
        todo,
        date,
        todoDescription,
      });
      const todoAdded = await newTodo.save();
      res.json(todoAdded);
    } catch (error) {
      console.log("ERROR ON LINE 49 TODO.JS ");
      console.error(error.message);
      res.status(500).send("Server error.");
      //error500(res, error);
    }
  }
);

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo/:id
//route api/todo
//UPDATE todo
//route is private
router.put("/:id", auth, async (req, res) => {
  const { user, todo, todoDescription, date } = req.body;

  const todoFields = {};
  //passes information to todoFields object
  if (user) todoFields.user = user;
  if (todo) todoFields.user = user;
  if (date) todoFields.user = user;
  if (todoDescription) todoFields.user = user;

  try {
    let todo = await TodoSchema.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: "Todo not found" });
    //check if user owns account
    if (todo.user.toString() !== req.user.id) {
      return res.status(404).json({ msg: "Request not authorized." });
    }

    todo = await TodoSchema.findByIdAndUpdate(
      req.params.id,
      { $set: todoFields },
      { new: true }
    );

    res.json({ todo });
  } catch (error) {
    console.log("ERROR ON LINE 49 TODO.JS ");
    console.error(error.message);
    res.status(500).send("Server error.");
    //error500(res, error);
  }
});

// AUTH REQUIRED NOT PUBLIC ROUTE ./api/todo/:id
//route api/todo
//DELETE todo
//route is private
router.delete("/:id", (req, res) => res.send("delete todo"));

//export to server.js
module.exports = router;
