<h1>Amazon Aurora</h1> 
<h4> 

[Back to menu](../../Menu.md)

</h4>

[//]: # (What is Amazon Aurora?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is RDS Aurora?
        </b>
    </summary>
<br>

Amazon Aurora is a fully managed relational database engine that’s
compatible with MySQL and PostgreSQL. 

It combines the speed and reliability of high-end commercial
databases with the simplicity and cost-effectiveness of open-source databases

With some workloads, Aurora can deliver up to five times the throughput of 
MySQL and up to three times the throughput of PostgreSQL 
without requiring changes to most of your existing applications. 

It includes a high-performance storage subsystem, and its MySQL- and
PostgreSQL-compatible
database engines are customized to take advantage of that fast distributed storage

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html

</details>
<br>

[//]: # (What about Aurora Security?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What about Aurora Security?
        </b>
    </summary>
<br>

Security for Amazon Aurora is managed at three levels:

- **AWS Identity and Access Management (IAM):** 
IAM controls who can perform Amazon RDS management actions on Aurora DB
clusters and DB instances. When you connect to AWS using IAM credentials, 
your AWS account must have IAM policies that grant the permissions required 
to perform Amazon RDS management operations

- **Virtual Private Cloud (VPC):** 
Aurora DB clusters must be created in a VPC based on the Amazon VPC service

- **Authentication:** For authenticating logins and permissions for
an Amazon Aurora DB cluster

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Security.html

</details>
<br>