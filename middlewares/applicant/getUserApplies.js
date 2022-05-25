/**
 * Find all the event_ids what the user had applied
 * Put the IDs on res.locals.applies_ids
 * call next if no problem
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository, "ApplicantModel");
    return (req, res, next) => {
        ApplicantModel.find(
            {
                _user: res.locals.user._id,
            },
            (err, applies) => {
                if (err) {
                    return next(err);
                }
                res.locals.applies_ids = applies.map(e => e._event);
                return next();
            }
        );
    };
};
