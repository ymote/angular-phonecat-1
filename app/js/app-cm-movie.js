'use strict';

var phonecatApp = angular.module('phonecatApp', [
    
    
]);

  
    
        
        
      
        
        
      
  
/* end app.js */
@@@
prompt: Let's code the routing mechanism
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 3:2
type: 'ngRoute',
moveTo: 4:2
type: 'phonecatControllers'
tooltip: {text: "inject Angular's ngRoute module and move our controllers into their own module phonecatControllers", wait: 5000}
moveTo: 7:0
type: phonecatApp.config(['$routeProvider',function($routeProvider) {
tooltip: {text: "use the phonecatApp.config() method, we request the $routeProvider to be injected into our config function. It is from ngRoute module", wait: 6000}
moveTo: 8:2
type: $routeProvider.when('/phones', {
tooltip: {text: "use the $routeProvider.when() method to define our routes", wait: 3000}
moveTo: 9:6
type: templateUrl: 'partials/phone-list.html',
moveTo: 10:6
type: controller: 'PhoneListCtrl' }).
tooltip: {text: "when('/phones'): The phone list view will be shown when the URL hash fragment is /phones. To construct this view, Angular will use the phone-list.html template and the PhoneListCtrl controller", wait: 10000}
moveTo: 11:4
type: when('/phones/:phoneId', {
moveTo: 12:6
type: templateUrl: 'partials/phone-detail.html',
moveTo: 13:6
type: controller: 'PhoneDetailCtrl' }).
tooltip: {text: "when('/phones/:phoneId'): The phone details view will be shown when the URL hash fragment matches '/phones/:phoneId', where :phoneId is a variable part of the URL. To construct the phone details view, Angular will use the phone-detail.html template and the PhoneDetailCtrl controller", wait: 10000}
moveTo: 14:4
type: otherwise({ redirectTo: '/phones' });
tooltip: {text: "otherwise({redirectTo: '/phones'}): triggers a redirection to /phones when the browser address doesn't match either of our routes", wait: 7000}
moveTo: 15:0
type:}]);
tooltip: {text: "Now go to controllers.js, see the new changes there", wait: 2000}