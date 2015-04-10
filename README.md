We wrote a new unit test that is similar to the one we wrote for the **PhoneListCtrl** controller in Chpater 5.

In ***controllerSpec.js***, we mock `$http`'s GET method (line 41). 

To mock http request, we assume there is a file `phones/xyz.json`, its content (`respond`) is `{name: 'phone xyz'}`. Notice we 
are only mocking the request, not sending actual http request. 

On line 50, we are tesing case where the request has not sent. So the `scope.phone` should be undefined. The key to test `$http` is 
the `$httpBackend.flush()` method, which triggers our mock request. So on line 53, we can test the request output.

This is the common flow of unit testing http request. The key is to mock the request and response result.