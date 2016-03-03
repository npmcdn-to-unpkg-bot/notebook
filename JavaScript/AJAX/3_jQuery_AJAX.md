# jQuery AJAX

## Working with jQuery and AJAX

The jQuery library can help make using AJAX to make requests easier. There are a number of jQuery AJAX capabilities (The full list can be found [here](http://api.jquery.com/category/ajax/)).

Here is an example of using jQuery to make a basic AJAX request, loading information from a file asynchronously and updating a selected element (via id selection):

```javascript
// Grab elmt w/ id 'selectElement' and dynamically load data from file
$("#selectElement").load("data.txt");
```

Although using javascript's AJAX request is good to understand, jQuery does provide a lot of convenience when it comes down to quick development.


---

## Reading Data with jQuery

If you are looking to load structured data, jQuery has a method called _$.getJSON()_, loading data in the JSON format. This method takes an argument for the file to request and a callback function to run when the request is made.

Here is an example of using a mock _data.json_ file and outputting every key/value pair in the JSON object using jQuery's _$.each()_ method to iterate through it:

```json
[
  {  
    "name": "Bill",
    "dob": "10-12-95"
  },
  {
    "name": "Sandy",
    "dob": "03-15-90"
  },
  {
    "name": "Nancy",
    "dob": "09-03-84"
  }
]
```

```javascript
  // Make AJAX request for JSON
  // (parsing it to js object in process)
  $.getJSON('data.json', function(data) {
      // Create ul
      var output = "<ul>";
      // Within parsed JSON data object,
      // Run callback function for each key/val pair
      // (like for-in w/ js but better)
      $.each(data, function(key, val) {
        // Concat html <li> with
        output += "<li>" + val.name + ": " + val.dob + "</li>";
      });
      // Close ul tag
      output += "</ul>";
      // Grab html element and append 'output'
      $('#selectElement').append(output);
  });
```

<h4>Appended JSON Data</h4>

<ul>
  <li>Bill: 10-12-95</li>
  <li>Sandy: 03-15-90</li>
  <li>Nancy: 09-03-84</li>
</ul>
