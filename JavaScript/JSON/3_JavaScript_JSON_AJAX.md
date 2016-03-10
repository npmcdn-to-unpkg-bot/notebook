# JavaScript, JSON, and AJAX

## Parsing JSON Data with AJAX

AJAX is used to dynamically load requested content into a web page. Most of the time data is sent and received in JSON format. Below is an example of making an AJAX asynchronous request to a server, parsing the returned data via _JSON.parse()_:

```javascript
// Create AJAX instance
var request = new XMLHttpRequest();
// Open asynchronous request provided METHOD and file path
request.open('GET', 'data.json');
// Listen for the readystate to change on the request
// This function will be triggered asynchronously
request.onreadystatechange = function() {
  // If response from serve is OK and readyState is complete
  if ((request.status === 200) && (request.readyState === 4)) {
    // Parse the response data
    var data = JSON.parse(request.responseText);
    // Log parsed data to console
    console.log(data);
  }
}

// Send request to server
request.send();
```

---


## Communicating Across Sites with JSONP

When working with AJAX you will sometimes request data from a server different from the one you are currently in, however, this can cause a problem due to same domain policies. This means that you can only request data from a site that is in the same place as the file you are requesting from.

The way around this is to implement JSONP (P for 'padding'). Setting a the json data as the parameter to a function

```json
dataHandler({
    "first-name": "Bill",
    "last-name": "Ryner",
    "podcast": "rynerhour",
    "links": [
      { "blog": "http://myblog.com" },
      { "facebook": "http://facebook.com/billryner" },
      { "twitter": "http://twitter.com/billryner" }
    ]
});
```

And define the function _dataHandler_ in our javascript file (removing _XMLHttpRequest_ code):

```javascript
function dataHandler(data) {
  console.log(data);
}
```

**We will now have to include the JSON file in our html**:

```html
<html>
  <head>
    <title>JSON Practice</title>
    <meta charset="utf-8">
  </head>
  <body>
    <script src="script.js"></script>
    <!-- JSON file imported after script.js
    because function is evoked within JSON file -->
    <script src="path/to/data.json"></script>
  </body>
</html>
```


> **Note:** The reason JSONP works is because scripts do not have same domain policies.


---

## Using jQuery to Parse JSON Feeds

jQuery offers a good variety of AJAX friendly functions that work well with older browsers. Within this group of functionality is great support for handling JSON.

```javascript
// Run function when document is ready
$(document).ready(function() {
  // Makes GET request for JSON from path,
  // parses the JSON, and then passes that data
  // as a parameter into the callback function
  $.getJSON('data.json', function(data) {
    console.log(data);
  });
});
```

jQuery makes AJAX requests tighter, and more compact, while still offering backward compatibility with older browsers.
