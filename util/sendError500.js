/**HELPER FUNCTION ERROR 500 */

const error500 = (res, error) => {
  console.error(error.message);
  res.status(500).send("Server error");
};

module.exports = error500;
