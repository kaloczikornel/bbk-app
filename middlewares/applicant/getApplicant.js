/**
 * Put the applicant on res.locals.applicant
 * The user is on res.locals.user and the event is on res.locals.theEvent
 * Calls next() if no problem
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository, "ApplicantModel");
    return (req, res, next) => {
        ApplicantModel.findOne(
            {
                _user: res.locals.user._id,
                _event: res.locals.theEvent._id,
            },
            (err, user) => {
                if (err) {
                    return next(err);
                }
                res.locals.applicant = user;
                return next();
            }
        );
    };
};
