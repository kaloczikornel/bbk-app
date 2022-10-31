const getLoginData = require('../middlewares/auth/getLoginData');
const { checkJwt } = require('../middlewares/auth0/checkJWT');
const getEvents = require('../middlewares/event/getEvents');
const getEventByID = require('../middlewares/event/getEventByID');
const saveEvent = require('../middlewares/event/saveEvent');
const delEvent = require('../middlewares/event/delEvent');
const getApplicants = require('../middlewares/applicant/getApplicants');
const delApplicants = require('../middlewares/applicant/delApplicants');

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
    app.post('/event', checkJwt, getLoginData(objRepo), saveEvent(objRepo));
    app.get('/events', getLoginData(objRepo), getEvents(objRepo), sendData(objRepo, 'events'));
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
};
