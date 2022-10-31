const db = require('../config/db');

const User = db.model('User', {
    name: String,
    email: String,
    idCardNumber: String,
    canGetIn: Boolean,
    hasCard: Boolean,
    auth0Id: String,
    role: String,
});

module.exports = User;
