'use strict';

describe('PhoneCat App', function() {

  describe('Phone detail view', function() {

    beforeEach(function() {
       
    });

    it('should display nexus-s page', function() {
        
    });

    it('should swap main image if a thumbnail image is clicked on', function() {
        
        
    });
  });
});
@@@
prompt: Let's add e2e test
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 7:8
type: browser.get('app/index.html#/phones/nexus-s');
tooltip: {text: "simulate visiting detail page of nexus-s"}
moveTo: 11:8
type: expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
tooltip: {text: "use Protractor by.binding selector to get the content of {{phone.name}}"}
moveTo: 15:8
type: element(by.css('.phone-thumbs li:nth-child(3) img')).click();
tooltip: {text: "use Protractor CSS selector, selecting div with class 'phone-thumbs' > the 3rd list element > the img element, and click the img element", wait: 10000}
moveTo: 16:8
type: expect(element(by.css('img.phone')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);
tooltip: {text: "img.phone is the img element having css class 'phone', which is the main image. getAttribute('src') get the image path, use toMatch to check it contains 'img/phones/nexus-s.2.jpg'", wait: 10000}
