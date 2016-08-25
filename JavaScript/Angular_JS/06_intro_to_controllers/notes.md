* What is $scope?

**$scope** is an object that Angular generates when a controller is instantiated. This creates a new execution context for the scope of the values within a controller.

* What are Angular modules? What's the syntax for defining a module?

Angular modules are used to define an app and import dependencies into an app. They allow us to add controller logic and more in javascript code. The syntax for defining a module is:

`var app = angular.module("someApp", []);`

* Why do we pass in $scope as an argument to controller functions?

By passing **$scope** into as an argument to the controller functions we can then set values to it, which can sync our model and our view and add buisness logic.

* In Express, what are Angular controllers most analogous to?

Angular controllers are most similar to routes in Express, in that routes are what sits between the view and our model (the database).
