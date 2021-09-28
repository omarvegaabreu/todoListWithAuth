module.exports = function error500(res, error) {
  console.error(error.message);
  res.status(500).send("Server error");
};
