const auth = require("../middlewares/auth/auth");
const inverseAuth = require("../middlewares/auth/inverseAuth");
const sendForgotten = require("../middlewares/auth/sendForgotten");
const loginDataCheck = require("../middlewares/auth/loginDataCheck");
const uniqueEmail = require("../middlewares/auth/uniqueEmail");
const uniqueNick = require("../middlewares/auth/uniqueNick");
const logout = require("../middlewares/auth/logout");

const getEvents = require("../middlewares/event/getEvents");
const getEventByID = require("../middlewares/event/getEventByID");
const saveEvent = require("../middlewares/event/saveEvent");
const delEvent = require("../middlewares/event/delEvent");

const getBlogposts = require("../middlewares/blog/getBlogposts");
const savePost = require("../middlewares/blog/savePost");
const delPost = require("../middlewares/blog/delPost");

const getUserInfo = require("../middlewares/user/getUserInfo");
const getUsers = require("../middlewares/user/getUsers");
const saveUser = require("../middlewares/user/saveUser");

const saveApplicant = require("../middlewares/applicant/saveApplicant");
const getApplicants = require("../middlewares/applicant/getApplicants");
const delApplicants = require("../middlewares/applicant/delApplicants");
const getUserApplies = require("../middlewares/applicant/getUserApplies");

const render = require("../middlewares/render");

const UserModel = require('../models/user');
const BlogModel = require('../models/blog');
const EventModel = require('../models/event');
const ApplicantModel = require('../models/applicant');


module.exports = function (app) {
    const objRepo = {
        UserModel: UserModel,
        BlogModel: BlogModel,
        EventModel: EventModel,
        ApplicantModel: ApplicantModel
    };

    app.use(
        "/reg",
        inverseAuth(objRepo),
        uniqueEmail(objRepo),
        uniqueNick(objRepo),
        saveUser(objRepo),
        render(objRepo, "registration")
    );
    app.use(
        "/login",
        inverseAuth(objRepo),
        loginDataCheck(objRepo),
        render(objRepo, "login")
    );
    app.use(
        "/forgotten",
        inverseAuth(objRepo),
        sendForgotten(objRepo),
        render(objRepo, "forgotten")
    );
    app.get("/logout", auth(objRepo), logout(objRepo));

    app.use(
        "/event/:eventid/apply",
        auth(objRepo),
        getEventByID(objRepo),
        saveApplicant(objRepo),
        render(objRepo, "apply")
    );
    app.get("/events", getEvents(objRepo), render(objRepo, "events"));
    app.use(
        "event/:eventid/applicants",
        auth(objRepo),
        getApplicants(objRepo),
        saveApplicant(objRepo),
        render(objRepo, "applicants")
    );
    app.use("/newevent", auth(objRepo), saveEvent(objRepo), render(objRepo, "newEvent"));
    app.get(
        "/delevent/:eventid",
        auth(objRepo),
        getEvents(objRepo),
        getApplicants(objRepo),
        delApplicants(objRepo),
        delEvent(objRepo)
    );

    app.get("/blog", getBlogposts(objRepo), render(objRepo, "blog"));
    app.get(
        "/delpost/:blogpostid",
        auth(objRepo),
        getBlogposts(objRepo),
        delPost(objRepo)
    );
    app.use("/newblog", auth(objRepo), savePost(objRepo), render(objRepo, "newBlog"));

    app.use(
        "/profile",
        auth(objRepo),
        getUserInfo(objRepo),
        getUserApplies(objRepo),
        saveUser(objRepo),
        saveApplicant(objRepo),
        render(objRepo, "profile")
    );
    app.use(
        "/users",
        auth(objRepo),
        getUsers(objRepo),
        saveUser(objRepo),
        render(objRepo, "users")
    );

    app.get('/', getEvents(objRepo), getBlogposts(objRepo), render(objRepo, 'home'));
};
