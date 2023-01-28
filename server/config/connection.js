const mongoose = require('mongoose');
// get env variables
const dotenv = require("dotenv");

dotenv.config();


mongoose.connect("mongodb://127.0.0.1:27017/imjordreddit");
// 

module.exports = mongoose.connection; 