'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Test PhoneCat App.', function() {

  describe('', function() {

    beforeEach(function() {
      browser.get('app/index.html#/phones/nexus-s');
    });

    it('Should go to nexus-s page when enter app/index.html#/phones/nexus-s in url address.', function() {
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S', 'when url is #/phones/nexus-s, the phone name should be Nexue S.');
    });

    it('Click the back button should go back to page displaying all phones.', function(){

      element(by.css('.back-btn')).click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones', 'click the back button dose not redirect to /phones.');
      });

    });

  });
});