# Nesting Your Styles
---

Nesting allows you to put css rules inside of other rules which allows for styles to be easily found.

```
$color-item-border: $red;
$color-media-head:  $blue;

.media {
  margin: 0;
  padding: 0;
  list-style: none;
    
    /* only elements with the class .item that are nested within the .media class
	will recieve these style */

  .item { 			/* would be the same as .media .item
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    border-top: 1px dotted $color-item-border; /* Set border top to variable value */
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

  img {
    float: left;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: $color-main;
  }
}
```

In general you don't want to nest things too deep or the rules that Sass will generate will be too unwieldly.

> **Note**: A good practice is to go no lower than 3 or 4 levels deep.
