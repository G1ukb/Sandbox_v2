<h1>SQL</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What is SQL)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
              What is SQL?
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

[//]: # (What is a DBMS)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is a DBMS? Can you add main functions of DBMS?
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

[//]: # (DBMS types)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the different types of Database Management Systems (DBMS)?
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

[//]: # (SQL vs NoSQL)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the differences between SQL and NoSQL databases?
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

[//]: # (What are the subsets of SQL: DDL/DML/DCL/TCL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the subsets of SQL (DDL/DML/DCL/TCL)?
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

[//]: # (Materialized View vs View)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             What is the difference between a Materialized View and a View in SQL?
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

[//]: # (What is column indexing in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is column indexing in SQL?
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

[//]: # (What does ACID stand for in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What does ACID stand for in SQL?
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

[//]: # (What are the isolation levels in SQL and what problems can occur?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the isolation levels in SQL and what problems can occur?
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

[//]: # (What is database normalization and what are its advantages?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is database normalization and what are its advantages?
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

[//]: # (HAVING vs WHERE)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between HAVING and WHERE in SQL?
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

[//]: # (What is the difference between GROUP BY, DISTINCT, and ORDER BY in SQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between GROUP BY, DISTINCT, and ORDER BY in SQL?
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

[//]: # (What is the issue related to toast spaces in PostgreSQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the issue related to toast spaces in PostgresSQL?
        </b>
    </summary>
<br>

TOAST (The Oversized-Attribute Storage Technique) is a mechanism
in PostgreSQL that allows it to handle large data values.

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

////////////////////////////////////////////////////

[//]: # (Функции ранжирования/Выбор четных нечетных записей)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Функции ранжирования/Выбор четных нечетных записей
        </b>
    </summary>
<br>

**Ранжирующие функции** — это функции, которые возвращают значение для каждой строки группы в
результирующем наборе данных.
На практике они могут быть использованы, например, для простой нумерации списка,
составления рейтинга или постраничной выборки.

Результирующие функции:

- **ROW_NUMBER**() OVER ([ORDER BY столбы группировки]) as [Имя полученной колонки]
  Выводит номер получившейся стоки
- **RANK**() OVER (order by column) [RANK]
  возвращает ранг каждой строки. В отличие от row_number(),
  идет уже анализ значений и в случае нахождения одинаковых, функция возвращает одинаковый ранг
  с пропуском следующего.
  (Если найдет одинаковые значения то выведет 1.2.2.2.5.6.7)
- **DENSE_RANK** over (order by column) [DENSE_RANK]
  возвращает ранг каждой строки, но в отличие от rank,
  в случае нахождения одинаковых значений, возвращает ранг без пропуска следующего.
  (Если найдет одинаковые значения то выведет 1.2.2.2.3.4.4)
- **NTILE**(3)over (order by price desc) [NTILE]
  функция Transact-SQL, которая делит результирующий набор
  на группы по определенному столбцу. Количество групп указывается в качестве параметра.

Используя функцию mod

SELECT * FROM Persons WHERE MOD(PersonId, 2) = 1

</details>

[//]: # (Типы JOIN'ов)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Типы JOIN'ов
        </b>
    </summary>
<br>

![atler-text](https://www.techagilist.com/wp-content/uploads/2018/07/sql-joins.png)

</details>

[//]: # (Подзапрос / Типы подзапросов)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Подзапрос / Типы подзапросов
        </b>
    </summary>
<br>

SQL подзапрос — это запрос, вложенный в другой запрос;

По типам запросы используются в:

- В инструкции SELECT;
- В инструкции FROM;
- В условии WHERE.
-

</details>

[//]: # (Хранимые процедуры)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Хранимые процедуры
        </b>
    </summary>
<br>

Хранимые процедуры представляет набор инструкций, которые выполняются как единое целое.
Тем самым хранимые процедуры позволяют упростить комплексные операции
и вынести их в единый объект.

Каждая процедура описывается с помощью BEGIN и END

Пример:

    CREATE PROCEDURE procedure AS
    BEGIN
        SELECT *
        FROM table
    END;

Чтобы вызвать хранимую процедуру используется команда **EXEC** или **EXECUTE**

+ Скорость
+ Логика
+ Код проще
+ Безопасность (она уже скомпилирована)
+ Защита приложния от изменения структуры
+ Процедуры не наш скоуп ответсвеннсти

- Сложность переезда
- Проблема SQL (жесткая привязанность)

</details>

[//]: # (Триггеры)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Триггеры
        </b>
    </summary>
<br>

Триггеры представляют специальный тип хранимой процедуры,
которая вызывается автоматически при выполнении определенного действия над таблицей
или представлением, в частности, при добавлении, изменении или удалении данных,
то есть при выполнении команд INSERT, UPDATE, DELETE.

    CREATE TRIGGER имя_триггера
    ON {имя_таблицы | имя_представления}
    {AFTER | INSTEAD OF} [INSERT | UPDATE | DELETE]
    AS выражения_sql

(В mySQL есть before но нет INSTEAD OF)

Использование:

- добавление процента на товар
- валидация

</details>

[//]: # (Курсоры)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Курсоры
        </b>
    </summary>
<br>

Простыми словами курсоры это forEach по результату выборки

Для того чтобы использовать курсор его надо определить

    --объявляем курсор
    DECLARE my_cur CURSOR FOR 
     SELECT number, pole1, pole2 
     FROM test_table_vrem 
   
    --открываем курсор
    OPEN my_cur
    --считываем данные первой строки в наши переменные
    FETCH NEXT FROM my_cur INTO @number, @pole1, @pole2   
    WHILE @@FETCH_STATUS = 0
    BEGIN
        --на каждую итерацию цикла запускаем нашу основную процедуру с нужными параметрами   
        exec dbo.my_proc_test @number, @pole1, @pole2
        --считываем следующую строку курсора
        FETCH NEXT FROM my_cur INTO @number, @pole1, @pole2
    END
    --закрываем курсор
    CLOSE my_cur

</details>
