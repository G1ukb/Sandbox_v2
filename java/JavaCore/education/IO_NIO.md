<h1>IO/NIO</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

- What is Java IO and what are its main use cases?
- What is the difference between byte streams and character streams in Java?
- What are InputStream and OutputStream? Give examples of their concrete implementations.
- What is the difference between FileReader and BufferedReader?
- How do you ensure a stream is properly closed after reading/writing?
- What are checked exceptions thrown by IO operations and how are they handled?

- What is Java NIO and how does it differ from IO in terms of architecture?
- What are the drawbacks of traditional IO and how does NIO address them?
- What are channels \ buffers \ selectors in Java NIO?
- What are memory-mapped files and when would you use them?
- How do you monitor directory or file changes using WatchService?

- What are the limitations of traditional NIO in building high-performance network applications?
- How would you implement a high-performance file uploader using NIO or NIO.2?
- How do you ensure thread-safety when reading/writing files in concurrent applications?
- What tools can be used to monitor IO bottlenecks and resource leaks in Java applications?
- How would you implement a producer-consumer system using Java IO or NIO?

- What logging, alerting, and recovery strategies would you apply to an IO-intensive subsystem?

- Would you use Java NIO or a reactive framework (e.g., Vert.x, Project Reactor) for handling 100k+ connections?

<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            IO vs NIO difference
        </b>
    </summary>
<br>

* **Buffer** area to read data chunks at a time
* **Channel** is used to communicate with the buffer
* **Selector** providing access to channels that are ready to go

**Java IO (Input/Output)** is used to perform read and write operations.
The java.io package contains all the classes needed for input and output operations.

* Unidirectional work with data. Either read or write
* Synchronous operation. The incoming stream is blocked by the monitor
* There is one thread per read and write buffer

**Java NIO (New IO)** was introduced to implement high speed I/O.

* Bidirectional work with data flow.
  Because NIO works with a buffer.
  He can simultaneously ask to read data into the buffer while doing other work
* Asynchronous operation. NIO does not block the thread. He can get that data from the buffer
  that you have at the moment and go to work on
* Reading in the buffer can occur in both directions, both backwards and forwards
* The thread gets the opportunity to check if the read is completed, if the buffers are full
* Due to the fact that we have channel selectors, one thread can control several at once
  buffers

**What to use when**

Depends on the threading of your application.
NIOs are faster and don't block, but we totally need to be sure
that we read everything to the end.
IO blocks the thread and releases it when the read is complete

The difference between NIO's flexibility and speed and IO's performance guarantee

</details>
<br>

