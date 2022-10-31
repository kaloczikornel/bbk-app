const getLoginData = require('../middlewares/auth/getLoginData');
const { checkJwt } = require('../middlewares/auth0/checkJWT');
const getBlogposts = require('../middlewares/blog/getBlogposts');
const savePost = require('../middlewares/blog/savePost');
const delPost = require('../middlewares/blog/delPost');
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
};
