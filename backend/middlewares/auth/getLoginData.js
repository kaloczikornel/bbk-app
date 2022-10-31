const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const { UserModel } = objectrepository;
    return (req, res, next) => {
        if (typeof req.body.auth0Id !== 'undefined') {
            return UserModel.findOne(
                {
                    auth0Id: req.body.auth0Id,
                },
                (err, user) => {
                    if (err) {
                        return next(err);
                    }
                    res.locals.user = user;
                    return next();
                }
            );
        }
        return next();
    };
};
