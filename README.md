### Custom Filter

In order to create a new filter, you are going to create a `phonecatFilters` module and register your custom filter with this module (**filters.js**). 

The name of our filter is `"checkmark"`. The input evaluates to either true or false, and we return one of 
the two unicode characters we have chosen to represent true `(\u2713 -> ✓)` or false `(\u2718 -> ✘)`.

Now that our filter is ready, we need to register the `phonecatFilters` module as a dependency for our main phonecatApp module (line 8 in **app.js**). 

### Template

The syntax for using filters in Angular templates is as follows:

``` {{ expression | filter }} ```

Take a look at **phone-detail.html** on how it is used.

We can use filters in any templates to format contents. The great thing about it is, if at a later time we want to change the look of content, 
we only need to change code in the `phonecatFilters`, and it is automatically applied to different templates.
