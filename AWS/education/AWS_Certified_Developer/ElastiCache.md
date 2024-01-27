<h1>ElasticCache</h1>
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]:# (What is ElasticCache?)

<details>
    <summary>
        <b><big><big>
            What is ElasticCache?
        </big></big></b>
    </summary>

Amazon ElastiCache is a web service that simplifies the setup, 
operation, and scaling of a distributed cache in the cloud. 
It is compatible with Redis and Memcached, providing real-time, 
cost-optimized performance for modern applications.

ElastiCache can scale to hundreds of millions of 
operations per second with microsecond response times, 
and offers enterprise-grade security and reliability.
It allows you to add a cache for frequently read data 
to maximize resources and lower the total cost of ownership

</details>
<br>

[//]:# (ElasticCache – Redis vs Memcached)

<details>
    <summary>
        <b><big><big>
            ElasticCache – Redis vs Memcached?
        </big></big></b>
    </summary>

Often, we think about caching to improve
performance while processing a large amount of data.

**Memcached is a distributed memory caching
is well-suited as a cache or a session store.
(For storing larger datasets, Memcached can perform better than Redis)**

Choose Memcached if the following apply for you:

- You need the simplest model possible.
- You need to run large nodes with multiple cores or threads.
- You need the ability to scale out and in,
  adding and removing nodes as demand on your system increases and decreases.
- You need to cache objects.

**Redis is an in-memory data structure store
useful as a cache, database, message broker, and queue.
(Redis uses a single core and shows better performance in storing small datasets)**

Choose Redis if the following apply for you:
- You want to use Redis Functions, Sharded Pub/Sub, or Redis ACL improvements
- You want the ability to tier data between memory and SSD
- You want to authenticate users with role-based access control
- Supports both encryption and dynamically adding or removing shards from your Redis
- You need geospatial indexing
- You don't need to support multiple databases
- You need to sort or rank in-memory datasets.
- You need backup and restore capabilities.

https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SelectEngine.html

</details>
<br>

[//]:# (ElastiCache – Cache Security)

<details>
    <summary>
        <b><big><big>
            ElasticCache – Cache Security
        </big></big></b>
    </summary>

Amazon ElastiCache provides several security measures:

* **Shared Responsibility Model:** Security is a shared responsibility 
between AWS and the user. 
AWS is responsible for protecting the infrastructure that 
runs AWS services in the AWS Cloud. 
The user is responsible for security in the cloud, 
including the sensitivity of their data, their company’s requirements, 
and applicable laws and regulations.


* **Data Protection:** Amazon ElastiCache provides data protection features. 
All backups are written to Amazon Simple Storage Service (Amazon S3), 
which provides durable storage.


* **Identity and Access Management:** Amazon ElastiCache allows you 
to control who can access your ElastiCache resources.


* **Compliance Validation:** Amazon ElastiCache meets the requirements
of various compliance programs.


* **Infrastructure Security:** Amazon ElastiCache benefits from a 
data center and network architecture built to meet the
requirements of the most security-sensitive organizations.

  
* **Automatic Backups:** ElastiCache for Redis clusters 
should have automatic backup enabled.


* **Auto Minor Version Upgrade:** ElastiCache for Redis cache 
clusters should have auto minor version upgrade enabled.

https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-security.html
https://docs.aws.amazon.com/securityhub/latest/userguide/elasticache-controls.html

</details>
<br>

[//]:# (ElastiCache Replication)

<details>
    <summary>
        <b><big><big>
            ElasticCache Replication
        </big></big></b>
    </summary>

Amazon ElastiCache implements replication in two ways:

- **Redis (Cluster Mode Disabled):** This mode has a single shard 
that contains all of the cluster’s data in each node. 
Each shard in a replication group has a single read/write 
primary node and up to 5 read-only replica nodes. 
Applications can read from any node in the cluster, 
but can write only to the primary node. 
Asynchronous replication mechanisms are used 
to keep the read replicas synchronized with the primary.

![](https://docs.aws.amazon.com/images/AmazonElastiCache/latest/red-ug/images/ElastiCacheClusters-CSN-Redis-Replicas.png)

- **Redis (Cluster Mode Enabled):** This mode has data partitioned 
across up to 500 shards.
Each shard in a replication group has a single read/write primary node 
and up to 5 read-only replica nodes. 
You can create a cluster with a higher number of shards and a lower number 
of replicas totaling up to 90 nodes per cluster. 
The node or shard limit can be increased to a maximum of 500 per cluster 
if the Redis engine version is 5.0.6 or higher.

![](https://docs.aws.amazon.com/images/AmazonElastiCache/latest/red-ug/images/ElastiCacheClusters-CSN-RedisClusters.png)

In both modes, when you add a read replica to a cluster, 
all of the data from the primary is copied to the new node. 
From that point on, whenever data is written to the primary, 
the changes are asynchronously propagated to all the read replicas.

To improve fault tolerance and reduce write downtime, 
enable Multi-AZ with Automatic Failover for your Redis 
(cluster mode disabled) cluster with replicas. 
For more information, see Minimizing downtime in ElastiCache for Redis with Multi-AZ1.

https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.Redis.Groups.html
https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.html
https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.CreatingRepGroup.html

</details>
<br>

[//]:# (ElastiCache Caching strategies)

<details>
    <summary>
        <b><big><big>
            ElasticCache Caching strategies
        </big></big></b>
    </summary>

<h3>Lazy Loading / Cache-Aside / Lazy Population</h3>

![](https://miro.medium.com/max/1400/1*pP5PWsso59895EZ8BUYrFw.png)

**Pros:**

- Only requested data is cached (the cache is not filled with unused data)
- Node failures are not fatal (the delay for warming up the cache is just increased)

**Minuses**

- Penalty for a cache miss that results in 3 round trips,
  noticeable delay for this request.
- Stale data: Data may be updated in the database and stale in the cache.

<h3>Write Through - adding or updating the cache when
database update</h3>

![](https://miro.medium.com/max/686/1*4c2gEZR3yXkr48lhR5vO2w.png)

**Pros:**

- Data in the cache never becomes stale, reading is fast
- Write penalty vs. read penalty (each write requires 2 calls)

**Minuses:**

- Missing data until it is added/updated to the database.
- Caching - most of the data will never be read.

<h3>Best method</h3>
The best method is a combination of write-through and lazy loading because
different types of data should be written to cache under different circumstances

</details>
<br>

[//]:# (ElastiCache сache Evictions and Time-to-live [TTL])

<details>
    <summary>
        <b><big><big>
            ElasticCache Cache Evictions and Time-to-live (TTL)
        </big></big></b>
    </summary>

**Deleting the cache can occur in three ways:**

- You are explicitly removing the item from the cache
- The item was deleted because the memory is full and has not been used for a long time (LRU).
- You set the item's time to live (or TTL).

**TTL is useful for any data type:**

- TTL can vary from a few seconds to hours or days.
- If there are too many evictions due to memory, you should scale up or down.

</details>
<br>