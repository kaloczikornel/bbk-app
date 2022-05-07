const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, "UserModel");
    return (req, res, next) => {
        if (
            typeof req.body.username === "undefined" ||
            typeof req.body.name === "undefined" ||
            typeof req.body.email === "undefined" ||
            typeof req.body.idCardNumber === "undefined" ||
            typeof req.body.livingType === "undefined" ||
            typeof req.body.password === "undefined" ||
            typeof req.body.password2 === "undefined" ||
            typeof res.locals.error !== "undefined"
        ) {
            return next();
        }

        if (req.body.password !== req.body.password2) {
            res.locals.error = "Passwords are different!";
            return next();
        }
        let justEdit = true;
        if (typeof res.locals.user === "undefined") {
            res.locals.user = new UserModel();
            justEdit = false;
        }

        res.locals.user.username = req.body.username;
        res.locals.user.name = req.body.name;
        res.locals.user.email = req.body.email;
        res.locals.user.idCardNumber = req.body.idCardNumber;
        res.locals.user.hasCard = req.body.hasCard === undefined;
        res.locals.user.livingType = req.body.livingType;
        res.locals.user.password = req.body.password;
        res.locals.user.authority = "Admin";

        res.locals.user.save((err) => {
            if (err) {
                return next(err);
            }
            if (justEdit) {
                return next();
            }
            return res.redirect(`/login`);
        });
    };
};
