const $ = require('jquery');
const parseSelector = require('mich-parse-selector')

$.fn.hyperscript = function jqueryHyperscript(selector) {
  const hast = parseSelector(selector)
  const $node = $(document.createElement(hast.tagName))
  if (hast.properties.id) {
    $node.attr('id', hast.properties.id)
  }
  if (hast.properties.className) {
    $node.addClass(hast.properties.className.join(' '))
  }
  return $node
};