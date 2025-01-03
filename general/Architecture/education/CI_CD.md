<h1>Architecture</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (What is CI/CD from Java perspective?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is CI/CD from Java perspective?
        </b>
    </summary>
<br>

CI/CD, or Continuous Integration/Continuous Deployment,
is a software development practice
that improving the speed and reliability of software releases.

**Consists off:**
- **Version Control:**
  way of committing changes to shared repository.
- **Continuous Integration:**
  automated tools that build newly committed code
  help find and address bugs quicker,
  improve software quality.
- **Continuous Delivery:**
  This stage involves testing the code in a production-like environment,
  which may include UI testing, load testing, integration testing, etc.
  The goal is to ensure that we have a deployment-ready code

</details>

[//]: # (What tools plays a crucial role in the CI/CD pipeline?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What tools plays a crucial role in the CI/CD pipeline?
        </b>
    </summary>
<br>

- **Git** allows efficient collaboration between developers


- **Maven/Gradle** - for Build/Testing/Document creation


- **Jenkins/Bamboo/TeamCity** automate the building and testing process,
  helping to catch issues early


- **JUnit/Mockito** ensure that your code is working as expected


- **Docker** simplifies deployment by packaging your application
  and its dependencies into a single object


- **Kubernetes** helps manage your containers
  and ensures that your application is highly available


- **Jenkins/Spinnaker/GoCD** automate the deployment process,
  reducing the risk of human error


- **Prometheus/Grafana** provide insights into how your application
  is performing in real-time

</details>

[//]: # (How can Docker be integrated into a Java CI/CD pipeline?
        What are the benefits and challenges?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How can Docker be integrated into a Java CI/CD pipeline?
            What are the benefits and challenges?
        </b>
    </summary>
<br>

Docker can be integrated into a Java CI/CD pipeline in the following ways:
* Build Docker Images
* Run Tests in Docker Containers
* Push Docker Images to a Registry
* Deploy Docker Images

Pluses:
* Consistency — we have the same env during development
* Isolation — containers are isolated from each other
* Scalability — can be easily scaled up or down
* Portability — run on any system

Minuses:
* Complexity of knowledge and integration: can be a problem for who are new to Docker
* Security - Docker containers are isolated from each other, but still need security
* Framework Dependency

</details>

[//]: # (How would you manage environment-specific configurations 
        /like database URLs, API keys, etc./ in a Java CI/CD pipeline?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you manage environment-specific configurations 
            /like database URLs, API keys, etc./ in a Java CI/CD pipeline?
        </b>
    </summary>
<br>

* **Environment/System Variables:** that a stored in the env by itself
* **Configuration Files:** files can be loaded at runtime based on the current environment
* **Secrets Management Tools:** Vault, AWS Secrets Manager, or Azure Key Vault

</details>

[//]: # (Can you describe a scenario where a CI/CD pipeline 
        might fail for a Java project? 
        How would you troubleshoot and resolve this issue?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you describe a scenario where a CI/CD pipeline 
            might fail for a Java project? 
            How would you troubleshoot and resolve this issue?
        </b>
    </summary>
<br>

* Local Reproduction in case if it is not a local problem
* Check the Error Message or Error log
* various checks based on error message
  * Check the pom.xml File
  * Check the Dependency Repositories
  * Check the Resources
  * Check the Network

</details>

[//]: # (How would you ensure security in a Java-based CI/CD pipeline? 
         What tools or practices would you recommend?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you ensure security in a Java-based CI/CD pipeline? 
            What tools or practices would you recommend?
        </b>
    </summary>
<br>

**Secure the Source Code**
- Static Code Analysis
- Dependency Check
- Regularly Update Dependencies

**Secure the Build Process**
- Secrets Management
- Build Isolation
- Automated Security Testing

**Secure the Deployment**
- Immutable Infrastructure
- Least Privilege Principle

**Monitor and Respond**
- Audit Logs

</details>

[//]: # (What are the key metrics you would track to measure 
        the effectiveness of a CI/CD pipeline in a Java project?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the key metrics you would track to measure 
            the effectiveness of a CI/CD pipeline in a Java project?
        </b>
    </summary>
<br>

- Deployment Frequency
- Failure Rate
- Mean Time to Recovery
- Test Automation Rate
- Code Coverage

</details>

[//]: # (What strategies would you use to minimize build time in a 
         CI/CD pipeline for a Java project?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What strategies would you use to minimize build time in a 
            CI/CD pipeline for a Java project?
        </b>
    </summary>
<br>

- Parallel Builds (main idea to split test and build processes)
- CI/CD Branching (test new feature in lighter dev branch)
- Performance, Accessibility Testing
- Automated Security Testing
- Optimize Dependencies (use only needed)
- Incremental Builds (like in AWS CloudFront template)
- Distributed Builds across multiple machines

</details>


[//]: # (How would you handle failure notifications and 
        alerts in a Java-based CI/CD pipeline? 
        What tools or practices would you recommend?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle failure notifications and 
            alerts in a Java-based CI/CD pipeline? 
            What tools or practices would you recommend?
        </b>
    </summary>
<br>

- Alerting Tools
  - via static content (splunk, logs, log dashboards) 
  - via notifications (Slack, Email, SNS)
- Error Handling Mechanisms - like event-bridge + SNS SQS + lambda

</details>
