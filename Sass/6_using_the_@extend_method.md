# Using the @extend Method
---

An object oriented approach can be taken in Sass where classes can inherit or _extend_ from other classes, gaining the styles of the class and then building new ones upon them.

Let's say we have a class for styling a button, and we want every button to have that style, but they each have a unique flare to them.

```
$color-btn-text: $darkblue;
$color-btn-default: $color-main;
$color-btn-hot: $red;
$color-btn-cool: $blue;

%btn {				/* We define an invisible class that does't get rendered into css */
    display: inline-block;
    padding: 6px 12px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-family: $font-highlight;
    user-select: none;
    color: $color-btn-text;
}
				/* The three buttons below inherit styles from the invisible class
				   above and add unique styles to themselves */
.btn-default {
    @extend %btn;
    background: $color-btn-default;
}

.btn-hot {
    @extend %btn;
    background: $color-btn-hot;
}

.btn-cool {
    @extend %btn;
    background $color-btn-cool;
}
```

The code above uses the _@extends_ along with the _%class_ (invisible class) to allow for the three buttons to each get the same base styles as buttons, but add their own unique color styles.

This reduces the number of necessary classes our html button elements need.

`<button class="btn btn-hot"> => <button class="btn-hot">`

This style of inheritance can cut down a great deal of repition and allow for clear and concise styles within our project.
