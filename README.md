We added a standard HTML `<input>` tag and used Angular's <a href="https://docs.angularjs.org/api/ng/filter/filter" target="_blank">$filter</a> 
function to process the input for the <a href="https://docs.angularjs.org/api/ng/directive/ngRepeat" target="_blank">ngRepeat</a> directive.

This lets a user enter search criteria and immediately see the effects of their search on the phone
list. This new code demonstrates the following:

1. Data-binding: This is one of the core features in Angular. When the page loads, Angular binds the
name of the input box to a variable of the same name in the data model and keeps the two in sync.

  In this code, the data that a user types into the input box (named __`query`__) is immediately
available as a filter input in the list repeater (`phone in phones | filter:`__`query`__). When
changes to the data model cause the repeater's input to change, the repeater efficiently updates
the DOM to reflect the current state of the model.

<img  class="diagram" src="img/tutorial/tutorial_03.png">

2. Use of the `filter` filter: The filter function uses the
`query` value to create a new array that contains only those records that match the `query`.

  `ngRepeat` automatically updates the view in response to the changing number of phones returned
by the `filter` filter. The process is completely transparent to the developer.