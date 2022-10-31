const getEventByID = require('../middlewares/event/getEventByID');
const getEventsByIds = require('../middlewares/event/getEventsByIds');
const checkPermission = require('../middlewares/auth/checkPermission');
const getUserById = require('../middlewares/user/getUserById');
const saveApplicant = require('../middlewares/applicant/saveApplicant');
const getApplicantsWithUsers = require('../middlewares/applicant/getApplicantsWithUsers');
const getUserApplies = require('../middlewares/applicant/getUserApplies');
const delApplicant = require('../middlewares/applicant/delApplicant');
const getApplicant = require('../middlewares/applicant/getApplicant');
const checkIfAlreadyApplied = require('../middlewares/applicant/checkIfAlreadyApplied');
const { checkJwt } = require('../middlewares/auth0/checkJWT');
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
    app.post(
        '/applicant/:eventid/:userid',
        checkJwt,
        getUserById(objRepo),
        getEventByID(objRepo),
        checkIfAlreadyApplied(objRepo),
        saveApplicant(objRepo)
    );
    app.get(
        '/applicants/:eventid/:userid',
        checkJwt,
        getUserById(objRepo),
        getApplicantsWithUsers(objRepo),
        sendData(objRepo, 'applicants')
    );
    app.patch(
        '/applicant/:eventid/:userid',
        checkJwt,
        getUserById(objRepo),
        checkPermission(objRepo),
        getEventByID(objRepo),
        getApplicant(objRepo),
        saveApplicant(objRepo)
    );
    app.delete(
        '/applicant/:eventid/:userid',
        checkJwt,
        getUserById(objRepo),
        getEventByID(objRepo),
        getApplicant(objRepo),
        delApplicant(objRepo)
    );
    app.get(
        '/applies/:userid',
        checkJwt,
        getUserById(objRepo),
        getUserApplies(objRepo),
        getEventsByIds(objRepo),
        sendData(objRepo)
    );
};
