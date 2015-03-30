Enough of building an app with three phones in a hard-coded dataset! Let's fetch a larger dataset
from our server using one of Angular's built-in <a href="https://docs.angularjs.org/guide/services" target="_blank">services</a> 
called <a href="https://docs.angularjs.org/api/ng/service/$http" target="_blank">$http</a>. We will use Angular's 
<a href="https://docs.angularjs.org/guide/di" target="_blank">dependency injection</a> 
to provide the service to the **PhoneListCtrl** controller.

There is now a list of 20 phones, loaded from the server.

### Data
The `phones.json` file is a dataset that contains a larger list of phones stored in the JSON format.

### $http

We'll use Angular's `$http` service in our controller to make an HTTP
request to fetch the data in the `phones.json` file. `$http` is just
one of several built-in **services** that handle common operations
in web apps. Angular injects these services for you where you need them.

Services are managed by Angular's DI subsystem. Dependency injection
helps to make your web apps both well-structured (e.g., separate components for presentation, data,
and control) and loosely coupled (dependencies between components are not resolved by the
components themselves, but by the DI subsystem).

`$http` makes an HTTP GET request, asking for `phones/phones.json` (the url is
relative to our `index.html` file). The server responds by providing the data in the json file.
(The response might just as well have been dynamically generated by a backend server. To the
browser and our app they both look the same. For the sake of simplicity we used a json file in this
tutorial.)

### Promise

The `$http` service returns a <a href="https://docs.angularjs.org/api/ng/service/$q" target="_blank">promise</a> object with a `success`
method. We call this method to handle the asynchronous response and assign the phone data to the
scope controlled by this controller, as a model called `phones`. Notice that Angular detected the
json response and parsed it for us!

To use a service in Angular, you simply declare the names of the dependencies you need as arguments
to the controller's constructor function, as follows:

    phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {...}

Angular's dependency injector provides services to your controller when the controller is being
constructed. The dependency injector also takes care of creating any transitive dependencies the
service may have (services often depend upon other services).
