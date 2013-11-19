var run = require('tape').test
var reduce = require('../')

run('it works', function(test) {
  var source = { one: 1, two: 2, three: 3 }
  var expected = {
    one: { two: 2, three: 3 },
    two: { three: 3 }
  }
  var result = {
    one: reduce(source, ['two', 'three']),
    two: reduce(source, 'three')
  }
  test.deepEqual(result.one, expected.one, 'with list of keys')
  test.deepEqual(result.two, expected.two, 'with a single key')
  test.end()
})
