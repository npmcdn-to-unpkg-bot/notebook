* What are Angular expressions? How do they compare to tags from templating engines you've used before?

Angular expressions are very similar to the tags in templating engines in that they allow you to plug data into to them from some model. Angular adds additional functionality and logic to expressions that allow for filtering and modifying the view (but best practice is to untouch any buisness logic).

* What happens when you write invalid code in an expression? What type of error do you get?

When you run invalid code in an expression you recieve not error or indication that the app did not register the expression. Angular leaves it up to you to debug and pin-point.

* What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.

Filters are a way in which Angular allows us to format our output for the View in a particualr manner. Some examples are: currency (for money and type of currency), number (for limiting the numbers on an integer), uppercase (converts text to uppercase), and decorate (used to decorate some text with a token or symbol).

* What's the syntax for filters?
* Can you use more than one filter?

Filters sit within the expression and are preceeded by a pipe character and the expression within braces. Here is the syntax for add multiple filters `{{ expression | filter | filter2 | ... }}`

* We'll soon see how to create custom filters. What is a use case for a custom filter?

Depending on the application custom filters might be handy for converting data that might be used in the buisness logic to a more readable format. An example of this could be printing a complex data structure into a readable format on the view.
