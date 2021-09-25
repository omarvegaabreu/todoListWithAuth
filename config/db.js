const MONGOOSE = require("mongoose");
const DOTENV = require("dotenv");
DOTENV.config();
const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zst3r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
