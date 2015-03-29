In this chapter, we will add a feature to let users control the order of the items in the phone
list. The dynamic ordering is implemented by creating a new model property, wiring it together with
the repeater, and letting the data binding magic do the rest of the work.

###  index.html

1 First, we added a `<select>` html element named `orderProp`, so that our users can pick from the
two provided sorting options.

<img class="diagram" src="img/tutorial/tutorial_04.png">

2 We then chained the `filter` filter with <a href="https://docs.angularjs.org/api/ng/filter/orderBy" target="_blank">orderBy</a>
filter to further process the input into the repeater. `orderBy` is a filter that takes an input
array, copies it and reorders the copy which is then returned.

Angular creates a two way data-binding between the select element and the `orderProp` model.
`orderProp` is then used as the input for the `orderBy` filter.

As we discussed in the section about data-binding and the repeater in chapter 3, whenever the model
changes (for example because a user changes the order with the select drop down menu), Angular's
data-binding will cause the view to automatically update. No bloated DOM manipulation code is
necessary!

### Controller

1 We modified the `phones` model - the array of phones - and added an `age` property to each phone
record. This property is used to order phones by age.

2 We added a line to the controller that sets the default value of `orderProp` to `age`. If we had
not set a default value here, the `orderBy` filter would remain uninitialized until our
user picked an option from the drop down menu.

  This is a good time to talk about two-way data-binding. Notice that when the app is loaded in the
browser, "Newest" is selected in the drop down menu. This is because we set `orderProp` to `'age'`
in the controller. So the binding works in the direction from our model to the UI. Now if you
select "Alphabetically" in the drop down menu, the model will be updated as well and the phones
will be reordered. That is the data-binding doing its job in the opposite direction — from the UI
to the model.