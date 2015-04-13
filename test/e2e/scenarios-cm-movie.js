'use strict';

describe('Test PhoneCat App', function() {
  describe('Phone list view', function() {

    beforeEach(function() {
      
    });


    

      
      

      

     
      

      
      
      
   
  });
});
@@@
prompt: let's code the e2e test
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
moveTo: 6:8
type: browser.get('app/index.html');
tooltip: {text: "browser.get is from portractor API. it simulates opening browser and visit index.html", wait: 2000}
moveTo: 10:4
type: it('should filter the phone list as user types into the search box', function() {
tooltip: {text: "start a test block, the same Jasmine syntax as unit test", wait: 1000}
moveTo: 12:6
type: var phoneList = element.all(by.repeater('phone in phones'));
tooltip: {text: "element.all grep all qualifying elements. by.repeater match the ng-repeat='phone in phones'. Here we get all list elements in the phone list.", wait: 5000}
moveTo: 13:6
type: var query = element(by.model('query'));
tooltip: {text: "element grep one item. by.model match ng-model='query'. Here we get the query input element.", wait: 4000}
moveTo: 15:6
type: expect(phoneList.count()).toBe(3);
tooltip: {text: "count return length of array. Here we test there are 3 list items in index.html", wait: 4000}
moveTo: 17:7
type: query.sendKeys('nexus');
tooltip: {text: "sendKeys simulate enter 'nexus' in the input box", wait: 3000}
moveTo: 18:6
type: expect(phoneList.count()).toBe(1);
tooltip: {text: "because of the filter on ng-repeat. We expect there are only one qualifying list item on page now", wait: 4000}
moveTo: 20:6
type: query.clear();
tooltip: {text: "clear the query input element", wait: 3000}
moveTo: 21:6
type: query.sendKeys('motorola');
tooltip: {text: "Enter 'motorola' in the input box", wait: 3000}
moveTo: 22:6
type: expect(phoneList.count()).toBe(2);
tooltip: {text: "Now there should be 2 list items on page as there are 2 phones contain 'motorola'", wait: 3000}
moveTo: 23:4
type: });
tooltip: {text: "Finish text", wait:500}





