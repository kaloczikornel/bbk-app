/**
 * Deletes all the applicant from an event (because it will be deleted)
 * Event ID is on res.params.eventid
 * Call next() if there is no problem
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};