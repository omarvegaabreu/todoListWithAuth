const EXPRESS = require("express");
const APP = EXPRESS();
const PORT = process.env.PORT || 3001;

APP.get("/", (req, res) => res.send(`Server up and running on ${PORT}`));

//ROUTES
APP.use("/api/auth", require("./routes/auth"));
APP.use("/api/todo", require("./routes/todo"));
APP.use("/api/users", require("./routes/users"));

//EXPRESS
APP.listen(PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server is listening on port ${PORT}`);
});
