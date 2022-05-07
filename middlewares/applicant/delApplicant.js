/**
 * Deletes a user from an event.
 * User params are on res.locals.user
 * Event ID is on res.params.eventid
 * Call next() if there is no problem
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};