const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');
    return (req, res, next) => {
        UserModel.find({}, (err, users) => {
            if (err) {
                return next(err);
            }
            res.locals.users = users;
            return next();
        });
    };
};
