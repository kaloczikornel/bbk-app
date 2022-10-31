const auth = require('../middlewares/auth/auth');
const logout = require('../middlewares/auth/logout');
const { checkJwt } = require('../middlewares/auth0/checkJWT');
const loginUser = require('../middlewares/auth/loginUser');

const UserModel = require('../models/user');
const BlogModel = require('../models/blog');
const EventModel = require('../models/event');
const ApplicantModel = require('../models/applicant');

module.exports = function (app) {
    const objRepo = {
        UserModel,
        BlogModel,
        EventModel,
        ApplicantModel,
    };
    app.use('/login', checkJwt, loginUser(objRepo));
    app.get('/logout', auth(objRepo), logout(objRepo));
};
