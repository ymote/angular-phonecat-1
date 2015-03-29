Fill in the `it` block on line 30 of ***scenarios.js***. There is a `<div>` with id `status` on page. 
We want to show `Current filter:` plus the `query` value in the `<div>`. Write end to end test code to test it.

Specifically:

**1.** From line 35 in ***scenarios.js****, use `by.css` to find the `<div>` with id `status`. 
`by.css` let us to select DOM element with CSS selector. Please check protractor's apis for its usage.

**2.** On line 39-40, we want to clear query value and input `nexus`. Follow the implementation in the previous `it` block.

**3.** We also need to change ***index.htm*** to let the test pass. On line 24, add `Current filter:`  as well as the data binding to `query`.