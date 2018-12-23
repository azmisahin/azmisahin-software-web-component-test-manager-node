# test-manager
Simple test managament tool

# Install

```shell
$ npm i -g npm
$ npm i @azmisahin/test-manager
```

# Usage

```js
/// Test Manager
var TestManager = require('@azmisahin/test-manager')

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

# Pipline

[![Build Status](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-test-manager-node/_apis/build/status/azmisahin.azmisahin-software-web-component-test-manager-node?branchName=master)](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-test-manager-node/_build/latest?definitionId=10?branchName=master)

[![NPM](https://nodei.co/npm/@azmisahin/test-manager.png)](https://nodei.co/npm/@azmisahin/test-manager/)
