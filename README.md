### Unit Tests

The "Angular way" of separating controller from the view, makes it easy to test code as it is being
developed. If our controller is available on the global namespace then we could simply instantiate it
with a mock `scope` object.

```js
describe('PhoneListCtrl', function(){

  it('should create "phones" model with 3 phones', function() {
    var scope = {},
        ctrl = new PhoneListCtrl(scope);

    expect(scope.phones.length).toBe(3);
  });

});
```

The test instantiates `PhoneListCtrl` and verifies that the phones array property on the scope
contains three records. This example demonstrates how easy it is to create a unit test for code in
Angular. Since testing is such a critical part of software development, we make it easy to create
tests in Angular so that developers are encouraged to write them.

### Testing non-Global Controllers

In practice, you will not want to have your controller functions in the global namespace.  Instead,
you can see that we have registered it via an anonymous constructor function on the `phonecatApp`
module.

In this case Angular provides a service, `$controller`, which will retrieve your controller by name. Take a loot at 
how it is done in **controllersSpec.js**.

1. Before each test we tell Angular to load the `phonecatApp` module.
2. We ask Angular to `inject` the `$controller` service into our test function
3. We use `$controller` to create an instance of the `PhoneListCtrl`
4. With this instance, we verify that the phones array property on the scope contains three records.