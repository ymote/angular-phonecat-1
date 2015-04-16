Filters, like any other component, should be tested and these tests are very easy to write.

Take a lookat **filtersSpec.js**. 

We must call `beforeEach(module('phonecatFilters'))` before any of our filter tests execute. 
This call loads our phonecatFilters module into the injector for this test run.

Note that we call the helper function, inject(function(checkmarkFilter) { ... }), to get access to the filter 
that we want to test. See <a href="https://docs.angularjs.org/api/ngMock/function/angular.mock.inject" target="_blank">angular.mock.inject()</a>.

Notice that the suffix 'Filter' is appended to your filter name when injected. 
See the <a href="https://docs.angularjs.org/guide/filter#using-filters-in-controllers-services-and-directives" target="_blank">Filter 
Guide</a> section where this is outlined.