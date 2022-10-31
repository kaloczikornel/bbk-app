const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');
    return (req, res, next) => {
        UserModel.findOne(
            {
                _id: req.params.userid,
            },
            (err, user) => {
                if (err) {
                    return next(err);
                }
                res.locals.user = user;
                return next();
            }
        );
    };
};
