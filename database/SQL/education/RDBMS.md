<h1>RDBMS</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

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

[//]: # (Can you draw a comparison between RDBSQL and NoSQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you draw a comparison between RDBSQL and NoSQL?
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

[//]: # (What are the various subsets of RDBMS 
         such as DDL, DML, DCL, and TCL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the various subsets of RDBMS 
            such as DDL, DML, DCL, and TCL?
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

[//]: # (Could you differentiate between a Materialized 
         View and View in RDBMS?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Could you differentiate between a Materialized View 
            and View in RDBMS?
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

[//]: # (What does column indexing mean in RDBMS?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What does column indexing mean in RDBMS?
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

[//]: # (What are the different types of indexes in RDBMS?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the different types of indexes in RDBMS?
        </b>
    </summary>
<br>

1. **B-Tree Indexes:**

* default key


* **Working:** When searching for a value, the index is traversed 
from the root node to the leaf node containing the desired key. 
This allows for efficient searching by eliminating the need 
to scan the entire table.


* **Best for:** Equality and range queries, sorting, and grouping.

2. **Hash Indexes:**

* **Working:** When searching for a value, the hash function is used 
to calculate the bucket location for the key. 
The index then directly accesses the corresponding bucket to retrieve 
the data pointer.


* **Best for:** Equality queries, where the exact value of a key is known.

3. **Bitmap Indexes:**

* **Working:** When searching for a value, 
the bitmap index is used to identify the rows that contain the desired value. 
This allows for efficient filtering of rows without accessing the actual data.


* **Best for:** Queries involving multiple equality conditions
on the same column.

4. **Full-Text Indexes:**

* **Structure:** A full-text index is used to store 
and search for words or phrases within text data. 
It typically uses inverted indexes, which map words 
to lists of document IDs where they appear.

5. **Spatial Indexes:**

* **Structure:** A spatial index is used to store and search for geometric data, 
such as points, lines, and polygons.
It typically uses R-tree or GiST structures to efficiently 
organize and search spatial data.


* **Working:** When searching for spatial data, the spatial 
index is used to identify the objects that intersect 
or are contained within the specified query region. 
This allows for efficient retrieval of relevant spatial data.


* **Best for:** Queries involving spatial relationships, 
such as finding points within a certain distance 
or polygons that intersect with each other.

6. **GIN (Generalized Inverted Index)** is a type of index in PostgreSQL 
designed for efficient full-text search and complex data types 
like arrays and JSON. 
It uses an inverted index structure, 
which maps words or values to lists of document IDs where they appear. 
This allows for fast retrieval of relevant data based on specific 
keywords or values.

</details>

[//]: # (In the context of RDBMS, what does ACID stand for?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            In the context of RDBMS, what does ACID stand for?
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
        in RDBMS and what issues might arise with each?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the different isolation levels
            in RDBMS and what issues might arise with each?
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

[//]: # (What are the rules for setting indexes in PostgreSQL?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the rules for setting indexes in PostgreSQL?
        </b>
    </summary>
<br>

Rules for Setting Indexes in PostgreSQL:

**1. Choose the right columns:**

* **Uniqueness:** Indexes are most effective on columns with unique values 
or a high degree of uniqueness.
* **Selectivity:** Columns used in WHERE clauses or JOIN conditions 
are good candidates for indexing, as they help filter data efficiently.
* **Frequency of use:** Columns that are frequently queried 
are good candidates for indexing, as they can significantly speed up queries.
* Avoid indexing rarely used columns

**2. Consider data types:**

* Indexes work best on data types with fixed length and well-defined ordering, 
such as integers, dates, and strings.
* Indexes on variable-length data types like text or JSON can be less effective.

**3. Use B-tree indexes for most cases:**

* B-tree indexes are the most common and versatile type of index in PostgreSQL. 
They are efficient for both equality and range queries.

**4. Consider other index types for specific needs:**

* **Hash indexes:** Faster for equality queries but not for range queries.
* **GIN indexes:** Efficient for full-text search and complex data types 
like arrays and JSON.
* **GiST indexes:** Efficient for spatial data and geometric queries.

**5. Monitor index usage:**

* Use the `pg_stat_all_indexes` view to monitor index usage 
and identify unused or inefficient indexes.

**6. Consider partial indexes:**

* Partial indexes can be used to index only a subset of rows, 
reducing storage space and improving performance for specific queries.

</details>