#Shaping Up With Angular.js

###Core Angular Concepts

  * **Directives**: HTML annotations that trigger Javascript behaviors.

  * **Modules**: Where our application components live

  * **Controllers**: Where we add application behavior

  * **Expessions**: How values get displayed within the page.

  * **Filters**: Formats the result of a piped expression (may additionally use _options_).

####Directives

  * _ng-app_ - Attach the application module to the page

  * _ng-controller_ - Attach a controller function to the page

  * _ng-show/ng-hide_ - Display a section based on an expression

  * _ng-repeat_ - Repeat a section for each item in an array.

  * _ng-src_ - Load image asset from application controller.

  * _ng-click_ - Evaluates an expression when element clicked.

  * _ng-init_ - Allows the evaluation of an expression in the current scope. (may be used to set initial value)

  **Note**: Although it is great to use _ng-init_ for prototyping, but initialization and configuration should go inside a controller.

  * _ng-model_ - Binds the form element value to the property. Can be used with check boxes to set the value of a key/value pair to a boolean, or with radio buttons, setting the pair value to the select button value.

  * _ng-submit_ - Allows us to call a function when the form is submitted.

  * _ng-valid_/_ng-invalid_ - A class that is toggled on a form element when validation is occurring.

  * _ng-pristine_/_ng-dirty_- A class that is toggled when a form element has been modified from its initial state.

  * _ng-include_ - Used to insert a html snippet from another file. Expects a variable with the name of the file to include. To pass the name directly as a string use single quotes ('...').

  **Note**: It is much better in general to use custom directives as opposed to _ng-include_. See below for details.

####Filters

  * _date:'MM/dd/yyyy @ h:mma'_ - Formats value into a date string

  * _uppercase_ - Formats value into uppercase

  * _limitTo:3_ - Limits the number of items to 3 (used w/ _ng-repeat_)

  * _orderBy:'-price'_ - Will list by descending price (used w/ _ng-repeat_)

####Two-Way Data Binding
When expressions are re-evaluated every time a property changes.

For example: When _ng-click_ changes the value of _tab_, the _{{tab}}_ expression automatically gets updated.

####HTML5-based Type Validations
Web forms usually have rules around valid input:
  * Angular JS has built-in validations for common input types:

  `<input type="email" name="email">`

  `<input type="url" name="homepage">`

  `<input type="number" name="quantity">`
  (Can also define min and max with numbers)
  `min=1 max=10`

####Custom Directives
Custom directives allow for more expressive html. Where html would normally only illustrate structure of a page, custom directives allow for specific tag names that make a webpage more semantically clear. (i.e <p>This book is about...</p> vs. <synopsis></synopsis>)

Uses of Custom Directives:

  - Template-expanding Directives: Simply defines a custom tag or attribute that is expanded or replaced. (Much like _ng-include_ would). Also can include Controller logic if needed.

  - Expressing complex UI

  - Calling events and registering event handlers

  - Reusing common components.

Examples:

Element Directive (_restrict: 'E'_):

`<product-title></product-title>`

Attribute Directive (_restrict: 'A'_):

`<h3 product-title></h3>`

**Note**: Use Element Directives for UI Widgets and Attribute Directives for mixin behaviors... like a tooltip.

Custom Directive w/ built-in Controller and Alias:

`app.directive('productPanels', function() {
  return {
    restrict: 'E',
    templateUrl: 'product-panels.html',
    // Move the functionality of the controller into directive
    controller: function() {
      // Set tab's initial value to 1
      this.tab = 1;
      // This method will set this.tab to
      // whatever is set as its argument
      this.selectTab = function(setTab) {
        this.tab = setTab;
      };
      // This method returns a boolean regarding
      // whether a tab is selected or not
      this.isSelected = function(checkTab) {
        return this.tab === checkTab;
      };
    },
    // Specify Controller Alias
    controllerAs: 'panel'
  };
});`

##Chapter 5

###5.1 Dependencies and Services
For best organizational practice it is a good idea to logically break-up the application into modules that then are imported accordingly.

To do this we would simply create another application module with a closure and the _angular.module()_ providing it with the module name.

We would then place the name of the new module within the Dependencies array found as the second argument of the main application file. We then need to include the new .js file into the html file.

`// app.js                          *Dependencies*
var app = angular.module('store', ['store-products']);
// product.js
var app = angular.module('store-products', [ ]);
`

Best to split Modules around functionality:

 * app.js - top-level module attached via ng-app
 * products.js - all the functionality for products and **only** products.


###5.3 Services
Services allow for the application to pull data from an api rather than simply doing it all internally.

Sample Services Available:

  * Fetching JSON data from a web service with `$http`

  * Logging messages to the Javascript console with `$log`

  * Filter an array with `$filter`

#####$http
The _$http_ Service is how we make an async request to a server:

  `$http({ method: 'GET', url: '/products.json' });`

  or

  `$http.get('/product.json', { apiKey: 'myApiKey' });`

Both of these return a Promise object with _.success()_ and _.error()_

If we tell _$http_ to fetch JSON, the result will be automatically decoded into Javascript objects and arrays.

**How does a Controller use a Service?**

Dependency Injection:

For one service:

`//                             Service Name     Name as Arg
app.controller('SomeController', ['$http', function($http){

} ]);`

For multiple services:

`//                               Service Names             Names as Arg
app.controller('SomeController', ['$http', '$log', function($http, $log){

} ]);`

This is known as _Dependency Injection_ because upon initialization Angular injects the services required into the controller as arguments.

**Additional $http functionality**

In addition to _get()_ requests, _$http_ can _post()_, _put()_, and _delete()_:

`$http.post('/path/to/resource.json'. {param: 'value'});
$http.delete('/path/to/resource.json');
`

or any other HTTP method by using _config_ object:

`$http({ method: 'OPTIONS', url: '/path/to/resource' });
$http({ method: 'PATCH', url: '/path/to/resource.json' });
$http({ method: 'TRACE', url: '/path/to/resource.json' });
`
