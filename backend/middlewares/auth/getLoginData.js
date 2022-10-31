const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const { UserModel } = objectrepository;
    return (req, res, next) => {
        if (typeof req.body.userId !== 'undefined') {
            return UserModel.findOne(
                {
                    _id: req.body.userId,
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
