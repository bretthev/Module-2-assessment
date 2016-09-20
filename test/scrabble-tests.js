const assert = require('chai').assert;
import scoreLetter from '../lib/scoreLetter';
import scoreWord from '../lib/scoreWord';

describe('Test Bundle', function() {
  it('should work', function() {
      assert.equal(true, true)
    });
});

describe('scoreLetter', function() {
  it('should be able to score a letter', function() {
    let letterScore = scoreLetter('B');
    assert.equal(letterScore, 3);
  });
  it('should be able to score a lowercase letter', function() {
    let letterScore = scoreLetter('x');
    assert.equal(letterScore, 8)
  });
  it('should return 0 if the character is not a string', function() {
    let letterScore = scoreLetter(2);
    assert.equal(letterScore, 0);
  });
  it('should return 0 if the character is a non-letter string', function() {
    let letterScore = scoreLetter('2');
    assert.equal(letterScore, 0)
  });
});

describe('scoreWord', function() {
  it('should be able to score a word', function() {
    let wordScore = scoreWord('HELLO');
    assert.equal(wordScore, 8)
  });
  it('should be able to trim the whitespace from a word and return a score anyway', function() {
    let checkForTrim = scoreWord('    hello    ');
    assert.equal(checkForTrim, 8)
  });
  it('should be able to get the score of a word regardless of capitilization', function() {
    let weirdCase = scoreWord('hElLO')
    assert.equal(weirdCase, 8)
  });
  it('should be able to multiply the score if a multiplier is provided', function() {
    let doubleWord = scoreWord('hello', 3)
    assert.equal(doubleWord, 24)
  });
    it('should be able to do all this for a word other than hello', function() {
      let notHello = scoreWord('GoOdbYe', 4)
      assert.equal(notHello, 56)
    })
  });
