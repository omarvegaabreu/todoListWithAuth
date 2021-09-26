const express = require("express");
const router = express.Router();

const errorCheckResponse = (errors, res) => {
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
};

module.exports = errorCheckResponse;
