const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = objectrepository.UserModel;
    return (req, res, next) => {
        if (typeof req.session.user_id !== 'undefined') {
            return UserModel.findOne({
                _id: req.session.user_id
            }, (err, user) => {
                if (err) {
                    return next(err);
                }
                res.locals.user_id = user._id;
                res.locals.authority = user.authority;
                return next();
            });
        }
        return next();
    };
};