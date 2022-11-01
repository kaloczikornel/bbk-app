const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const BlogModel = requireOption(objectrepository, 'BlogModel');
    return (req, res, next) => {
        BlogModel.findOne(
            {
                _id: req.params.postid,
            },
            (err, e) => {
                if (err) {
                    next(err);
                }
                res.locals.post = e;
                return next();
            }
        );
    };
};
