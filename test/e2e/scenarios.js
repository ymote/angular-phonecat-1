'use strict';

describe('PhoneCat App', function() {

  describe('Phone detail view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/phones/nexus-s');
    });

    it('should display nexus-s page', function() {
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
    });

    it('should display availbility', function() {
      element.all(by.css('.availability dd')).then(function(dds){
        expect(dds.length).toBe(7);
        expect(dds[0].getText()).toBe("M1,");
        expect(dds[1].getText()).toBe("O2,");
        expect(dds[2].getText()).toBe("Orange,");
        expect(dds[3].getText()).toBe("Singtel,");
        expect(dds[4].getText()).toBe("StarHub,");
        expect(dds[5].getText()).toBe("T-Mobile,");
        expect(dds[6].getText()).toBe("Vodafone");
      })
    })
  });
});
