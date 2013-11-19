var array = require('arrayify')

module.exports = function(object, keys) {
  keys = array(keys)
  var key
  var n = keys.length
  var result = {}
  while (n--) {
    key = keys[n]
    result[key] = object[key] 
  }
  return result
}
