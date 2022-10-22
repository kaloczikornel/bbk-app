const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, 'EventModel');
    return (req, res, next) => {
        EventModel.findOne(
            {
                _id: req.params.eventid,
            },
            (err, e) => {
                if (err) {
                    next(err);
                }
                res.locals.theEvent = e;
                return next();
            }
        );
    };
};
