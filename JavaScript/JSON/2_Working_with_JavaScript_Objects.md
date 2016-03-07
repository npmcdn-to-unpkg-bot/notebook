# Working with JavaScript Objects

## Debugging JavaScript Objects in Browser

When a script has been run in the browser, the developer tools are a great way to debug and play around with JavaScript objects and values. In the _Console_ tab, you can modify (temporarily) and view any value by using the variable name.

Using dot notation or bracket notation, we can access values from within nested objects and arrays.

> **Note:** Keep in mind that JavaScript does not maintain the order of objects, only in arrays.

---

## Modifying Array Objects in JavaScript

When modifying Arrays in JavaScript, keep in mind that the _delete()_ function is not a good method. It is better to use _splice()_, _pop()_, _push()_, or any of the other built-in Array methods that add or remove elements.

---

## Looping Through JavaScript Objects

In ES5 there are two main ways to loop through an object, _for loop_ and the _for in loop_:

```javascript
var info = {
  "name": "Bill",
  "dob": "10-19-97",
  "courses": [
    "Math 101",
    "Science 201",
    "English 305"
  ],
  "links": {
    "blog": "http://blog.com",
    "youtube": "http://youtube.com",
    "podcast": "http://podcast.com",
    "twitter": "http://twitter.com",
  }
}

for (key in info.links) {
  // Always first check if libraries or anyone
  // else added properties to object/array
  if (info.links.hasOwnProperty(key)) {
    // Log the value at the key
    console.log("Link: " + info.links[key])
  }
}
// Output:
// http://twitter.com
// http://blog.com
// http://podcast.com
// http://youtube.com
```

> **Note:** Keep in mind that the _for in_ statement does not maintain a perfect order when outputting.

---

## Accessing Objects in Arrays

Alternatively, if we want to maintain order within our object, we would simply break nested key/value pairs into their own objects and place them in an array:

```javascript
var info = {
  "name": "Bill",
  "dob": "10-19-97",
  "courses": [
    "Math 101",
    "Science 201",
    "English 305"
  ],
  "links": [
    {"blog": "http://blog.com"},
    {"youtube": "http://youtube.com"},
    {"podcast": "http://podcast.com"},
    {"twitter": "http://twitter.com"},
  ]
}

for (var i = 0; i < info.links.length; i++) {
  for (key in info.links[i]) {
    if (info.links[i].hasOwnProperty(key)) {
      console.log(info.links[i][key]);
    }
  } // For each object
} // For each array element

// Output (In correct order):
// http://blog.com
// http://youtube.com
// http://podcast.com
// http://twitter.com
```
