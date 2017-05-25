const $ = require('jquery');
const parseSelector = require('mich-parse-selector')

$.fn.hyperscript = function jqueryHyperscript(selector) {
  const hast = parseSelector(selector)
  return $(document.createElement(hast.tagName));
};