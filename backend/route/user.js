const getLoginData = require('../middlewares/auth/getLoginData');
const { checkJwt } = require('../middlewares/auth0/checkJWT');
const getUserByAuth0Id = require('../middlewares/user/getUserByAuth0Id');
const getUserById = require('../middlewares/user/getUserById');
const getUsers = require('../middlewares/user/getUsers');
const saveUser = require('../middlewares/user/saveUser');

const sendData = require('../middlewares/sendData');

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
    app.get('/user/:auth0id', checkJwt, getUserByAuth0Id(objRepo), sendData());
    app.patch('/user/:userid', checkJwt, getUserById(objRepo), saveUser(objRepo));
    app.use(
        '/users',
        checkJwt,
        getLoginData(objRepo),
        getUsers(objRepo),
        saveUser(objRepo),
        sendData(objRepo, 'users')
    );
};
