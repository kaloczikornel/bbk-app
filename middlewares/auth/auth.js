const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        if (typeof req.session.user_i === 'undefined'){
            return res.redirect('/login');
        }
        return next();
    };
};