<h1>General Architecture Concepts</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (What are the steps to choose software solutions for a project?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the steps to choose software solutions for a project?
        </b>
    </summary>
<br>

Choosing the right software solutions for a project is a critical task
that can significantly impact the success of the project.
Here are some steps you can follow:

1. Define Your Requirements:
   Start by clearly defining what you need the software to do.
   This should include both functional requirements
   (what tasks the software needs to perform)
   and non-functional requirements
   (such as performance, security, and usability).

2. Research Available Solutions:
   Once you know what you need,
   start researching what software solutions are available that meet those needs.
   This could include commercial off-the-shelf software,
   open-source software, or custom-built software.

3. Think about Each Solution: For each potential solution,
   evaluate how well it meets your requirements.
   Consider factors such as features, ease of use,
   scalability, reliability, and cost.

4. Test the Software:
   If possible, test each solution under conditions that are as close
   as possible to how you will be using the software.
   This could involve using a demo or trial version of the software,
   or requesting a proof of concept.

5. Check Compatibility: Ensure that the software is compatible
   with your existing systems and workflows.
   This includes technical compatibility
   (such as operating system and hardware requirements)
   and process compatibility
   (how well the software fits into your existing processes).

6. Make a Decision: Based on your evaluation and testing,
   choose the software solution that best meets your needs.
   Remember that no solution is likely to be perfect,
   so focus on what is most important for your project.

7. Implement the Software: Once you've chosen a software solution,
   plan and execute its implementation.
   This should include installing and configuring the software,
   integrating it with your existing systems, and training users.

</details>

[//]: # (Can you explain the difference between monolithic,
        microservices, and serverless architectures
        in the context of Java applications?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference between monolithic,
                microservices, and serverless architectures
                in the context of Java applications?
        </b>
    </summary>
<br>

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

[//]: # (In what situations, 
        what type of architecture you will choose?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            In what situations, 
            what type of architecture you will choose?
        </b>
    </summary>
<br>

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

[//]: # (What are Microservices patterns? 
        Integration / Database / Deployment / Observability)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are Microservices patterns? 
            By communication / Database / Deployment / Visibility and understandability
        </b>
    </summary>
<br>

- **By communication:**
    - Event-Driven: PECS with listeners (Lambdas)
    - HTTP/REST
    - API Gateway: A single entry point for all external API requests
    - Socket: endpoint connection between two processes.
      It Can be Stream-oriented (guarantee the order and delivery)
      and Datagram-oriented (may arrive out of order or not at all)

- **Database Patterns:**
    - Database per service: isolates the data of each service
    - Command Query Responsibility Segregation (CQRS):
      separates the read (Query) and write (Command)
      operations to the database.
    - Sagas for managing data consistency: is a sequence of local transactions
      where each transaction updates data within a single service.

- **Deployment Patterns:**
    - Single Service Instance per Host (keeps services isolated from each other)
    - Service Instance per Virtual Machine (service runs in its
      own virtual machine (VM), providing a similar isolation level)
    - Service Instance per Container (easy way to manage and scale services)
    - Serverless Deployment (managing servers is entirely
      handled by the cloud service provider)

- **Visibility and understandability Patterns**
    - health check APIs
    - log aggregation
    - distributed tracing
    - auditing

</details>

[//]: # (Decomposition of microservices)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Decomposition of microservices
        </b>
    </summary>
<br>

- Domain-Driven Design (DDD): based on business capabilities or domains
- Decompose by Business Capability
- Decompose by Subdomain: different subdomains within your application
- Decompose by Process
- Decompose by Use Cases: Single Responsibility Principle

</details>
