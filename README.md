In this exercise, we change the way our app fetches data. We define a custom service that represents a 
<a href="http://en.wikipedia.org/wiki/Representational_State_Transfer" target="_blank">RESTful</a> client. 
Using this client we can make requests to the server for data in an easier way, without having to deal with the lower-level `$http`
API, HTTP methods and URLs.

The RESTful functionality is provided by Angular in the `ngResource` module.

### Service

We create our own service to provide access to the phone data on the server **app/js/services.js**

We used the module API to register a custom service using a factory function. We passed in the name of the service - 'Phone' - 
and the factory function. The factory function is similar to a controller's constructor in that both can declare dependencies to be 
injected via function arguments. The Phone service declared a dependency on the $resource service.

The `$resource` service makes it easy to create a RESTful client with just a few lines of code. This client can then be 
used in our application, instead of the lower-level `$http` service.

### Controller

We simplified our sub-controllers (**PhoneListCtrl** and **PhoneDetailCtrl**) by factoring out the lower-level $http service, 
replacing it with a new service called `Phone`. Angular's `$resource` service is easier to use than $http for interacting with data sources 
exposed as RESTful resources. It is also easier now to understand what the code in our controllers is doing.

Now we query for all phones use the simple statement

```
$scope.phones = Phone.query();
```

An important thing to notice in the code above is that we don't pass any callback functions when invoking methods of our `Phone` service. 
Although it looks as if the result were returned synchronously, that is not the case at all. 

What is returned synchronously is a "future" — an object, which will be filled with data when the XHR response returns. Because of the 
data-binding in Angular, we can use this future and bind it to our template. Then, when the data arrives, 
the view will automatically update.

Sometimes, relying on the future object and data-binding alone is not sufficient to do everything we require, so in these cases, 
we can add a callback to process the server response. The **PhoneDetailCtrl** controller illustrates this by setting the `mainImageUrl` 
in a callback.