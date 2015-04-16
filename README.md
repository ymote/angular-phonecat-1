We add a clickable phone image swapper to the phone details page to demostrate hwo to handler events in Angular.

### Controller 

In the **PhoneDetailCtrl** controller, we created the `mainImageUrl` model property and set its default value to the first phone image URL.

We also created a `setImage` event handler function that will change the value of `mainImageUrl`. The handler function is just a function bind to 
**$scope**, so the view knows the existence of it and can directly call the method in template.

### View

We bound the `ngSrc` directive of the large image to the mainImageUrl property.

We also registered an `ngClick` handler with thumbnail images. When a user clicks on one of the thumbnail images, the handler will use the setImage 
event handler function to change the value of the mainImageUrl property to the URL of the thumbnail image.
