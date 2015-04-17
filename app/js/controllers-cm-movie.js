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

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', '$location',
  function($scope, $routeParams, $http, $location) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
        
    });

      
        
      
    
  }]);
@@@
prompt: Let's add event handler
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 19:6
type: $scope.mainImageUrl = data.images[0];
tooltip: {text: "to start with, set the default image to the first phone's", wait: 3000}
moveTo: 22:4
type: $scope.setImage = function(imageUrl) {
tooltip: {text: "event handler is function attached on $scope, so it can response to view changes instantly", wait: 5000}
moveTo: 23:6
type: $scope.mainImageUrl = imageUrl;
tooltip: {text: "set the $scope.mainImageUrl to the new imageUrl passed in. And the image in view automatically change to the new one", wait: 6000}
moveTo: 24:4
type: };
tooltip: {text: "finish the event handler. Go to phone-detail.html to see how it is used", wait: 2000}
