const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository, 'ApplicantModel');
    return (req, res, next) => {
        if (typeof res.locals.event === 'undefined' || typeof res.locals.user === 'undefined') {
            return res.status(404).json({ error: 'Event or user is not found!' });
        }
        if (typeof res.locals.applicant === 'undefined') {
            res.locals.applicant = new ApplicantModel();
            res.locals.applicant._event = res.locals.event._id;
            res.locals.applicant._user = res.locals.user._id;
        }

        res.locals.applicant.canceled = req.body.canceled || false;
        res.locals.applicant.paid = req.body.paid || false;
        res.locals.applicant.came = req.body.came || false;

        res.locals.applicant.save((err) => {
            if (err) {
                return next(err);
            }
            return res.status(200).json({ success: true });
        });
    };
};
