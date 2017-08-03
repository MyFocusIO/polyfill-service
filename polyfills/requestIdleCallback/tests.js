/* eslint-env mocha, browser*/
/* global proclaim, it */

it('should be defined', function () {
    proclaim.isInstanceOf(window.requestIdleCallback, Function);
    proclaim.isInstanceOf(window.requestIdleCallback, Function);
});

it('should return a number id', function () {
    proclaim.isTypeOf(requestIdleCallback(function () {}), 'number');
});

it('should be cancelable', function (done) {
    var called = false;
    var id = requestIdleCallback(function () {
        called = true;
    });
    cancelIdleCallback(id);
    setTimeout(function () {
        proclaim.equal(called, false);
        done();
    }, 50);
});

it('should have a deadline with timeRemaining function', function (done) {
	requestIdleCallback(function (deadline) {
		proclaim.isTypeOf(deadline.timeRemaining, 'function');
		done();
	});
});
