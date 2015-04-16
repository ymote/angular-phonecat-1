'use strict';

/* Filters */

  
    
      
    
  
/* end filter */
@@@
prompt: Let's write a filter
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 4:0
type: angular.module('phonecatFilters', []).filter('checkmark', function() {
tooltip: {text: "create a phonecatFilters module and register the custom filter -- checkmark, with this module", wait: 7000}
moveTo: 5:2
type: return function(input) {
tooltip: {text: "filter need to return a function, input is the content passed into filter", wait: 6000}
moveTo: 6:4
type: return input ? '\u2713' : '\u2718';
tooltip: {text: "The input evaluates to either true or false, and we return one of the two unicode characters we have chosen to represent true (\u2713 -> ✓) or false (\u2718 -> ✘)", wait: 10000}
moveTo: 7:2
type: };
moveTo: 8:0
type: });
tooltip: {text: 'Finish the filter. Click the phone-detail.html to see how it is used'}