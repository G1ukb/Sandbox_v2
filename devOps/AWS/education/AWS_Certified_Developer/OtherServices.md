<h1>Other Services</h1> 
<h4> 

[Back to menu](..%2F..%2FMenu.md)

</h4>

[//]: # (What is CloudFront?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is CloudFront?
        </b>
    </summary>
<br>

Amazon CloudFront is a web service that speeds up distribution 
of your static and dynamic web content, 
such as .html, .css, .js, and image files, to your users. 
CloudFront delivers your content through a worldwide 
network of data centers called edge locations.

**CloudFront is also a caching technology**

</details>
<br>

[//]: # (How you can ensure that all requests to CloudFront are encrypted using HTTPS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How you can ensure that all requests to CloudFront are encrypted using HTTPS?
        </b>
    </summary>
<br>

Set the **viewer** protocol policy to redirect HTTP to HTTPS.

**There is only viewer protocol policy in CloudFront**

</details>
<br>

[//]: # (CloudFront allowed HTTP methods?)

<details>
    <summary style="font-size: 25px;">
        <b>
            CloudFront allowed HTTP methods?
        </b>
    </summary>
<br>

- CloudFront forwards only GET and HEAD requests.
- CloudFront forwards only GET, HEAD, and OPTIONS requests.
- CloudFront forwards GET, HEAD, OPTIONS, PUT, PATCH, POST, and DELETE requests.

</details>
<br>

[//]: # (What is AWS WAF?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is AWS WAF (Web Access Firewall)?
        </b>
    </summary>
<br>

AWS WAF helps protect against common network exploits and bots,
that could affect the availability of products, lead to
breach of security or use excessive amounts of resources.

</details>
<br>

[//]: # (AWS Elastic Beanstalk?)

<details>
    <summary style="font-size: 25px;">
        <b>
            AWS Elastic Beanstalk?
        </b>
    </summary>
<br>

With Elastic Beanstalk, you can quickly deploy and **manage applications 
in the AWS** Cloud without having to learn about the infrastructure 
that runs those applications. 
Elastic Beanstalk reduces management complexity without 
restricting choice or control. 

**You upload your code**, 
and Elastic Beanstalk automatically handles 
the details of capacity provisioning, load balancing,
scaling, and application health monitoring.

Supports tomcat or docker

Elastic Beanstalk automatically created infrastructure, load balancing,
auto-scaling, health monitoring

And you shall have all control

</details>
<br>

[//]: # (AWS Elastic Beanstalk Options for deployment?)

<details>
    <summary style="font-size: 25px;">
        <b>
            AWS Elastic Beanstalk Options for deployment?
        </b>
    </summary>
<br>

- **All at once** (deploys all hosts concurrently)
in case you have four ec2 batches with code v1
they become four ec2 batches with v2
 
![img](https://webmobilez.com/wp-content/uploads/2020/04/image-48.png)

Minuses: 
- Application will be unavailable during migration
- If deploy fail, instances will be in the fail state
- In case of rollback, you need to deploy this by hands

**only suitable for dev and test envs**

---
- **Rolling** (Deploys the new version in batches)
You will separate all instances into batches and then deploy batches
one by one

![img](https://webmobilez.com/wp-content/uploads/2020/04/2020-04-25__08-55-02-1.png)

Minuses:
- capacity will reduce (понижено) on the count of active redeployed batches
- not ideal for business
- if it fails, you will need additional rolling update

---
- **Rolling with additional batch**
  (launches an additional batch of instances and deploys
  the new version in batches)

![img](https://webmobilez.com/wp-content/uploads/2020/04/2020-04-25__09-04-48-1-768x374.png)

- if the update fails, you need to perform an additional rolling update
- performance will not be decreased
- roll back is still spending time, so this is not suitable for critical apps

---
- Immutable (Create new instances, deploy and delete old one)
  **(Blue Green)**

![img](https://webmobilez.com/wp-content/uploads/2020/04/2020-04-25__09-10-32.png)

</details>
<br>

[//]: # (What is traffic splitting "canary testing"?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is traffic splitting "canary testing"?
        </b>
    </summary>
<br>

in blue-green deployment we can split traffic to versions 
and the choice healthiest version

**SUITABLE ONLY FOR IMMUTABLE DEPLOYMENT**

**is not an option for CodeDeploy on an EC2/on-premises**

</details>
<br>

[//]: # (AWS Elastic Beanstalk configurations files? "for pre-amazon linux2")

<details>
    <summary style="font-size: 25px;">
        <b>
            AWS Elastic Beanstalk configurations files for linux1? "for pre-amazon linux2"
        </b>
    </summary>
<br>

Configuration files can define packages to install, create linux users,
groups, run shell commands, enable services

- can be written in Yaml ot JSON
- must have .config an extension and be inside .ebextensions

For linux2 users recommended to use 
- build-file
  - for commands that run for short period (shell)
  - create this file in the root directory
  - with format <process_name>:<command>
- procfile
  - for long-running apps processes
  - create this file in the root directory
  - same format <process_name>:<command>
- platform hooks
  - run on the chosen stage
  - stored in dedicated directories
  - .platform/hooks/prebuilt for before it builds
  - .platform/hooks/predeploy for after it builds before it deployed
  - .platform/hooks/postdeploy for after it deployed

</details>
<br>

[//]: # (What possible solutions do we have in case we want launch RDS with Elastic Beanstalk?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What possible solutions do we have in case we want launch RDS with Elastic Beanstalk?
        </b>
    </summary>
<br>

we can deploy RDS with Elastic beanstalk
  - but if the environment is terminated, RDS will also be terminated
  - Not good for production (dev test)

we can launch RDS outside Elastic beanstalk
  - we continue running after the environment is terminated
  - will need to add a security group to communicate through port
  - need to provide connection string to your application
  - good for production 

</details>
<br>

[//]: # (What we will use in case if we want to migrate legacy app to Elastic Beanstalk?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What we will use in case if we want to migrate legacy app to Elastic Beanstalk?
        </b>
    </summary>
<br>

Windows Web App Migration Assistant
  - .Net migration Assistant
  - OpenSource

</details>
<br>

[//]: # (AWS Athena?)

<details>
    <summary style="font-size: 25px;">
        <b>
            AWS Athena?
        </b>
    </summary>
<br>

Amazon Athena is an interactive query service that 
makes it simple to analyze data directly in Amazon S3 using standard SQL.

</details>
<br>

[//]: # (What is Kinesis?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Kinesis?
        </b>
    </summary>
<br>

Kinesis is a family of services that enables you to collect process and
analyze streaming data in real time

Allows you to build custom apps for your own business needs

</details>
<br>

[//]: # (Kinesis core services?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Kinesis core services
        </b>
    </summary>
<br>

Kinesis streams
(consume data to the shards (коробка))
- Data stream
- Video stream

Kinesis data firehouse
- capture transform and load data streams into AWS data stores

Kinesis Data Analytics
- analyze query and transform streamed data in real time using standard SQL

</details>
<br>

[//]: # (Kinesis Consumers? and how thay work with Shards)

<details>
    <summary style="font-size: 25px;">
        <b>
            Kinesis Consumers? and how they work with Shards
        </b>
    </summary>
<br>

Kinesis Shards:
- The Kinesis Client lib running on your consumers creates a record processor
for each shard 
- if you increase the number of shards, the KCL will add more record processors
- CPU utilization is what should drive the quantity of consumers you have,
NOT SHARDS
- Use an Auto Scaling group and base scaling decisions on CPU load 
on your consumers 

![img](https://docs.aws.amazon.com/images/streams/latest/dev/images/architecture.png)

</details>
<br>

[//]: # (What is Amplify?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Amplify? Hosting vs Studio
        </b>
    </summary>
<br>

This is a set of tools and services designed to male full-stack development
easy. 

- create frontend
- create reliable backend (authentication, storage, lambda)
- integrated with AWS services

Amplify Hosting
- Web hosting service
- CI/CD functionality
- Integrations with repos (Git, Bitbucket, CodeCommit)
- HTTPS integration

Amplify Studio
- Simple visual interface
- Create your UI
- maintain and configure backend
- Add features like authentication

https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

</details>
<br>

[//]: # (What is CloudWatch Evidently?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is CloudWatch Evidently?
        </b>
    </summary>
<br>

Amazon CloudWatch Evidently is a feature of Amazon CloudWatch 
that allows developers to safely validate new features by serving 
them to a specified percentage of users while rolling out the feature

It helps in monitoring the performance of the new feature to 
decide when to ramp up traffic to users

CloudWatch Evidently can be used for two similar but distinct use-cases: 
- implementing dark launches, also known as feature flags,
- A/B testing

</details>
<br>

[//]: # (What is Amazon Macie?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Amazon Macie?
        </b>
    </summary>
<br>

Amazon Macie is a data security service provided by Amazon Web Services (AWS) 
that uses machine learning and pattern matching to 
discover and help protect your sensitive data. 
It’s primarily designed to work with Amazon Simple Storage Service (Amazon S3)

Here are some key features of Amazon Macie:

- Sensitive Data Discovery: Macie can automatically discover and report 
sensitive data stored in Amazon S3. It uses built-in criteria and techniques, 
custom criteria defined by you, or a combination of both.
- Visibility into Data Security Risks: Macie provides visibility into data 
security risks and enables automated protection against those risks.
- Inventory of S3 Buckets: Macie provides an inventory of your S3 buckets 
and automatically evaluates and monitors the buckets for security and access control.
- Findings: If Macie detects a potential issue with the security or privacy of your data,
it generates a finding for you to review and remediate as necessary.
- Statistics and Data: Macie provides statistics and other data that offer 
insight into the security posture of your Amazon S3 data, 
and where sensitive data might reside in your data estate.

SensitiveData:S3Object/Financial - for credit card information
SensitiveData:S3Object/Personal - for personal data

</details>
<br>

[//]: # (What is AWS Fargate?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is AWS Fargate?
        </b>
    </summary>
<br>

AWS Fargate is a serverless compute engine offered by Amazon Web Services (AWS)
for running containerized applications. 

It enables you to run containers without having 
to manage the underlying infrastructure, 
thereby eliminating the complexity of administrative tasks

</details>
<br>