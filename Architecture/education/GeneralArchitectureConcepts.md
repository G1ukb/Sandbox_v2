<h1>General Architecture Concepts</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Can you explain the difference between monolithic,
        microservices, and serverless architectures
        in the context of Java applications?)
<br>
<details>
    <summary>
        <b><big><big><big>
            Can you explain the difference between monolithic,
                microservices, and serverless architectures
                in the context of Java applications?
        </big></big></big></b>
    </summary>

1. **Monolithic Architecture:** In a monolithic architecture, 
an application is developed as a single, self-contained entity. 

    All components of the application, such as the user interface, 
    business logic, and data access layer, are closely coupled and deployed as a single unit.
    
    **Advantages**: 
    - Simpler to Develop
    - Easier to Test
    - Efficient Communication Between Components 
    (you can speed up the process and improve performance)
    - Single Deployment Unit
    - Shared Memory Access

    **Disadvantages**:
    - Difficult to Maintain: (all the components are interlinked)
    - In big monolith needed understanding of the entire system. (Bus factor increases)
    - Limited Scalability
    - Slow Deployment Process
    - Changes Affect the Entire System
    - low Resilience: if one part of the application fails,
      the entire system can be affected


2. **Microservices Architecture:** Microservice architecture breaks down 
an application into a collection of small, loosely coupled services. 
Each service focuses on a distinct business feature and is capable of 
independent development, deployment, and scaling

    **Advantages**: 
    - Scalability 
    - Improved Fault Isolation
    - Enhanced Team Productivity (decreased team communication)
    - Quicker Deployment Time (of a single unit)
    - Increased Cost-Efficiency (ability to use resources more effectively)

   **Disadvantages**:
    - Operational Complexity (you need to manage and orchestrate multiple services)
    - Distributed System (higher chance of failure during communication, 
   services need exactly know all business contracts 
   around all upstreams and downstreams)
    - Resource Consumption: (every single unit needs to have runtime environment,
   data storage or other resources)
    - Management of Services (need of complex Orchestration Frameworks)


3. **Serverless Architecture:** Serverless architecture is a design pattern
where applications are hosted by third-party service providers,
who dynamically manage the allocation of machine resources

    **Advantages**: 
    - No Server Management
    - Cost-Efficiency (In perspective that code only runs when backend functions are needed)
    - Automatic Scaling

   **Disadvantages**:
    - Cold Start Problems
    - Lock-In Concerns (high dependence on the ecosystem of other available services)
    - Debugging serverless applications can be challenging

</details>

[//]: # (In what situations, what type you will choose?)
<br>
<details>
    <summary>
        <b><big><big><big>
            In what situations, what type you will choose?
        </big></big></big></b>
    </summary>

**Monolithic Architecture:**
 - app is relatively small, and the team is not large enough
 - when app doesn’t require separate scaling
 - when rush development is required

**Microservices Architecture:**
- application is large and complex
- different teams are working on different parts
- when you want to use different technologies for different services

**Serverless Architecture:**
- When the workload is unpredictable
- When you want to reduce operational costs
- When you want to benefit from potentially infinite scalability

</details>

[//]: # (How does the choice of architecture impact 
         the scalability and resilience of a Java application?)
<br>
<details>
    <summary>
        <b><big><big><big>
            How does the choice of architecture impact 
            the scalability and resilience of a Java application?
        </big></big></big></b>
    </summary>

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

[//]: # (How would you handle data consistency across microservices
         in a Java-based microservices architecture?)
<br>
<details>
    <summary>
        <b><big><big><big>
            How would you handle data consistency across microservices
            in a Java-based microservices architecture?
        </big></big></big></b>
    </summary>

**Eventual Consistency:** - the change is added to other services over time.
   , System may be in an inconsistent state for a short period

**Distributed Transactions:** - complex and can impact performance, but
Spring can be used for distributed transactions

**Saga Pattern:** - sequence transactions within a single service.
And revert all changes in case of fail transaction.

**Event-Driven Architecture** - events that represent state changes.
Other micros can be subscribed and listen for updates

**API Composition** - microservice managing its own database, 
a separate service layer is used to handle data consistency

</details>

[//]: # (What are some of the trade-offs to consider when choosing between 
         synchronous and asynchronous communication 
         in a distributed Java application?)
<br>
<details>
    <summary>
        <b><big><big><big>
            What are some of the trade-offs to consider when choosing between 
            synchronous and asynchronous communication 
            in a distributed Java application?
        </big></big></big></b>
    </summary>

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

[//]: # (How can containerization be used in the deployment 
         of Java applications, and what benefits does it provide?)
<br>
<details>
    <summary>
        <b><big><big><big>
            How can containerization be used in the deployment 
            of Java applications, and what benefits does it provide?
        </big></big></big></b>
    </summary>

- **Isolation:** Each container runs in isolation
- **Scalability** easily scaled up or down based on the demand
- **CI/CD** be built, tested, and deployed into a container
- **Resource Efficiency** 
- **Portability** containers include all of their dependencies,
they can run on any system that supports containerization

</details>

[//]: # (Can you discuss some strategies for handling fault 
         tolerance and failover in a distributed Java application?)
<br>
<details>
    <summary>
        <b><big><big><big>
            Can you discuss some strategies for handling fault 
            tolerance and failover and for high availability
            in a distributed Java application?
        </big></big></big></b>
    </summary>

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
    <summary>
        <b><big><big><big>
            How does the choice of database /SQL vs NoSQL/
            impact the architecture of a Java application?
        </big></big></big></b>
    </summary>

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
    <summary>
        <b><big><big><big>
            How would you approach designing a Java application
            for a cloud-native environment, 
            and what architectural considerations 
            need to be taken into account?
        </big></big></big></b>
    </summary>

- Microservices Architecture
- Containerization
- Orchestration
- Stateless Design
- Configuration and Secrets Management
- CI/CD
- Resilience
- Security

</details>

[//]: # (How would you implement security measures 
         in a Java-based microservices architecture?)
<br>
<details>
    <summary>
        <b><big><big><big>
            How would you implement security measures 
            in a Java-based microservices architecture?
        </big></big></big></b>
    </summary>

- Authentication and Authorization
- API Gateway (that acts as a single entry point into your system)
- HTTPS
- Service-to-Service Communication
- Dependency Management
- Secrets Management
- Security Headers
- Logging and Monitoring

</details>

[//]: # (Can you explain the role of APIs 
         in a distributed Java application 
         and how they influence the overall architecture?)
<br>
<details>
    <summary>
        <b><big><big><big>
            Can you explain the role of APIs 
            in a distributed Java application 
            and how they influence the overall architecture?
        </big></big></big></b>
    </summary>

- Standardization 
- Data Exchange
- Versioning
- Security

</details>
