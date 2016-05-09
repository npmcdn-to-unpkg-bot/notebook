# Going Through a List with @each
---

Lists become more powerful when you can use them to go through a series of values. When you don't know how many items are in a list you can use the _@each_ statement.

```
// First we set up our variable that will map to eachother
$color-btn-names: 'default', 'hot', 'cool';
$color-btn-values: $color-main, $red, $blue;

// Then we set up our @each statement to iterate over $color-btn-names
@each $name in $color-btn-names {
    // We set up $i as an index that is locked to the number index that $name is in $color-btn-names
    $i: index($color-btn-names, $name);
    // Template string sets each button class name up properly
    .btn-#{$name} {
	// We extend the hidden class for btn
	@extend %btn;
	// We set the background-color to the nth() value ($i) in the $color-btn-values list
	background-color: nth($color-btn-values, $i);
    }
}
```

> **Note**: You can think of @each alot like a for in loop in Javascript that will just iterate over an entire list from where specified.
