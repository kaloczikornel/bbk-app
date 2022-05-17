const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai')
    , spies = require('chai-spies');

chai.use(spies);
const authMW = require("../../middlewares/auth/auth");

describe("authMW test", () => {
    it("should can next() if the user is logged in", () => {
        const next = chai.spy();
        const req = {
            session: {
                user_id: 1
            }
        };
        const mw = authMW({});
        mw(req,{},next);
        expect(next).to.have.been.called.once;
    });
    it("should redirect if user is not logged in", () => {
        const next = chai.spy();
        const req = {
            session: {}
        };
        const redirectFn = chai.spy();
        const res = {
            redirect: redirectFn
        };
        const mw = authMW({});
        mw(req,res,next);
        expect(next).to.not.have.been.called;
        expect(redirectFn).to.have.been.called.with('/login');
    })
});