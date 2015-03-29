In Chapter 2, we learned how to write and run unit tests. Unit tests are perfect for testing
controllers and other components of our application written in JavaScript, but they can't easily
test DOM manipulation or the wiring of our application. For these, an end-to-end test is a much
better choice.

The search feature was fully implemented via templates and data-binding, so we'll write our first
end-to-end test, to verify that the feature works. 

Take a look at ***scenarios.js***, the syntax of this test looks very much like our controller unit test written with
Jasmine. The end-to-end test uses APIs of [Protractor](https://github.com/angular/protractor). Read
about the Protractor APIs at http://angular.github.io/protractor/#/api.

This test verifies that the search box and the repeater are correctly wired together. Notice how
easy it is to write end-to-end tests in Angular. Although this example is for a simple test, it
really is that easy to set up any functional, readable, end-to-end test.
