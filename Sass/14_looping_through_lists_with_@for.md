# Looping Through Lists with @for
---

_Loops_ are another type of control structure that work particularly well with _lists_. The syntax for these for loops are quite different than Javascript but are formatted in a particular way. 

keyword	| internal   | fm | a | to  | b
`@for $someInternalVar from 1 through length($someList)`

```
$color-headlines: $blue, $purple, $green, $red, $orange, $yellow;

@for $item from 1 through length($color-headlines) {	// iterate over each list item from 1 to end
    h#{$item} {		// Use #{} as a placeholder for $item number (i.e h3)
	color: nth($color-headlines, $item);	// set color to the current $item in loop
    }
}
```

> **Note**: Read the documentation to find more info about @for and its counter-part @while.
