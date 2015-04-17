'use strict';

/* Services */

  

  
    
      
    
  
  
/* end service */
@@@
prompt: RESTful service
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 4:0
type: var phonecatServices = angular.module('phonecatServices', ['ngResource']);
tooltip: {text: "define a new module, and inject ngResource for RESTful service"}
moveTo: 6:0
type: phonecatServices.factory('Phone', ['$resource',function($resource){
tooltip: {text: "use the module API to register a custom service using a factory function. We passed in the name of the service - 'Phone' - and the factory function", wait: 8000}
moveTo: 7:2
type: return $resource('phones/:phoneId.json', {}, {
tooltip: {text: "The $resource service makes it easy to create a RESTful client with just a few lines of code"}
moveTo: 8:4
type: query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
tooltip: {text: "define query method, fetch phone/phones.json, and return phones array"}
moveTo: 9:2
type: });
moveTo: 10:0
type: }]);
tooltip: {text: "Go to controllers.js to see how it is used", wait: 2000}