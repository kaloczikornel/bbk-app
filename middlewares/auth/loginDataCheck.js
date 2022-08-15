const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = objectrepository.UserModel;
    return (req, res, next) => {
        if (typeof req.body.username === 'undefined' || typeof req.body.password === 'undefined') {
            return next();
        }
        return UserModel.findOne(
            {
                username: req.body.username,
            },
            (err, user) => {
                if (err) {
                    return next(err);
                }
                if (user === null) {
                    res.locals.error = 'Not registered!';
                    return next();
                }

                if (req.body.password !== user.password) {
                    res.locals.error = 'Wrong password';
                    return next();
                }
                req.session.user_id = user._id;
                return req.session.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    return res.redirect('/');
                });
            }
        );
    };
};
