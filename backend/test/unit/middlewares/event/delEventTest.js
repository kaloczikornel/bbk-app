const assert = require('assert');
const { expect } = require('chai');
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);
const eventMW = require('../../../../middlewares/event/delEvent');

describe('delEventMW test', () => {
    it('should call next() if the event cannot be deleted', () => {
        const next = chai.spy();
        const res = {
            locals: {},
        };
        const mw = eventMW({ EventModel: true });
        mw(null, res, next);
        expect(next).to.not.have.been.called;
    });
    it('should remove if event exists', (done) => {
        const next = chai.spy();
        const res = {
            locals: {
                theEvent: {
                    remove(cb) {
                        cb(true);
                        done();
                    },
                },
            },
        };

        const mw = eventMW({ EventModel: true });
        mw(null, res, next);
        expect(next).to.have.been.called.once;
    });
    it('should remove if event exists', (done) => {
        const next = chai.spy();
        const redirectFn = chai.spy();
        const res = {
            locals: {
                theEvent: {
                    remove(cb) {
                        cb(false);
                        done();
                    },
                },
            },
            redirect: redirectFn,
        };

        const mw = eventMW({ EventModel: true });
        mw(null, res, next);
        expect(next).to.not.have.been.called;
        expect(redirectFn).to.have.been.called.with('back');
    });
});
