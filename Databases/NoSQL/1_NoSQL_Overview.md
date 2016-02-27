# Overview

### Defining NoSQL Database Types

**Document Store:**

* Documents are stored in a structured format (XML, JSON, etc.).

* Usually these documents are organized into _collections_ or _databases_.

* Individual documents can have unique structures.

* Each document usually has a specific key.

* It is possible to query a document by fields.


**Key-Value Store:**

* You have a key you can query by, and the value at that key.

* Drawback: you usually can't query by anything other than the key.

* Some key-value stores let you define more than one key (Making up for previous drawback).

* Sometimes used alongside relational databases for caching.


**BigTable/Tabular:**

* Named after Google's proprietary _BigTable_ implementation.

* Each row can have a different set of columns.

* Designed for large numbers of columns.

* Rows are typically versioned.


**Graph:**

* Designed for data best represented as interconnected.

* Example: A series of road intersections.


**Object Database:**

* Tightly integrated with the object-oriented programming language used.

* Act as a persistence layer: store objects directly.

* You can link objects together through pointers.


---

### Exploring NoSQL Possibilities

Here are some reasons one might implement a NoSQL DBMS:

* Easily create web applications with customizable fields.

* Use as a caching layer with existing databases.

* NoSQL can store binary files and you don't have to worry about file system permissions.

* Often they will extract meta data about a file and let you query by it.

* You can use NoSQL to attach other data to specific files.

* Some NoSQL DBMS' allow you to serve full web applications.
