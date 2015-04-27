'use strict';

describe('PhoneCat App', function() {

  it('should redirect index.html to index.html#/phones', function() {
    
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones');
      });
      
  });

  describe('Phone detail view', function() {
    
    beforeEach(function() {
      browser.get('app/index.html#/phones/nexus-s');
    });

    it('should display placeholder page with phoneId', function() {
      //what is the {{phoneId}} value now? 
      expect(element(by.binding('phoneId')).getText()).toBe('');
    });
  });
});
