1. Use data binding to show `query` on line 24 of ***index.html***.

2. Add the `query` to page title.

  You might think it is as simple as ```<title>Google Phone Gallery: {{query}}</title>```
  
  Yet it does not work as the ng-model only works in the defined scope - `<body ng-controller="PhoneListCtrl">`.
  
  One way to solve this is the `ngBind` or `ngBindTemplate` directive:

  ``` <title ng-bind-template="Google Phone Gallery: {{query}}"></title>```

