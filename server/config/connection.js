const mongoose = require('mongoose');
// get env variables
require('dotenv').config();


mongoose.connect(process.env.MONGO);
// mongodb://localhost:27017/imjordreddit

module.exports = mongoose.connection; 