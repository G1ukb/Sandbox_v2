<h1>SQL</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Could you explain what SQL is?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Could you explain what SQL is?
        </b>
    </summary>
<br>

Structured Query Language is a programming language used to
communicate with and manipulate databases.
It is particularly useful in handling structured data, i.e.,
data incorporating relations among entities and variables.

SQL provides commands for a variety of tasks,
including querying data, creating tables, defining relationships,
and ensuring data integrity.

</details>

[//]: # (Can you provide a definition of a DBMS?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide a definition of a DBMS?
        </b>
    </summary>
<br>

A Database Management System (DBMS) is software that interacts with end users,
applications, and the database itself to capture and analyze data.
A DBMS allows a user to interact with the database.

MsSQL Server is DBMS

There are several main functions of a DBMS:

- Data Storage and Independence
- Efficient Data Access
- Data Integrity and Security
- Data Administration
- Concurrent Access and Crash Recovery

</details>

[//]: # (What are the different types of DBMS?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the different types of DBMS?
        </b>
    </summary>
<br>

**Relational (RDBSQL)** - supports SQL.
RDBMS does not support many-to-many relationships.
Defines database relationships as relations

**Non-relational (NoSQL)** - partially supports SQL (not all types)
Relations between objects are represented as non-relational,
it can be tables, a single document (json) or described by xml and so on

</details>

[//]: # (Can you draw a comparison between SQL and NoSQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you draw a comparison between SQL and NoSQL?
        </b>
    </summary>
<br>

According to the CAP theorem, SQL is CA type,
so SQL is consistent (all clients have the same view of data)
and available (All clients can read and write) databases

noSQl is CP type, they are
consistent (all clients have the same view of data)
and Partition tolerant (Fail tolerant)

Main differences:
Data Structure: SQL table-based, NoSQL various of data structures
Scalability: SQL hard to scale horizontally, NoSQL designed for horizontal scaling
ACID Properties: SQL Full ACID, NoSQL non-full support

</details>

[//]: # (What are the various subsets of SQL such as DDL, DML, DCL, and TCL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the various subsets of SQL such as DDL, DML, DCL, and TCL?
        </b>
    </summary>
<br>

SQL (Structured Query Language) is divided into several subsets,
each is serving a different purpose:

1. DDL (Data Definition Language): This subset of SQL is used for
   defining and managing all the objects in an SQL database.
   It includes commands like CREATE, ALTER, DROP, TRUNCATE, COMMENT, and RENAME.

2. DML (Data Manipulation Language): This subset is used for
   managing data within schema objects.
   It includes commands like SELECT, INSERT, UPDATE, DELETE, and MERGE.

3. DCL (Data Control Language):
   This subset is used for controlling the permissions and access
   to the database.
   It includes commands like GRANT and REVOKE.

4. TCL (Transaction Control Language):
   This subset is used for managing different
   transactions occurring within a database.
   It includes commands like COMMIT, ROLLBACK, and SAVEPOINT.

</details>

[//]: # (Could you differentiate between a Materialized View and View in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             Could you differentiate between a Materialized View and View in SQL?
        </b>
    </summary>
<br>

**View** is a virtual table based on the result-set of an SQL statement.
Every time a view is queried, the database must run
the underlying query to produce the result set.

**if you need real-time data and are working with simple queries
or small datasets, a view can be a good choice.**

**Materialized View** is a physical copy,
snapshot or a representation of the base table.
Not need to run the underlying query every time the view is accessed.
You need to refresh the materialized view periodically to ensure
that the data is up-to-date.
Also, materialized views take up storage space.

**If you have complex queries or large datasets and need
to improve query performance, and can tolerate some data latency,
a materialized view can be a better choice.**

</details>

[//]: # (What does column indexing mean in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What does column indexing mean in SQL?
        </b>
    </summary>
<br>

An index is a data structure
that improves the speed of data retrieval operations on a database table.

When you create an index on a column or set of columns,
the database creates a data structure that allows it to
find the data associated with a specific column value
(or set of values for multiple columns) more quickly.

This can significantly speed up queries that search or sort on these columns.

</details>

[//]: # (What are the different types of indexes in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the different types of indexes in SQL?
        </b>
    </summary>
<br>

**Clustered Index:** This type of index determines the physical order
data in a table.
Because of this, a table can have only one clustered index.
It is automatically created when a primary key is defined.

**Non-Clustered Index:** This type of index doesn't determine
the physical order of data, but it creates a logical order
that is stored separately from the table.
A table can have multiple non-clustered indexes.

**Composite Index:** This type of index includes
more than one column in the index key.
It can be useful when you frequently run queries
that involve multiple columns in the WHERE clause.

**Bitmap Index:** for each record in a table,
a Bitmap Index uses a bit (0 or 1)
to represent whether a condition is true or false.
This makes it rapid and efficient to find records
that meet certain conditions, especially in large databases.

**Full-Text Index:** This type of index is used for full-text searches.
It can be used to search words, phrases,
or multiple forms of a word or phrase.

**Spatial Index:** This type of index is used for spatial data types, i.e.,
data that represents geometric shapes and structures.

</details>

[//]: # (In the context of SQL, what does ACID stand for?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            In the context of SQL, what does ACID stand for?
        </b>
    </summary>
<br>

ACID is an acronym in computer science that stands for Atomicity,
Consistency, Isolation, and Durability.
These are a set of properties that guarantee
that database transactions are processed reliably.

1. Atomicity: This property ensures that
   a transaction is treated as a single, indivisible unit,
   which either succeeds completely, or fails completely.
   If any part of the transaction fails,
   the entire transaction fails, and the database state is left unchanged.

2. Consistency: This property ensures that a transaction
   brings the database from one valid state to another.
   The database should satisfy a certain set of constraints,
   and any transaction carried out on the
   database should maintain these constraints.

3. Isolation: This property ensures that concurrent
   execution of transactions leaves the database in the same state
   that would have been obtained if the transactions were executed sequentially.

4. Durability: This property ensures that once
   a transaction has been committed,
   it will remain committed even in the case of a system failure.
   This is usually achieved by storing the transaction into
   a transaction log that can be reprocessed to recreate
   the system state right before any later failure.

</details>

[//]: # (What are the different isolation levels 
        in SQL and what issues might arise with each?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the different isolation levels
            in SQL and what issues might arise with each?
        </b>
    </summary>
<br>

**Read Uncommitted:** This is the lowest level of isolation.
In this level, one transaction may read not yet
committed changes made by another transaction,
leading to `dirty reads`.
This can lead to inconsistencies in the database.

**Read Committed:** One transaction may not read changes
made by another transaction until the other transaction is committed.
However, it can lead to "non-repeatable reads",
where a single transaction reads the same row twice
but gets different data each time.

**Repeatable Read:**
Once a transaction reads a row, no other transactions can modify
it until the first transaction is finished.
However, it can lead to "phantom reads",
where a transaction re-executes a query and gets a different set of rows.

Serializable: This is the highest level of isolation.
It prevents dirty reads, non-repeatable reads, and phantom reads.
It achieves this by performing a full transaction lock,
so no other transactions can read, insert, update, or delete.

</details>

[//]: # (Can you explain database normalization and its benefits?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain database normalization and its benefits?
        </b>
    </summary>
<br>

1. First Normal Form (1NF): Each table cell should contain a single value,
   and each record needs to be unique.

2. Second Normal Form (2NF):
   all non-key attributes should be fully functionally dependent
   on the primary key.

3. Third Normal Form (3NF): all non-key attributes should not depend
   on other non-key attributes.

4. Boyce-Codd Normal Form (BCNF): It is a stronger version of 3NF.
   for any dependency A → B, A should be a super key.
   It means that dependency should uniquely identify each record in the table.

5. Fourth Normal Form (4NF): it mandates that a table
   should not have multivalued dependencies.
   A multivalued dependency occurs in a database when the value of a column
   (or set of columns) depends on another column (or set of columns),
   but not on the whole key.

    ```
    If we have tables: 
    ID COURCE TEXTBOOK
    1  MATH   Algebra
    2  MATH   Geometria
    
    It need to be separeted to:
    ID COURCE - COURCE TEXTBOOK tables
    1  MATH     MATH   ALGEBRA
                MATH   GEOMETRIA
    ```

6. Fifth Normal Form (5NF): the candidate keys should imply every join dependency
   that if a table can be decomposed
   into multiple smaller tables and then joined back together
   without loss of data, then the columns used for the join
   should be a candidate key of the original table.

**Eliminates Redundant Data:** In normalization, data is stored only once,
reducing the duplication of data.
This not only saves storage space but also makes the database more efficient.

**Data Consistency:** Because data is not duplicated,
anomalies are avoided. Any additions, deletions,
or modifications to the data are carried out in one place only,
ensuring consistency.

**Database Structure Flexibility:** Normalized databases can easily be changed,
and they are more flexible for querying and reporting.

**Improved Database Performance:** Normalization simplifies indexes
and constraints, which leads to more efficient database performance.

**Easier to Maintain:** Normalized databases are generally
easier to maintain due to their simplified
structure and reduced data redundancy.

</details>

[//]: # (What is a SQL execution plan?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is a SQL execution plan? 
        </b>
    </summary>
<br>

It is a kind of map that outlines how the
SQL query will be executed by the database system.

Database's query optimizer examines different ways to execute the query
and chooses the most efficient one based on factors
like the structure of the tables, the available indexes,
the data distribution statistics, and the database's performance
tuning parameters.

The query plan includes operations like table scans,
index scans, sorts, joins, and other database operations.
It provides detailed information about
how the database will execute the SQL query,
including the order of the operations,
the tables involved in each operation,
the type of each operation, and the estimated cost of each operation.

In case we will have this operation

```
SELECT * FROM Customers WHERE CustomerID IN (SELECT CustomerID FROM Orders WHERE OrderAmount > 100);
```

It will be divided into

1. SELECT WHERE > 100
2. Get WHERE attribute (CustomerID) from first select
3. Perform scan operation
4. Return all values

</details>

[//]: # (What's the difference between HAVING and WHERE clauses in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What's the difference between HAVING and WHERE clauses in SQL?
        </b>
    </summary>
<br>

The WHERE clause in SQL is used to filter records before grouping,
while the HAVING clause is used to filter records after grouping.

```
SELECT * FROM Students WHERE Age > 20;

SELECT COUNT(StudentID), Country FROM Students 
GROUP BY Country HAVING COUNT(StudentID) > 5
```

</details>

[//]: # (Can you detail the distinctions between 
        the GROUP BY, DISTINCT, and ORDER BY clauses in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you detail the distinctions between 
            the GROUP BY, DISTINCT, and ORDER BY clauses in SQL?
        </b>
    </summary>
<br>

**GROUP BY** statement is used with aggregate functions
(COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.

```
SELECT ItemID, SUM(Quantity) FROM Sales GROUP BY ItemID;
```

**DISTINCT:** The DISTINCT keyword is used to return only distinct (unique) values.

```
SELECT DISTINCT ItemID FROM Sales;
```

**The ORDER BY** keyword is used to sort the result-set
in ascending or descending order.

```
SELECT * FROM Sales ORDER BY ItemID;
SELECT * FROM Sales ORDER BY ItemID DESC;
```

</details>

[//]: # (What issues are related to toast spaces in PostgreSQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What issues are related to toast spaces in PostgresSQL?
        </b>
    </summary>
<br>

TOAST (The Oversize-Attribute Storage Technique) is a mechanism
in PostgresSQL that allows it to handle large data values.

When a row contains large data types such as TEXT or BYTEA
and the total row size exceeds a certain limit (around 8KB).

TOAST comes into action, and these large data fields
are compressed and/or broken up into smaller chunks
to be stored in a separate TOAST table.

Problems with TOAST space usage generally arise when
there is a large amount of TOAST data.
Too much TOAST data can lead to:

- longer backup times
- increased disk usage
- longer query times
- difficulties in managing the instance.

Mechanism of work:

- Large Data Arrives (around 8KB)
- TOAST Checks If Compression Is Needed to fit size of 8KB
- If compression doesn't bring, the data is divided into chunks.
  (about 2KB by default)
- Chunks Are Stored In TOAST Table: special table
  associated with the original table.
  Each chunk has a pointer that keeps track order of the chunks.
- Original Table Stores TOAST Value (TOAST ID and TOAST table)

</details>

[//]: # (What are the common problems encountered 
        during migration from one database to another?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the common problems encountered 
            during migration from one database to another?
        </b>
    </summary>
<br>

- **Schema, Constraints and Data Type Incompatibilities:**
  Different databases may use different data types
  or maintain different constraints
- **Large Data Volume:** time-consuming
- **Data Consistency**
- **Code Conversion:** in case if back application has quite specific calls
- **Performance Issues:** unexpected performance degradation
- **Vendor Lock-in:** // **Training** // **Cost**

</details>

[//]: # (How would you handle database schema evolution in application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle database schema evolution in application?
        </b>
    </summary>
<br>

Database schema evolution in application can be effectively managed
using database migration tools such as Flyway or Liquibase.
These tools allow for version-controlled,
ordered changes to your database schema,
maintaining data integrity throughout the evolution process.

</details>

[//]: # (Can you describe the use of ranking functions 
        in SQL and explain how one could select even and odd records?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you describe the use of ranking functions 
            in SQL and explain how one could select even and odd records?
        </b>
    </summary>
<br>

ROW_NUMBER(), RANK(), and DENSE_RANK() are window functions
in SQL that assign a unique ranking to each row
within a partition of a result set.

1. ROW_NUMBER(): This function assigns a unique row number
   to each row within the partition of a result set,
   Duplicated values work as common values.

    ```sql
    SELECT Name, Score, ROW_NUMBER() OVER (ORDER BY Score DESC) AS Row_Number
    FROM student_scores;
    ```
    
    ```
    | Name  | Grade | row_number() |
    | Maria | 5     | 1
    | Maria | 4     | 2
    | Maria | 3     | 3
    | Maria | 3     | 4
    ```

2. RANK(): This function assigns a unique rank to
   each distinct row within a partition of a result set,
   but for rows with equal values, it assigns them the same rank,
   leaving a gap for the later ranks.

    ```sql
    SELECT Name, Score, RANK() OVER (ORDER BY Score DESC) AS Rank
    FROM student_scores;
    ```
    
    ```
    | Name  | Grade | rank() |
    | Maria | 5     | 1
    | Maria | 4     | 2
    | Maria | 3     | 3
    | Maria | 3     | 3
    | Maria | 1     | 5
    ```

3. DENSE_RANK(): This function acts exactly as the RANK()
   function but does not skip ranks for the rows with equal values.

```sql
SELECT Name,  Score, DENSE_RANK() OVER (ORDER BY Score DESC) AS Dense_Rank
FROM student_scores;
```

```
| Name  | Grade | DENSE_RANK() |
| Maria | 5     | 1
| Maria | 4     | 2
| Maria | 3     | 3
| Maria | 3     | 3
| Maria | 1     | 4
```

</details>

[//]: # (Can you provide detailed information 
         about the distinct types of JOINs in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide detailed information 
            about the distinct types of JOINs in SQL?
        </b>
    </summary>
<br>

In SQL, a JOIN operation retrieves related columns
or rows from multiple tables.

In total, there are four types of JOIN operations:

1. INNER JOIN: This returns records or rows that have matching values
   in both tables involved in the operation.
   It is often used when you want to combine rows
   from two or more tables where there
   is a relationship between the data in the columns.

   Example:

   ```sql
   SELECT Orders.order_id, Customers.customer_name
   FROM Orders
   INNER JOIN Customers
   ON Orders.customer_id = Customers.customer_id;
   ```

2. LEFT JOIN (or LEFT OUTER JOIN):
   This returns all rows from the left table (the 'Orders' table in this example),
   and the matched rows from the right table (the 'Customers' table in this example).
   If no match is found, the result is NULL on the right side.

   Example:

   ```sql
   SELECT Orders.order_id, Customers.customer_name
   FROM Orders
   LEFT JOIN Customers
   ON Orders.customer_id = Customers.customer_id;
   ```

3. RIGHT JOIN (or RIGHT OUTER JOIN): This is the opposite of a LEFT JOIN.
   It returns all rows from the right table, and
   matching rows from the left table.

   Example:

   ```sql
   SELECT Orders.order_id, Customers.customer_name
   FROM Orders
   RIGHT JOIN Customers
   ON Orders.customer_id = Customers.customer_id;
   ```

4. FULL JOIN (or FULL OUTER JOIN):
   This combines the results of both left and right outer joins,
   and returns all records
   when there is a match in either the left or the right table.

   Example:

   ```sql
   SELECT Orders.order_id, Customers.customer_name
   FROM Orders
   FULL OUTER JOIN Customers
   ON Orders.customer_id = Customers.customer_id;
   ```

In what situation must use: Which JOIN to use
depends on the relationship between your datasets
and the information you require.

INNER JOINs are the most common, and are often used
when records must be present in both tables.

OUTER JOINs help retrieve more inclusive data
when matching records may not be present in one or both tables.

</details>

[//]: # (Can you provide an overview of sub-queries in SQL 
        and the various types of sub-queries?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide an overview of sub-queries in SQL 
            and the various types of sub-queries?
        </b>
    </summary>
<br>

In SQL, a subquery, also known as a nested query or inner query,
is a query that is embedded within the WHERE or HAVING
clause of another SQL query.

Subqueries help in dividing complex queries into simpler,
more manageable parts;

this improves readability and facilitates debugging.

1. Single-row Subquery:
   This is a subquery that returns only one row
   and can use operators like =, >, <, >=, <=, and <> in the WHERE clause.

   Example:
   ```sql
   SELECT EmployeeName, Age 
   FROM Employees 
   WHERE Age > (SELECT AVG(Age) FROM Employees);
   ```

2. Multiple-column Subquery: This subquery returns multiple columns and
   is used in the FROM clause.

   Example:

   ```sql
   SELECT MAX(TotalOrder) AS LargestOrder
   FROM (SELECT SUM(Amount) AS TotalOrder FROM Orders GROUP BY CustomerID) AS sub;
   ```

3. Correlated Subquery: A type of subquery that uses values
   from the outer query in it's WHERE clause.

Example:

```sql
SELECT CustomerName
FROM Customers c
WHERE EXISTS (SELECT * FROM Orders o WHERE c.CustomerID = o.CustomerID);
```

</details>

[//]: # (Can you provide a detailed explanation of
         what stored procedures are and how they are used?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide a detailed explanation of 
            what stored procedures are and how they are used?
        </b>
    </summary>
<br>

In a database context, a stored procedure is a set
of SQL statements with an assigned name,
which are stored in the database data dictionary.

A stored procedure can be invoked by triggers,
other stored procedures, or applications such as Java, Python, PHP.

```sql
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;
```

Once a procedure is created, it can be executed as follows:

```sql
EXEC procedure_name;
```

Stored procedures can also take in parameters allowing them to be more flexible.

```sql
CREATE PROCEDURE GetSales (@Year INT)
AS
SELECT SUM(Amount) AS TotalSales FROM Sales WHERE OrderYear = @Year;
GO;
```

In what situation must use:
Stored procedures are useful when you have complex SQL run frequently,
when you need to enhance security,
or when you want to reduce network traffic.

Pros:

1. Improved performance.
2. Code reusability.
3. Reduced network usage.
4. Enhanced security control.

Cons:

1. Can be database-specific.
2. Handling of errors can be challenging.
3. Debugging can be complex.

</details>

[//]: # (Can you provide a detailed explanation 
         and examples of triggers in databases?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide a detailed explanation 
            and examples of triggers in databases?
        </b>
    </summary>
<br>

A trigger is a procedural code automatically executed
in response to certain events.

Triggers can be used to maintain integrity rules,
log changes, or replicate data.

There are mainly two types of triggers based on triggering event:

1. Data Modification Language Triggers (DML Triggers)
   which include INSERT, UPDATE, and DELETE triggers.
   These get executed when data is modified.

2. Data Definition Language Triggers (DDL Triggers)
   which include CREATE, ALTER, and DROP triggers.
   These get invoked when a structure of a database object changes.

Additionally, each of these triggers can be defined
to fire before/after the event, leading to "BEFORE" or "AFTER" triggers.
Some databases also support "INSTEAD OF" triggers
which replace the triggering event with actions defined within the trigger.

```sql
CREATE OR REPLACE FUNCTION log_order_update() RETURNS TRIGGER AS $$
BEGIN
   INSERT INTO order_update_log (order_id, updated_at) 
   VALUES (OLD.order_id, now());
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER order_update_trigger
AFTER UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION log_order_update();
```

In what situation must use: Triggers are useful when you need
to automate a response to a change or event occurring in
the database, such as changes in data or schema,
or during certain database operations.

Pros:

1. They can enforce complex business rules at the database level.
2. They encapsulate logic in the database, improving efficiency.
3. They maintain data integrity and validity
   by automatically checking or changing data.

Cons:

1. It Can lead to unexpected results if not properly managed.
2. It Can negatively impact performance, as they run every
   time the triggering event occurs.
3. It Can be hard to debug and troubleshoot due to their automatic nature.

</details>

[//]: # (Can you provide a detailed explanation 
         and examples of cursors in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide a detailed explanation 
            and examples of cursors in SQL?
        </b>
    </summary>
<br>

A cursor in SQL is a database object used to retrieve rows
from a result set one at a time,
instead of the batch operations performed by typical SQL queries.

Think of a cursor as a pointer to a row in a result set.
The cursor can only reference one row at a time,
but can move to other rows of the result set as needed.

```sql
DECLARE @name VARCHAR(50);
DECLARE sample_cursor CURSOR FOR
SELECT name
FROM students;

OPEN sample_cursor;
FETCH NEXT FROM sample_cursor INTO @name;

WHILE @@FETCH_STATUS = 0
BEGIN
   PRINT @name;
   FETCH NEXT FROM sample_cursor INTO @name;
END;

CLOSE sample_cursor;
DEALLOCATE sample_cursor;
```

Here are key points in defining and using a cursor:

- DECLARE: the cursor is declared and the SQL query for the cursor is defined,
- OPEN: the cursor is opened, and the query is executed,
- FETCH NEXT: retrieves the next row present in the cursor,
- @@FETCH_STATUS: global variable set by SQL server
  to 0 if the last fetch retrieved a row, or to -1
  if no more rows are available,
- CLOSE: close the cursor,
- DEALLOCATE: deallocates memory that cursor was using.

When to Use Cursors: Cursors could be useful when you need to operate
on each row individually rather than applying an
operation to the entire set of data
(like updating based on previous rows data).

Pros:

1. Ability to perform complex logic on a row-by-row basis.
2. Useful for calculations that reference previous or next rows.

Cons:

1. Generally slower and require more resources than SQL set operations.
2. Risk of excessive server load if used unwisely.
3. Requires explicit cursor management (OPEN, FETCH, CLOSE).

</details>
