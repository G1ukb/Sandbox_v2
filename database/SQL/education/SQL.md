<h1>SQL</h1> 
<h4> 

[Back to menu](../Menu.md)

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

    ```
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

    ```
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

```
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

   ```
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

   ```
   SELECT Orders.order_id, Customers.customer_name
   FROM Orders
   LEFT JOIN Customers
   ON Orders.customer_id = Customers.customer_id;
   ```

3. RIGHT JOIN (or RIGHT OUTER JOIN): This is the opposite of a LEFT JOIN.
   It returns all rows from the right table, and
   matching rows from the left table.

   Example:

   ```
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

   ```
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
   ```
   SELECT EmployeeName, Age 
   FROM Employees 
   WHERE Age > (SELECT AVG(Age) FROM Employees);
   ```

2. Multiple-column Subquery: This subquery returns multiple columns and
   is used in the FROM clause.

   Example:

   ```
   SELECT MAX(TotalOrder) AS LargestOrder
   FROM (SELECT SUM(Amount) AS TotalOrder FROM Orders GROUP BY CustomerID) AS sub;
   ```

3. Correlated Subquery: A type of subquery that uses values
   from the outer query in it's WHERE clause.

Example:

```
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

```
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;
```

Once a procedure is created, it can be executed as follows:

```
EXEC procedure_name;
```

Stored procedures can also take in parameters allowing them to be more flexible.

```
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

```
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

```
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
