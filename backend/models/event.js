const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Event = db.model('Event', {
    name: String,
    place: String,
    date: Date,
    description: String,
    _organizer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Event;