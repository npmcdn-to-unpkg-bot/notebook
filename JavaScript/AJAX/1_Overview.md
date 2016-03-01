# AJAX Overview

## What is AJAX?

_AJAX_ is a group of technologies that work together to allow portions of a webpage to be filled in with requested data without re-requesting the entire html document.

**AJAX** stands for _Asynchronous JavaScript and XML_. _Asynchronous_ means that requests can be made to the server at any time (doesn't have to wait for page to reload). _JavaScript_ handles all of the heavy lifting in terms of handling the request and the data the is sent and received. JavaScript communicates with the server through an API called **XHR** or _XML/HTTP Request_, which lets JavaScript send and receive data from a server.

> **Note:** XHR is not XML. It is essential just a technology that enables you to request data without requiring a page reload. AJAX requests can be in any of the following formats: plain-text, HTML, or JSON object.


---

## Using a Synchronous XHR Request

Let's begin by making a simple Synchronous request to for a file.txt:


```javascript
// Create new instance of XHR req object
var request = new XMLHttpRequest();

// Open a request to a path
//          Method  File requested  (true = Asnyc)
request.open("GET", "/path/data.txt", false);

// Send the request
request.send();

// If request status is OK
if (request.status === 200) {
  // Output request object to console
  console.log(request);
  // Prints the responseText
  document.writeln(request.responseText);
}
```

> **Note:** AJAX request have a **Same Domain Policy**, so you cannot request data objects from domains other than the one you are currently on.

Although this will provide the data requested from the server, it is bad practice do to blocking further execution when the server has multiple requests.

---

## Making Request Asynchronous

What make AJAX so wonderful is that it is Asynchronous. By using Asynchronous execution we are able to update the content of a webpage for each request the is made to the server as they are fulfilled (unlike Synchronous where updates happen when all requests are done).

If you look at the AJAX request object you will notice there are numerous eventListeners that can hold value. One in particular is **onreadystatechange**. The browser's AJAX api maintains a property called _readystate_ that has a number indicating how far along the request has progressed. If the value is 0, then the request hasn't been sent yet. Once the value of that property reaches 4 then the operation of sending and receiving requests has been completed.

So with this listener we can trigger an event with the data we receive when the _readystate_ reaches 4:

```javascript
var request = new XMLHttpRequest();

// Asnyc true by default
request.open("GET", "/path/data.txt");

// Set onreadystatechange listener
request.onreadystatechange = function() {
  // If readystate 4 and status OK
  if (request.readyState === 4 && request.status === 200) {
    console.log(request);
  }
}
request.send();
```

To find out more information about the XHR Request check out [MZD](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest)


---

## Scripting for Backwards Compatibility

Although older browsers are being used less and less each year, it is a good idea to know how request work in older browsers.

Older versions of IE implemented a different, proprietary version of XMLHttpRequest called **ActiveXObject("Microsoft.XMLHTTP")**. In order to work with older browsers we need to check if XMLHttpRequest is supported, otherwise falling back to ActiveXObject:

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
    console.log(request);
  }
}
request.send();
```
