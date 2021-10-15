const User = require("../models/User"); //user database
/**Database */
const TodoSchema = require("../models/Todo"); //todo database
const { validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const error500 = require("../util/sendError500");

module.exports = {
  getTodo: getTodo,
  postTodo: postTodo,
  putTodo: putTodo,
  deleteTodo: deleteTodo,
};

async function getTodo(req, res) {
  try {
    const todo = await TodoSchema.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(todo);
  } catch (error) {
    res.status(500).send("Server error.");
  }
}

async function postTodo(req, res) {
  const errors = validationResult(req); //import express validator returns promise

  //checks res.body for response if error log error array or look at res.json

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { user, todo, date, todoDescription } = req.body;

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
  }
}

async function putTodo(req, res) {
  const { user, todo, todoDescription, date } = req.body;

  const todoFields = {};
  //creates todoFields object
  if (user) todoFields.user = user;
  if (todo) todoFields.todo = todo;
  if (date) todoFields.date = date;
  if (todoDescription) todoFields.todoDescription = todoDescription;

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

    res.json(todo);
  } catch (error) {
    res.status(500).send("Server error.");
  }
}

async function deleteTodo(req, res) {
  try {
    let todo = await TodoSchema.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: "Todo not found" });
    //check if user owns account
    if (todo.user.toString() !== req.user.id) {
      return res.status(404).json({ msg: "Request not authorized." });
    }

    await TodoSchema.findByIdAndRemove(req.params.id);

    res.json({ msg: "Todo Removed" });
  } catch (error) {
    res.status(500).send("Server error.");
  }
}
