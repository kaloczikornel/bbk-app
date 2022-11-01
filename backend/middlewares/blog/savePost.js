const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const BlogModel = requireOption(objectrepository, 'BlogModel');
    return async (req, res, next) => {
        if (
            typeof req.body.title === 'undefined' ||
            typeof req.body.sumUp === 'undefined' ||
            typeof req.body.content === 'undefined' ||
            typeof req.body.userId === 'undefined'
        ) {
            return res.status(400).json({ error: 'Fields are missing!' });
        }
        if (res.locals.post === undefined) {
            res.locals.post = new BlogModel();
        }
        if (!res.locals.post) {
            return res.status(404).json({ error: 'Blogpost is not found!' });
        }
        res.locals.post.title = req.body.title;
        res.locals.post.sumUp = req.body.sumUp;
        res.locals.post.date = req.body.date;
        res.locals.post.content = req.body.content;
        res.locals.post._organizer = req.body.userId;

        res.locals.post.save((err) => {
            if (err) {
                return next(err);
            }
            return res.send(res.locals.post);
        });
    };
};
