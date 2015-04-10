In addition to phones.json, the app/phones/ directory also contains one JSON file for each phone. 
Take a look at ***nexus-s.json***.

### Controller

We'll expand the **PhoneDetailCtrl** by using the **$http** service to fetch the JSON files. This works the same way as the phone list controller. 
To construct the URL for the HTTP request, we use `$routeParams.phoneId` extracted from the current route by the $route service.

### View

In ***phone-detail.html***, the TBD placeholder line has been replaced with lists and bindings that comprise the phone details. 
Note where we use the Angular {{expression}} markup and ngRepeat to project phone data from our model into the view.