'use strict';

describe('PhoneCat App', function() {
  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should filter the phone list as user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('motorola');
      //how many phones are on page now
      expect(phoneList.count()).toBe(0);
    });

    it('should render phone specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element(by.css('.phones li a')).click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones/nexus-s');
      });
    });

    //finish the below test code block
    it('should render phone specific links for motorola phones', function() {
      var query = element(by.model('query'));
      query.sendKeys('motorola');
      //you can use css syntax nth-child(x) to select x element in list. 
      //element(by.css('.phones li a')).click();
      browser.getLocationAbsUrl().then(function(url) {
        //what the url path now？
        expect(url.split('#')[1]).toBe('enter the address here ...');
      });
    });

  });
});
