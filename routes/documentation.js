const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.json("Hello, if you see this message that means this API works!")
);
