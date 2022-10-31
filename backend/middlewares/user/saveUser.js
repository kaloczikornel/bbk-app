const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        if (
            typeof req.body.idCardNumber === 'undefined' ||
            typeof req.body.canGetIn === 'undefined' ||
            typeof res.locals.error !== 'undefined'
        ) {
            return res.status(400).json({ message: 'Missing parameters!' });
        }
        res.locals.user.idCardNumber = req.body.idCardNumber;
        res.locals.user.hasCard = req.body.hasCard;
        res.locals.user.canGetIn = req.body.canGetIn;

        res.locals.user.save((err) => {
            if (err) {
                return next(err);
            }
            return res.status(200).json({ success: true });
        });
    };
};
