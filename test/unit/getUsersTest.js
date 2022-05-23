const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai')
    , spies = require('chai-spies');

chai.use(spies);
const getUsersMW = require("../../middlewares/user/getUsers");

describe("getUsers test", () => {
    it("should call next(\"error\") if there was an error", () => {
        const find = (obj, cb) => {
            cb("error", undefined);
        };
        const objectrepository = {
            UserModel: {
                find
            }
        };
        const next = chai.spy();

        getUsersMW(objectrepository)({}, {}, next);

        expect(next).to.be.called.with("error");
        expect(next).to.be.called.once;
    });

    it("should call next() and return the users in res.locals if there was no error", () => {
        const find = (obj, cb) => {
            cb(undefined, "Users");
        };
        const objectrepository = {
            UserModel: {
                find
            }
        };
        const next = chai.spy();
        const res = {
            locals: {
                users: undefined
            }
        };

        getUsersMW(objectrepository)({}, res, next);

        expect(next).to.be.called.once;
        expect(res.locals.users).to.equal("Users")
    });
});