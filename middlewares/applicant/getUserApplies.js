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
                console.log("getUserAppliesMW: ", applies);
                res.locals.applies_ids = applies.map(e => e._event);
                return next();
            }
        );
    };
};
