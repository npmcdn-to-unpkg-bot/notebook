# CouchDB Applications

CouchDB allows you to not only store JSON data, but also binary files. It supports binary data through a feature called _attachments_.

## Attaching and Retrieving Images

1. Navigate to the database.

2. Select docs that require images

3. Simply select _Upload Attachment_ above the _Field/Value_ panels, _Browse_, select the image file, and click _Upload_.

A new field _attachments_ should hold the data for the file uploaded. If you click on the data in the _Value_ section it will take you to the URL where the image is stored, _databaseName/idOfDoc/fileName.jpg_.

> **Note:** Multiple files can be added to the _attachments_ field. You can also remove files by clicking the 'x'. Be sure to click _Save Document_ after removing files, updating the database.


---

## Querying Attachments

Once attachments have been uploaded to your CouchDB database you will want to be able to reference them easily.

We can create a _View_ to help us accomplish this. If we navigate to the _futon interface_, click on our _database_ and select _Temporary View_ from the _View_ dropdown. Click into the _Map_ panel section and enter:

```javascript
function(doc) {
  // If document has 'attachments' field
  if (doc._attachments) {
    var filename;
    // Get property of 'attachments'
    for (var key in doc._attachments) {
      // If key belongs to 'attachments' obj
      // and obj does not point to function
      if (doc._attachments.hasOwnProperty(key) && typeof(key) !== "function") {
        // Update filename
        filename = key;
        // Stop loop
        break;
      }
    }
    // Emit that file
    emit(doc.name, filename);
  }
}
```

Click _Run_ and you will see all _attachments_ with the filename as the _key_ and the filename as the _value_. We also have the _Document ID_ handy which will help us construct the URLs needed to point to the image.

You can save this view as a permanent view in the system. Reference the Defining Views section for more details.


---

## Deploying Applications

Although CouchDB does allow you to deploy an application directly from the database it is not a best practice.

If we did however wish to do so, we would simply set up the client javascript to query the correct URL paths to our database via HTTP request methods. We would then parse the JSON data and place it in our html accordingly. Finally, we would place our html and javascript files in the database and navigate in our browser to the database URL path corresponding to the html document.

> **Note:** There are many reasons this is not recommended, security being one of the biggest concerns. Giving clients direct access to your database is never a good idea.


---

## Securing CouchDB

When CouchDB is first launched there are no security parameters set in place. This works during development, but is unacceptable in deployment. We need to set up an _Admin_ to restrict permissions.

On the bottom right panel select the link _Fix This_ and enter a _Username_ and _Password_.

We have now created an _Admin_ but need to lock down the database. Click the _Configuration_ link on the right-hand panel. Find under the _Option_ column, _require_valid_user_ and change it from _false_ to _true_.

Now _Admin_ is the only one that has access to the database:

```bash
curl "http://127.0.0.1:5984/databaseName"
(error: 'Unauthorized')

curl "http://admin:password@127.0.0.1:5984/databaseName"
access granted...
```


---

## Using Node

NodeJS allows for easy interaction with CouchDB via the _cradle_ module.

```
// global install
sudo npm install cradle

// local install
npm install --save cradle
```

Now let's require the module in Node:

```javascript
// Import the cradle module
var cradle = require("cradle");

// Use module to create instance at IP and port
// number with credentials, telling it to use the
// specified databaseName
var db = new(cradle.Connection)("http://127.0.0.1", 5984, { auth: {username: 'admin', password: 'admin'}
}).database('databaseName');

// Export the db object
module.exports = db;
```

We can use other Node scripts to query the _View_:

```javascript
// Requires exported db module
var db = require("db");

// Query specified 'View' with callback function
db.view("viewName", function(err, res) {
  // Log each row in the database view
  for (var i=0; i < res.length; i++) {
    var row = res[i];
    console.log(row);
  }
});
```

We can also simply _get_ data directly from the database:

```javascript
// Requires exported db module
var db = require("db");

// GET doc at specified id/rev hash
db.get("1209385728934723", function(err, doc) {
  // Log entire doc from database
  console.log(doc);
});
```

And of course we can write to our database with _save_:

```javascript
// Requires exported db module
var db = require("db");

// Save key/value data as new doc to the database
db.save({
  name: "New Item", category: "Special"
}, function (err, res) {
  // Return new doc id as response
  console.log(res);
});
```

> **Note:** Notice when we _save_ we don't need to specify an _id_. This is because _cradle_ let's CouchDB do this for us, returning it to us in the response.

The response from a _save_ will look something like this:

```
{ ok: true,
  id: '92348903875234098uru',
  rev: '1-46lkj23lkj5j44f' }
```
