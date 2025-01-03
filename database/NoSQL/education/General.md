<h1>NoSQL</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (Can you explain what NoSQL is and how it differs 
        from traditional SQL databases?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain what NoSQL is and how it differs 
            from traditional SQL databases?
        </b>
    </summary>
<br>

It's a type of database architecture designed to store,
retrieve and manage data in ways that go beyond
the capabilities of traditional Relational Database Management Systems (RDBMS)
that use SQL (Structured Query Language).

Traditional SQL databases, like MySQL, Oracle, and PostgresSQL,
have a highly structured, table-based format.
They are designed to handle structured data in a reliable,
efficient way using ACID (Atomic, Consistent, Isolated, Durable) properties,
making them a great fit for complex queries and transactions.

NoSQL databases, on the other hand, are designed
to handle unstructured data — a common need in the era of big data
and real-time web applications.
They are typically used when large amounts of data need
to be stored and retrieved and where the data's nature
does not require a relational model.

Here are some key differences:

1. Data Structure: SQL databases are table-based, while NoSQL databases
   can be document-based, key-value pairs, wide-column stores, or graph-based.

2. Schema: SQL databases have a pre-defined schema,
   while NoSQL databases have dynamic schemas for unstructured data.

3. Scalability: SQL databases are typically scaled by enhancing the hardware
   (vertical scaling),
   while NoSQL databases are designed to expand across systems (horizontal scaling).

4. Transactions: Most SQL databases adhere to ACID properties,
   while NoSQL databases prioritize performance and scalability
   over transactional consistency,
   embracing the BASE (Basically Available, Soft state, Eventual consistency) model.

In what situation must use: NoSQL databases are a good choice
when dealing with large volumes of unstructured data,
require high write loads, or need to scale horizontally across servers.

Pros:

1. Highly scalable and distributed architecture.
2. Flexible data model for unstructured data.
3. High performance for simple queries and large data loads.

Cons:

1. Limited transactional consistency compared to ACID-compliant SQL databases.
2. Query capabilities are often not as advanced as SQL queries.
3. Documentation and community support may not be as robust as for SQL databases.

</details>

[//]: # (In which situations should you choose a 
        particular type of NoSQL database?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            In which situations should you choose a 
            particular type of NoSQL database?
        </b>
    </summary>
<br>

Choosing the right type of NoSQL database depends largely
on your data structure, the nature of your queries,
and the size of your data.

Here are some general guidelines:

1. Document Store: If your application needs to handle a
   vast volume of diverse data types,
   and your data doesn't adhere to a strict schema,
   then a document store like MongoDB might be ideal.
   They're great when the data can be grouped together in a way
   best represented in JSON format.

2. Key-Value Store: If your application needs to handle
   a large amount of data and perform simple read/write operations using a key,
   consider a key-value store like Redis.
   These databases are exceptional for caching solutions, session management,
   and maintaining user profiles or preferences.

3. Column Store: If you need scalability, high performance,
   and you have to organize massive amounts of data across many machines,
   consider using a Column Store like Cassandra.
   They're excellent for Big Data solutions where a written load is heavy
   and the data can be grouped into loose clusters of related items.

4. Graph-Based: If your data contains complex relationships
   and the need to traverse associations is central to your application,
   a graph database like Neo4J could be beneficial.
   They're remarkably powerful when working with social networks,
   recommendation engines, or any scenario where
   relationships and associations are of paramount importance.

</details>

[//]: # (Could you explain the methods 
        used to ensure data consistency in a NoSQL database?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Could you explain the methods 
            used to ensure data consistency in a NoSQL database?
        </b>
    </summary>
<br>

Ensuring data consistency in NoSQL databases is a significant challenge,
particularly because many NoSQL databases
prioritize scalability and performance over strict consistency.

However, several techniques can be used to improve data consistency:

1. Eventual Consistency: Many NoSQL databases follow
   an eventual consistency model.
   This means that they allow temporary inconsistencies,
   but guarantee that the system will eventually become consistent.

2. Tunable Consistency: Some NoSQL databases, such as Cassandra and Couchbase,
   offer tunable consistency.
   This allows you to choose the level of consistency vs performance trade-off
   for each transaction.
   For example, you can configure the database to ensure
   consistency across multiple nodes before a write is considered successful.

3. Using Transactions: Transactions in the database can ensure consistency,
   but not all NoSQL databases support them.
   For those that do, like MongoDB, they can be a valuable tool
   for maintaining consistency.

4. Sharding Strategy: Managing the way data is sharded
   (distributed across multiple servers) can also help ensure consistency.
   The data partitioning strategy and choice of the sharding
   key can play important roles.

5. Read & Write Concern: In databases like MongoDB,
   you can set specific 'read' and 'write' concern levels to ensure consistency.
   A written concern dictates how many replica set members
   must confirm the receipt of a write operation before acknowledging
   the success of the operation.

6. Using Change Data Capture: Streaming platforms (like Apache Kafka)
   with Change Data Capture can propagate data and
   corresponding schema changes in real-time events
   from one application/database to the NoSQL database.

</details>

[//]: # (Can you provide an explanation 
        of how indexing is handled in a NoSQL database?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide an explanation 
            of how indexing is handled in a NoSQL database?
        </b>
    </summary>
<br>

Indexing in NoSQL databases varies based on the specific type of database.
Nonetheless, they all support some form of indexing to improve query performance. Here's how it generally works in
different kinds of NoSQL databases:

1. Document Store (such as MongoDB) -
   In MongoDB, you can index any field in a document.
   By default, MongoDB creates an index on the _id field.
   You can create additional indexes to support your query patterns.
   For example, if your application frequently queries the "name" field,
   having an index on "name" can considerably speed up these queries.

2. Key-Value Store (such as Redis) — the key generally indexes These databases.
   For more complex querying, Redis, for instance,
   offers additional data structures like sorted sets
   and lists that can be used for indexing purposes.

3. Column Store (such as Cassandra) - In Cassandra,
   primary key is mandatory for each table
   and it is used for partitioning and ordering the data.
   These primary keys and clustering columns essentially serve
   as an index for efficient data lookups.

4. Graph Databases (such as Neo4j) -
   Graph databases support indexes typically on node labels
   and relationship types, which significantly speed up graph traversal queries.

One important thing to remember in NoSQL databases is that unlike
in SQL databases, indexes do not always result in performance improvement.
Depending on the database type, the storage, and the query patterns,
unnecessary indexes can sometimes even lead to decreased performance.

</details>

[//]: # (Can you explain the difference between 
        sharding and replication in a database?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference between 
            sharding and replication in a database?
        </b>
    </summary>
<br>

Sharding and replication are two different techniques
used in database systems to improve performance,
ensure data availability, and enhance data management.

1. Sharding: This is a method of splitting and storing
   a single logical dataset in multiple databases.
   Essentially, sharding involves breaking up a large database into smaller,
   more manageable parts ('shards'),
   and then distributing these shards across multiple physical servers.
   Sharding can greatly improve the performance of a database
   because operations are executed on a smaller subset of data.

   Moreover, as a database load is distributed across multiple servers,
   sharding can help to remove bottlenecks and allow for horizontal scaling.


2. Replication: Replication involves maintaining copies
   of the same data on multiple machines, which can be within the
   same physical location or geographically distributed.

   The main goal of replication is to improve data availability
   and durability.
   If one server fails, other servers can continue serving data.

</details>

[//]: # (Can you provide a comprehensive 
        explanation on securing a NoSQL database?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide a comprehensive 
            explanation on securing a NoSQL database?
        </b>
    </summary>
<br>

Securing a NoSQL database involves multiple strategies 
and practices to protect the data, similar to securing any digital assets. 

Here are a few general strategies:

1. Authentication: Enforce username/password credentials 
to verify the identity of users before granting access to the database.

2. Access Control: Implement role-based access control (RBAC) 
to define roles and permissions for users. 
It’s best to adhere to the principle of the least privilege (POLP),
giving users the minimum levels of access necessary to accomplish their tasks.

3. Encryption: Use encryption for data at rest as well 
as during transit to protect sensitive data. 
Many NoSQL databases support Transport Layer Security (TLS) 
or Secure Sockets Layer (SSL) for encrypting data in transit.

4. Auditing: Enable logging and monitor database activity. 
Regular audits can help detect suspicious activities and anomalies,
which can alert you to possible security breaches.

5. Backups: Regularly back up your NoSQL database. 
While this doesn’t directly secure your databases, 
it’s an essential safety net if a security breach results in data loss.

</details>

[//]: # (Can you explain the ways to optimize 
        the performance of a NoSQL database?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the ways to optimize 
            the performance of a NoSQL database?
        </b>
    </summary>
<br>

Performance optimization of a NoSQL database depends 
on the specific database type, its configuration, 
and the nature of the workload. 

1. Sharding: Distributing data across multiple machines, 
or sharding, can improve the performance and scalability of a NoSQL database.
Be mindful of the choice of shard key to ensure
distributed and balanced load across shards.

2. Indexing: Proper indexing can drastically speed up 
read operations by minimizing the number of disk I/O operations. 
But remember, indexes should be used judiciously 
as maintaining indexes imposes additional overhead on write operations.

3. Denormalization: Unlike relational databases, 
NoSQL databases often encourage data denormalization, 
which can lead to faster queries by reducing the need for join.

4. Caching: To improve read performance, 
frequently accessed data can be cached in memory 
(for example, using Redis or Memcached), 
reducing the need to interact with the disk.

5. Tuning Configurations: 
Tune database configurations according to the specific workload and hardware.
For instance, efficiently setting parameters like heap size, 
garbage collection strategy can affect overall performance.

6. Compression: Using compression techniques 
can save storage space and reduce I/O operations.

7. Query Optimization: Ensure that queries are optimized and efficient. 
This could mean avoiding full collection scans 
and using projections to return only the necessary data.

8. Monitoring: Regularly monitor the performance 
of your database using the tools supplied by the NoSQL vendor. 
This can help identify potential bottlenecks and areas that can be improved.

</details>
