# Working with Math Operations
---

Math operations are one of the more powerful utilities that Sass enables us to use on our styles. Any typical Math operation will work on styles, even converting pixels, ems, and more.

```
// Create an image grid mixin
@mixin imagegrid($qty, $margin) {			// Image takes amt of cols and margin between img
    width: ((100% - (($qty - 1) * $margin)) / $qty);	// ((Width of container) - ((amt of elements
							// minus 1 because now last item only needs
							// left margin * margin amt)) / Amount of cols)
    &:nth-child(n) {
	margin-right: $margin;
	margin-bottom: $margin;
    }
    &:nth-child(#{$qty}n) {	// #{} allows for us to insert a varible (thus we are gettin last item)
	margin-right: 0;
	margin-bottom: 0;
    }
}
```

> **Note**: It is important to note that math operations (especially -) should be given space and not butted up against styles because css does use kabob-case in its syntax. Also note that the ${} template string works in Sass to allow for a variable to be inserted into a pseudo selector like :nth-child.

So now applying this mixin into our styles we can pass in our given column count and margin amount and all the math will be taken care of for us:

```
.grid {
    @include clearfix;	// We include a clearfix because the children will float left
    .item {
	float: left;
	@include imagegrid(3, 2%);	// Add our imagegrid mixin, passing in params
    }
    img {
	display: block;
	border-radius: 10px;
	max-width: 100%;
    }
}
```
