const mongoose = require('mongoose');
// get env variables
const dotenv = require("dotenv");

dotenv.config();


mongoose.connect(process.env.MONGODB_URI);


module.exports = mongoose.connection; 