In this chapter, we will add a feature to let users control the order of the items in the phone
list. The dynamic ordering is implemented by creating a new model property, wiring it together with
the repeater, and letting the data binding magic do the rest of the work.

### Feature

We added a `<select>` html element, so that our users can pick from the two provided sorting options.

<img class="diagram" src="img/tutorial/tutorial_04.png">

Whenever the model changes (for example because a user changes the order with the select drop down menu), Angular's
data-binding will cause the view to automatically update. No bloated DOM manipulation code is
necessary!

### Two-way data binding

Notice that when the app is loaded in the browser, "Newest" is selected in the drop down menu. 
This is because we set `orderProp` to `'age'` in the controller. So the binding works in the direction from our model to the UI. 
Now if you select "Alphabetically" in the drop down menu, the model will be updated as well and the phones
will be reordered. That is the data-binding doing its job in the opposite direction — from the UI
to the model.