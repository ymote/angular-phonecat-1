'use strict';

describe('PhoneCat App', function() {

    
    
      
      
          
        
      
    

  describe('Phone detail view', function() {
    
    beforeEach(function() {
        
    });

    it('should display placeholder page with phoneId', function() {
        
    });
  });
});
@@@
prompt: Let's write e2e test routing
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 4:2
type: it('should redirect index.html to index.html#/phones', function() {
tooltip: {text: "start a text block", wait: 1000}
moveTo: 5:4
type: browser.get('app/index.html');
tooltip: {text: "simulate enter index.html in url address", wait: 2000}
moveTo: 7:4
type: browser.getLocationAbsUrl().then(function(url) {
tooltip: {text: "use Protractor api method browser.getLocationAbsUrl() to get current url address", wait: 3000}
moveTo: 8:6
type: expect(url.split('#')[1]).toBe('/phones');
tooltip: {text: "this should be handled by otherwise route, which reirects to /phones. Here we make sure it works", wait: 4000}
moveTo: 9:4
type: });
moveTo: 11:2
type: });
moveTo: 16:6
type: browser.get('app/index.html#/phones/nexus-s');
tooltip: {text: "enter the url which should point to the nexus-s page", wait: 4000}
moveTo: 20:6
type: expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
tooltip: {text: "by.binding select element contains {{phoneId}}, getText() return its content. We know it should be the phone's id -- nexus-s", wait: 5000}
