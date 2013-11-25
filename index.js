module.exports = function(object, keys) {
  if (typeof keys == 'string') {
    keys = Array(keys)
  }
  var key
  var n = keys.length
  var result = {}
  while (n--) {
    key = keys[n]
    if (object.hasOwnProperty(key)) {
      result[key] = object[key] 
    }
  }
  return result
}
