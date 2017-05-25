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
});
