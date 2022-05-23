const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai')
    , spies = require('chai-spies');

chai.use(spies);
const inverseAuthMW = require("../../middlewares/auth/inverseAuth");

describe("inverseAuth test", () => {
	it("should call next() if the user is not logged in", () => {
		const req = {
			session: {
			}
		};
		const next = chai.spy();

		inverseAuthMW({})(req, {}, next);

		expect(next).to.have.been.called.once;
	});

	it("should redirect if the user is logged in", () => {
		const req = {
			session: {
				user_id: 1
			}
		};
		const redirectFn = chai.spy(() => {  });
		const res = {
			redirect: redirectFn
		};
        const next = chai.spy();

		inverseAuthMW({})(req, res, next)

		expect(next).to.not.have.been.called;
		expect(redirectFn).to.have.been.called.with('/');
	});
});