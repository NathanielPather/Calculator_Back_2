/** Mocha tests for Maths functions. */

const assert = require('assert');
const maths = require('../services/Maths.js');

/** Tests for Maths function. */
describe('Calculator Tests', function () {
  /** Addition Test */
  it('returns 5+5=10', function (done) {
    assert.equal(maths('5+5'), 10);
    done();
  });
  /** Subtraction Test */
  it('returns 6-3=3', function (done) {
    assert.equal(maths('6-3'), 3);
    done();
  });
  /** Division Test */
  it('returns 10/5=2', function (done) {
    assert.equal(maths('10/5'), 2);
    done();
  });
  /** Multiplication Test */
  it('returns 6*3=18', function (done) {
    assert.equal(maths('6X3'), 18);
    done();
  });
});
