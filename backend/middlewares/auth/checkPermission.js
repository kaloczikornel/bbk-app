const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        if (res.locals.user === 'undefined' || res.locals.user.role !== 'admin') {
            return res.status(401).json({ error: 'Access denied!' });
        }
        return next();
    };
};
