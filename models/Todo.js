const mongoose = require("mongoose");
const moment = require("moment");

const TodoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  todo: {
    type: String,
    required: true,
  },
  todoDescription: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: moment().format("MM/DD/YYYY"),
  },
});

module.exports = mongoose.model("todo", TodoSchema);
