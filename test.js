'use strict';

require('mocha');
var assert = require('assert');
var randomize = require('./');

function test(re, str) {
  return re.test(str);
}

describe('randomatic', function() {
  it('should export an isCrypto boolean property', function() {
    assert.equal(typeof randomize.isCrypto, 'boolean');
  });

  it('should throw an error when no arguments are passed:', function() {
    assert.throws(function() {
      randomize();
    }, /randomatic expects a string or number\./);
  });

  it('should generate a randomized string of the given length:', function() {
    assert.equal(randomize(12).length, 12);
    assert.equal(typeof randomize(5), 'string');
  });

  it('should generate a string with a length equal to the number passed as a second parameter', function() {
    var actual = randomize('A', 12);
    assert.equal(actual.length, 12);
    assert(test(/[A-Z]{12}/, actual));
  });

   it('should generate Alpha (Upper/Lower), Numeric, Special Char 16-character string', function() {
    var actual = randomize('*');
    assert(test(/^[-~!@#$%^&()_+={}[\];\',.a-zA-Z0-9]$/, actual));
  });
  
  
  it('numeric, 1 digit:\t', function() {
    var actual = randomize('0', 1);
    assert(test(/\d{1}/, actual));
    assert.equal(actual.length, 1);
  });

  it('numeric, 8 digits:\t', function() {
    var actual = randomize('0', 8);
    assert(test(/^\d{8}/, actual));
    assert.equal(actual.length, 8);
  });

  it('numeric, 8 digits:\t', function() {
    var actual = randomize('00000000');
    assert(test(/^\d{8}/, actual));
    assert.equal(actual.length, 8);
  });
  
});
