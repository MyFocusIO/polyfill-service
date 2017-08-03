/* eslint-env mocha, browser*/
/* global proclaim, it */

it('should be defined', function () {
    proclaim.isInstanceOf(window.customElements, Object);
    proclaim.isInstanceOf(window.customElements.define, Function);
});
