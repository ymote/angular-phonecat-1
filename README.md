Now we turn our attention to end to end test.

The first thing in e2e test is to simulate opening the webpage. We use `browser.get` to do this.

E2E test is all about simulate user behavior on our web page. To this end, **Protractor** provide various way for us to 
write code to select DOM elements on page.

Our test logic is as follows:

1. We make sure there are there phones on our imagiary web page.
2. We write code to input keyword in the search box, and use protractor's selector api to make sure filtering works.
3. We simulate the operation of change sort options in dropdown list and check the order of phones on page.


End to end test is about interacting with our web page and find out if it behaves as we expected. 