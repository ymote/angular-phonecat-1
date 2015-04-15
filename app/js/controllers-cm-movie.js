'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

                   
                    
                   
                   
                   
                    
                    
                    
/* end controller */                    
@@@
prompt: Let's code $http service
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 6:0
type: phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
tooltip: {text: "declare PhoneListCtrl, inject $scope and Angular's built-in $http service", wait: 5000}
moveTo: 7:2
type: $http.get('phones/phones.json').success(function(data) {
tooltip: {text: "use $http.get(url) to read data from url. Data is fetched in success callback function as parameter.", wait: 5000}
moveTo: 8:4
type: $scope.phones = data;
tooltip: {text: "assign the data from json file to $scope.phones. Angular's two-way data binding takes care of the rest", wait: 5000}
moveTo: 9:2
type: });
moveTo: 10:0
type: });
tooltip: {text: "Finish controller", wait: 500}