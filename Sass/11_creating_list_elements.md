# Creating List Elements
---

Sass has a special version of arrays called _lists_, and they are unlike most array-like structures. Similar to the short-hand formatting found in alot of css styles, lists are either separated by commas or by spaces. Sass is quite liberal about using special types, meaning you don't have to use quotations unless you are using a special character (spaces included).

```
$roundness: 20px 0 20px 0;	// This variable is essentially a list and can be re-used

img {
    display: block;
    border-radius: $roundness;
    max-width: 100px;
}
```

We can use Sass' special function _nth()_ which allows for us to specify which item in the list we want to use. For example: `nth($roundness, 1)` grabs the first item from the list to use.

> **Note**: Keep in mind that unlike Javascript lists are not zero indexed, meaning 1 means first item in the list.


```
$roundness: 20px 0 20px 0;

img {
    display: block;
    border-radius: nth($roundness, 1);	// Sets border-radius to 20px all around (1st value in variable)
    max-width: 100px;
}
```

> **Note**: It is important to note that spaces and commas should be used accordingly based on how the style should normally be written. (i.e font uses commas, where border uses spaces)

There are tons more about lists and the nth() method in the documentation, so it is best to read up and find what functionalities work best for the task at hand.
