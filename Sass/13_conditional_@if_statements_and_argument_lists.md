# Conditional @if Statements and Argument Lists
---

Argument lists allow us to create mixins that take any number of values.


```
@mixin break($args...) {		// We add a argument list with the ... (one definite + optionals)
    @if length($args) == 1 {	// If the length of args is 1 use min width and first argument only.
	@media (min-width: nth($args, 1)) {  // nth() we specify we want the first argument to be length
	    @content;
	}
    }

    @if length($args) == 2 {	// If the length of args is 2 use arg one for min and arg 2 for max width
	@media (min-width: nth($args, 1))
	and (max-width: nth($args, 2)) {
	    @content;
	}
    }
}
```

So now our mixin for media query break points can be implemented in two different fashions depending on  our needs because of the if logic added to our styles.

We could have also made an if/else statement that would have a bit of different logic, but can accomplish the same results:

```
@mixin break($args...) {
    @if length($args) == 1 {
	@media (min-width: nth($args, 1)) {
	    @content;
	}
    } @else {
	@media (min-width: nth($args, 1))
	and (max-width: nth($args, 2)) {
	    @content;
	}
    }
}
```



