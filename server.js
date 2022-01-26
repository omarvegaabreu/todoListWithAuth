//GLOBAL VARIABLES
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
//env config
dotenv.config();

//import database from config folder
const mongoDB = require("./config/db");

//database connection
mongoDB();

//Init middleware
app.use(express.json({ extended: false }));

//Disable CORS middleware /***DO NOT MOVE MUST BE BEFORE OF ROUTES */
// app.use(
//   cors({
//     origin: "*",
//   })
// );

// app.use(
//   cors({
//     methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
//   })
// );
//app.use(cors());
// app.use(bodyParser.json()); // application/json
//API ROUTES
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://zen-cori-46710b.netlify.app/"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

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
