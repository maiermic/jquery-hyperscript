(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.michParseSelector=t()}(this,function(){var e=function(e){var t,r,n=0,i=[],o={type:"element",tagName:"div",properties:{},children:[]};for(e=e||"";n<=e.length;){var f=e[n++];if(!f||"."===f||"#"===f){var p=e.slice(r,n-1);p&&("."===t?i.push(p):"#"===t?o.properties.id=p:o.tagName=p),r=n,t=f}}return i.length&&(o.properties.className=i),o};return e});


},{}],2:[function(require,module,exports){
(function (global){
const $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
const parseSelector = require('mich-parse-selector')

$.fn.hyperscript = function jqueryHyperscript(selector) {
  const hast = parseSelector(selector)
  const $node = $(document.createElement(hast.tagName))
  if (hast.properties.className) {
    $node.addClass(hast.properties.className.join(' '))
  }
  return $node
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"mich-parse-selector":1}]},{},[2]);
