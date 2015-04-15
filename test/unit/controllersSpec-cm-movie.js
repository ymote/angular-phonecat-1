'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;

                                   
                                   
                                    
                                
                                     

                                 
                                  
                  
           
           
                                
                                  
                             
                             
                              
               
                
  });
});
@@@
prompt: Let's unit test $http service
moveTo: 8:4
type: beforeEach(module('phonecatApp'));
tooltip: {text: "Load our phonecatApp module", wait: 1000}
moveTo: 9:4
type: beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
tooltip: {text: "use the inject helper method to inject instances of $rootScope, $controller and $httpBackend services", wait: 5000}
moveTo: 10:6
type: $httpBackend = _$httpBackend_;
moveTo: 11:6
type: $httpBackend.expectGET('phones/phones.json').
moveTo: 12:8
type: respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
tooltip: {text: "$httpBackend.expectGET method trains the $httpBackend service to expect an incoming HTTP request and tell it what to respond with. Note that the responses are not returned until we call the $httpBackend.flush method.", wait: 7000}
moveTo: 14:6
type: scope = $rootScope.$new();
tooltip: {text: "create a new scope for our controller by calling $rootScope.$new()", wait: 4000}
moveTo: 15:6
type: ctrl = $controller('PhoneListCtrl', {$scope: scope});
tooltip: {text: "use $controller to create PhoneListCtrl, pass in the created scope", wait: 6000}
moveTo: 16:4
type: }));
moveTo: 19:4
type: it('should create "phones" model with 2 phones fetched from xhr', function() {
tooltip: {text: "start a test block", wait: 1000}
moveTo: 20:6
type: expect(scope.phones).toBeUndefined();
tooltip: {text: "before flush, the scope.phones should not have anything as the response has not returned", wait: 5000}
moveTo: 21:6
type: $httpBackend.flush();
tooltip: {text: "cause the promise returned by the $http service to be resolved with the trained response.", wait: 5000}
moveTo: 23:6
type: expect(scope.phones).toEqual([{name: 'Nexus S'},{name: 'Motorola DROID'}]);
tooltip: {text: "after flush, $scope.phones should contain our mock data", wait: 4000}
moveTo: 24:4
type: });




