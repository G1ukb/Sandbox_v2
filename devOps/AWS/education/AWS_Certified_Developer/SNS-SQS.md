<h1>SNS-SQS</h1>
<h4> 

[Back to menu](../../Menu.md)

</h4>

[//]: # (What is Amazon Simple Notification Service "Amazon SNS"?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Amazon Simple Notification Service "Amazon SNS"?
        </b>
    </summary>
<br>

Amazon Simple Notification Service (Amazon SNS) -
is a web service for sending notifications from the cloud.
It provides developers with the ability to publish messages
from the application and immediately deliver them to subscribers
or other applications.

</details>
<br>

[//]: # (What messaging patterns do SNS and SQS implement? Какие шаблоны обмена сообщениями реализуют SNS и SQS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What messaging patterns do SNS and SQS implement? Какие шаблоны обмена сообщениями реализуют SNS и SQS?
        </b>
    </summary>
<br>

Amazon SNS allows apps to send urgent messages
to several subscribers using the “push” mechanism,
which eliminates the need to periodically check or “query”
Availability of updates.

SQS is a message queuing service used for messaging
through a survey model (when the user himself asks if there is a message),
and can be used to separate sending and receiving components.

</details>
<br>

[//]: # (What delivery protocols does SNS support?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What delivery protocols does SNS support?
        </b>
    </summary>
<br>

Messages are sent using transport protocols
HTTP, HTTPS, Email-JSON and SQS,
will consist of a simple JSON object,
which will include the attached information

</details>
<br>

[//]: # (How large SQS messages can be? What happens when that limit is exceeded?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How large SQS messages can be? What happens when that limit is exceeded?
        </b>
    </summary>
<br>

The maximum size is 262,144 bytes (256 KB).

To send messages larger than 256 KB, you can use
Amazon SQS Extended Client Library for Java.

This library allows you to send Amazon SQS messages,
containing a link to the message payload in Amazon S3.
The maximum payload size is 2 GB.

If exceeded, aws will split the messages and send

</details>
<br>

[//]: # (What are the typical scenarios for using SQS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What are the typical scenarios for using SQS?
        </b>
    </summary>
<br>

The best mechanism for using queues is the actual queue mechanism
when something simultaneously receives a huge number of messages and these
We cannot process messages immediately due to our computing abilities

A physical example is SMS voting, when a huge number of people
fig into the service and it throws all messages into a queue and processes
without the risk of slowing down the entire system

</details>
<br>

[//]: # (What’s the difference between standard and FIFO queues in SQS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What’s the difference between standard and FIFO queues in SQS?
        </b>
    </summary>
<br>

Standard queues

- **Unlimited bandwidth.**
  Standard queues support an almost unlimited number of
  transactions per second (TPS).

- **Delivery on the “at least once” principle.**
  The message is delivered at least once, sometimes several copies of
the message are delivered.

- **Best Possible Ordering**
  Sometimes messages may be delivered in a different order than
  the order in which they are sent.

FIFO (First in First out) queues

- **High throughput.**
  By default, FIFO queues support up to 300 messages.
  per second (300 send, receive, or delete operations per second).

- **Strictly one-time processing.**
  The message is delivered once and remains available as long as
  until the recipient processes and deletes it.
  Duplicate messages are not placed in the queue.

- **Delivery on a first-in, first-out basis.**
  The order in which messages are sent and received is
  strictly preserved.

</details>
<br>

[//]: # (What is SNS pricing?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is SNS pricing?
        </b>
    </summary>
<br>

Depending on the type of message transmission, the price is based on the number of messages
as an example
Mobile Push Notifications $0.50 per million notifications

</details>
<br>

[//]: # (What is SQS pricing?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is SNS pricing?
        </b>
    </summary>
<br>

Depending on the type of message transmission, the price is based on the number of messages
and type of selected processing (Standard \\ FIFO)
as an example
From 1 Million to 100 Billion Requests/Month (ST)$0.40 (FIFO)$0.50

</details>
<br>

[//]: # (What are SNS security best practices?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What are SNS security best practices?
        </b>
    </summary>
<br>

Tips from aws:
- Make sure that topics (sns) are not public
- Implement access with minimal privileges
- Implement server-side encryption
- Forced encryption of data during transmission
- Consider using VPC endpoints to access Amazon SNS.

</details>
<br>

[//]: # (What are the security features supported by SNS/SQS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What are the security features supported by SNS/SQS?
        </b>
    </summary>
<br>

Amazon SNS provides a full range of security features
to protect your data from unauthorized and anonymous access,
including encrypting messages in transit using certificates
Amazon ATS, message encryption at rest using keys
AWS KMS, Message Privacy with AWS PrivateLink
and auditing using AWS CloudTrail.

Additionally, you can sign Amazon SQS encrypted queues
on encrypted Amazon SNS topics,
to install end-to-end encryption in your messaging scripts.

</details>
<br>

[//]: # (What is the anatomy of an SNS message?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is the anatomy of an SNS message?
        </b>
    </summary>
<br>

Name - the name of the message attribute.
The name must not begin or end with a period,
and must not have consecutive dots.
The name can contain up to 256 characters.

Type—supported message attribute data types:
String, String.Array, Number and Binary.

Value – user-specified value of the message attribute.
For string data types, the value attribute has the same restrictions
the same content as the body of the message.

</details>
<br>

[//]: # (What can SNS do in case of failing messages?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What can SNS do in case of failing messages?
        </b>
    </summary>
<br>

If the message cannot be successfully delivered on the first try,
Amazon SNS enforces a four-step retry policy:
1) repeated attempts without delay between attempts,
2) repeated attempts with a minimum delay between attempts,
3) retries according to deferment (configured)
4) repeated attempts with a maximum delay between attempts.

When the message redelivery policy is exhausted,
Amazon SNS may move a message to the dead-letter queue
messages (DLQ).

</details>
<br>

[//]: # (What is Amazon SNS dead-letter queues DLQs?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Amazon SNS dead-letter queues (DLQs)?
        </b>
    </summary>
<br>

The dead letter queue is an Amazon SQS queue.
that your Amazon SNS subscription can use for messages
which cannot be successfully delivered to subscribers.
Messages that could not be delivered due to client errors
or server, are placed in the dead-letter queue
for further analysis or reprocessing.

</details>
<br>

[//]: # (What is SNS message filtering?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is SNS message filtering?
        </b>
    </summary>
<br>

By default, an Amazon SNS topic subscriber receives every message
published in the topic.
To receive a subset of messages,
The subscriber must assign a filtering policy to the topic subscription.

A filter policy is a simple JSON object,
containing attributes that determine what messages the subscriber receives.
When you post a message to a topic,
Amazon SNS compares message attributes to attributes in policy
filtering for each of the topic subscriptions.
If any of the attributes match, Amazon SNS sends
message to subscriber.
Otherwise Amazon SNS skips the subscriber
without sending a message.
If a subscription does not have a filtering policy, the subscription receives
every message posted in her thread.

</details>
<br>

[//]: # (How is it possible to monitor SNS delivery process?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How is it possible to monitor SNS delivery process?
        </b>
    </summary>
<br>

- aws CloudWatch console,
- CloudWatch's own command line interface (CLI)
- programmatically using the CloudWatch API.

</details>
<br>

[//]: # (How is it possible to monitor SNS delivery process?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is message lifecycle in SQS?
        </b>
    </summary>
<br>

![img](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/images/sqs-message-lifecycle-diagram.png)

- Sending a message (the message is redundantly distributed across Amazon SQS servers.)
- Receive message (While message A is being processed, 
it remains in the queue and is not returned for subsequent receive requests)
- Removal

</details>
<br>

[//]: # (What’s the difference between short and long polling in SQS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What’s the difference between short and long polling in SQS?
        </b>
    </summary>
<br>

![img](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/images/sqs-message-lifecycle-diagram.png)

Amazon SQS Long Polling is a way to retrieve messages
from your Amazon SQS queues.

While a **regular short poll** returns the result immediately,
even if the polled message queue is empty

**long** poll does not return a response until the message
will not arrive in the message queue or until it expires
long polling time.

</details>
<br>

[//]: # (What is SQS Delay Queues?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is SQS Delay Queues?
        </b>
    </summary>
<br>

This is a special type of messages that you can use to
- postpone delivery of new messages
- messages in Delay Queue remain invisible for the duration of delay 
(0-900s (15min))
- Large distributed apps may need to introduce delay in processing

</details>
<br>

[//]: # (How you can manage large SQS messages in S3?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How you can manage large SQS messages in S3
        </b>
    </summary>
<br>

to store large messages 256KB - 2GB you need following
- use S3
- AWS SDK for Java
- SQS Extended client library for Java
- An S3 bucket

</details>
<br>

[//]: # (What is SES "Simple Email Service"? SES vs SNS)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is SES "Simple Email Service"
        </b>
    </summary>
<br>

When you want to send automated emails

SES:
- can trigger a lambda function or sns
- it can be used for both incoming and ongoing email
- email address is all that need to start
- email only
- not subscribe based

SNS:
- pub/sub messages service formats as SMS, HTTP, SQS, email
- can trigger lambda
- can fan out messages to a large number of recipients
- consumers must subscribe to a topic to receive notification

</details>
<br>

[//]: # (What you should do to prevent duplicate messages from being processed?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What you should do to prevent duplicate messages from being processed?
        </b>
    </summary>
<br>

Create a DynamoDB table to store the SQS message IDs 
of the messages that have been successfully processed. 
Configure the Lambda function to check the DynamoDB table 
to see if a message has already been successfully processed 
and only process messages that are not already processed.

If you are receiving multiple messages with the same message ID,
you can use DynamoDB to record the message IDs of messages 
that were already successfully processed and have your Lambda 
function check the DynamoDB table before processing each message.

</details>
<br>