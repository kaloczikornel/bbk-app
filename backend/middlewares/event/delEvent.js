const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        if (typeof res.locals.event === 'undefined') {
            return next();
        }

        res.locals.event.remove((err) => {
            if (err) {
                return next(err);
            }
            return res.status(200).json({ success: true });
        });
    };
};
