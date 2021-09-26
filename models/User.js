const mongoose = require("mongoose");
const moment = require("moment");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: moment().format("MM/DD/YYYY"),
  },
});

module.exports = mongoose.model("user", UserSchema);
