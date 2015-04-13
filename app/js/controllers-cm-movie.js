'use strict';

/* Controllers */




  
   
     
   
    
    
     
  

  
  
/* end contorller */
@@@
prompt: Let's code phone list controller
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 4:0
type: var phonecatApp = angular.module('phonecatApp', []);
tooltip: {text: "declare module phonecatApp. It is the name of ng-app in view", wait: 2000}
moveTo: 6:0
type: phonecatApp.controller('PhoneListCtrl', function($scope) {
tooltip: {text: "declare a controller called PhoneListCtrl on phonecatApp. Paas in the important $scope parameter", wait: 4000}
moveTo: 7:2
type: $scope.phones = [{'name': 'Nexus S',
moveTo: 8:6
type: 'snippet': 'Fast just got faster with Nexus S.'}
moveTo: 9:2
type: ,{'name': 'Motorola XOOM™ with Wi-Fi',
moveTo: 10:6
type: 'snippet': 'The Next, Next Generation tablet.'}
moveTo: 11:2
type: ,{'name': 'MOTOROLA XOOM™',
moveTo: 12:6
type: 'snippet': 'The Next, Next Generation tablet.'}];
tooltip: {text: "create $scope.phones array with 3 phones. Their value show on view through {{ }}", wait: 3000}
moveTo: 13:0
type: });
tooltip: {text: "Finish PhoneListCtrl controller", wait: 1000}