[//]:# (What is required in order to get X-Ray working?)

<details>
    <summary>
        <b><big><big>
            What is required in order to get X-Ray working?
        </big></big></b>
    </summary>

- Both the X-Ray SDK and X-Ray Daemon,
- and you need to Instrument your application

</details>
<br>

[//]:# (What is X-Ray SDK and X-Ray Daemon?)

<details>
    <summary>
        <b><big><big>
            What is X-Ray SDK and X-Ray Daemon?
        </big></big></b>
    </summary>

X-Ray SDK - is a WHAT application code is used to call x-ray demon

The AWS X-Ray daemon - is a software application that listens for traffic 
on UDP port 2000, gathers raw segment data, 
and relays it to the AWS X-Ray API. 

The daemon works in conjunction with the AWS X-Ray SDKs 
and must be running so that data sent by the SDKs can reach the X-Ray service.

![img](https://docs.aws.amazon.com/images/xray/latest/devguide/images/architecture-dataflow.png)

</details>
<br>

[//]:# (Can X-Ray deamon work with Docker? How?)

<details>
    <summary>
        <b><big><big>
            Can X-Ray deamon work with Docker? How?
        </big></big></b>
    </summary>

Yes

X-Ray provides a Docker container image
that you can deploy alongside your application.

</details>
<br>

[//]:# (Which of the following services does X-Ray integrate with?)

<details>
    <summary>
        <b><big><big>
            Which of the following services does X-Ray integrate with?
        </big></big></b>
    </summary>

Yes

AWS Lambda,
Amazon API Gateway,
Elastic Load Balancing,
AWS Elastic Beanstalk,
Amazon Simple Notification Service,
and Amazon Simple Queue Service.

</details>
<br>

[//]:# (What is CloudWatch Monitor?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Monitor?
        </big></big></b>
    </summary>

This is AWS tool that can monitor:

Compute

- EC2
- Auto Scaling groups
- Elastic Load Balancer
- Route53
- Lambda

Stores

- EBS
- Storage Gateway
- CloudFront

Database And Analytics

- DynamoDB
- ElasticCache
- RDS
- Redshift
- Elastic Map reduce

Other

- SNS
- SQS
- API gateway
- AWS charges

</details>
<br>

[//]:# (What is CloudWatch Logs?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Logs?
        </big></big></b>
    </summary>

Сервис Amazon CloudWatch Logs позволяет собирать и хранить журналы ресурсов,
приложений и сервисов в режиме, близком к реальному времени.
Существуют три основные категории журналов.

1. **Предоставленные журналы**.
   Эти журналы автоматически публикуются сервисами AWS от вашего имени.
   В настоящее время поддерживаются два типа журналов:
    1. журналы Amazon VPC Flow Logs
    2. Amazon Route 53.
2. **Журналы, публикуемые сервисами AWS**.
   В настоящее время более 30 сервисов AWS публикуют журналы в CloudWatch.
   В их число входят Amazon API Gateway, AWS Lambda, AWS CloudTrail и многие другие.
3. **Пользовательские журналы**.
   Это журналы пользовательских приложений и локальных ресурсов,
   а также журналы из других облаков.

</details>
<br>

[//]:# (How CloudWatch can watch to EC2?)

<details>
    <summary>
        <b><big><big>
            How CloudWatch can watch to EC2?
        </big></big></b>
    </summary>

By default ec2 does not send operating system-level metrics
- you need to create CloudWatch Agent on ec2 instance

and then CloudWatch will see metrics:

- disk space
- CPU
- etc.

</details>
<br>

[//]:# (What is CloudWatch Agent?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Agent?
        </big></big></b>
    </summary>

CloudWatch Agent is a software package 
that autonomously and continuously runs on your servers.

</details>
<br>

[//]:# (CloudWatch metric frequency?)

<details>
    <summary>
        <b><big><big>
            CloudWatch metric frequency?
        </big></big></b>
    </summary>

By default 5 min intervals
in addition charge - 1-min intervals

For custom metrics, 1 min interval
and in addition 1 sec interval

</details>
<br>

[//]:# (What is CloudWatch Alarm?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Alarm?
        </big></big></b>
    </summary>

You can set alarms for Ec2 CPU, ELB latency, overcharges

You can set appropriate thresholds to trigger the alarms

</details>
<br>

[//]:# (What is CloudWatch Actions?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Actions?
        </big></big></b>
    </summary>

This is cloud watch api that supports a long list of
different actions

these actions allow you to publish, monitor and alert on a variety of
metrics

these are particularly powerful when creating custom metrics for
monitoring and alerting for your application

putMetricData - publish metric data points to CloudWatch
putMetricAlarm - creates alarm associated with a metric for alerting

</details>
<br>

[//]:# (What is CloudWatch Dashboard?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Dashboard?
        </big></big></b>
    </summary>

This is a custom view of your monitors, metrics,
conditions that are meaningful for you

Display metrics for any Region or regions.

Remember to save (CloudWatch doesn't automatically save your dashboard)

</details>
<br>

[//]:# (What is CloudWatch Metrics?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Metrics?
        </big></big></b>
    </summary>

A metric is a **variable** to monitor.
Metrics are uniquely defined by a name, a namespace, and zero dimensions

namespace: container for metrics

</details>
<br>

[//]:# (What is CloudWatch Dimension?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Dimension?
        </big></big></b>
    </summary>

A Dimension is like a filter.

this is a name/value pair that can be used to filter CloudWatch data.

Example. Use the instance id dimension to search for metrics relation to
a specific EC2 Instance

</details>
<br>

[//]:# (How CloudTrail works?)

<details>
    <summary>
        <b><big><big>
            How CloudTrail works?
        </big></big></b>
    </summary>

CloudTrail records user activity in your AWS account.

**the data is stored in S3.**

Athena is a service that can be used to run SQL queries on data stored in S3.

</details>
<br>

[//]:# (What is CloudTrail? CloudTrail vs CloudWatch)

<details>
    <summary>
        <b><big><big>
            What is CloudTrail? CloudTrail vs CloudWatch
        </big></big></b>
    </summary>

CloudTrail records user activity in your AWS account.

records events related to:

- creation
- modification
- deletion of resources (example S3, IAM users, Ec2 etc.)

CloudWatch is about performance

CloudTrail is about Audit trail

- **example log all API calls**

</details>
<br>

[//]:# (X-Ray vs CloudWatch)

<details>
    <summary>
        <b><big><big>
            X-Ray vs CloudWatch
        </big></big></b>
    </summary>

AWS X-Ray and CloudWatch are both monitoring tools,
but they have different functionalities and use cases.

Use Cases for AWS X-Ray:

- Debugging performance issues
- Analyzing resource utilization
- Monitoring third-party services
- record information about incoming and outgoing HTTP request
- X-Ray service map provides a view of connections between interdependent services

Use Cases for CloudWatch:

- Monitoring AWS services
- Collecting and analyzing logs
- Creating custom metrics

</details>
<br>

[//]:# (What is CloudWatch Logs Insights?)

<details>
    <summary>
        <b><big><big>
            What is CloudWatch Logs Insights?
        </big></big></b>
    </summary>

With CloudWatch Logs Insights, you can interactively
search and analyze your log data in Amazon CloudWatch Logs.

You can perform queries to help you more efficiently and effectively
respond to operational issues. If an issue occurs,
you can use CloudWatch Logs Insights to identify potential
causes and validate deployed fixes.

</details>
<br>

[//]:# (What is EventBridge?)

<details>
    <summary>
        <b><big><big>
            What is EventBridge?
        </big></big></b>
    </summary>

Event Bridge - event-driven architecture. Is a change of state

We can create a schedule event with Event Bridge.
(Example system reboot every monday)

</details>
<br>

[//]:# (What is event bus?)

<details>
    <summary>
        <b><big><big>
            What is event bus?
        </big></big></b>
    </summary>

An event bus is a router that receives events 
and delivers them to zero or more destinations, or targets. 

Event buses are well-suited for routing events 
from many sources to many targets, with optional transformation 
of events prior to delivery to a target.

</details>
<br>

---

[//]:# (How EC2 instances in multiple AWS accounts can store lifecycle events in a single SQS main AWS account?)

<details>
    <summary>
        <b><big><big>
            How EC2 instances in multiple AWS accounts can store lifecycle events in a single SQS main AWS account?
        </big></big></b>
    </summary>

- Configure the permissions on the main account event bus to receive events
  from all accounts.
- Create an Amazon EventBridge rule in each account to send all the EC2
  instance lifecycle events to the main account event bus.
- Add an EventBridge rule to the main account event bus that matches all
  EC2 instance lifecycle events
- Set the SQS queue as a target for the rule.

![img](https://docs.aws.amazon.com/images/eventbridge/latest/userguide/images/event-bus-overview-eventbridge-how-it-works.png)

</details>
<br>

