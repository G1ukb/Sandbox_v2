<h1>Serverless</h1>
<h4> 

[Back to menu](../../Menu.md)

</h4>

[//]: # (Serverless consents pluses)

<details>
    <summary style="font-size: 25px;">
        <b>
            Serverless consents pluses
        </b>
    </summary>
<br>

- you can scale your applications quickly without managing any servers
- Low Cost (charged when code is executed)
- AWS handles the heavy lifting. You need focus only on code

</details>
<br>

[//]: # (Serverless services)

<details>
    <summary style="font-size: 25px;">
        <b>
            Serverless services
        </b>
    </summary>
<br>

- calculation
  - Lambda
  - Fargate
- Integration
  - Event Bridge
  - Step functions
  - SQS and SNS
  - API gateway
- Data storage
  - S3/EFS/Dynamo/
  - RDS Proxy

</details>
<br>

[//]: # (How application sessions can be stored?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How application sessions can be stored?
        </b>
    </summary>
<br>

There are various ways to manage user sessions,
including storing those sessions locally to the node 
responding to the HTTP request or designating 
a layer in your architecture that can store those sessions 
in a scalable and robust manner. Common approaches 
used include utilizing sticky sessions or using a 
distributed cache for your session management. 

In order to address scalability and to provide 
a shared data storage for sessions that can be 
accessed from any individual web server, 
you can abstract the HTTP sessions from the web servers themselves. 

A common solution for this is to leverage 
an in-memory key-value store such as ElastiCache.

**Amazon RDS could be used for session management,
but it isn't as fast as in-memory cache.**

</details>
<br>