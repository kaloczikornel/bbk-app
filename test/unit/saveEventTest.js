const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai')

const saveEventMW = require("../../middlewares/event/saveEvent");

describe("saveEvent test", () => {
    it("should call next if req has undefined properties", (done) => {
        const next = chai.spy();
        const req = {
            body: {

            }
        }
        const res = null
        const EventModel = true;
        const mw = saveEventMW({EventModel});
        mw(req,res,next);
        done()
        expect(next).to.have.been.called.once;
    });
    it("should set res.locals.event properties and call next with err", (done) => {

        function MyContructFn() {
            this.save = cb => {cb(true); done()}
        }
        const next = chai.spy();
        const req = {
            body: {
                name: {}, place: {}, date: {},description: {} 
            }
        }
        const res = {
            locals: {
                user:{_id:{}},
            }
        }
        const mw = saveEventMW({EventModel: MyContructFn});
        mw(req,res,next);
        expect(next).to.not.have.been.called;
        expect(res.locals.event.name).to.equal(req.body.name)
        expect(res.locals.event.place).to.equal(req.body.place)
        expect(res.locals.event.date).to.equal(req.body.name)
        expect(res.locals.event.description).to.equal(req.body.date)
        expect(res.locals.event._organizer).to.equal(res.locals.user._id)
    });
    it("should set res.locals.event properties and call redirect with /events", (done) => {
// program to create JavaScript object using instance of an object

        function MyContructFn() {
            this.save = cb => {cb(false); done()}
        }
        const next = chai.spy();
        const redirectFn = chai.spy();
        const req = {
            body: {
                name: {}, place: {}, date: {},description: {} 
            }
        }
        const res = {
            locals: {
                user:{_id:{}},
            },
            redirect: redirectFn
        }
        // https://www.programiz.com/javascript/examples/create-object
        const mw = saveEventMW({EventModel: MyContructFn});
        mw(req,res,next);
   
        expect(res.locals.event.name).to.equal(req.body.name)
        expect(res.locals.event.place).to.equal(req.body.place)
        expect(res.locals.event.date).to.equal(req.body.name)
        expect(res.locals.event.description).to.equal(req.body.date)
        expect(res.locals.event._organizer).to.equal(res.locals.user._id)
        expect(redirectFn).to.have.been.called.with('/events');
    });
});