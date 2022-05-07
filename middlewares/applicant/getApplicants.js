/**
 * Put all the applicants for an event on res.locals.applicants
 * eventid comes on res.params
 * call next() if no problem
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};