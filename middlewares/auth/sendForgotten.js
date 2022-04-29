const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = objectrepository.UserModel;
    return function (req, res, next) {
        if (typeof req.body.email === 'undefined'){
            return next();
        }
        UserModel.findOne({
            email: req.body.email
        },(err, user) => {
            if (err){
                return next(err);
            }
            if (user === null){
                res.locals.error = 'Not registered yet!';
                return next();
            }
            user.password = `${Math.random()}`.substr(2);
            user.save(err2 => {
                if (err2){
                    return next(err2);
                }
                console.log(`New password: ${user.password}`);
                return res.redirect(`/login`);
            });
        });
    };
};