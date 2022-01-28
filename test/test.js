var assert = require('assert');
var maths = require('../services/Maths.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function() {
	// Addition
    it('returns 5+5=10', function(done) {
        assert.equal(maths("5+5"), 10);
		// Invoke done when the test is complete.
        done();
    });
	// Subtraction
    it('returns 6-3=3', function(done) {
        assert.equal(maths("6-3"), 3);
		// Invoke done when the test is complete.
        done();
    });
	// Division
    it('returns 10/5=2', function(done) {
        assert.equal(maths("10/5"), 2);
		// Invoke done when the test is complete.
        done();
    });
	// Multiplication
    it('returns 6*3=18', function(done) {
        assert.equal(maths("6X3"), 18);
		// Invoke done when the test is complete.
        done();
    });
});