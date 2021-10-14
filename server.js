//GLOBAL VARIABLES
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

//env config
dotenv.config();

//import database from config folder
const mongoDB = require("./config/db");

//database connection
mongoDB();

//middleware
app.use(express.json({ extended: false }));

//API ROUTES
app.get("/", (req, res) => res.json({ msg: "landing page" }));
app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todos", require("./routes/todo"));

//EXPRESS SERVER
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(
        `Server is listening on port ${port} as ${process.env.DB_USERNAME} `
      )
);
