'use strict';

describe('PhoneCat App', function() {
  describe('Phone list view', function() {

    beforeEach(function() {
        
    });

      
         
         
         
         
          
          
      

  });
});
@@@
prompt: let's e2e test links
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 6:6
type: browser.get('app/index.html');
tooltip: {text: "simulate open browser and open index.html"}
moveTo: 9:4
type: it('should render phone specific links', function() {
tooltip: {text: "start a test block", wait: 1000}
moveTo: 10:6
type: var query = element(by.model('query'));
tooltip: {text: "get input element using Protactor selector api", wait: 2000}
moveTo: 11:6
type: query.sendKeys('nexus');
tooltip: {text: "type 'nexus' in the input box to trigger search", wait: 2000}
moveTo: 12:6
type: element(by.css('.phones li a')).click();
tooltip: {text: "by.css select DOM element using CSS selector. get the first link element and click the link", wait: 4000}
moveTo: 13:6
type: browser.getLocationAbsUrl().then(function(url) {
tooltip: {text: "browser.getLocationAbsUrl() uses promise to get the url address. the url address is returned as parameter in the .then callback function", wait: 6000}
moveTo: 14:8
type: expect(url.split('#')[1]).toBe('/phones/nexus-s');
tooltip: {text: "use expect to check url fragment", wait: 2000}
moveTo: 15:6
type: });
moveTo: 16:4
type: })
tooltip: {text: "Finish test", wait: 500}





