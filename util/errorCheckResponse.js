/**to keep code dry, no need for it now, will document if implemented */
/**CHECK FOR MISSING INFORMATION FROM REQUESTS TO API HELPER FUNCTION */
const { validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/
const errorCheckResponse = (errors, res) => {
  const errors = validationResult(req); //import express validator returns promise

  //checks res.body for response if error log error array or look at res.json

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
};

module.exports = errorCheckResponse;
