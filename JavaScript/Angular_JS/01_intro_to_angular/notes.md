Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?

Some reasons to learn Angular over other JS frameworks is that it is extremely well documented, it is widely used thoughout the industry, it is truly an MVC framework, and it comes with wonderful built-in tools like unit testing (which can be huge for scalability).

People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?

1. Angular directives tend to be overly complicated in many ways like handling various scopes.
2. Angular can be very difficult to debug in certain ways when a developer doesn't realize that the reason something isn't firing is because the spelling changes back and forth to and from Kabob camelCase.
3. Angular can run a bit slow if there are any more than 2,000 active bindings on the page at one time.

Is Angular an MVC framework?

Yes, Angular is a client-side Model, View, and Controller. The Model and the View are extremely closesly tied (which is why wonderful things like two-way data-binding exists). The Controller is really used as the glue that ties the two together. As one unit, the Angular framework alot of fantastic things you want out of an MVC.

Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?

The *ng-app* directive is the easiest, most convenient way to 'auto bootstrap' an Angular app in an html document. The rules are that you can only use ng-app once per document, otherwise the one closest to the root would be chosen. Generally you want to keep the ng-app directive on a key root node element in your html (like `<body>` or `<head>`). The 'ng' stands for Angular and all the directives that ship with Angular have that prefix.

