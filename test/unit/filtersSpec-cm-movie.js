'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

    

  describe('checkmark', function() {

      
          
        

      
  });
});
@@@
prompt: Let's unit test filter
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 6:2
type: beforeEach(module('phonecatFilters'));
tooltip: {text: "loads our phonecatFilters module into the injector for this test run", wait: 7000}
moveTo: 10:4
type: it('should convert boolean values to unicode checkmark or cross',
moveTo: 11:8
type: inject(function(checkmarkFilter) {
tooltip: {text: "get access to the filter that we want to test. Notice we need to add 'Filter' suffix after our filter -- checkmark to get it", wait: 8000}
moveTo: 12:6
type: expect(checkmarkFilter(true)).toBe('\u2713');
tooltip: {text: "If the input is true, the filter should return '\u2713'. Use expect syntax to test it", wait: 5000}
moveTo: 14:4
type: }));