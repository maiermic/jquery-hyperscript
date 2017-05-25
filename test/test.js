/* global describe, expect, it, window */
describe('jQuery', function() {
    it('should be defined', function() {
        expect($).toBeDefined();
    });
});

describe('plugin', function() {
    it('should be defined in global namespace', function() {
        expect($.fn.jqueryPlugin).toBeDefined();
    });
});
