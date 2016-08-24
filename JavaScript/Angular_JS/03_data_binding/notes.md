# Data Binding

* What does ng-model do?

The Angular directive ng-model is used predominently on the various types of input fields in an HTML document and they tie the values of the input to a specific $scope (creates one if it doesn't already exist) thus allowing the user to live update the page upon updating the value in the input field.

* What is "dirty checking"?

**Dirty Checking** has to do with Angular's digest cycle, or more specifically the iteration in which Angular loops over the application and updates all properties bound to $scope. The dirty checking occurs after an initial cycle, looping though again if any listener functions changed $scope. This cycle continues for a max of 10 cycles. It is best to minimize this action as it can be computationally expensive.

* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).

Using `ng-init` you can set an initial value on a model like so `<element ng-init="someModel='my initial value...'">`

* What are those {{ }} expressions? Are they Handlebars?

Those tokens are Angular's way of templating data. They are much like other templating languages such as Handlebars, but provide additional functionality i.e filters for things like currency.

* Explain what two-way data binding is.

The idea is that you are able to tightly bind the model and the view through the controller so that whenever the view is updated the model is immediately updated and vice versa. This is extremely powerful in that it provides a seamless user-experience while also making it easy for the develop to track and sync data.

* BONUS: Research the $digest loop

The **$digest** loop is a cycle that runs and keeps the **$scope** in check by calling event listeners when something on the a model is altered. It is essentially like the event loop in Javascript and handles asynchronous behaviors in angular that pertain to watching when data is changed.

