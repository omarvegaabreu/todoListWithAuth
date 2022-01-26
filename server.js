//GLOBAL VARIABLES
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
//env config
dotenv.config();

//import database from config folder
const mongoDB = require("./config/db");

//database connection
mongoDB();

//Init middleware
app.use(express.json({ extended: false }));

//cors middleware
// app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With",
//     "Content-Type",
//     "Accept"
//   );
//   next();
// });

const whitelist = ["https://zen-cori-46710b.netlify.app/"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
// app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://zen-cori-46710b.netlify.app/");
//   next();
// });
// res.set("Access-Control-Allow-Origin", "https://zen-cori-46710b.netlify.app/");
//API ROUTES
// //app.use(
//   "/api/documentation",
//   cors(corsOptions),
//   require("./routes/documentation")
// ); //to check it works

app.use("/api/users", cors(corsOptions), require("./routes/user"));
app.use("/api/auth", cors(corsOptions), require("./routes/auth"));
app.use("/api/todos", cors(corsOptions), require("./routes/todo"));

// app.use("/api/users", require("./routes/user"));
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/todos", require("./routes/todo"));

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
