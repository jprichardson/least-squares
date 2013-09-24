var testutil = require('testutil')
  , lsq = require('../lib/least-squares')

describe('+ lsq', function() {
  describe('> when computeError is not passed', function() {
    it('should return the values without the errors', function() {
      var X = [1,2,3,4]
      var Y = [6,5,7,10]

      var ret = {}
      var f = lsq(X, Y, ret)
      EQ (ret.m, 1.4)
      EQ (ret.b, 3.5)
      EQ (f(3.6), 8.54)

      EQ (ret.mErr, undefined)
      EQ (ret.bErr, undefined) 
    })
  })

  describe('> when computeError is passed', function() {
    it('should return the values with the errors', function() {
      var X = [1,2,3,4]
      var Y = [6,5,7,10]

      var ret = {}
      var f = lsq(X, Y, true, ret)
      EQ (ret.m, 1.4)
      EQ (ret.b, 3.5)
      EQ (f(3.6), 8.54)

      NEQ (ret.mErr, undefined)
      NEQ (ret.bErr, undefined) 
    })
  })

  describe('> when returnObject is not passed', function() {
    it('should just return the function', function() {
      var X = [1,2,3,4]
      var Y = [6,5,7,10]

      var ret = {}
      var f = lsq(X, Y)
      EQ (f(3.6), 8.54)
    })
  })
})