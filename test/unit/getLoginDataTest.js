const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai')
    , spies = require('chai-spies');

chai.use(spies);
const getLoginDataMW = require("../../middlewares/auth/getLoginData");

describe("getLoginData test", () => {
    it("should call next() if the user is not logged in", () => {
        const req = {
            session: {
            }
        };
        const next = chai.spy();

        getLoginDataMW({})(req, {}, next);

        expect(next).to.have.been.called.once;
    });

    it("should call next(\"error\") if the user was logged in but there was an error", () => {
        const req = {
            session: {
                user_id: 1
            }
        };
        const findOne = (obj, cb) => { 
            cb("error", undefined);
         };
        const objectrepository = {
            UserModel: {
                findOne
            }
        };
        const next = chai.spy();

        getLoginDataMW(objectrepository)(req, {}, next);

        expect(next).to.have.been.called.with("error");
    });

    it("should call next() and return the user in res.locals if the user was logged in and there was no error",
        () => { const req = {
            session: {
                user_id: 1
            }
        };
        const findOne = (obj, cb) => { 
            cb(undefined, "User");
         };
        const objectrepository = {
            UserModel: {
                findOne
            }
        };
        var res = {
            locals: {
                user: undefined
            }
        };
        const next = chai.spy();

        getLoginDataMW(objectrepository)(req, res, next);

        expect(next).to.have.been.called.once;
        expect(res.locals.user).to.equal("User");
    });
});