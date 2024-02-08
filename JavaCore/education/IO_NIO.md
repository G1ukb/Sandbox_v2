<h1>IO/NIO</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

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

