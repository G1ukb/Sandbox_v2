<h1> RDS </h1>
<h4> 

[Back to menu](..%2F..%2FMenu.md)

</h4>

[//]:# (What is RDS?)

<details>
    <summary>
        <b><big><big>
            What is RDS?
        </big></big></b>
    </summary>

RDS stands for Relational Database Service. (Relational Database Service)

**This is a managed database service for databases using SQL as the query language.**

This allows you to create databases in the cloud that are managed by AWS.
Supported languages include:
-Postgres
- MySQL
  -MariaDB
  -Oracle
- Micr. SQL Server
- Aurora (AWS proprietary database)

**Advantage of using RDS over deploying a database on EC2**
- RDS is a managed service
- Automatic change promotion, patch deployment
- Continuous backup and restore with specific timestamp
- Dashboards
- Read replicas to improve read performance
- Multi-AZ setup for disaster recovery (disaster recovery)
- Possibility of scaling (vertical and horizontal)
- Storage with EBS support (gp2 or io1)
- **BUT you cannot connect to your instances via SSH** (Although I did it with MYSQL)

**RDS Backups**
- Daily full database backup (during maintenance period)
- Transaction logs are backed up by RDS every 5 minutes.
- => possibility of recovery at any point in time
  (from oldest backup to 5 minutes ago)
- Shelf life 7 days (can be increased to 35 days)
- **can create DB Snapshots:**
  - Launched manually by the user
  - Save backup for as long as you want

**Automatic storage scaling**
- Helps to increase the storage capacity of your RDS DB instance. Dynamically
- When RDS detects that you are running out of free database
  storage, scales automatically
- Avoid manually scaling database storage.
- You need to set the maximum storage threshold (maximum limit for DB storage)
- Automatically change storage if:
  - Free storage is less than 10% of allocated storage.
  - Storage shortage lasts for at least 5 minutes.
  - 6 hours since last change
  - Useful for applications with unpredictable workloads
  - Supports all RDS database engines (MariaDB, MySQL, PostgreSQL, SQL Server, Oracle)
</details>
<br>

[//]:# (What is RDS Read replicas? Read replicas vs Multi AZ vs Multi-Region deployments?)

<details>
    <summary>
        <b><big><big>
            What is RDS Read replicas? Read replicas vs Multi AZ?
        </big></big></b>
    </summary>

Amazon RDS Read Replicas provide enhanced performance and durability 
for Amazon RDS database (DB) instances. 
They make it easy to elastically scale out beyond the capacity 
constraints of a single DB instance for **read-heavy database workloads**. 

You can create one or more replicas 
of a given source DB Instance and serve high-volume application
read traffic from multiple copies of your data

![img](https://d1.awsstatic.com/asset-repository/read-replicas-scaling-disaster-recovery.3b8da7093daeb1e87426225caf49e32efe7ae01a.png)

Read replicas vs Multi AZ vs Multi-Region deployments

Multi-AZ deployments
  - **Main purpose is high availability**

Multi-Region deployments
  - **Main purpose is disaster recovery and local performance**

Read replicas
  - **Main purpose is scalability**

https://aws.amazon.com/rds/features/read-replicas/?nc1=h_ls

</details>
<br>

[//]:# (What is RDS pricing?)

<details>
    <summary>
        <b><big><big>
            What is RDS pricing?
        </big></big></b>
    </summary>

Amazon charges for RDS hours
For its memory and allocated reserved memory

Also:
AWS **does not charge** for data that goes **within one region**
(for example, there is no charge between us-west-1a and us-west-1b)

If **data goes to different regions, AWS will charge a fee**
(for example between us-west-1a and us-east-1b)

</details>
<br>

[//]:# (What RDS operational [maintenance, monitoring] practices do you know?)

<details>
    <summary>
        <b><big><big>
            What RDS operational (maintenance, monitoring) practices do you know?
        </big></big></b>
    </summary>

Amazon describes the following use cases:
- Advertising technologies (clickstreams, user events and user profiles)
- Games (leader lists, player data stores and game states).
- Retail (online shopping carts, reservation tracking and customer profiles)
- Banking and finance (event-based transaction processing,
  fraud detection and altered data collection).
- Media and entertainment (digital rights management, user storage
  data and metadata repositories).
- Software as a service (SaaS) - content metadata repositories,
  metadata caches and relationship graph data stores.

</details>
<br>

[//]:# (What about RDS Encryption? How we can get encrypted DB from decrypted?)

<details>
    <summary>
        <b><big><big>
            What about RDS Encryption? How we can get encrypted DB from decrypted?
        </big></big></b>
    </summary>

**RDS encryption:**
- Encryption at rest
- Ability to encrypt master and read replicas using AWS KMS - AES-256 encryption.
- Encryption must be defined at startup time. (When creating, 
choose whether to encrypt or not)
- If the master is not encrypted, read replicas cannot be encrypted.
- Transparent Data Encryption TDE is available for Oracle and SQL Server.
  (This is a special encryption method for Microsoft products)

**In-flight encryption**
- SSL certificates for RDS data encryption during flight
- Provide SSL options with a trusted certificate when connecting to the database.
- To force the use of SSL:
  - PostgreSQL: rds.force_ssl=1 in AWS RDS console (parameter groups).
  - MySQL: inside the database:
    GRANT USAGE ON *.* TO 'mysqluser'@'%' REQUIRE SSL;

**RDS encryption operations**
- Encryption of RDS backups
- Snapshots of unencrypted RDS databases are not encrypted.
- Snapshots of encrypted RDS databases are encrypted
- Can copy a snapshot to an encrypted one

**To encrypt an unencrypted RDS database:**
- Create a snapshot of an unencrypted database.
- Copy the photo and enable encryption for the photo.
- Restore database from encrypted snapshot
- Transferring applications to a new database and deleting the old database.

</details>
<br>

[//]:# (What about RDS Security – Network & IAM?)

<details>
    <summary>
        <b><big><big>
            What about RDS Security – Network & IAM?
        </big></big></b>
    </summary>

**Network Security**
- RDS databases are typically deployed on a private subnet rather than a public subnet.
- RDS security works through the use of **security groups**
  (same concept as for EC2 instances) -
  controls which IP/security group can communicate with RDS

**Access Control**
- IAM policies help control who can manage AWS RDS (via the RDS API).
- You can use your traditional username and password to log into the database.
- IAM based authentication can be used to login to RDS MySQL and PostgreSQL.

**RDS - IAM authentication**
- IAM database authentication works with MySQL and PostgreSQL
- You don't need a password, just an authentication token obtained through IAM and RDS API calls
- The authentication token expires after 15 minutes.

**Advantages**
- Network input/output must be encrypted using SSL.
- IAM for centralized user management instead of database
- Can use IAM roles and EC2 instance. profiles for easy integration

</details>
<br>

[//]:# (What is difference between OLTP and OLAP?)

<details>
    <summary>
        <b><big><big>
            What is difference between OLTP and OLAP?
        </big></big></b>
    </summary>

OLTP - Online Transaction Processing - processes data from
  transactions in ral-time

OLAP - Online Analytics Processing - process queries to analuze 
  historical data

</details>
<br>

[//]:# (Is RDS suitable for OLTP and OLAP?)

<details>
    <summary>
        <b><big><big>
            Is RDS suitable for OLTP and OLAP?
        </big></big></b>
    </summary>

Yes for OLTP (because of transactions processing)

No for OLAP (there are another services for processing data analysis (RedShift))

</details>
<br>

[//]:# (What is RDS Proxy? How we can increase ab availability?)

<details>
    <summary>
        <b><big><big>
            What is RDS Proxy? How we can increase ab availability?
        </big></big></b>
    </summary>

RDS Proxy have these pluses: 
- Serverless and scales automatically database connections
- Preserves app connections during failover
- Detects fail-over and routes requests
- Deployable over Multu-AZ

</details>
<br>

[//]:# (What is MemoryDB?)

<details>
    <summary>
        <b><big><big>
            What is MemoryDB? (Used in redis) ElastiCache vs MemoryDB
        </big></big></b>
    </summary>

1. In-Memory Database
2. Use cases - online gaming with millions users
3. MemoryDB vs ElastiCashe
  MemoryDB store whole dataset in memory without database
  ElastiCache is an in-memory cache for DBs
  
</details>
<br>

[//]:# (How RDS DB snapshot works?)

<details>
    <summary>
        <b><big><big>
            How RDS DB snapshot works?
        </big></big></b>
    </summary>

1. User initiated
2. Point-in-time snapshot
3. no retention period
4. used to back up your DB instance to a known state and restore
   to that specific state at any time

</details>
<br>

[//]:# (What two steps should you take to reduce the RDS CPU utilization?)

<details>
    <summary>
        <b><big><big>
            What two steps should you take to reduce the RDS CPU utilization?
        </big></big></b>
    </summary>

1. Create an ElastiCache cluster and use this to cache your most
   frequently read blog posts.
2. Create multiple RDS read replicas and point multiple EC2 
   instances to these read replicas, thereby spreading the load.

Amazon ElastiCache improves the performance of web applications 
  by allowing you to retrieve information from a fast,
  managed, in-memory system, instead of relying entirely on slower 
  disk-based databases.

Amazon RDS Read Replicas make it easy to elastically scale out beyond 
  the capacity constraints of a single DB instance for read-heavy 
  database workloads.

</details>
<br>

[//]:# (Can we encrypt an existing AMI that is unencrypted? what we should do?)

<details>
    <summary>
        <b><big><big>
            Can we encrypt an existing AMI that is unencrypted? what we should do?
        </big></big></b>
    </summary>

You cannot add encryption to an existing AMI. 
Instead, you will need to create a copy and specify that the copy has encryption enabled.

</details>
<br>

[//]:# (How we improve performance of RDS db?)

<details>
    <summary>
        <b><big><big>
            How we improve performance of RDS DB?
        </big></big></b>
    </summary>

- ElastiCache for **Memcached** can be used to improve read performance of databases;
but it does not have the ability to sort and rank query results.
- ElastiCache for **Redis** can be used to improve read performance of databases, 
and it also has the ability to sort and rank query results.
- Add a read replica to improve performance for read queries.
(A read replica will improve performance for read-only queries
to an RDS database.)

</details>
<br>

[//]:# (RDS vs DynamoDB?)

<details>
    <summary>
        <b><big><big>
            RDS vs DynamoDB?
        </big></big></b>
    </summary>

RDS is relative db like MySQL, postgresSQl
  - not so high scalability as DynamoDB
  - Amazon RDS provides a cost-effective way to manage relational databases in the cloud

DynamoDB is a key-value and document database 
that delivers single-digit millisecond performance at any scale.
  - features flexibility, scalability, and performance.
  - offers high availability out of the box with no need for setup or configuration.
  - automatically replicates your data across multiple Availability Zones

https://cloudacademy.com/blog/amazon-rds-vs-dynamodb-12-differences/

</details>
<br>

[//]:# (S3 vs DynamoDB?)

<details>
    <summary>
        <b><big><big>
            S3 vs DynamoDB?
        </big></big></b>
    </summary>

S3 is a storage solution suitable for images, 
documents, and other files or objects that can be accessed 
by multiple users and services.

DynamoDB is a NoSQL database and not a 
suitable place to store images and text documents.

</details>
<br>