# Querying Schemaless Data

> **Note:** The NoSQL database being covered is CouchDB, it is assumed that CouchDB is installed already (or accessed via cloud).

### Storing Data

We can store key value pairs in CouchDB in _flat fields_.

To begin navigate to the CouchDB _futon interface_ in your Browser.

> **Note:** CouchDB comes with two existing databases _replicator_ and _users_. These are used to help run CouchDB, tasks such as organizing documents in specific sets and for security and access control.

Let's create a database:

1. Click _Create Database_ and giving it a name.

2. Click _New Document_ to add new document. Notice it automatically provides a hash for the id field (best to keep this value unless a good reason is given).

3. Click _Add Field_ to add a new field and provide it with appropriate _value_ data.

4. Click the _green check_ next to each _value_ to lock in that value.

5. Click _Save Document_, noticing the _rev_ field was added. This keeps track of the _revision number_. The number will change each time changes are made.

6. Navigate back to the database by click on its name at the top next to _Overview_.


You can add more documents by repeating this process.


---

### Nesting Document Data

In CouchDB, Arrays and Objects let you nest data within documents.

The way this is accomplished is by simple providing the object or array (**JSON formatted**) as the _value_ in the _field/value_ pair.

> **Note:** You can click on the _Source_ tab to see the data in a JSON format. If you do not comply with JSON standards, the value will simply be interpreted as plaintext, removing the structure.


---

### Retrieving Data

Retrieving data from CouchDB is done through _HTTP_. By simply requesting the URI _all_dbs_ we are provided with a JSON array of all databases in our system.

If you request the URI of the created _database_ it will serve a JSON object containing information about the _database_ not the contents themselves.

To get the documents within a specific _database_, request the created database followed by _all-docs_.

Here is an example for _testDatabase_

```
http://.../testDatabase/_all_docs

{"total_rows": 3, "offset": 0, "rows": [
{"id": "0977f093v94u", "key": "1298f0joi", "value": {"rev": "gthasdfafafad9"}},
{"id": "609adsf93v94u", "key": "adf8f0joi", "value": {"rev": "faks989had9"}},
{"id": "adfaf093v94u", "key": "feeff0joi", "value": {"rev": "adsfasdfs989had9"}}
]}
```

If we wanted a the contents of a specific document, we would replace _all_docs_ with the _id_ of that document.

For example to get the first document from _testDatabase_ request the following:

```
http://.../testDatabase/0977f093v94u

{"id": "0977f093v94u", "_rev": "1-616c7adf", "name":"Test Database", "content": "Some plaintext..."}
```


---

### Specifying Specific Search Criteria

CouchDB offers querying via JavaScript. If we navigate to the _futon interface_, click on our _database_ and select _Temporary View_ from the _View_ dropdown we will see a _Map Function_ on the left and _Reduce Function_ on the right.

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr><pre>emit(<i>key</i>, <i>value</i>)</pre></tr>
  <tr>This function will return the value stored at the specified <i>key/value</i>. The <i>key</i> and <i>value</i> of the <i>document</i> object are formatted in dot notation</tr>
</table>

> **Note:** You can specify any key from a document as a query key and any value as the value to narrow searches.

Here is an example of emitting content from _testDatabase_:

```javascript
// Create function that receives a doc object
function (doc) {
  // If that doc does not have an hours property value
  if (!doc.hours) {
    // Return all pairs with a doc.name property
    // and their doc.content value
    emit(doc.name, doc.content);
  }
}

// Key: "testDatabase"
// Value: "Some plaintext..."
```

Using JavaScript, write a _Map Function_ to get a result set of only the data you specifically need.


---

### Defining Views

Once you have a map function return the data you want from CouchDB, you can save it as a _View_. If we navigate to the _futon interface_, click on our _database_ and select _Temporary View_ from the _View_ dropdown. With the _Map Function_ in place click _Run_.

We can save this _View_ clicking _Save As_, and then enter the name you wish to give the _Design Document_ and a name for that _View_.

This view is now saved and stored, accessible via the dropdown.

The JSON format of this data can be found by navigating the browser:

```
// Remove the '_utils/database.html?'
// Design Document: testing, View Name: test_view
http://...restaurant/_design/testing/_view/test_view

{"total_rows": 1, "offset": 0, "rows": [
{"id": "0977f093v94u", "_rev": "1-616c7adf", "name":"Test Database", "content": "Some plaintext..."}
]
```

You can narrow/filter _Views_ with multiple rows even further by appending a query string after the URL:

```
// Would show subset from 'view' with key set to 'Test'
http://...restaurant/_design/testing/_view/test_view?key="Test"
```


---

### Reducing Data


Sometimes you just want a summary of a particular data set. Many NoSQL databases allow you to define a _Reduce Function_ to do this on the server side.

If we navigate to the _futon interface_, click on our _database_ and select _All documents_ from the _View_ dropdown.


_Reduce Functions_ are functions that work together with _Map Functions_. The _Map Function_ first retrieves a keyed set of data, then the reduce function takes the values mapped to each key and transforms them into a single value.

Using this combination allows you to retrieve summaries directly from the database saving time and bandwidth.

So for example if you had a category of products and wanted to know how many of products belong to each category, you could use _Reduce Functions_ to output that information.

```javascript
// Map Function Window Panel
//===========================

// This map function filters for all product categories
// showing repeated category names certain products
function (doc) {
  if (doc.category) {
    emit(doc.category, doc);
  }
}

// Key                  Value
// ===                  =====
"beverages"           {id:..., _rev:...}
"dessert"             {id:..., _rev:...}
"entree"              {id:..., _rev:...}
"entree"              {id:..., _rev:...}
"entree"              {id:..., _rev:...}
"side-dish"           {id:..., _rev:...}
...


// Reduce Function Window Panel
//===========================

// This function will run once for each key (category)
// the map function supplies.
// (all three 'entree' docs will be passed in as array)
//
// A reduce function that takes a key, array of values
// corresponding to that key, and 'rereduce' (which
// is set to true when more than one value is returned
// see NOTE below for details..
function(key, values, rereduce) {
  // Return any value you want (be sure its just one value)
  return values.length
}

```

> **Note:** The _Reduce Function_ is called recursively and _rereduce_ is set to _true_ when more than one value is returned. This can help you return complex, nested data-sets.
