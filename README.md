To automatically verify that everything is wired properly, we wrote end-to-end tests that 
navigate to various URLs and verify that the correct view was rendered.

In ***scenarios.js*** now test follows.

First we simulate visit `app/index.html`. From our routing, we know it should point to the `/phone` url. 
We can use `browser.getLocaltionAbsUrl` to test it.

Now we have two test block -- one for all phones' page and another for phone detail page.

To test the phone detail page (the `describe` block on line 76), we jump to `nexus-s`'s page and test DOM elemets in view. 

Th `{{phoneId}}` should display `nexus-s`, we can use the `by.binding` api call in `protractor` to extract the value to verify it.