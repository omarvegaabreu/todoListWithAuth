const mongoose = require("mongoose");
const moment = require("moment");
const now = moment();

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
    default: now,
  },
});

module.exports = mongoose.model("user", UserSchema);
