Whenever we add a new feature, we should always write a test script to test it. 
The TDD (Test Driven Development) approach makes our program more robust.

The unit test needs to verify that the default ordering property is set.

We used Jasmine's API to extract the controller construction into a `beforeEach` block, which is
shared by all tests in the parent `describe` block.

Before the execution of every `it()` block, we load necessary modules --  our main module `phonecatApp`, 
and the **PhoneListCtrl** controller. This makes sure we set the correct context to run test. 

We also need to pass in an empty Javascript object to simulate the `scope`. Notice we are not use Angular's 
**scope** because we want to test our code. 

In our controller code, We add two attributes -- `phones`, and `age` to the `scope` in **PhoneListCtrl**. 
So to test the controller, we need to check the existence of these variables. 

If the controller behaves as we expected, our empty `scope` object should now have two variables. And we can use 
Jasmine syntax to check them.

