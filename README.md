Now it's time to make the web page dynamic — with AngularJS. We'll also add a test that verifies the
code for the controller we are going to add.

## View and Template

In Angular, the __view__ is a projection of the model through the HTML __template__. This means that
whenever the model changes, Angular refreshes the appropriate binding points, which updates the
view.

We replaced the hard-coded phone list with the {@link ng.directive:ngRepeat ngRepeat directive}
and two {@link guide/expression Angular expressions}:

* The `ng-repeat="phone in phones"` attribute in the `<li>` tag is an Angular repeater directive.
The repeater tells Angular to create a `<li>` element for each phone in the list using the `<li>`
tag as the template.
* The expressions wrapped in curly braces (`{{phone.name}}` and `{{phone.snippet}}`) will be replaced
by the value of the expressions.

We have added a new directive, called `ng-controller`, which attaches a `PhoneListCtrl`
__controller__ to the &lt;body&gt; tag.  At this point:

* The expressions in curly braces (`{{phone.name}}` and `{{phone.snippet}}` denote
bindings, which are referring to our application model, which is set up in our `PhoneListCtrl`
controller.

## Model and Controller

The data __model__ (a simple array  of phones in object literal notation) is now instantiated within
the `PhoneListCtrl` __controller__. The __controller__ is simply a constructor function that takes a
`$scope` parameter.

We declared a controller called `PhoneListCtrl` and registered it in an AngularJS
module, `phonecatApp`. Notice that our `ng-app` directive (on the `<html>` tag) now specifies the `phonecatApp`
module name as the module to load when bootstrapping the Angular application.

Although the controller is not yet doing very much, it plays a crucial role. By providing context
for our data model, the controller allows us to establish data-binding between
the model and the view. We connected the dots between the presentation, data, and logic components
as follows:

* The ngController directive, located on the `<body>` tag,
references the name of our controller, `PhoneListCtrl` (located in the JavaScript file
`controllers.js`).

* The `PhoneListCtrl` controller attaches the phone data to the `$scope` that was injected into our
controller function. This *scope* is a prototypical descendant of the *root scope* that was created
when the application was defined. This controller scope is available to all bindings located within
the `<body ng-controller="PhoneListCtrl">` tag.

### Scope

The concept of a scope in Angular is crucial. A scope can be seen as the glue which allows the
template, model and controller to work together. Angular uses scopes, along with the information
contained in the template, data model, and controller, to keep models and views separate, but in
sync. Any changes made to the model are reflected in the view; any changes that occur in the view
are reflected in the model.