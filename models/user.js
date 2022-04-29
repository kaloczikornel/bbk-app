const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
    username: String,
    name: String,
    email: String,
    idCardNumber: String,
    livingType: String,
    hasCard: Boolean,
    password: String
});

module.exports = User;