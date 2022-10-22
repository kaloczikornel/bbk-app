const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Applicant = db.model('Applicant', {
    canceled: Boolean,
    paid: Boolean,
    came: Boolean,
    _event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Applicant;