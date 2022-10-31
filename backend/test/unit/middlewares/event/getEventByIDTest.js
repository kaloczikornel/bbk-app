const assert = require('assert');
const { expect } = require('chai');
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);
const eventMW = require('../../../../middlewares/event/getEventByID');

describe('getEventByIDMW test', () => {
    it('should call next if event does not exist', (done) => {
        const next = chai.spy();
        const res = {
            locals: {},
        };
        const req = {
            params: {
                eventid: 42,
            },
        };
        const EventModel = {
            findOne(arg1, arg2) {
                arg2(true);
                done();
            },
        };
        const mw = eventMW({ EventModel });
        mw(req, res, next);
        expect(next).to.have.been.called.once.with(true);
    });
    it('should call next if event exists and set res.locals.theEvent', (done) => {
        const next = chai.spy();
        const res = {
            locals: {
                theEvent: null,
            },
        };
        const req = {
            params: {
                eventid: chai.spy(),
            },
        };
        const uniqueVar = {};
        const EventModel = {
            findOne(arg1, arg2) {
                arg2(false, uniqueVar);
                done();
            },
        };
        const mw = eventMW({ EventModel });
        mw(req, res, next);
        expect(res.locals.theEvent).to.equal(uniqueVar);
        expect(next).to.have.been.called.once;
    });
});
