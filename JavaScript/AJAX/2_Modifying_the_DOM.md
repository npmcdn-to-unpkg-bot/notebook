# Modifying the DOM

## Updating the DOM with getElementById

Building off of the previous section, we can modify elements within our HTML document with _getElementById_ and use it in conjunction with AJAX:

```javascript
var request;

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  // Default fallback to ActiveXObject
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "/path/data.txt");

request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    // Grab element with getElementById
    var elt = document.getElementById("myElement");
    // Set the innerHTML to the AJAX responseText
    elt.innerHTML = request.responseText;
  }
}
request.send();
```

---


## Modifying Elements with getElementsByTagName

Similarly to the example above, we can use _getElementsByTagName_ to select groups of elements. This provides an array of elements:


```javascript
var request;

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  // Default fallback to ActiveXObject
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "/path/data.txt");

request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    // Grab every <li> and place in array
    var liElt = document.getElementsByTagName("li");
    // Set the 3rd li elmt of the array to the AJAX responseText
    liElt[2].innerHTML = request.responseText;
  }
}
request.send();
```

> **Note:** Keep in mind that _getElementsByTagName_ places all matched elements into a single array, regardless of how they are nested, parents, and siblings.

If we had two unordered lists we could first select the list we want, followed by selecting all of its list items:

```javascript
var request;

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  // Default fallback to ActiveXObject
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "/path/data.txt");

request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    // Grab second matched <ul>
    // Select all of its child <li>
    var liElts = document.getElementsByTagName("ul")[1].getElementsByTagName("li");
    // Set the 3rd li elmt of the array to the AJAX responseText
    liElts[2].innerHTML = request.responseText;
  }
}
request.send();
```

---


## Parsing XML Using AJAX

AJAX was originally designed to read data stored in XML, _Extensible Markup Language_. The XHR object comes built-in attribute called _responseXML_, similar to the responseText property except that it converts the data into an object that you can manipulate through javascript.

Every element inside an XML structure is considered a Node (similar to HTML). Elements inside elements, including text inside elements is also considered a Node:

```xml
<persons>
  <person>
    <name>Bill Withers</name>
    <age>77</age>
    <birthdate>July 4, 1938</birthdate>
  </person>
  <person>
    <name>Bill Clinton</name>
    <age>69</age>
    <birthdate>August 19, 1946</birthdate>
  </person>
</persons>
```

Parsing this xml would look like this:


```javascript
var request;

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  // Default fallback to ActiveXObject
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

// Make GET request for data in XML format
request.open("GET", "/path/data.xml");

request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    // Parsing XML by tagName
    // nodeValue must be used to get the value of the Node (tag) w/out ""
    console.log(request.responseXML.getElementsByTagName("name")[0].firstChild.nodeValue)
    // Logs -> Bill Withers
  }
}
request.send();
```


---


## Reading JSON Files

JSON, JavaScript Object Notation, is an easy format for JavaScript to parse and therefore generally makes a better choice than XML.

A JSON structure similar to that of a JavaScript object literal. Here is an example of JSON data:

```json
[
  {
    "name": "Bill Withers",
    "age": "77",
    "birthdate": "July 4, 1938"
  },
  {
    "name":"Bill Clinton",
    "age": "69",
    "birthdate": "August 19, 1946"
  }
]
```

Here is how we parse and process the JSON:

```javascript
var request;

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  // Default fallback to ActiveXObject
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

// Make GET request for data in JSON format
request.open("GET", "/path/data.json");

request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    // Set var to the parsed responseText
    // JSON.parse() parses JSON to JS object
    var persons = JSON.parse(request.responseText);
    // Get the second object from the array and get the name and birthdate
    console.log(persons[1].name + " was born: " + person[1].birthdate);
    // Logs -> Bill Clinton was born: August 19, 1946
  }
}
request.send();
```

> **Note:** _JSON.parse()_ is not available in some older browsers. You can use _eval()_ (which has security issues), write your own parser, or use JQuery or an existing library.


---


## Using Event-Driven AJAX

We can use most any event listener in JavaScript in conjunction with AJAX to make event-driven requests to a server. One thing to keep in mind is that by using Closures we can prevent loaded script tags from immediate execution when our html page loads.

Here is an example of event triggered AJAX:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Event-Driven AJAX</title>
  </head>
  <body>
    <button id="trigger"></button>
    <script type="text/javascript" src="./script.js"></script>
  </body>
</html>
```

And in our script.js file:

```javascript
// Assign our selected <button> to a variable
var trigger = document.getElementById("trigger");
// Add a listener for click events to trigger AJAX request
trigger.addEventListener("click", function() {

  var request;

  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    // Default fallback to ActiveXObject
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  // Make GET request for data in JSON format
  request.open("GET", "/path/data.json");

  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      // Set var to the parsed responseText
      // JSON.parse() parses JSON to JS object
      var persons = JSON.parse(request.responseText);
      // Get the second object from the array and get the name and birthdate
      console.log(persons[1].name + " was born: " + person[1].birthdate);
      // Logs -> Bill Clinton was born: August 19, 1946
    }
  }
  request.send();

});
```
