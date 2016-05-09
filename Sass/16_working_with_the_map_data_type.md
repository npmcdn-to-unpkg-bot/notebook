# Working with the Map Data Type
---

A _map_ is much like an associative array or an object in Javascript, that allows for key, value pairs to exist in a single data structure. It looks alot like a variable assignment in Sass, and uses parentheses rather than curly braces for surrounding the structure.

```
// First we set up our Map with the names and color values
$color-btn: (
    default: $color-main,
    hot: $red,
    cool: $blue,
    awesome: $purple
);
// Then we iterate over the map, creating temporary variables @key, @value
@each $key, $value in $color-btn {
    // We append the key name to the class
    .btn-#{$key} {
	@extend %btn;
	// The value of the background color is the value of the current iterated $value
	background-color: $value;
    }
}
```

You can tell how much cleaner this syntax is and convenient, especially for adding additional styles at a later time.

> **Note**: The keys can just be the names, Sass can figure out the rest.
