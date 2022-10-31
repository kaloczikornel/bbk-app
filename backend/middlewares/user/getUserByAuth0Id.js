const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');
    return (req, res, next) => {
        UserModel.findOne(
            {
                auth0Id: req.params.auth0id,
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
