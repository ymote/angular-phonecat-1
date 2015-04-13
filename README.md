Now it's time to make the web page dynamic — with AngularJS.

### View and Template

In Angular, the __view__ is a projection of the model through the HTML __template__. This means that
whenever the model changes, Angular refreshes the appropriate binding points, which updates the
view.

We have added a new directive, called `ng-controller`, which attaches a `PhoneListCtrl`
__controller__ to the &lt;body&gt; tag.

![mvc](http://live4code.github.io/angular-phonecat/tutorial_02.png "MVC in Angular")

### Model and Controller

The data __model__ (a simple array  of phones in object literal notation) is now instantiated within
the `PhoneListCtrl` __controller__. The __controller__ is simply a constructor function that takes a
`$scope` parameter.

Although the controller is not yet doing very much, it plays a crucial role. By providing context
for our data model, the controller allows us to establish data-binding between
the model and the view. We connected the dots between the presentation, data, and logic components
as follows:

### Scope

The concept of a scope in Angular is crucial. A scope can be seen as the glue which allows the
template, model and controller to work together. Angular uses scopes, along with the information
contained in the template, data model, and controller, to keep models and views separate, but in
sync. Any changes made to the model are reflected in the view; any changes that occur in the view
are reflected in the model.