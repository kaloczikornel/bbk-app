/**
 * Put all the applicants' id for an event on res.locals.applicants_ids
 * eventid comes on res.params
 * call next() if no problem
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository, "ApplicantModel");
    return (req, res, next) => {
        ApplicantModel.find(
            {
                _event: req.params.eventid,
            },
            (err, applicants) => {
                if (err) {
                    return next(err);
                }
                res.locals.applicants_ids = applicants.map((e) => e._user);
                return next();
            }
        );
    };
};
