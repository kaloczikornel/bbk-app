const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai')
    , spies = require('chai-spies');

chai.use(spies);
const eventMW = require("../../middlewares/event/getEvents");

describe("getEventsMW test", () => {
    it("should call next(true) if event does not exist", (done) => {
        const next = chai.spy();
        const EventModel = {
            find: function (arg1, arg2) {
                arg2(true)
                done()                                                                                                
            }
        };
        const mw = eventMW({EventModel});
        mw(null, null, next);
        expect(next).to.have.been.called.with(true);
    });
    it("should call next and set res.locals.events if event exists", (done) => {
        const next = chai.spy();
        const EventModel = {
            find: function (arg1, arg2) {
                arg2(false, 42)
                done()                                                                                                
            }
        };
        const res = {
            locals: {}
        };
        const mw = eventMW({EventModel});
        mw(null,res,next);
        expect(next).to.have.been.called.once;
        expect(res.locals.events).to.equal(42);
    })
});