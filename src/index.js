var TraceManager = require('trace-manager')
var tm = new TraceManager()

/**
 * Test Managaer
 *
 * Simple Test Managament
 *
 * @author Azmi ŞAHİN
 * @since 2018
 * */
class TestManager {

  /**
   * Test Manager Configure
   *
   * @param {boolean} exception Exception is open?
   *
   * @example
   *
   * /// Test Instance Default `false`
   * var t = new TestManager()
   *
   * or
   *
   * /// Test Instance Exception
   * var t = new TestManager(true)
   *
   * @example
   *
   * /// Test Instance
   * var t = new TestManager()
   *
   * /// Equal Test
   * var isEqualTest = function (){
   *  var expected = true
   *  var actual = true
   *  t.Test('Equal?', expected , actual)
   * }
   * isEqualTest()
   *
   * @returns test result string
   * */
  constructor(exception) {
    this.Exception = exception
    tm.Info('Simple Test Tool')
    tm.Info('==================================================')
  }

  /**
   * Test Suite
   *
   * @param {string} description Test description
   * @param {any} actual actual any
   * @param {any} expected Expected any
   */
  Test(description, expected, actual) {
    /// Equal?
    var result = actual == expected ? 'Success' : 'Error'

    /// Trace
    tm.Debug(description)
    tm.Warning(result)

    /// Error?
    if (result === 'Error') {
      tm.Error('Expected :' + expected)
      tm.Error('Actual   :' + actual)

      /// Exception
      if (this.Exception === true){
        throw `${result} : ${description}`
      }
    }
    /// End line
    tm.Debug('--------------------------------------------------')
    return result
  }
}

module.exports = TestManager
