'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    //change the following line to assign first 5 phones in data to $scope.phones
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});
