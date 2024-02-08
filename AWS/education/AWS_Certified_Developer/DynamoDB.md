<h1>DynamoDB</h1> 
<h4> 

[Back to menu](..%2F..%2FMenu.md)

</h4>

[//]: # (What is DynamoDB?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is DynamoDB?
        </b>
    </summary>
<br>

DynamoDB is a low latency NoSQL database

</details>
<br>

[//]: # (What data models are supported in DynamoDB?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What data models are supported in DynamoDB?
        </b>
    </summary>
<br>

- document
- key-value data model
- JSON
- HTML
- XML

</details>
<br>

[//]: # (Consistency models?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Consistency models?
        </b>
    </summary>
<br>

- Eventually consistent
- Strongly consistent
- DynamoDB consistent

</details>
<br>

[//]: # (Types of PK in dynDB?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Types of PK in dynDB?
        </b>
    </summary>
<br>

- Partition Key (Ключ на поле)
- Composite key (partition key + sort key)

</details>
<br>

[//]: # (How we can control access to dunDB?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How we can control access to dunDB?
        </b>
    </summary>
<br>

- IAM condition parameter
- dynamodb:LeadingKeys (allow user to access only the items 
where the partition key value matches their id)

</details>
<br>

[//]: # (What is flexible querying?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What indexes we have in dynDb? and what is the main difference?
        </b>
    </summary>
<br>

Local Secondary Index
    - must be created when you create table
    - same PK and different sort key to your table

Global Secondary Index
    - can be created any time
    - different PK and different sort key to your table

</details>
<br>

[//]: # (What we can you to find data on tables?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What we can you to find data on tables?
        </b>
    </summary>
<br>

- Use query expression (default)
- Use AWS scan (Scan will form a query for you)

</details>
<br>

[//]: # (Scan vs query?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Scan vs query
        </b>
    </summary>
<br>

A Query request is generally more efficient than a Scan operation. 
Eventual consistency reads use up fewer read capacity 
units than strongly consistent reads.

</details>
<br>

[//]: # (Dynamo DB capacity units?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Dynamo DB capacity units?
        </b>
    </summary>
<br>

Dynamo DB capacity units.
Each capacity gives you opportunity to read or write KB transactions per second

- Write Capacity Units (1 x 1KB write per second)
- Strongly Consistent Reads (1 x 4KB write per second)
- Eventually Consistent Reads (2 x 4KB write per second)

How we can calculate needed units 
Example: 
- you need read 80 items per second
- each item size 3KB
- you are using Strongly Consistent Reads

Calculation: 
- size of each item / size of unit capacity (3/4KB = 0.75)
- round this up to nearest whole value (1)
- multiply by number of read per second (80 read capacity units required)

</details>
<br>

[//]: # (On-Demand Capacity vs Prosivioned Capacity?)

<details>
    <summary style="font-size: 25px;">
        <b>
            On-Demand Capacity vs Provisioned Capacity?
        </b>
    </summary>
<br>

On-Demand Capacity
- For unknown workloads
- For unpredictable application traffic
- For spiky, short-lived peaks
- a pay-per-use model
- it might be difficult to predict cost

Provisioned Capacity
- Read and write capacity req can be predicted
- Predictable application traffic
- Application traffic is consistent or increases gradually
- you have more control over the cost

</details>
<br>

[//]: # (What is dynamoDB Accelerator "DAX"?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is dynamoDB Accelerator "DAX"?
        </b>
    </summary>
<br>

Простыми словами это прослойка которая кеширует часть запросов
И любой API Call идет сначала в DAX и ищет значение в кэше и возвращает

- In-memmory cash for DB
- Improves Responce
- Write operations 
(data is written to rhe cache and the backend store at the same time)
- API call can be pointed at DAX cluster
- Not suitable for read operation applications

</details>
<br>

[//]: # (DynamoDb Stream?)

<details>
    <summary style="font-size: 25px;">
        <b>
            DynamoDb Stream?
        </b>
    </summary>
<br>

- Time ordered Sequence of item (insert, update, delete)
- Logs (encrypted at rest for 24 hours)
- Dedicated Endpoint (access using this endpoint)
- images (before and after images can be captured)

Use cases:
- audit or archive transactions
- trigger an event based transaction
- replicate data across multiple tables

</details>
<br>

[//]: # (What is the API call to retrieve multiple items from a DynamoDB table?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is the API call to retrieve multiple items from a DynamoDB table?
        </b>
    </summary>
<br>

The BatchGetItem operation returns the attributes of one or
more items from one or more tables

</details>
<br>

[//]: # (In DynamoDB, a scan operation is used to:)

<details>
    <summary style="font-size: 25px;">
        <b>
            In DynamoDB, a scan operation is used to?
        </b>
    </summary>
<br>

A Scan operation in Amazon DynamoDB reads every item in a table 
or a secondary index. 
By default, a Scan operation returns all the data attributes 
for every item in the table or index. 
You can use the ProjectionExpression parameter so that 
Scan only returns some of the attributes, rather than all of them.

</details>
<br>

[//]: # (In DynamoDB, a scan operation is used to:)

<details>
    <summary style="font-size: 25px;">
        <b>
            In DynamoDB, a scan operation is used to?
        </b>
    </summary>
<br>

A Scan operation in Amazon DynamoDB reads every item in a table
or a secondary index.
By default, a Scan operation returns all the data attributes
for every item in the table or index.
You can use the ProjectionExpression parameter so that
Scan only returns some of the attributes, rather than all of them.

</details>
<br>

[//]: # (Which service limits can you increase by raising a ticket to AWS support "according to dynamoDB")

<details>
    <summary style="font-size: 25px;">
        <b>
            Which service limits can you increase by raising a ticket to AWS support "according to dynamoDB"
        </b>
    </summary>
<br>

- Read/write capacity mode and throughput
- Reserved Capacity
- Secondary indexes
- DynamoDB transactions
- DynamoDB Streams
- DynamoDB Accelerator (DAX)

</details>
<br>

[//]: # (What kind of query can I get only part of the fields from dynamo db?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What kind of query can I get only part of the fields from dynamo db?
        </b>
    </summary>
<br>

To get only some attributes rather than all, use a **projection expression**.

Because, when using a query or scan, DynamoDB returns all attributes
of an element by default.

</details>
<br>

[//]: # (What is ProvisionedThroughputExceeded error?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is ProvisionedThroughputExceeded error?
        </b>
    </summary>
<br>

ProvisionedThroughputExceeded means that your request rate is too high.

Reduce the frequency of requests using Error Retries and Exponential Backoff.

</details>
<br>

[//]: # (Best practices for querying and scanning data)

<details>
    <summary style="font-size: 25px;">
        <b>
            Best practices for querying and scanning data
        </b>
    </summary>
<br>

- Reduce page size
(Because a Scan operation reads an entire page (by default, 1 MB),
you can reduce the impact of the scan operation by setting a smaller page size.
The Scan operation provides a Limit parameter that you can use to 
set the page size for your request.)
- Isolate scan operations
- Use parallel scans

</details>
<br>

[//]: # (What is exponential backoff algorithm?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is exponential backoff algorithm?
        </b>
    </summary>
<br>

![img](https://docs.aws.amazon.com/images/prescriptive-guidance/latest/cloud-design-patterns/images/retry-backoff-2.png)

</details>
<br>

[//]: # (DynamoDB Streams vs CloudWatch?)

<details>
    <summary style="font-size: 25px;">
        <b>
            DynamoDB Streams vs CloudWatch?
        </b>
    </summary>
<br>

CloudWatch is used to monitor performance metrics 
and collect logs in your AWS environment.

DynamoDB Streams captures a time-ordered sequence of 
modifications that are made to items in a DynamoDB table. 
**It stores the information for a maximum of 24 hours**.

</details>
<br>

[//]: # (How we demonstrate the impact that a failed Availability Zone "AZ" will have on the database?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How we demonstrate the impact that a failed Availability Zone "AZ" will have on the database?
        </b>
    </summary>
<br>

Simulate an AZ failure by performing a reboot 
with forced failover on the RDS instance.

</details>
<br>

[//]: # (What DynamoDB data types can the developer use for their index sort key?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What DynamoDB data types can the developer use for their index sort key?
        </b>
    </summary>
<br>

- Number
- Binary
- String

</details>
<br>

[//]: # (What is UnprocessedKeys value that returned from DynamoDB BatchGetItem?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What DynamoDB data types can the developer use for their index sort key?
        </b>
    </summary>
<br>

If a partial result is returned, the operation returns a value for UnprocessedKeys.
You can use this value to retry the operation starting with the next item to get.

**BUT!**

If you request more than 100 items, 
BatchGetItem returns a ValidationException with the message 
"Too many items requested for the BatchGetItem call."

</details>
<br>

[//]: # (BatchGetItem vs Scan?)

<details>
    <summary style="font-size: 25px;">
        <b>
            BatchGetItem vs Scan?
        </b>
    </summary>
<br>

**BatchGetItem**: This operation is used when you know the primary keys 
(partition key and sort key, if applicable) for the items you want to retrieve. 
It’s a convenient way of retrieving multiple items at once, 
and it’s more efficient in terms of network traffic savings. 
However, if you only have partial information about an item,
you can’t use BatchGetItem

**Scan:** This operation examines every item in the table. 
If you need to retrieve items but you only have partial information about them, 
you would need to use Scan or Query. 
However, performing scans is generally discouraged, 
especially when working with large volumes of data. 
If you know the primary key of the items you’re interested in, 
it’s recommended to use BatchGetItems over doing a scan.

</details>
<br>

---

[//]: # (What we can do to get more items from BatchGetItem low-level API operation?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What we can do to get more items from BatchGetItem low-level API operation?
        </b>
    </summary>
<br>

We have 2 possible options:

1. Set retry of the batch operation with exponential backoff and randomized delay
2. Increase the provisioned read capacity of the DynamoDB tables 
that the operation accesses

or

1. Update the application to use an AWS software development kit
(AWS SDK) to make the requests.

</details>
<br>
