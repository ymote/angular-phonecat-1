'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);  

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

  
    
      
      
      
      
      
/* end controllers */
@@@
prompt: Let's add PhoneDetailCtrl
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 15:0
type: phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
tooltip: {text: "create a new controller for phone detail page. Inject the $routeParams from ngRoute and $http service", wait: 5000}
moveTo: 16:2
type: function($scope, $routeParams, $http) {
tooltip: {text: "this is Angular's way to handle code minification. Notice we need to write the injected services in array notation first, and write them again here", wait: 7000}
moveTo: 17:4
type: $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
tooltip: {text: "get the phoneId from $routeParams.phoneId, and send a GET request the phone's json file to get detail information", wait: 7000}
moveTo: 18:6
type: $scope.phone = data;
tooltip: {text: "assign the data to $scope.phone. Angular's two-way binding takes care of rendering it on page", wait: 3000}
moveTo: 19:4
type: });
moveTo: 20:2
type: }]);