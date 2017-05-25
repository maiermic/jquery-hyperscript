/* global describe, expect, it, window */
describe('jQuery', function() {
    it('should be defined', function() {
        expect($).toBeDefined();
    });
});

describe('plugin', function() {
    it('should be defined in global namespace', function() {
        expect($.fn.hyperscript).toBeDefined();
    });
});

describe('hyperscript', function() {
    it('should create Node for tag name', function() {
        var $node = $.fn.hyperscript('h1')
        expect($node).toEqual(jasmine.any($))
        expect($node.is('h1')).toBe(true)
    });
    it('should create Node for tag with class', function() {
        var $node = $.fn.hyperscript('h2.chapter')
        expect($node).toEqual(jasmine.any($))
        expect($node.is('h2.chapter')).toBe(true)
    });
    it('should create Node for tag with classes', function() {
        var $node = $.fn.hyperscript('h2.header.chapter')
        expect($node).toEqual(jasmine.any($))
        expect($node.is('h2.header.chapter')).toBe(true)
    });
    it('should create div Node for class without tag', function() {
        var $node = $.fn.hyperscript('.container')
        expect($node).toEqual(jasmine.any($))
        expect($node.is('div.container')).toBe(true)
    });
    it('should create div Node for classes without tag', function() {
        var $node = $.fn.hyperscript('.column.container')
        expect($node).toEqual(jasmine.any($))
        expect($node.is('div.column.container')).toBe(true)
    });
});
