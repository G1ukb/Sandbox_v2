<h1>Infrastructure Design</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (How does the choice of architecture impact 
         the scalability and resilience of a Java application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does the choice of architecture impact 
            the scalability and resilience of a Java application?
        </b>
    </summary>
<br>

**Monolithic Architecture:**

- **Scalability**: the entire application needs to be scaled even
  if only one function is experiencing increased demand,
  This may result in additional costs.
- **Resilience**: less resilient because if one part of the application fails,
  the entire system can be affected

**Microservices Architecture:**

- **Scalability**: Microservices can be individually scaled
- **Resilience**: Microservices are more resilient because
  they are isolated from each other

**Serverless Architecture:**

- **Scalability**: automatically scale
- **Resilience**: highly available by design.

</details>

[//]: # (What are some of the trade-offs to consider when choosing between 
         synchronous and asynchronous communication 
         in a distributed Java application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are some of the trade-offs to consider when choosing between 
            synchronous and asynchronous communication 
            in a distributed Java application?
        </b>
    </summary>
<br>

**Synchronous**

- Latency: can lead to increased latency
- Complexity: generally easier to implement
- Resource: increased resource cost
- Error Handling: easy to handle
- Ordering: guarantee the order of messages

**Asynchronous**

- Latency: reducing latency
- Complexity: can be more complex to implement correctly
- Resources: better resource optimization
- Error Handling: can be more complex
- Ordering: does not guarantee the order of messages

</details>

[//]: # (Can you discuss some strategies for handling fault 
         tolerance and failover in a distributed Java application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you discuss some strategies for handling fault 
            tolerance and failover and for high availability
            in a distributed Java application?
        </b>
    </summary>
<br>

- Load Balancing (traffic balancing)
- Auto-scaling (perf balancing)
- Health Checks
- Breaker Pattern: (works on Health Checks) stop calling failing downstreams
- Replication
- Transaction Management
- Microservices Architecture
- Container Orchestration: Kubernetes can automatically restart failed services

</details>

[//]: # (How does the choice of database /SQL vs NoSQL/
         impact the architecture of a Java application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does the choice of database /SQL vs NoSQL/
            impact the architecture of a Java application?
        </b>
    </summary>
<br>

SQL:

- Scalability realization: SQL databases are typically scaled vertically
- ACID realization: influence the design to ensure data consistency
- Development Speed and Flexibility:
  Changes in SQL database require altering the schema
- Object Mapping realization: Object-Relational Mapping (ORM)

NoSQL:

- Scalability realization: NoSQL databases are designed to scale horizontally
- ACID realization: handle eventual consistency and relax about acid rules
- Development Speed and Flexibility:
  can store different types of data in different ways,
  So NoSQL is more flexible
- Object Mapping realization: Object-Document Mapper

</details>

[//]: # (How would you approach designing a Java application
         for a cloud-native environment, 
         and what architectural considerations 
         need to be taken into account?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you approach designing a Java application
            for a cloud-native environment, 
            and what architectural considerations 
            need to be taken into account?
        </b>
    </summary>
<br>

- Microservices Architecture
- Containerization
- Orchestration
- Stateless Design
- Configuration and Secrets Management
- CI/CD
- Resilience
- Security

</details>

[//]: # (How can containerization be used in the deployment 
         of Java applications, and what benefits does it provide?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How can containerization be used in the deployment 
            of Java applications, and what benefits does it provide?
        </b>
    </summary>
<br>

- **Isolation:** Each container runs in isolation
- **Scalability** easily scaled up or down based on the demand
- **CI/CD** be built, tested, and deployed into a container
- **Resource Efficiency**
- **Portability** containers include all of their dependencies,
  they can run on any system that supports containerization

</details>

/////////

[//]: # ()
<details>
    <summary style="font-size: 25px;">
        <b>
            ()
        </b>
    </summary>
<br>


</details>
<br>