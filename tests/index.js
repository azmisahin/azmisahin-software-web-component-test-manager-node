/// Test Manager
var TestManager = require('../src')

/// Test Instance
var t = new TestManager()

/// Equal Test
var isEqualTest = function (){
  var expected = true
  var actual = true
  t.Test('Boolean Equal?', expected , actual)
}
isEqualTest()

/// String Test
var isStringTest = function (){
  var expected = 'true'
  var actual = true
  t.Test('String or Boolen?', expected , actual)
}
isStringTest()
