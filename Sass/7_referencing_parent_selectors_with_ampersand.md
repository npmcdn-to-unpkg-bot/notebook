# Referencing Parent Selectors with &
---

Sass uses the `&` character as a special character to refer to the parent of an element.

```
$color-item-border: $red;
$color-media-head: $blue;

.media {
    margin: 0;
    padding: 0;
    list-style: none;

    .item {
	padding-bottom: 20px;
	border-top: 1px dotted $color-item-border;
	padding-top: 10px;
				    /* Essentially the & is referring to the .item and specifying that
				       on :hover to change the background styles and also the style for
				       the last of its type.
				    */
	&:hover {
	    background: $yellow;
	}

	&:last-of-type {
	    border-bottom: 1px dotted $color-item-border;
	}
    }

    .head {
	margin: 0;
	padding: 0;
	color: $color-media-head;
	font-size: 2rem;
    }

    p {
	margin: 0;
	font-size: 1.5rem;
    }

}
```

But let's say that we had an issue with our unordered list because we floated images, and wanted a clearfix after each list-item. Easy, just add a mixin:

This mixin will be able to be utilized anywhere we need to clear floats in our styles, and the best part is that we don't need to give each element an unnecessary extra class.

```
@mixin clearfix {
    &:before,
    &:after {
	content: "";
	display: table;
    }
    &:after {
	clear: both;
    }
}
```

Now by including this mixin in our list item styles, each list item will have a working clearfix dynamically created.

```
$color-item-border: $red;
$color-media-head: $blue;

.media {
    margin: 0;
    padding: 0;
    list-style: none;

    .item {
	padding-bottom: 20px;
	border-top: 1px dotted $color-item-border;
	padding-top: 10px;

	&:hover {
	    background: $yellow;
	}

	&:last-of-type {
	    border-bottom: 1px dotted $color-item-border;
	}

	@include clearfix;	/* No necessary parameters need to be passed.
    }

    .head {
	margin: 0;
	padding: 0;
	color: $color-media-head;
	font-size: 2rem;
    }

    p {
	margin: 0;
	font-size: 1.5rem;
    }
}
```
