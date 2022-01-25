//GLOBAL VARIABLES
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const path = require("path");

//env config
dotenv.config();

//import database from config folder
const mongoDB = require("./config/db");

//database connection
mongoDB();

//Init middleware
app.use(express.json({ extended: false }));

//API ROUTES
app.use("/api/documentation", require("./routes/documentation")); //to check it works
app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todos", require("./routes/todo"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

//EXPRESS SERVER
app.listen(port, (error) =>
  error
    ? console.log("ERROR FROM EXPRESS SERVER: " + error)
    : console.log(
        `Server is listening on port ${port} as ${process.env.DB_USERNAME} `
      )
);
