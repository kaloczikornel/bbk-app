const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository,"EventModel")
    return (req, res, next) => {
        if (typeof res.locals.theEvent === "undefined"){
            return next();
        }

        res.locals.theEvent.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`back`);
        });
    };
};