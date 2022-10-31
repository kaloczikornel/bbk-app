/**
 * Put all the applicants for an event on res.locals.applicants
 * eventid comes on res.params
 * call next() if no problem
 */

const mongoose = require('mongoose');
const requireOption = require('../requireOption');

const { ObjectId } = mongoose.Types;

module.exports = function (objectrepository) {
    const ApplicantModel = requireOption(objectrepository, 'ApplicantModel');
    return (req, res, next) => {
        if (res.locals.user.role !== 'admin') {
            return res.status(401).json({ error: 'Access denied!' });
        }
        ApplicantModel.aggregate(
            [
                {
                    $match: {
                        _event: new ObjectId(req.params.eventid),
                    },
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: '_user',
                        foreignField: '_id',
                        as: 'user',
                    },
                },
            ],
            (err, applicants) => {
                if (err) {
                    return next(err);
                }
                res.locals.applicants = applicants;
                return next();
            }
        );
    };
};
