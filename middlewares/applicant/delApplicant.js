/**
 * Deletes an applicant from an event.
 * Applicant is on res.locals.applicant
 * Call next() if there is no problem
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        if (typeof res.locals.applicant === "undefined"){
            return next();
        }

        res.locals.applicant.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`back`);
        });
    };
};