const auth = require('../middlewares/auth/auth');
const logout = require('../middlewares/auth/logout');
const getLoginData = require('../middlewares/auth/getLoginData');
const { checkJwt } = require('../middlewares/auth0/checkJWT');
const loginUser = require('../middlewares/auth/loginUser');

const getEvents = require('../middlewares/event/getEvents');
const getEventByID = require('../middlewares/event/getEventByID');
const getEventsByIds = require('../middlewares/event/getEventsByIds');
const getUserByAuth0Id = require('../middlewares/user/getUserByAuth0Id');
const getUserById = require('../middlewares/user/getUserById');
const saveEvent = require('../middlewares/event/saveEvent');
const delEvent = require('../middlewares/event/delEvent');

const getBlogposts = require('../middlewares/blog/getBlogposts');
const savePost = require('../middlewares/blog/savePost');
const delPost = require('../middlewares/blog/delPost');

const getUsers = require('../middlewares/user/getUsers');
const saveUser = require('../middlewares/user/saveUser');
const getUsersByIds = require('../middlewares/user/getUsersByIds');

const saveApplicant = require('../middlewares/applicant/saveApplicant');
const getApplicants = require('../middlewares/applicant/getApplicants');
const getApplicantsWithUsers = require('../middlewares/applicant/getApplicantsWithUsers');
const delApplicants = require('../middlewares/applicant/delApplicants');
const getUserApplies = require('../middlewares/applicant/getUserApplies');
const delApplicant = require('../middlewares/applicant/delApplicant');
const getApplicant = require('../middlewares/applicant/getApplicant');
const checkIfAlreadyApplied = require('../middlewares/applicant/checkIfAlreadyApplied');

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
    app.use('/login', checkJwt, loginUser(objRepo));
    app.get('/logout', auth(objRepo), logout(objRepo));

    app.get('/events', getLoginData(objRepo), getEvents(objRepo), sendData(objRepo, 'events'));
    app.post('/event', checkJwt, getLoginData(objRepo), saveEvent(objRepo));
    app.patch(
        '/event/:eventid',
        checkJwt,
        getLoginData(objRepo),
        getEventByID(objRepo),
        saveEvent(objRepo)
    );
    app.delete(
        '/event/:eventid',
        checkJwt,
        getLoginData(objRepo),
        getEventByID(objRepo),
        getApplicants(objRepo),
        delApplicants(objRepo),
        delEvent(objRepo)
    );

    // what is this
    app.get(
        '/event/:eventid/apply',
        checkJwt,
        getLoginData(objRepo),
        getEventByID(objRepo),
        checkIfAlreadyApplied(objRepo),
        sendData(objRepo, 'apply')
    );
    app.post(
        '/event/:eventid/apply',
        checkJwt,
        getLoginData(objRepo),
        getEventByID(objRepo),
        checkIfAlreadyApplied(objRepo),
        saveApplicant(objRepo)
    );
    app.get(
        '/applicants/:eventid/:userid',
        checkJwt,
        getUserByAuth0Id(objRepo),
        getApplicantsWithUsers(objRepo),
        sendData(objRepo, 'applicants')
    );
    app.delete(
        '/applicant/:eventid/:userid',
        checkJwt,
        getUserByAuth0Id(objRepo),
        getEventByID(objRepo),
        getApplicant(objRepo),
        delApplicant(objRepo)
    );
    app.patch(
        '/applicant/:eventid/:userid',
        checkJwt,
        getUserById(objRepo),
        getEventByID(objRepo),
        getApplicant(objRepo),
        saveApplicant(objRepo)
    );
    app.get(
        '/applicant/:userid',
        checkJwt,
        getUserByAuth0Id(objRepo),
        getUserApplies(objRepo),
        getEventsByIds(objRepo),
        sendData(objRepo)
    );

    app.get('/blog', getLoginData(objRepo), getBlogposts(objRepo), sendData(objRepo, 'blog'));
    app.get(
        '/delpost/:blogpostid',
        checkJwt,
        getLoginData(objRepo),
        getBlogposts(objRepo),
        delPost(objRepo)
    );
    app.use(
        '/newblog',
        checkJwt,
        getLoginData(objRepo),
        savePost(objRepo),
        sendData(objRepo, 'newBlog')
    );

    app.get('/user/:userid', checkJwt, getUserByAuth0Id(objRepo), sendData());
    app.post('/user/:userid', checkJwt, getUserById(objRepo), saveUser(objRepo));
    app.use(
        '/users',
        checkJwt,
        getLoginData(objRepo),
        getUsers(objRepo),
        saveUser(objRepo),
        sendData(objRepo, 'users')
    );
};
