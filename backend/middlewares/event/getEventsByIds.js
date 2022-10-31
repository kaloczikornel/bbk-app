const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, 'EventModel');
    return (req, res, next) => {
        EventModel.find(
            {
                _id: { $in: res.locals.applicantIds },
            },
            (err, events) => {
                if (err) {
                    next(err);
                }
                res.locals.events = events;
                return next();
            }
        );
    };
};
