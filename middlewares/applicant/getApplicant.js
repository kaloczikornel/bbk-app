/**
 * Put the applicant on res.locals.applicant
 * The userid and eventid are on a hidden field called user_id and event_id
 * Calls next() if no problem
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};