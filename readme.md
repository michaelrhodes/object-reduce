# object-reduce
object-reduce is a function that reduces an Object to match a specified list of keys.

[![Build status](https://travis-ci.org/michaelrhodes/object-reduce.png?branch=master)](https://travis-ci.org/michaelrhodes/object-reduce)

[![Browser support](https://ci.testling.com/michaelrhodes/object-reduce.png)](https://ci.testling.com/michaelrhodes/object-reduce)

## Install
```
npm install object-reduce
```

### Example
``` js
var reduce = require('object-reduce')

reduce({ a: 1, b: 2, c: 3 }, ['a', 'b'])
// => { a: 1, b: 2 }

reduce({ d: 4, e: 5 }, 'e')
// => { e: 5 }
```

### License
[MIT](http://opensource.org/licenses/MIT)
