# Database Modeling: Indexing and Optimization

### Understanding Indexes

##### Clustered Indexes

An index in a database is like an index in the back of a textbook, it will help you find content within that book. Indexes are all about speed of access.

Where the _Primary Key_ does let us uniquely identify a row, it does not necessarily help us quickly and efficiently find that row. This is where indexes come in.

A **Clustered Index** is the primary index on any table, assigning a specific column and then ordering and indexing the data by that column.

It just so happens that the most common _Clustered Index_ in any database table is the primary key column.

Most DBMS' will automatically assign the _Primary Key_ column as the _Clustered Index_, but if you find yourself accessing the data primarily using another column you might consider changing that column to be the _Clustered Index_ instead.


So given the following table:


<table>
  <tr>
      <th>Employee</th>  
  </tr>
  <tr>
      <td>EmployeeID (PK)</td>
  </tr>
  <tr>
      <td>FirstName</td>
  </tr>
  <tr>
      <td>LastName</td>
  </tr>
  <tr>
      <td>HireDate</td>
  </tr>
  <tr>
      <td>Email</td>
  </tr>
  <tr>
      <td>Department</td>
  </tr>
  <tr>
      <td>Salary</td>
  </tr>
</table>


And the following query:

```sql
SELECT *
FROM Employee
WHERE EmployeeID = 534;
```

With the primary key being the _EmployeeID_ and the _Clustered Index_ also being on that key, the DBMS would swiftly be able to locate that table column and find the specific _EmployeeID_ row.



##### Non-Clustered Index

Now let's take another example that uses a `WHERE` clause that is not the _Clustered Index_:

```sql
SELECT *
FROM Employee
WHERE LastName = 'Smith';
```

In this case the DBMS would have to go through each row in the _Employee_ table checking the value of the _LastName_ column. This is also known as a _Full Table Scan_ and can be very time consuming with large tables of data.

To prevent this type of issue we implement a **Non-Clustered** index. This is similar to having an index at the back of a textbook. It basically creates a map separate from the actual table data that sorts and 'indexes' the data according to a _non-primary key_.

_Non-Clustered Indexes_ are not faster than _Clustered Indexes_ but are much more efficient than a _Full Table Scan_. It's best practice to implement them when you are accessing a specific data set frequently.

> **Note**: _Indexes_ do have a cost. They work swiftly when reading data, but are a detriment when writing data because they must be maintained, or all _Indexes_ must be updated when the table itself is. For this reason we would not want to put _Indexes_ on more columns than necessary. Indexing is not "upfront" work, but rather figured out once database is developed and maintained.


____________________

### Conflicts and Isolation

##### Isolation

A database should pass the **ACID Test**, exemplifying all of these traits:

- Atomic

- Consistent

- Isolated

- Durable


Sometimes these traits can conflict with each other.

For example:

<table>
  <tr>
      <th>ID</th>  
      <th>Nickname</th>  
      <th>Balance</th>  
  </tr>
  <tr>
      <td>1</td>
      <td>Joint</td>
      <td>$10000</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Alice</td>
      <td>$50</td>
  </tr>
  <tr>
      <td>3</td>
      <td>Bob</td>
      <td>$45</td>
  </tr>
</table>

Pseudo Code (_actions happening simultaneous_):

```
Alice

get Balance of Joint account  ($1000)
get Balance of Alice account  ($50)
update Balance of Joint account  ($10000 - $1000)
update Balance of Alice account  ($50 - $1000)


Bob

get Balance of Joint account  ($1000)
get Balance of Bob account  ($50)
update Balance of Joint account  ($10000 - $1000)
update Balance of Bob account  ($50 - $1000)
```

In this example, the conflict is known as a **Race Condition**, a conflict where two threads are performing very similar steps and getting just a little bit ahead of each other, trying to affect the same data.


The best way to solve this issue to use `BEGIN TRANSACTION` and then `COMMIT` on the transactions made, making this process _Atomic_:

```sql
BEGIN TRANSACTION

  Alice

  get Balance of Joint account  ($1000)
  get Balance of Alice account  ($50)
  update Balance of Joint account  ($10000 - $1000)
  update Balance of Alice account  ($50 - $1000)

COMMIT


BEGIN TRANSACTION

  Bob

  get Balance of Joint account  ($1000)
  get Balance of Bob account  ($50)
  update Balance of Joint account  ($10000 - $1000)
  update Balance of Bob account  ($50 - $1000)

COMMIT
```

_Transactions_ start a unit of work, going all the way through and _Commit_ if everything is successful. If there is a problem we want to roll back to the start of the transaction as if nothing happened.



In order to prevent data to be read or changed during a _Transaction_ we want to enforce a locking mechanism.

One approach is **Pessimistic Locking**, locking the data involved with a _Transaction_ when one is taking place, unlocking it when it _Commits_.



This approach can solve the conflict problems on a basic level, but with many users making transactions it can cause serious blocking.

So in this case, we would use **Optimistic Locking**, allowing multiple parties to read and access data. Upon conflicts, the latter party in the exchange would receive an error (_dirty read_), and rollback to the beginning of the _Transaction_.

> **Note:** With _Optimistic Locking_ different DBMS' handle errors differently. The keywords will be different and defaults can vary.


____________________

### Stored Procedures

As your database queries become more complex you will want to keep and reuse them. You can do this by creating **Stored Procedures** (aka SPROC). It is a chunk of SQL that can be written given a name and stored directly in the database (similar to making functions/methods).

To store a procedures we simply wrap a query in `CREATE PROCEDURE SomeName()` and `END;`. To invoke it we simply use `CALL SomeName()`:

```sql
CREATE PROCEDURE HiglyPaid()
  SELECT * FROM Employee
  WHERE Salary > 50000
  ORDER BY LastName, FirstName
END;

CALL HighlyPaid();
```

> **Note:** You can call it from within the DBMS or within the logic or your application.


If we wanted to set parameters to a _Stored Procedure_ we can set a variable name with its type contraints using `IN varname type(length)`:

```sql
CREATE PROCEDURE EmployeesInDept(IN dept VARCHAR(50))
  SELECT * FROM Employee
  WHERE Department = dept
  ORDER BY LastName, FirstName
END;

CALL EmployeesInDept('Accounting');
// returns the Accounting department
```

##### Side Note on SQL Injection

_Stored Procedures_ are a good method of protection from SQL Injection, vectors of attack on websites. Because the way in which SQL Injection uses multiple back-to-back SQL statements, you cannot easily deconstruct or break apart a _Stored Procedure_, giving it less flexibility and making it more robust and secure.
