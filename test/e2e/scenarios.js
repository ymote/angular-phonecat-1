'use strict';

describe('Test PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should filter the phone list as user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      query.sendKeys('motorola');
      //how many phones in phoneList now?
      expect(phoneList.count()).toBe(0);
    });

    it('should be possible to control phone order via the drop down select box', function() {

      var phoneNameColumn = element.all(by.repeater('phone in phones').column('{{phone.name}}'));
      var query = element(by.model('query'));

      function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      //use the preview panel to check the web page, what is the order of phones now?
      expect(getNames()).toEqual([
        "",
        ""
      ]);
    });
  });
});
