const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const BlogModel = requireOption(objectrepository, 'BlogModel');
    return (req, res, next) => {
        BlogModel.find({}, (err, posts) => {
            if (err) {
                return next(err);
            }
            res.locals.posts = posts;
            return next();
        });
    };
};
