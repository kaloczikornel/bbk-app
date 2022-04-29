const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    return (req, res, next) => {
        req.session.destroy((err) => {
            if (typeof err !== "undefined") {
                return next();
            }
            console.log("nacsá")
            res.locals.user_id = undefined;
            return res.redirect("/");
        });
    };
};
