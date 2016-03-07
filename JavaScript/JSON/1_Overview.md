# Overview

## What is JSON?

JSON stands for _JavaScript Object Notation_, and is a universal format for sharing data. Just as the name might suggest, JSON derives from JavaScript syntax. Despite this, JSON is language independent, making it easy to work with across different platforms and languages. It is an alternative to XML, which many developers have found harder to work with.

**Advantages of using JSON:**

  * Easy to read
  * Easy to parse
  * Leaner than XML
  * Growing Support for API's
  * Natural Format for JavaScript
  * Implementation in many languages

---

## Understanding Objects and JSON

JSON declarations are strings with key/value pairs. In JSON the **keys are wrapped in double quotes, not single quotes**. JSON keys can be any valid string.

JSON values have to be one of six types:

- strings
- numbers
- objects
- arrays
- booleans
- null

```json
{
  "name": "Bill",
  "dob": "10-19-97",
  "courses": [
    "Math 101",
    "Science 201",
    "English 305"
  ],

}
```

So, where in JavaScript objects can have methods, key with a value of a function, JSON cannot. Also note that **JSON has to be parsed into JavaScript**. There are two ways to do this, either by using the _eval()_ function or the _JSON.parse()_ method. The _eval()_ function has security issues due to clients being able to run scripts by including it in parameters, so best stay with _JSON.parse()_.

_JSON.stringify_ does the opposite of parse, converting JavaScript objects to JSON strings.

> **Note:** Compatibility with older browsers make using _JSON.parse_ and _JSON.stringify_ a bit unsupported. jQuery can make up for this.


---

## Creating Simple Data

JSON strings can have multiple values separated with commas, extra whitespace for clarity, and no quotes are needed on _numbers, true, false, and null_.

Once the data has been parsed into a variable, it can be accessed through dot notation or bracket notation (helpful for non-valid JavaScript names) like a regular JavaScript object. And for array-like values simply use bracket notation.

> **Note:** If you car about things being stored in a particular order, _arrays_ might be a better option than _objects_ because the order is always the same.

---

## Using JavaScript and JSON Tools

There are plenty of tools out there to check out than can help in validating JavaScript and JSON:

- [JS Hint](http://jshint.com/)
- [JSON Lint](http://jsonlint.com/)
- [JSON Editor Online](http://jsoneditoronline.org)
- [Cocoa JSON Editor](http://cocoajsoneditor.com)
- [JSONView](http://goo.gl/PZaa2)
