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
                res.locals.user = user
                /*
                res.locals.user.user_id = user._id;
                res.locals.user.authority = user.authority;
                res.locals.user.name = user.name;
                res.locals.user.username = user.username;
                res.locals.user.email = user.email
                res.locals.user.idCardNumber = user.idCardNumber;
                res.locals.user.livingType = user.livingType;
                res.locals.user.hasCard = user.hasCard;

                 */
                return next();
            });
        }
        return next();
    };
};