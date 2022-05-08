/**
 * Deletes all the applicant from an event (because it will be deleted)
 * Event ID is on res.params.eventid
 * Call next() if there is no problem
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository,"ApplicantModel")
    return (req, res, next) => {
        ApplicantModel.remove({
            _user: {$in: res.locals.applicants.map((e) => e._user)}
        },err =>{
            if (err){
                return next(err);
            }
            return next();
        });
    };
};