We added a new end-to-end test to verify that the app is generating correct links to the phone views that we will implement in the upcoming steps.

We add more code into ***scenarios.js***, this makes sure the new feature added will not break previous code.

The added code is in line 68-77. First we enter `nexus` in input box and make sure there is only one phone on page.

Now we use `protrator` to simulate clicking link event. To test the browser redirect event, we use `browser.getLocationAbsUrl` to get current url. 

We can check path (content after `#` in url) to verify redirecting works.
