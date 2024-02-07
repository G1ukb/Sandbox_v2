<h1> Lambda </h1>
<h4> 

[Back to menu](..%2F..%2FMenu.md)

</h4>

[//]: # (Lambdas vs. ec2)

<details>
    <summary>
        <b><big><big><big>
            Lambdas vs. ec2?
        </big></big></big></b>
    </summary>

Virtual functions - no servers to manage!
- Time limited - short executions
- Run on demand (lambda runs only when needed)
- Scaling is automated!
  (If necessary, you can configure automatic scalability)
- Integration with the entire range of AWS services.
- Integrated with many programming languages
- Easy monitoring using AWS CloudWatch.
- Easily get more resources for each feature (up to 10GB RAM!)
- Increasing RAM will also improve CPU and network performance!

</details>
<br>

[//]: # (What is under the hood of lambdas. 
        Why are they fast and don't require any EC2 to run?)

<details>
    <summary>
        <b><big><big><big>
            What is under the hood of lambdas. 
            Why are they fast and don't require any EC2 to run?
        </big></big></big></b>
    </summary>

Each lambda represents an image and a container. 
And Amazon takes over the work of all 
containers and their management.

</details>
<br>

[//]: # (What ways of triggering a Lambda do you know?)

<details>
    <summary>
        <b><big><big><big>
            What ways of triggering a Lambda do you know?
        </big></big></big></b>
    </summary>

Lambda functions can be activated in different ways:
- HTTP request
  (In this case, an HTTP request may contain several value headers.
  To do this, configure APL (application load balancer) which will convert
  ...?name=one&name=two --> {"name":["one,"two"]})
- uploading a new document to S3 (action, loading a specific file by mask, etc.)
- scheduled task (using EventBridge (for example once a minute))
- AWS Kinesis data stream
- Event Source Mapping for SQS & SQS FIFO
- notification from AWS SNS

</details>  
<br>

[//]: # (What is Lambda@Edge?)

<details>
    <summary>
        <b><big><big><big>
            What is Lambda@Edge?
        </big></big></big></b>
    </summary>

Lambda@Edge is a feature of Amazon CloudFront that allows you 
to run code closer to users of your application, 
which improves performance and reduces latency. 
It’s an extension of AWS Lambda that lets you deploy Python and Node.js 
functions at Amazon CloudFront edge locations.

- You can customize the content that your CloudFront distribution delivers 
to your end users.
- It allows you to run your code in response to events generated 
by the Amazon CloudFront content delivery network (CDN).
- You don’t have to provision or manage infrastructure in multiple locations 
around the world.
- It can automatically scale and run your code at AWS locations around the world.
- It supports a limited set of runtimes and features.

**Lambda@Edge can be used for various purposes such as website security,
real-time image transformation, intelligent bot mitigation,
search engine optimization, and more.**

For example, you can trigger a Lambda function 
to add HTTP security headers on all origin responses without 
having to modify your application code on your origin.

</details>
<br>

[//]: # (Lambda@Edge vs CloudFront Functions?)

<details>
    <summary>
        <b><big><big><big>
            Lambda@Edge vs CloudFront Functions
        </big></big></big></b>
    </summary>

In summary, CloudFront Functions are ideal for lightweight, 
short-running functions and are executed at the edge locations closest to the user. 

They are more suitable for simple request transformations. 
On the other hand, Lambda@Edge functions are more suitable 
for compute-intensive workloads and provide more features 
along with an increased execution time capability. 

They are executed at Regional Edge Locations in major AWS Regions.

</details>
<br>

[//]: # (What is Lambda – Event Source Mapping for SQS & SQS FIFO? Lambda event trigger)

<details>
    <summary>
        <b><big><big><big>
            What is Lambda – Event Source Mapping for SQS & SQS FIFO?
        </big></big></big></b>
    </summary>

Lambda allows you to automatically process a certain number of messages from SQS queues
and SQS FIFO.

In this case, Lambda will automatically scale when reading the message in batches (1-10) for
faster processing.
When an error occurs, messages are sent to the queue as individual items.
(There is also a setting for a dead-letter queue in case of failures (DLQ))
Lambda removes the message from the queue after successful processing.

Can be scaled:
- scales according to the number of active message groups.
- can create up to 60 copies per minute
- simultaneously process up to 1000 message packets per minute

</details>  
<br>

[//]: # (What is Lambda - Directions?)

<details>
    <summary>
        <b><big><big><big>
            What is Lambda - Directions?
        </big></big></big></b>
    </summary>

Lambda offers the ability to configure the direction (endpoints) for the function to work
(before sending the rest result to the client)

Works for asynchronous calls, offering to select scenarios for successful or failed activities.

You can choose the final exact one:
- SQS
- SNS
- another Lambda
- Bus Amazon EventBridge

</details>  
<br>

[//]: # (What is Lambda pricing?)

<details>
    <summary>
        <b><big><big><big>
            What is Lambda pricing?
        </big></big></big></b>
    </summary>

Payment for requests:
- The first million requests are free
- $0.20 per 1 million queries thereafter

Pay per duration: (in 1ms increments)
- 400,000 GB-seconds of computing time per month FREE (if 1GB of RAM is used)
- 3,200,000 seconds if the function uses 128 MB of RAM
- After that, 1 USD per 600,000 GB-seconds.

AWS Lambda is very cheap and very popular because of this

</details>
<br>

[//]: # (How is it possible to test Lambda code without actually running it in AWS?)

<details>
    <summary>
        <b><big><big><big>
            How is it possible to test Lambda code without actually running it in AWS?
        </big></big></big></b>
    </summary>

Using the AWS SAM Command Line Interface (CLI)
you can test locally and debug "step by step"
your serverless applications before uploading them to the AWS cloud

</details>
<br>

[//]: # (What is the difference between synchronous and asynchronous Lambda invocations?)

<details>
    <summary>
        <b><big><big><big>
            What is the difference between synchronous and asynchronous Lambda invocations?
        </big></big></big></b>
    </summary>

**With a synchronous** call, you wait for the function to process the event
and will return the response.

- Client sends request / SDK / CLI --(request)--> Lambda
- Client sends request / SDK / CLI <-(response)-- Lambda
  (Including if an error occurs. The client must handle it)

**When called asynchronously**, Lambda queues the event for processing.
If an error occurs, Lambda tries to retry the event

(1 minute wait 1 time 2 others (3 times in total))
There is a clear setting of actions for successful and unsuccessful execution

Asynchronous calls allow you to speed up request processing if you don't need to wait for the result
(example you need to iterate through 1000 files)

**How it works**:
When called asynchronously, any user request will return the expected 
result (for example 200)
EVEN IF the request actually caused an error. 
If an error occurs several times in a row, the system
will process the request and (for example, send an SQS message that something went wrong)

</details>
<br>

[//]: # (What is Lambda Environment Variables?)

<details>
    <summary>
        <b><big><big><big>
            What is Lambda Environment Variables?
        </big></big></big></b>
    </summary>

Lambda offers the ability to configure environment settings 
similar to the Postman implementation

It is possible to create variables of the key-value type (string type only)
And work with keys, and the lambda will independently substitute the specified values.

**How is it useful:**
- Customize function behavior without updating code
- Environment variables available to your code
- Lambda Service also adds its own system environment variables.
- Useful to store secret parameters (they are KMS encrypted)
  (Secrets can be encrypted with a Lambda service key or your own CMK.)

</details>  
<br>

[//]: # (What is Lambda Logging & Monitoring? Tracing with x-ray?)

<details>
    <summary>
        <b><big><big><big>
            What is Lambda Logging & Monitoring? Tracing with x-ray?
        </big></big></big></b>
    </summary>

Lambda allows you to track all your actions using monitors/logging/AWS X-Ray
- Calls, duration, concurrent executions
- Number of errors, success rates, throttles
- Asynchronous delivery failures
- Iteration speed (Kinesis and DynamoDB streams)

There are environment variables for X-Ray (they are enabled by default, 
but are handy to know):
- X_AMZN_TRACE_ID: Contains the trace header.
- AWS_XRAY_CONTEXT_MISSING: Defaults to LOG_ERROR.
- AWS_XRAY_DAEMON_ADDRESS: IP_ADDRESS of the X-Ray daemon:PORT

</details>  
<br>

[//]: # (How Lambda can connet VPC & private subnet 
or If Lambda in VPC how it connect to public www?)

<details>
    <summary>
        <b><big><big><big>
            How Lambda can connet VPC & private subnet 
            or If Lambda in VPC how it connect to public www?
        </big></big></big></b>
    </summary>

**If the lambda is outside the vpc (virtual private connection)**
- **She has access to the Internet, but does not have direct access to the VPC**
- Lambda must create ENI (Elastic Network Interface) in VPC subnets 
and connect through it
- To do this, the role **AWSLambdaVPCAccessExecutionRole** must be explicitly specified

It looks like this

Lambda ---> [(private subnet) ---> (ENI (Elastic Network Interface)) ---> (Destination (example S3)) ]

**If the lambda is in vpc and (virtual private connection)**
- **She DOES NOT have access to the Internet, but DOES have direct access to VPC components**
- Lambda can use 2 options
    - Use NAT which will use IGW (InternetGetWay)
      (In this case, IGW will be able to knock both outside (www) and into internal aws services)
    - **if you need private access to aws services** you can use VPC Endpoint to
      to knock on aws services privately

it looks like this

[(private subnet) Lambda <---> private s3] -> 
1) [] -> Nat (Network Address Translation) -> IGW (InternetGetWay) -> www (or) aws s3
2) [] -> private VPC endpoint -> aws s3


</details>  
<br>

[//]: # (Lambda Concurrency and Throttling? Cold Start?)

<details>
    <summary>
        <b><big><big><big>
            Lambda Concurrency and Throttling?
        </big></big></big></b>
    </summary>

Lambda allows you to call lambda processing for up to 1000 simultaneous executions.
- Each lambda function can limit the maximum number of treatments (=limit)
- Every call that goes beyond the limit will cause ("throttled")

**Lambda behavior when throttling**
- **When called synchronously** return ThrottleError - 429
- **For an asynchronous call** retry automatically after a while (maximum up to 6 hours)
  , then placement in DLQ

**What are the dangers of limits**

If you have three simultaneously running lambda functions and one of 
them receives input at once
1000 requests, then the remaining 2 functions will perform throttling 
until there are a thousand decrease. 
(REQUEST LIMITS VALID FOR ALL LAMBDA IN THE SUM)

**Cold start**

As in Java, when the first time the request is processed worse 
because you need to get resources the first time,
This situation can also arise in lambdas.
To combat this, lambdas have **provisioned concurrency**.
The lambda function is called in advance to prevent cold calling.
All settings are done via **Application Auto Scaling**

</details>  
<br>

[//]: # (Lambda limits?)

<details>
    <summary>
        <b><big><big><big>
            Lambda limits?
        </big></big></big></b>
    </summary>

Performance:
- Memory distribution: 128 MB – 10 GB (in 1 MB increments)
- Maximum execution time: 900 seconds (15 minutes)
- Environment Variables (4 KB)
- Disk capacity in the “function container” (in /tmp): 512 MB.
- Parallel executions: 1000 (can be increased)

Deployment:
- Lambda function deployment size (compressed ZIP file): 50 MB.
- Uncompressed deployment size (code + dependencies): 250 MB.
- You can use the /tmp directory to load other files at startup.
- Environment variables size: 4 KB.

</details>  
<br>

[//]:<>(What kinds of Lambda concurrency allocations are there?)

<details>
    <summary>
        <b><big><big><big>
            What kinds of Lambda concurrency allocations are there?
        </big></big></big></b>
    </summary>

Two types of concurrency control are available:

**Reserved parallelism** - reserved parallelism
guarantees the maximum number of concurrent instances for a function.
When a function has reserved concurrency, no other function
cannot exploit this parallelism.

**Provided parallelism**. - Provided parallelism
initializes the requested number of runtimes,
so that they are ready to immediately respond to calls to your function.

</details>
<br>

[//]:<>(What resources trigger Lambda? How?)

<details>
    <summary>
        <b><big><big><big>
            What resources trigger Lambda? How?
        </big></big></big></b>
    </summary>

Lambda, Api Gateway, DynamoDB, S3, SNS, SQS

By event

</details>
<br>

[//]:<>(What AWS resources can Lambda access? How?)

<details>
    <summary>
        <b><big><big><big>
            What kinds of Lambda concurrency allocations are there?
        </big></big></big></b>
    </summary>

Your Lambda functions can now access databases
Amazon RDS, Amazon Redshift data warehouses,
Amazon ElasticCache nodes and other endpoints,
which are only accessible from a specific VPC.

You must provide additional information about the VPC configuration,
such as VPC subnet IDs and security group IDs,
to allow Lambda functions to access resources in your Amazon VPC.

</details>
<br>

[//]:<>(What are the advantages of API Gateway endpoints over traditional web applications?)

<details>
    <summary>
        <b><big><big><big>
            What are the advantages of API Gateway endpoints over traditional web applications?
        </big></big></big></b>
    </summary>

Gateway API allows you to perform common API management tasks,
such as security, caching, throttling and monitoring.

Gateway API provides endpoints to your AWS applications

</details>
<br>

[//]:<>(What is API Gateway mock endpoints?)

<details>
    <summary>
        <b><big><big><big>
            What is API Gateway mock endpoints?
        </big></big></big></b>
    </summary>

Creation of mock endpoints for mock not crated rests

</details>
<br>

[//]:<>(What is API Gateway Stage?)

<details>
    <summary>
        <b><big><big><big>
            What is API Gateway Stage?
        </big></big></big></b>
    </summary>

stage -> этап

This is references in the lifecycle of the API using variables

This stage vars can be used to ref a specific backend endpoint
(e.g. Lambda function)

</details>
<br>

[//]:<>(What is API Request Transformation?)

<details>
    <summary>
        <b><big><big><big>
            What is API Request Transformation?
        </big></big></big></b>
    </summary>

We can dynamically transform request and response params by adding new params

Example of request 
    
    -- request-parameters '{"append:header.header1":"$context.reqId"}'

(this will add new header to requests)

Example of response

    -- response-parameters '{
    "500" : {"append:header.header1":"$context.reqId""}'

(this will add new header if backend returns 500 status code)

</details>
<br>

[//]: # (How you can transform API requests and responses)

<details>
    <summary>
        <b><big><big><big>
            How you can transform API requests and responses?
        </big></big></big></b>
    </summary>

- Using Request Transformation
- Parameter mapping
  (overwrite:path: "/sessions/${request.path.sessionId}/topics")

</details>
<br>

[//]:<>(What is $Latest on lambda?)

<details>
    <summary>
        <b><big><big><big>
            What is $Latest on lambda?
        </big></big></big></b>
    </summary>

This is alias for latest version on lambda code.
You also can use previous lambda version by using create alias function

</details>
<br>

[//]:<>(What is lambda alias? version? alias vs version)

<details>
    <summary>
        <b><big><big><big>
            What is lambda alias? version? alias vs version
        </big></big></big></b>
    </summary>

A lambda version is a snapshot of your Lambda function.
When you create a new lambda function, it is named as $LATEST.

A lambda alias at its simplest is a pointer to the lambda function’s version.
We can use aliases to point to any lambda version you specify.

**An alias is a pointer to a specific Lambda function version. 
Aliases will not be updated automatically**

</details>
<br>

[//]:<>(Lambda alias vs env variables?)

<details>
    <summary>
        <b><big><big><big>
            Lambda alias vs env variables?
        </big></big></big></b>
    </summary>

**Lambda** allows you to create aliases that are associated 
with a specific version of a function. 
They are not a method of changing the behavior of a particular function.

**Environment variables** can be used to change the behavior of a Lambda 
function without requiring you to update code and re-deploy the function.

</details>
<br>

[//]:<>(What is step functions in lambda?)

<details>
    <summary>
        <b><big><big><big>
            What is step functions in lambda? Pros?
        </big></big></big></b>
    </summary>

This is a chain of lambda functions that work in queue order.
It can be chained. But each step can consists of parallel steps

Pluses
- Visualize (you can see all steps)
- Automate (each step is triggered and tracked automatically)
- Logging

![img](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2019/09/18/step-functions-map-example.png)

</details>
<br>

[//]:<>(What is step functions workflows? what type do you know?)

<details>
    <summary>
        <b><big><big><big>
            What is step functions workflows? what type do you know?
        </big></big></big></b>
    </summary>

Standard workflow
- Long-Running (may run for up to a year)
- At-Most-Once (task never executed once unless you specify retry actions)
- Non-Idempotent

Express Workflows
- Short-time (up to 5 min)
- At-Least-Once (for run mor than once)
- idempotent

Express can be
  - Synchronous express 
    - Wait until it completes
    - returns the result
    - (operations that are performed one at a time)
  - Asynchronous express
    - confirms that workflow has started
    - result can be found in cloudwatch
    - (operations don't depend on the completion and result)

</details>
<br>

[//]:<>(Lambda storages?)

<details>
    <summary>
        <b><big><big><big>
            Lambda storages? 
        </big></big></big></b>
    </summary>

|                | Native within lambda              |                           | External Storage Options     |                                     |
|----------------|-----------------------------------|---------------------------|------------------------------|-------------------------------------|
|                | /tmp                              | Lambda layer              | S3                           | EFS (elastic file system)           |
| Use case       | Temporary data                    | Library and SDK           | Persistent data              | Persistent data                     |
| Pluses         | the fastest                       |                           | best AWS service integration | best integration with other lambdas |
| Minuses        | cannot be shared between lambdas  |                           | slowest                      |                                     |
| Size           | 512 MB - 10 GB                    | 50 mb zipped 250 unzipped | Elastic                      | Elastic                             |
| Dynamic update | dynamic read/write                | updates require new layer | Store and retrieve           | dynamic read/write                  |
| Shared         | within env                        | across env                | across lambdas               | across env                          |


</details>
<br>

[//]:<>(Error handling in lambda?)

<details>
    <summary>
        <b><big><big><big>
            Error handling in lambda?
        </big></big></big></b>
    </summary>

- Auto retried system (2 times)
- Dead-letter queues (Lambda -> SQS or Lambda -> SNS)
  - only error msg
- Lambda Destinations (Lambda success -> SQS_1 or failure -> SQS_2) 

can be found in json (param: responsePayload:/errorMessage: "test")

</details>
<br>

[//]:<>(How we can deploy Lambda code?)

<details>
    <summary>
        <b><big><big><big>
            How we can deploy Lambda code?
        </big></big></big></b>
    </summary>

- by console
- .zip file achieve
  - Using the Lambda console
  - Using the AWS CLI
  - Using Amazon S3
- deployment package (you can create package by yourself and upload from PC)
    - up to 50 mb
    - if it more than 50 mb use S3
- Lambda layers 
  - can be shared between lambdas
  - best practise
- The CloudFormation
- Container images

</details>
<br>

[//]:<>(Lambda performance best practices?)

<details>
    <summary>
        <b><big><big><big>
            Lambda performance best practices?
        </big></big></big></b>
    </summary>

- See your memory and CPU
- Dependencies
- Only what you need

</details>
<br>

[//]:<>(How we can improve Lambda performance?)

<details>
    <summary>
        <b><big><big><big>
            Lambda performance best practices?
        </big></big></big></b>
    </summary>

- Increase the function memory allocation, 
  that will also increase the CPU allocation.
  (if function has CPU bound also)

</details>
<br>

[//]:<>(How we can transfer existing external RESTs into AWS?)

<details>
    <summary>
        <b><big><big><big>
            How we can transfer existing external RESTs into AWS?
        </big></big></big></b>
    </summary>

- create API Gateway (supports OpenAPI v2-v3)
- create lambdas
- connect rest in gateway into lambdas

</details>
<br>

[//]: # (What is EventBridge?)

<details>
    <summary>
        <b><big><big><big>
            What is EventBridge?
        </big></big></big></b>
    </summary>

EventBridge is a serverless service that uses events 
to connect application components together, 
making it easier for you to build scalable event-driven applications.

Part of Event-driven architecture

</details>  
<br>

---

[//]: # (What is Lambda event and context?)

<details>
    <summary>
        <b><big><big><big>
            What is Lambda event and context?
        </big></big></big></b>
    </summary>

Event is the data that's passed to the function upon execution.
- path
- httpMethod
- headers
- queryStringParameters
- body

Context's main role is to provide information about the current execution environment
* function_name – The name of the Lambda function.
* function_version – The version of the function.
* invoked_function_arn – The Amazon Resource Name (ARN) that's used to invoke the function. Indicates if the invoker specified a version number or alias.
* memory_limit_in_mb – The amount of memory that's allocated for the function.
* aws_request_id – The identifier of the invocation request.
* log_group_name – The log group for the function.
* log_stream_name – The log stream for the function instance.

</details>  
<br>

[//]: # (How we can control featute A/B testing in case if we have 2 features, but whant use only one?)

<details>
    <summary>
        <b><big><big><big>
            How we can control feature A/B testing in case if we have two features, but want to use only one?
        </big></big></big></b>
    </summary>

By adding an override to the feature and setting the identifier 
of the override to the engineer’s user ID, 
and setting the variation to Variation A, 
the engineer can ensure that Variation A 
is the only variation that appears when they hit the application’s endpoint. 

This is because overrides in Amazon CloudWatch Evidently 
allow you to specify a specific variation for a specific identifier,
which in this case is the engineer’s user ID.

</details>
<br>