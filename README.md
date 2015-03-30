Because we started using dependency injection and our controller has dependencies, constructing the
controller in our tests is a bit more complicated. We could use the `new` operator and provide the
constructor with some kind of fake `$http` implementation. However, Angular provides a mock `$http`
service that we can use in unit tests.  We configure "fake" responses to server requests by calling
methods on a service called `$httpBackend`.

Unit test on server response is quite complicated. We need to fake the responses as we are interested in 
our front-end logic to handle data. Also we don't have to hook into real system just for testing our code. 
