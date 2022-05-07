const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository, "ApplicantModel");
    return (req, res, next) => {
        ApplicantModel.findOne(
            {
                _user: res.locals.user_id,
            },
            (err, apply) => {
                if (err) {
                    return next(err);
                }
                if (apply.length !== 0) {
                    return res.redirect("/profile");
                }
            }
        );
    };
};
