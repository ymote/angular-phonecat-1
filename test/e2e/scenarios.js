'use strict';

describe('Test PhoneCat App', function() {
  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should filter the phone list as user types into the search box', function() {
    
      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });

    it('should display the current filter value within an element with id "status"',
      function() {
      //find the input with ng-model=query
      var query = element(by.model('query'));

      expect('DOM element with id status')
        .toMatch(/Current filter:\s*/);

      //clear query content and input 'nexus'


      expect('DOM element with id status')
        .toMatch(/Current filter:\s*nexus/);
    });
  });
});
