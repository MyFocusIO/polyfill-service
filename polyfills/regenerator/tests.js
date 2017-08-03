/* eslint-env mocha, browser*/
/* global proclaim, it */

it('should be defined', function () {
    proclaim.isInstanceOf(window.regeneratorRuntime, Object);
    proclaim.isInstanceOf(window.regeneratorRuntime.wrap, Function);
});
