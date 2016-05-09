# Using the @content Container
---

When you call a mixin, it is possible to call code inside of that mixin. This is made possible with the _@content_ container, which allows for us to stick css styles in our mixins dynamically.

Let's write a mixin for a media query that we can reuse throughout our stylesheet:

```
@mixin break($length) {
    @media (min-width: $length) {
	@content;	// Asking media query to take in some content via content directiive
    }
}


// So now we can re-use this media-query mixin as much as we want and add any styles we want
// in place of the @content keyword

.branding {
    float: left;
    background-color: $blue;
    @include break(1000px) {	// This sets the media query to change the bgcolor when less than 1000px
	background-color: $red;	// We can define any styles to be filled into the mixin on the spot.
    }
}
```

The @content container is a powerful method that we can use to create really flexible mixins.
