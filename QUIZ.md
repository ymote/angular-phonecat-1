**1.** Remove the `$scope.orderProp` in **PhoneListCtrl**, you will see an empty option in the dropdown list, and the order is the same as order in `$scope.phones`.

**2.** Set `orderProp` to `name`. This will order phones by their name. Also in **index.html** (line 29), add binding to the `orderProp` to show 
its value.