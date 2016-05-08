# Creating Basic Mixins
---

Mixins are javascript-like functions that allow for us to keep things DRY while creating styles for our pages.

First off, we'll create a partial called *_mixins.scss* that will be loaded into our *style.scss* file.

```
@import "variables";
@import "normalize";
@import "mixins"; 	/* Mixin module to load mixins */
@import "base";

@import "modules/backgrounds";	/* Styles to format an div for a background image */
@import "modules/media";
```

Within the *_mixin.scss*, we can define our mixins by declaring with the '@mixin' keyword followed by the name for our mixin and a set of parameters (in parens) and a block where the mixin body can go:

```
/* We create a mixin that takes in an image as a parameter and sets up all the styles for that
   background image to be a full-width styled background */
				/* (100% of viewport height) */
@mixin backImage($image,
    $height: 100vh,
    $bgPos: center center) {	/* We are setting a default value for the height and bgPos params */
   background: linear-gradient( to bottom,
    rgba(0, 0, 0 ,0),
    rgba(0, 0, 0, 0.6)),	/* Setting up linear gradient on background-image to separate fg text */
    url($image);
   background-repeat: no-repeat;
   background-position: $bgPos;
   background-size: cover;
   height: $height;
}
```

So now if we head to another partial where we might use this, we can invoke and call our mixin by using '@include' followed by the name of the mixin and the necessary parameters:

```
.some-class {
    @include backImage('./path/to/image.jpeg', 600px);	/* We call the mixin passing in 2 / 3 param */
}
```

> **Note**: It is important to note that the image being referenced should be **relative to the final style.css file**.
