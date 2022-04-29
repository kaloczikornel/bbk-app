const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        if (typeof req.session.user_id !== 'undefined') {
            return res.redirect('/');
        }
        return next();
    };
};