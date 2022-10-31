/**
 * Check if the user have applied for the event before
 * The ID of the user is on res.locals.user._id
 * Redirect to /profile if already applied
 * Call next there was no problem
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository, 'ApplicantModel');
    return (req, res, next) => {
        ApplicantModel.findOne(
            {
                _user: res.locals.user._id,
                _event: res.locals.event._id,
            },
            (err, apply) => {
                if (err) {
                    return next(err);
                }
                if (apply !== null) {
                    return res.status(400).json({ error: 'Already applied!' });
                }
                return next();
            }
        );
    };
};
