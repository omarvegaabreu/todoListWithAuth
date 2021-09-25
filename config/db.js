const MONGOOSE = require("mongoose");
require("dotenv").config({ path: "../.env" }); //PATH TO ENV

const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zst3r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(mongoURI);
