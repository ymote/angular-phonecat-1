'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    

  describe('PhoneDetailCtrl', function(){
    var scope, $httpBackend, ctrl;

      
        
        

        
        
        
      


    it('should fetch phone detail', function() {
        
        

        
    });
  });
});
@@@
prompt: Let's unit test $http
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
moveTo: 5:2
type: beforeEach(module('phonecatApp'));
tooltip: {text:"inject phonecatApp module"}
moveTo: 10:4
type: beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
moveTo: 11:6
type: $httpBackend = _$httpBackend_;
moveTo: 12:6
type: $httpBackend.expectGET('phones/xyz.json').respond({name:'phone xyz'});
tooltip: {text: "$httpBackend.expectGET method trains the $httpBackend service to expect an incoming HTTP request and tell it what to respond with. Note that the responses are not returned until we call the $httpBackend.flush method", wait: 7000}
moveTo: 14:6
type: $routeParams.phoneId = 'xyz';
tooltip: {text: "Later we will fetch phone detail on xyz"}
moveTo: 15:6
type: scope = $rootScope.$new();
moveTo: 16:6
type: ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
tooltip: {text: "use $controller to create PhoneDetailCtrl, pass in the created scope", wait: 5000}
moveTo: 17:4
type: }));
tooltip: {text: "Setup the PhoneDetailCtrl"}
moveTo: 21:6
type: expect(scope.phone).toBeUndefined();
tooltip: {text: "before flush, the scope.phone should not have anything as the response has not returned", wait: 5000}
moveTo: 22:6
type: $httpBackend.flush();
tooltip: {text: "cause the promise returned by the $http service to be resolved with the trained response", wait: 5000}
moveTo: 24:6
type: expect(scope.phone).toEqual({name:'phone xyz'});
tooltip: {text: "after flush, $scope.phone should contain our mock data", wait: 4000}







