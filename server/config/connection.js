const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/imjordreddit');



module.exports = mongoose.connection;