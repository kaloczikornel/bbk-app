const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bbk-app');

module.exports = mongoose;
