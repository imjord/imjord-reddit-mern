const mongoose = require('mongoose');
// get env variables
const dotenv = require("dotenv");

dotenv.config();


mongoose.connect(process.env.MONGODB_URI);
// "mongodb://127.0.0.1:27017/imjordreddit"

module.exports = mongoose.connection; 