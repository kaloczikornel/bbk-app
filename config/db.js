const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BBK', { useNewUrlParser: true });

module.exports = mongoose;