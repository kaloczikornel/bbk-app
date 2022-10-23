const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const { UserModel } = objectrepository;
    return (req, res, next) => {
        if (req.query.json !== undefined) {
            return next();
        }
        if (typeof req.session.user_id !== 'undefined') {
            return UserModel.findOne(
                {
                    _id: req.session.user_id,
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
