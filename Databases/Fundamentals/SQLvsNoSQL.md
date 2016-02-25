# NoSQL Databases

### Features of NoSQL Databases

* No formal schema

* Generally oriented to Web Development

* Generally oriented to large-scale deployment

* Often open source


### Types of NoSQL

**Document Stores:** Documents, not rows and columns. Each 'document' is comma separated nested JSON or XML.

_Examples: CouchDB and MongoDB_

```
{
  "title": "Database",
  "rating": 9
},
{
  "name": "Bill",
  "location": {
    "city": "Orange",
    "zip": 92867
  }
}
```


**Key-Value Stores:** Stored as a key-value pair, usually with flexible value types.

_Examples: Memcached, Riak, and Project Voldermort_

<table>
  <tr>
      <th>key</th>
      <th>value</th>
  </tr>
  <tr>
      <td>EmployeeID</td>
      <td>1234</td>
  </tr>
  <tr>
      <td>FirstName</td>
      <td>Bill</td>
  </tr>
  <tr>
      <td>Location</td>
      <td>{"city": "Orange", "zip": "92867"}</td>
  </tr>
  <tr>
      <td>Profile_Photo</td>
      <td>(<i>binary data</i>)</td>
  </tr>

</table>



**Graph Database:** Everything stored as small connected nodes, with relations.

![Image of Graph Database](http://cdn.ttgtmedia.com/rms/editorial/Graph-database-sketch-580px.jpg)



### SQL vs NoSQL

Here are some quick points in regards to reasons why one might choose a NoSQL Database:

1. **Do you need a flexible schema?**

Or rather is the data you have already self-contained and structured or is it something that will continually alter in type and structure?

2. **Do you have a vast amount of data?**

SQL Databases do a fantastic job for a few million points of data, but if your demands are for an abnormally large scale (like social media platform large), NoSQL is probably the way to go.

3. **Do you value scaling over consistency?**

Where you might have a better time storing vast amounts of data into a NoSQL database, SQL offers a consistency or expectation that provides a tighter organizational structure to your data.
