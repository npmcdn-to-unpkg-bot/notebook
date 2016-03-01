# Weather API Request

This is a basic sample HTTP request made to the [openweathermap](http://openweathermap.org/api) API. It returns a JSON object and logs the status of the request being made. It utilizes the _readline_ module to gather user input and request current weather information for the entered city name.

```javascript
// Require Necessary Modules
var http = require("http");
var readline = require("readline");
var fs = require("fs");

// Set up readline interface i/o
var rl = readline.createInterface(process.stdin, process.stdout);

// Prompt user with rl question and gather input
rl.question("Please enter your city: ", function(cityName) {

  // Construct api query from user input
  var requestPath = (`/data/2.5/weather?q=${cityName.toLowerCase()}&appid=5a0db23791aec56a88580c4f3f6adfd6`)

  // Set up options for http request
  var options = {
    "hostname": "api.openweathermap.org",
    "port": 80,
    "path": requestPath,
    "method": "GET"
  }

  // Make request to api
  var request = http.request(options, function(res) {

    // Set up responseBody to concatenate to
    var responseBody = "";

    // Log response status to user
    console.log("Server Request Made...");
    console.log(`Status: ${res.statusCode}`);

    // Set text encoding
    res.setEncoding("utf-8");

    // Concat chunks for each data response.
    res.on("data", function(chunk) {
      responseBody += chunk;
    });

    // When the response ends if everything good (200)
    // Log the responseBody and stop the app from running.
    res.on("end", function() {
      if (res.statusCode === 200) {
        console.log(`
          Response Body:

          ${responseBody}
          `);
      }
      process.exit();
    });

  });

  // Listen for errors on request to api
  request.on("error", function(err) {
    console.log(`There was an error: ${err}`);
  });

  // End request to api
  request.end();

});
```

**Terminal:**

```
$ node weather_request.js

Please enter your city: Orange
Server Request Made...
Status: 200

          Response Body:

          {"coord":{"lon":-117.85,"lat":33.79},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"cmc stations","main":{"temp":283.065,"pressure":1002.16,"humidity":87,"temp_min":283.065,"temp_max":283.065,"sea_level":1032.92,"grnd_level":1002.16},"wind":{"speed":0.61,"deg":118.001},"clouds":{"all":44},"dt":1456554229,"sys":{"message":0.0105,"country":"US","sunrise":1456582949,"sunset":1456623971},"id":5379513,"name":"Orange","cod":200}
```
