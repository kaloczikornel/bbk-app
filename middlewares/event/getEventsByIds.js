const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, "EventModel");
    return (req, res, next) => {
        EventModel.find(
            {
                _id: {$in: res.locals.applies_ids}
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
