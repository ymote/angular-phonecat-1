### The **index.html**

**`ng-app` directive:**

          <html ng-app>

  The `ng-app` attribute represents an Angular directive named `ngApp` (Angular uses
  `spinal-case` for its custom attributes and `camelCase` for the corresponding directives
  which implement them).
  This directive is used to flag the html element that Angular should consider to be the root element
  of our application.
  This gives application developers the freedom to tell Angular if the entire html page or only a
  portion of it should be treated as the Angular application.

**AngularJS script tag:**

          <script src="lib/angular.js"></script>

  This code include the `angular.js` script which registers a callback that will be executed by the
browser when the containing HTML page is fully downloaded. When the callback is executed, Angular
looks for the {@link ng.directive:ngApp ngApp} directive. If
Angular finds the directive, it will bootstrap the application with the root of the application DOM
being the element on which the `ngApp` directive was defined.

**Double-curly binding with an expression:**

          Nothing here {{'yet' + '!'}}

  This line demonstrates two core features of Angular's templating capabilities:

    * a binding, denoted by double-curlies `{{ }}`
    * a simple expression `'yet' + '!'` used in this binding.

  The binding tells Angular that it should evaluate an expression and insert the result into the
  DOM in place of the binding. Rather than a one-time insert, as we'll see in the next steps, a
  binding will result in efficient continuous updates whenever the result of the expression
  evaluation changes.

  {@link guide/expression Angular expression} is a JavaScript-like code snippet that is
  evaluated by Angular in the context of the current model scope, rather than within the scope of
  the global context (`window`).

  As expected, once this template is processed by Angular, the html page contains the text:
  "Nothing here yet!".
