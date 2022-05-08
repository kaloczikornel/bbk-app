const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, "UserModel");
    return (req, res, next) => {
        UserModel.find(
            {
                _id: {$in: res.locals.applicants_ids}
            },
            (err, users) => {
                if (err) {
                    return next(err);
                }
                res.locals.applicants = users;
                return next();
            }
        );
    };
};
