<h1>Kafka</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (What is Kafka, why is it important, 
        and what are the basic commands for interacting with Kafka?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Kafka, why is it important, 
            and what are the basic commands for interacting with Kafka?
        </b>
    </summary>
<br>

Apache Kafka is a distributed streaming platform
used for building real-time data pipelines and streaming apps.
It is designed to handle data streams from multiple sources
and deliver them to multiple consumers.

1. **High Throughput**: Kafka is designed to handle high
   volume real-time data feeds.

2. **Fault-Tolerant**: Kafka is distributed and replicates
   data across multiple nodes, making it highly available
   and resilient to node failures.

3. **Low Latency**: Kafka is designed to have a low latency
   to ensure that data is available to consumers in near real-time.

4. **Durability**: Kafka uses a distributed commit log,
   which means messages persist on disk as fast as possible,
   hence it is durable.

5. **Scalability**: Kafka can grow with your data by adding more nodes
   to the Kafka cluster for both producers and consumers.

- **Start a Kafka Server**: Kafka uses ZooKeeper,
  so you need to first start a ZooKeeper server if you don't already have one.
  You can use the convenience script packaged with Kafka
  to get a quick-and-dirty single-node ZooKeeper instance.

  ```
    >   bin/zookeeper-server-start.sh config/zookeeper.properties
  ```

Now start the Kafka server:

  ```
    > bin/kafka-server-start.sh config/server.properties
  ```

- **Create a Topic**: Create a topic to store events.

  ```
    > bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
  ```

- **Send some Messages**: Kafka comes with a command line client that will take input from a file or from standard input
  and send it out as messages to the Kafka cluster. By default, each line will be sent as a separate message.

  ```
    > bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
  ```

- **Start a Consumer**: Kafka also has a command line consumer that will dump out messages to standard output.

  ```
    > bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
  ```

</details>
<br>
