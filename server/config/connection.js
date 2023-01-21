const mongoose = require('mongoose');
// get env variables
const dotenv = require("dotenv");

dotenv.config();


mongoose.connect("mongodb+srv://imjord:imjord123@cluster0.ny1mkzg.mongodb.net/?retryWrites=true&w=majority");
// "mongodb://127.0.0.1:27017/imjordreddit"

module.exports = mongoose.connection; 