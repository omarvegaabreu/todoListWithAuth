//GLOBAL VARIABLES
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 3001;

//env config
dotenv.config();

//import database from config folder
const mongoDB = require("./config/db");

//database connection
mongoDB();

//middleware
app.use(express.json({ extended: false }));

//API ROUTES
app.get("/", (req, res) => res.json({ msg: "HI FROM API" }));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todo", require("./routes/todo"));

//EXPRESS SERVER
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(
        `Server is listening on port ${port} as ${process.env.DB_USERNAME} `
      )
);
