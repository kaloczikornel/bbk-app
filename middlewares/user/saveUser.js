const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');
    return (req, res, next) => {
        if (
            (typeof req.body.username === 'undefined') ||
            (typeof req.body.fullName === 'undefined') ||
            (typeof req.body.email === 'undefined') ||
            (typeof req.body.idCard === 'undefined') ||
            (typeof req.body.livingType === 'undefined') ||
            (typeof req.body.password === 'undefined') ||
            (typeof req.body.password2 === 'undefined') ||
            (typeof res.locals.error !== 'undefined')
        ) {
            console.log("AJAJJJJ");
            return next();
        }

        if (req.body.password !== req.body.password2) {
            res.locals.error = 'Passwords are different!';
            return next();
        }
        res.locals.user = new UserModel();

        res.locals.user.username = req.body.username;
        res.locals.user.fullName = req.body.fullName;
        res.locals.user.email = req.body.email;
        res.locals.user.idCard = req.body.idCard;
        res.locals.user.hostelCard = req.body.hostelCard === undefined;
        res.locals.user.livingType = req.body.livingType;
        res.locals.user.password = req.body.password;

        console.log(res.locals.user);

        res.locals.user.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`/login`);
        });
    };
};