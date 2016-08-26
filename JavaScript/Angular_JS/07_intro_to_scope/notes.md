# Intro to Scope

* What is $rootScope?

**$rootScope** is Angular's version of the global context. Properties on the $rootScope can be accessed anywhere with in an angular app. This, of course, is usually looked down up and pollution of the global namespace should be avoided.

* Explain how $scope is passed from a parent to child controller

**$scope** is passed from parent to child controller in that when a new $scope or instance of a controller is made within another, it will properties will first searched for on the most local $scope and work their way up the parents until one is found. This is the inheritance/prototypal nature of Angular and Javascript.

* List five built in directives that create their own scope

1. ng-if
2. ng-include
3. ng-repeat
4. ng-view
5. ng-switch

* "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean?

This has to do with the nature of Javascript and how it looks up properties that aren't immediately found on the current execution context. Only with reference types does Angular and Javascript look up toward the parent contexts for defined properties.
