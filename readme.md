# test-manager
Simple test managament tool

# Install

```shell
$ npm i -g npm
$ npm i --save test-manager
```

# Usage

```js
/// Test Manager
var TestManager = require('test-manager')

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
```

# Test

```shell
$ npm run test
```
