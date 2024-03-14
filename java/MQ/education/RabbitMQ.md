<h1>RabbitMQ</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Could you give an in-depth explanation 
        and examples of how RabbitMQ works?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Could you give an in-depth explanation 
            and examples of how RabbitMQ works?
        </b>
    </summary>
<br>

RabbitMQ is a widely adopted, open-source message-queueing software, 
also known as a message broker, that acts as an intermediary 
for dispatching messages between producers and consumers.

In a RabbitMQ model, a producer sends messages to an exchange. 
The exchange then routes the messages to various queues 
based on rules called bindings. 
Consumers subscribe to queues and process the messages.

In what situation must use: RabbitMQ is particularly useful
when tasks need to be performed 
asynchronously in a distributed system or when you 
need to balance loads where there are spikes of tasks.

Pros:
1. Provides reliable and asynchronous communication between microservices.
2. Supports a wide range of protocols and languages.
3. Facilitates complex routing to multiple consumers.

Cons:
1. Could be overkill for simple tasks.
2. Configuring for high availability can be complex.
3. Managing RabbitMQ might require some learning curve.

</details>
<br>

////////////////

[//]: # (TODO MQ VS REST)
[//]: # (TODO MQ VS Other mic acrch principles)