/**to keep code dry, no need for it now, will document if implemented */

const errorCheckResponse = (errors, res) => {
  const errors = validationResult(req); //import express validator returns promise

  //checks res.body for response if error log error array or look at res.json

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  //errorCheckResponse(errors, res); //from util folder to keep code DRY
};

module.exports = errorCheckResponse;
