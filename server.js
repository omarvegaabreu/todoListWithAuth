//GLOBAL VARIABLES
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    maxAge: "86400",
  })
);
// app.options("*", cors());
//env config
dotenv.config();

//import database from config folder
const mongoDB = require("./config/db");
const { nextTick } = require("process");

//database connection
mongoDB();

//Init middleware
app.use(express.json({ extended: false }));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// app.use(function (req, res, next) {
// Website you wish to allow to connect
// res.setHeader("Access-Control-Allow-Origin", "*");

// Request methods you wish to allow
// res.setHeader(
//   "Access-Control-Allow-Methods",
//   "GET, POST, OPTIONS, PUT, PATCH, DELETE"
// );

// Request headers you wish to allow
// res.setHeader(
// "Access-Control-Allow-Headers",
//"X-Requested-With,content-type"
// );

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
// res.setHeader("Access-Control-Allow-Credentials", true);

// res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

// Pass to next layer of middleware
//next();
//});
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept",
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   next();
// });

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

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   next();
// });

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
