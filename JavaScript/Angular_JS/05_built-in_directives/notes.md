* What is the purpose of ng-init?

**ng-init** is used to initialize some key/value on $scope that exists, creating one if it doesn't. It can be used to set an initial value on a model from the view.

* Why use ng-src and ng-href?

Because the behavior of `{{ }}` expressions do not work well in `src` attributes in HTML, `ng-src` is used to set the source of a image tag dynamically. A similar situation is found when interacting with `href` attributes, thus the `ng-href` solves this problem.

* What are directives?

Directives are powerful ways in which we can tie in our controllers buiness logic from the Javascript code as well as add addtional logic on the view to update the model.

* Does ng-class require an object to be passed in?

No it does not.

* What order does an ng-repeat display items in?

By default ng-repeat displays items in ascending order, although this behavior is highly customizable and can easily be changed.

* How does ng-repeat handle duplicate data?

**ng-repeat** will throw an error if duplicates are found in the collection. To fix this issue it is recommended that you use `track by $index` to track the index of the collection and avoid duplication errors.
