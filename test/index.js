var run = require('tape').test
var reduce = require('../')

run('it works', function(test) {
  var source = { one: 1, two: 2, three: 3 }
  var expected = {
    one: { two: 2, three: 3 },
    two: { three: 3 },
    three: { one: 1 },
  }
  var result = {
    one: reduce(source, ['two', 'three']),
    two: reduce(source, 'three'),
    three: reduce(source, ['zero', 'one'])
  }
  test.deepEqual(result.one, expected.one, 'with list of keys')
  test.deepEqual(result.two, expected.two, 'with a single key')
  test.deepEqual(result.three, expected.three, 'with a non-existent key')
  test.end()
})
