const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = objectrepository.UserModel;
    return (req, res, next) => {
        if ((typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            return next();
        }
        return UserModel.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) {
                return next(err);
            }
            if (user !== null) {
                res.locals.error = 'E-mail already exist!';
            }
            return next();
        });
    };
};