const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository,"ApplicantModel");
    return (req, res, next) => {
        if (typeof req.body.event_id === 'undefined'){
            return next();
        }
        res.locals.applicant = new ApplicantModel();

        res.locals.applicant.canceled = false;
        res.locals.applicant.paid = false;
        res.locals.applicant.came = false;
        res.locals.applicant._event = req.body.event_id;
        res.locals.applicant._user = res.locals.user._id;

        res.locals.applicant.save(err => {
            if (err){
                return next(err);
            }
            return res.redirect('/profile');
        });
    };
};