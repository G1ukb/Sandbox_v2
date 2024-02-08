<h1>Multithreading</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Basic concepts)

<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Basic concepts
        </b>
    </summary>
<br>

**Thread daemons** - threads running in the background that terminate at
automatic mode when the main stream is closed.

**Benefits of using threads? What are the cons?**

Pros:

* work speed
* possibility to optimize performance
* processing more requests

Minuses:

* the ability to block threads and deplete resources

**Thread lifecycle - NEW/RUNNABLE/BLOCKED/TIME_W/TERMINATED**

![](https://cdn-images-1.medium.com/max/533/1*UHoBS0lKLFI4gR8NgDENfw.png)

**Ways to create a flow?**

* Inherit the Thread class and implement the run() method
* Runnable interface and implement the run() method
* Callable interface and implement the call() method

**Runnable and Callable interfaces**

Two functional interfaces, the main difference between which is
method return value void run, <v> call

**Ways to stop the flow**

* Manual if-else (flow works by condition)
* Interrupt method (the thread does not stop immediately, but after execution
  current action)
* The stop method (but it's depricate because it immediately stops the thread
  and can lead to problems)

**wait() methods sleep() notify() notifyAll()**

Stream interaction methods defined in the Object class

wait() causes a thread to wait, putting it into BLOCKED status, while another thread
will not call the notify() or notifyAll() method. Waiting on the monitor

**join() yield() methods**

yield() a thread transfers its execution to another one by priority
(useful in a situation where we have a thread running for 5 hours and 2 threads that
take 3 minutes to prevent the 2nd waiting thread from skipping ahead)

join() if there is a chain of threads and it is important for us to start the thread exactly after completion
selected

**thread pool**
The thread pool allows you to control and reuse threads, allowing,
control the number of constantly running threads.

**Difference between object-level and class-level locking**

* Object-level locks - when you want an object's methods to be available to only one thread
* Class level locks - when we want to prevent multiple threads from entering
  into a synchronized block in all instances of the class

</details>
<br>

[//]: # (Happens before)

<details>
    <summary style="font-size: 25px;">
        <b>
             Happens before
        </b>
    </summary>
<br>

The JVM can change the order in which instructions are executed to optimize its own
work. If he considers that these instructions are not interconnected.
But our logic can directly depend on our built order,
so the volatile keyword was introduced which forces to write
and read the variable directly from heap and not from local memory to avoid
dirty and phantom reading.

But worsens the performance due to the fact that the cache works much faster.

</details>
<br>

[//]: # (PESC in multithreading)

<details>
    <summary style="font-size: 25px;">
        <b>
             PESC in multithreading
        </b>
    </summary>
<br>

![](https://jenkov.com/images/java-concurrency/producer-consumer-2.png)

</details>
<br>

[//]: # (Locks/Atomics)

<details>
    <summary style="font-size: 25px;">
        <b>
            Locks/Atomics
        </b>
    </summary>
<br>

Most collections and basic operations are not inherently atomic.
They work in several stages, which creates dirty read problems in multi-threaded
environment.

In order to solve this problem in multithreading,
on the base side are monitors and volatile.

From the side of additional libraries, Locks and Atomics appeared

**Locks**

**ReentrantLock** - Reentrant lock. The mechanism for getting rid of
the need for some threads to wait until another thread completes its work in the block.
We are trying to get permission to enter the monitor without stopping the thread.

**ReadWriteLock** - allows you to explicitly set prohibitions in a code block
for reading or writing.

**Atomics**

Provides atomic wrappers over ordinary variables, such as
AtomicInteger, AtomicBoolean etc.

They guarantee that the operation will be atomic in one pass and will not call
problems in a multi-threaded environment, and at the same time it is preferable to volatile on
the fact that they are optimized for the CPU and work faster.
</details>
<br>

[//]: # (Castles/Atoms)

<details>
    <summary style="font-size: 25px;">
        <b>
              Starvation/DeadLock/LiveLock
        </b>
    </summary>
<br>

**Livelock** is a deadlock that processes are in
block each other with a repeated state change,
but they don't move forward.

**DeadLock** is a situation where processes block each other
obtaining resources and do not advance further.

**Starvation** is the result of a process that cannot be obtained
access to shared resources and therefore
cannot be judged by any progress.

</details>
<br>
