const $ = require('jquery');
const hyperscript = require('hyperscript')

function unpack(arg) {
  if (arg instanceof jQuery) {
    return unpack(arg.get())
  } else if (Array.isArray(arg)) {
    return arg.map(unpack)
  } else {
    return arg
  }
}

$.fn.hyperscript = function jqueryHyperscript() {
  var args = Array.prototype.slice.call(arguments)
  return $(hyperscript.apply(undefined, args.map(unpack)))
};