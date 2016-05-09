# Modifying Colors
---

Beyond simply assigning colors to variables, Sass allows us to do much more when working with a color. Things such as _lightening_, _darkening_, and _finding the compliment_ of a color:

```
.table {
    font-size: 1.5rem;
    text-align: left;
    width: 100%;

    caption {
	font-size: 2.5rem;
	text-align: left;
	padding-bottom: 5px;
    }

    > thead,
    > tbody,
    > tfoot {
	> tr {

	    &:nth-child(even) {
		background-color: transparentize($yellow, .8);	// Unlike lighten this make color blend

		&:hover {
		    background-color: opacify(transparentize($yellow, 0.8), 0.3); // Alters opacity
		}
	    }

	    > th,
	    > td {
		padding: 10px;
		border-bottom: 1px dotted $blue;
	    }
	}
    }

    > thead >tr {
	background-color: $blue;
	color: $color-backgrounds;
	&:hover {
	    background-color: complement($blue);	// Passing in a color we get its complement
	}
    }
}
```

> **Note**: There are tons of color functions in Sass availible. The best thing to do is experiment with some and try to see how they work and if they could be useful or not to your work-flow. These effects can be combined to make different functionalities. Keep in mind that not all color effects take just colors, but also different values as well.
