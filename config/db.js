//PATH TO ENV FILE
require("dotenv").config({ path: "../env" });

//DATA BASE VARIABLES AND FUNCTION

const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://atlasadmin:${process.env.DB_PASSWORD}@todolistwithauth.zst3r.mongodb.net/todolistwithauth?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(
      mongoURI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      // using default options object
      //There is no need for options object for this database at the current time.
      //options info in docs https://mongoosejs.com/docs/api/mongoose.html
      () => console.log(" mongoDB is connected")
    );
  } catch (err) {
    console.error("MONGO DB ERROR MESSAGE " + err.message);
    console.log(`could not connect to database unexpected ${e.message}`);
  }
};

//export to server.js
module.exports = connectDB;
