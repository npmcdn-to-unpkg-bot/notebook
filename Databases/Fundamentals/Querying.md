# Database Modeling: Querying

### Creating Queries in SQL

##### SQL Keywords

- Select
- From
- Where
- Order by
- Group by
- Join
- Insert into
- Update
- Delete
- Having
- In


Example of a query:

<table>
  <tr>
      <th>Employee</th>  
  </tr>
  <tr>
      <td>EmployeeID</td>
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


To return all of the values stored at the FirstName column within each row:

```sql
SELECT FirstName
FROM Employee;
```


To select multiple columns you would separate them with commas:

```sql
SELECT FirstName, LastName
FROM Employee;
```


To select all rows and columns simply use the _*_ character. By specifying `WHERE` we can restrict what is returned:

```sql
SELECT *
FROM Employee
WHERE Salary > 50000;
```

> **Note**: Keywords do not necessarily have to be all capitalized, but it is a convention that has become a good practice to use. Also whitespace is not strictly enforced, allowing queries to be broken into multiple lines.


If there were more than one database with the same table name we would need to specify our _database_ and then the _table_:

```sql
SELECT *
FROM database.table
WHERE Salary > 50000;
```


____________________

### Structuring the WHERE Clause

Much like writing an _if statement_ in a programming language, `WHERE` clauses evaluate to either _true_ or _false_.

<table>
  <tr>
      <th>Employee</th>  
  </tr>
  <tr>
      <td>EmployeeID</td>
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


An example of narrowing a selection with `WHERE` and a string value:

```sql
SELECT *
FROM Employee
WHERE LastName = 'Joseph';
```

> **Note:** String values in SQL are surrounded in _single quotes_. Also note that '==' or '===' is not used for equality, but rather '='.


An example of narrowing a selection with `WHERE` and a number value:

```sql
SELECT *
FROM Employee
WHERE EmployeeID = 321;
```


An example of narrowing a selection with `WHERE` and using a comparison operator with a number value:

```sql
SELECT *
FROM Employee
WHERE Salary > 50000;
```

> **Note:** Comparison operators operate the same way in which they would in most programming languages: '>',
'<', '>=', '<=', '<>' (not equal).


You can also `AND` or `OR` to combine multiple conditions in `WHERE`:

```sql
SELECT *
FROM Employee
WHERE Salary > 50000
      AND Department = 'Sales';
```


If you wanted to check for multiple values where you are interested in the same column having several different options use `IN` keyword with commas separated values:

```sql
SELECT *
FROM Employee
WHERE Department IN
      (`Marketing`, `Sales`);
```


If you want to be more flexible on matching text, instead of using '=' for an exact match use `LIKE` (wildcard in SQL is '%'):

```sql
SELECT *
FROM Employee
WHERE LastName LIKE 'Green%';
```


And to match single letter.

```sql
SELECT *
FROM Employee
WHERE LastName LIKE 'Gr_en';
```

> **Note:** Using `LIKE` can be inefficient in large tables.


Best way to check for a `NULL` value is to use the `IS` keyword:

```sql
SELECT *
FROM Employee
WHERE MiddleInitial IS NULL;
```


Or on the other hand adding `NOT`:

```sql
SELECT *
FROM Employee
WHERE MiddleInitial IS NOT NULL;
```


____________________

### Sorting Query Results

<table>
  <tr>
      <th>Product</th>  
  </tr>
  <tr>
      <td>ProductID (PK)</td>
  </tr>
  <tr>
      <td>Description</td>
  </tr>
  <tr>
      <td>ListPrice</td>
  </tr>
  <tr>
      <td>Color</td>
  </tr>
  <tr>
      <td>Weight</td>
  </tr>
  <tr>
      <td>Category</td>
  </tr>
  <tr>
      <td>SKU</td>
  </tr>
  <tr>
      <td>Manufacturer</td>
  </tr>
</table>


Using the `ORDER BY` Keywords we can sort the results of a query:

```sql
SELECT Description,
      ListPrice, Color
FROM Product
ORDER BY ListPrice DESC ;
```

> **Note:** By default `ORDER BY` is in ascending order.


By using multiple query filters after `ORDER BY` we can specify an ordering hierarchy:

```sql
SELECT Description,
      ListPrice, Color
FROM Product
ORDER BY Manufacturer, ListPrice ;
```


This lists in ascending order, all products by Manufacturer and then list price (if by same Manufacturer).


____________________

### Using Aggregate Functions

By using Aggregate functions we can perform an action on a query and return a result.

<table>
  <tr>
      <th>Employee</th>  
  </tr>
  <tr>
      <td>EmployeeID</td>
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


If we wanted to find out how many rows are within a specific table we would simply use `COUNT()`:

```sql
SELECT COUNT(*)
FROM Employee;
```


We can find the highest value from a row in a specific column by using `MAX()`:

```sql
SELECT MAX(Salary)
FROM Employee;
```

> **Note:** We can also use `MIN()`, `AVG()`, `SUM()`, and many others.


If we wanted to know the amount employees in each department we can use `GROUP BY` (categorizing results):

```sql
SELECT COUNT(*), Department
FROM Employee
GROUP BY Department;
```


____________________

### Joining Tables

In some cases we want to select data from two different tables. In this case we would `JOIN` the two tables. In this example we have an Employee table with a one-to-many relationship to the Department Table.

We append `JOIN` followed by the second table and add column names from that table to the `SELECT` clause, and add `ON` to clarify how the tables are to be joined together:

```sql
SELECT FirstName, LastName, HireDate,
      Name, Location
FROM Employee JOIN Department
ON Employee.DepartmentID = Department.DepartmentID
```

> **Note:** In the case of identical names in the `SELECT` clause, simply prepend the name with the table name to clarify. (e.g Employee.DepartmentID)


There are two kinds of join methods `INNER JOIN` and `OUTER JOIN`. Where the inner (default displayed in example above) will only join rows from two tables where `ON` values match, `OUTER JOIN` specifies which table takes precedence and would show results where matches are made and where they are not (in the preferred table):

```sql
SELECT FirstName, LastName, HireDate,
      Name, Location
FROM Employee INNER JOIN Department
ON Employee.DepartmentID = Department.DepartmentID

SELECT FirstName, LastName, HireDate,
      Name, Location
FROM Employee LEFT OUTER JOIN Department
ON Employee.DepartmentID = Department.DepartmentID
```

> **Note:** `LEFT` and `RIGHT` refer to the name on the left or right of the `JOIN` keyword. If `OUTER JOIN` is performed, unmatched columns within rows will be given value of null. Alternatively, there is a `FULL OUTER JOIN` that will return all rows from both tables, filling in null where no value found.


____________________

### Inserting, Updating, and Deleting

Where most systems implement a CRUD system (Create, Read, Update, and Delete), SQL using slightly different keywords (Insert, Select, Update, Delete). Although named differently the functionality is the same.

<table>
  <tr>
      <th>Employee</th>  
  </tr>
  <tr>
      <td>EmployeeID</td>
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


To insert into a table we use `INSERT INTO` followed by the table name, columns to be inserted into, and `VALUES` followed by the values for the specified columns:

```sql
INSERT INTO Employee
  (FirstName, LastName, Department, Salary)
  VALUES ('Joe','Allen','Sales',45000)
```

> **Note:** In most cases there will be default values generated by the database (dates, primary keys, etc.) so it wouldn't be necessary to specify them.


To update a table and its values we use `UPDATE` followed by the table name, the `SET` keyword followed by column = value, and `WHERE` to specify a condition:

```sql
UPDATE Employee
SET Email = 'joea@hplus.net'
WHERE EmployeeID = 734
```

> **Note:** Without the `WHERE` clause you would set the value to every single row in that table.


To delete from a table simply use `DELETE FROM` followed by the table name and a `WHERE` clause narrowing where to delete:

```sql
DELETE FROM Employee
WHERE EmployeeID = 734
```

> **Note:** Use the `DELETE FROM` to remove the entire row from a table, otherwise use update. **SO BEWARE WHEN USING DELETE!!!** A best practice when using `DELETE FROM` or `UPDATE` is to first make a `SELECT` statement, allowing you to see what your will be deleting.


____________________

### The Data Definition Language

In prior sections we covered the _CRUD_ set of commands used in SQL, also known as the _Data Manipulation_ statement type. None of these keywords allow us to alter the structure of the database itself.

In order to perform these kinds of interactions we would need to use _Data Definition Language_, or `CREATE`, `ALTER`, and `DROP`.

To create a table simply use the `CREATE` keyword followed by the table name and the defined column definitions (name of column followed by datatype and optional rules):

```sql
CREATE Employee
(EmployeeID INTEGER PRIMARY KEY,
FirstName VARCHAR(35) NOT NULL,
LastName VARCHAR(100) NOT NULL,
Department VARCHAR(30) NULL,
Salary INTEGER
);
```


We can use `ALTER TABLE` to change the rules of a table and or add new columns:

```sql
ALTER TABLE Employee
ADD Email VARCHAR(100);
```


Lastly, we can remove a table by using `DROP TABLE` followed by the table name:

```sql
DROP TABLE Employee;
```

> **Note:** Using the `DROP TABLE` will remove the entire table, **SO BEWARE WHEN USING IT!!!**
