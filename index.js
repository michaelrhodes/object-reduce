module.exports = function(object, keys) {
  var type = Object.prototype.toString.call(keys)
  var isArray = type === '[object Array]'
  if (!isArray) {
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
