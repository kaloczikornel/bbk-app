const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EventModel = requireOption(objectrepository, 'EventModel');
    return (req, res, next) => {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.place === 'undefined' ||
            typeof req.body.date === 'undefined' ||
            typeof req.body.description === 'undefined' ||
            typeof res.locals.error !== 'undefined'
        ) {
            return next();
        }
        res.locals.event = new EventModel();

        res.locals.event.name = req.body.name;
        res.locals.event.place = req.body.place;
        res.locals.event.date = req.body.date;
        res.locals.event.description = req.body.description;
        res.locals.event._organizer = res.locals.user._id;

        res.locals.event.save((err) => {
            if (err) {
                return next(err);
            }
            return res.redirect('/events');
        });
    };
};
