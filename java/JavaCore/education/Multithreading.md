<h1>Multithreading</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (Can you explain what multithreading is in the context of Java?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain what multithreading is in the context of Java?
        </b>
    </summary>
<br>

Multithreading is a feature of Java that allows multiple sequences of code
(threads) to be run concurrently within a single program.
This can improve the performance of complex applications,
especially on systems with multiple processors or cores.

A thread in Java is like a lightweight subprocess.
Each thread has its own call stack,
but shares the same memory space and resources
(like open files and network connections)
with other threads in the same process.
This shared access to resources is one of the reasons
why multithreading programming can be more complex,
as it requires careful synchronization to avoid issues like race conditions.

You can create a new thread by extending the Thread class
and overriding its run() method,
or by implementing the Runnable interface
and passing an instance to a new Thread.

    Runnable runnable = new Runnable() {
      public void run() {
        // Code to run in new thread
      }
    };
    
    Thread thread = new Thread(runnable);
    thread.start(); // Starts the new thread

</details>
<br>

[//]: # (All possible ways to create a thread in Java?)
<details>
    <summary style="font-size: 25px;">
        <b>
            All possible ways to create a thread in Java?
        </b>
    </summary>
<br>

In Java, there are two main ways to create a thread:

- **By extending the Thread class:**
  You can create a new class that extends the Thread class,
  and then override the run() method to include the code
  that should be executed in the thread.

        class MyThread extends Thread {
          public void run() {
            // Code to execute in new thread
          }
        }
        
        // To start the thread:
        MyThread myThread = new MyThread();
        myThread.start();

- By implementing **the Runnable interface:**
  You can create a class that implements the Runnable interface,
  and then pass an instance of that class to a new Thread.

        class MyRunnable implements Runnable {
          public void run() {
            // Code to execute in new thread
          }
        }
        
        // To start the thread:
        Thread thread = new Thread(new MyRunnable());
        thread.start();

The Runnable interface is often preferred over
extending Thread because it allows your class to extend another class

- Java also provides the java.util.concurrent package,
  which includes the Executor framework

        ExecutorService executor = Executors.newFixedThreadPool(10);
        executor.execute(new MyRunnable());

</details>
<br>

[//]: # (Can you explain the difference between 
        the Runnable interface and the Thread class in Java?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference between 
            the Runnable interface and the Thread class in Java?
        </b>
    </summary>
<br>

**Inheritance:** extend Thread / implements Runnable

**Runnable** run can be run:

* in a new thread //new Thread(runnable).start();
* in a thread pool //executor.submit(runnable);
* in the current thread //runnable.run();

**Thread**

* Run the task in a new thread
* Can't run the task in a thread pool
* Can't run the task in a different thread

In general, implementing Runnable is more flexible
and is usually preferred over extending Thread.

</details>
<br>

[//]: # (How does the Java Memory Model affect multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How does the Java Memory Model affect multithreading?
        </b>
    </summary>
<br>

Here are some key aspects of the JMM that affect multithreading:

* **Visibility**

Problem: One of the main challenges in multithreading
is ensuring that when one thread modifies a shared variable,
other threads can see the changes.

Solution: The volatile keyword can be used to ensure
that changes to a variable are immediately written
to the main memory, and that any read of the variable
will fetch the latest value from the main memory.

* **Atomicity:**

Problem: Operations that seem to be single,
indivisible operations can actually be composed of multiple steps.

Solution: For compound operations (like incrementing a value),
synchronization mechanisms such as synchronized blocks
or Atomic classes can be used to ensure atomicity.

* **Reordering and Happens before:**

Problem: The JMM allows the reordering of some operations
when multiple threads are involved, as other threads may
see operations happening in a different order.

Solution: The JMM provides the volatile keyword
and synchronized blocks to enforce a specific
order of operations across threads.

Before compilation:

    int x = 1;
    int y = 2;
    int a = x;
    int b = y;

After compilation:

    int y = 2;
    int x = 1;
    int b = y;
    int a = x;

</details>
<br>

[//]: # (Can you explain the concept of thread safety in Java?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of thread safety in Java?
        </b>
    </summary>
<br>

Here are some strategies to achieve thread safety in Java:

- **Immutability:** Immutable objects are by definition thread-safe,
  as their state cannot change after construction.

- **Synchronization:** Java provides several synchronization mechanisms,
  including synchronized methods, synchronized blocks, volatile variables,
  and classes in the java.util.concurrent package,
  such as ReentrantLock and Semaphore.

These tools can be used to control access to shared data in a way
that ensures only one thread at a time can access the data
or a particular section of code.

- **Atomic operations:** The Java Memory Model guarantees atomicity
  for most variable reads and writes

</details>
<br>

[//]: # (How can the synchronized keyword be used in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can the synchronized keyword be used in Java multithreading?
        </b>
    </summary>
<br>

The synchronized keyword in Java is used to create
a critical section where only one thread can execute at a time.

It's one of the key tools for achieving thread safety in a multi-threaded
environment, as it can prevent race conditions by ensuring
that multiple threads do not concurrently modify shared mutable data.

- **Synchronized Methods:** If another thread already holds the lock,
  the thread will block until the lock is released.

- **Synchronized Blocks:** protect only part of a method

- **Synchronized Static Methods** same as object methods

</details>
<br>


[//]: # (What is the purpose of the wait, notify, and notifyAll
        methods in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is the purpose of the wait, notify, and notifyAll
            methods in Java multithreading?
        </b>
    </summary>
<br>

The wait(), notify(), and notifyAll() allow
threads to communicate about the lock status of a resource.

- wait(): tells the current thread go to sleep until
  some other thread enters the same monitor
  and calls notify() or notifyAll()

- notify(): This method wakes up a single thread that called wait()
  on the same object.
  It should be noted that calling notify()
  does not actually give up a lock on a resource,
  the thread that calls notify() remains the owner of the lock.
  The thread woken up by notify() will not be able
  to proceed until the current thread releases the lock.

- notifyAll(): wakes up all the threads that called wait().
  The highest priority thread will run first

</details>
<br>

[//]: # (Can you explain the concept of a deadlock in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a deadlock in Java multithreading?
        </b>
    </summary>
<br>

A deadlock in Java multithreading is a situation where two
or more threads are blocked forever,
each waiting for the other to release a lock.
Deadlock occurs when multiple threads need the same
locks but obtain them in different order.

Deadlocks can be very difficult to diagnose and fix,
because they depend on the timing of thread execution,
which can be unpredictable.

The best way to deal with deadlocks is to avoid them,
for example, by always acquiring locks in the same order.

    public class SimpleDeadlock {
        public static void main(String[] args) {
            Thread.currentThread().join();  // Line 1
        }
    }

</details>
<br>

[//]: # (How can you prevent a deadlock in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you prevent a deadlock in Java multithreading?
        </b>
    </summary>
<br>

Preventing deadlocks:

- Avoid Nested Locks
- Avoid Unnecessary Locks: The more locks you hold,
  the greater the chance of deadlock.
- Use Lock Ordering: If a thread must acquire multiple locks,
  always acquire the locks in the same, fixed order.
- Use a Lock Timeout:
- Use Deadlock Detection Tools: like JConsole
- Use Higher-Level Concurrency APIs: like java.util.concurrent

</details>
<br>

[//]: # (How can you handle exceptions in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you handle exceptions in Java multithreading?
        </b>
    </summary>
<br>

Handling exceptions in Java multithreading can be a bit tricky
because an exception thrown in a thread cannot be caught in other threads.
However, there are several ways to handle exceptions in threads:

- **try-catch block inside the run()**

        new Thread(() -> {
            try {
                // code that might throw an exception
                } catch (Exception e) {
                // handle exception
            }
        }).start();

- **Thread.UncaughtExceptionHandler** interface

      Thread thread = new Thread(() -> {
          // code that might throw an exception
      });
        
      thread.setUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() {
      public void uncaughtException(Thread t, Throwable e) {
      // handle exception
      }
      });
        
      thread.start();

- you can use the **Future** to handle exceptions

        Future<?> future = executor.submit(() -> {
        // code that might throw an exception
        });
        
        try {
        future.get();
        } catch (ExecutionException e) {
        Throwable cause = e.getCause();  // get the actual exception
        // handle exception
        }

- Use Callable instead of runnable

</details>
<br>

[//]: # (Can you explain the concept of thread pooling in Java?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of thread pooling in Java?
        </b>
    </summary>
<br>

Thread pooling in Java is a concept where a pool
of worker threads is created to perform a queue of tasks.
This is more efficient than creating a new thread for each task,
especially for large-scale, CPU-intensive or IO-intensive tasks.

- **Thread Reuse:** Creating and starting a thread can be expensive in
  terms of time and system resources.
  Thread pools allow you to reuse existing threads to execute new tasks.

- **Control Over System Resources:**
  By limiting the number of total threads that can be in
  existence at any given time, you can prevent system overload.

- **Improved Stability:** Too many threads can lead to system instability
  or even crashes.
  A thread pool can help maintain stability
  by limiting the number of threads.

Java provides built-in support for thread pools
in the java.util.concurrent package.
The ExecutorService interface represents a thread pool.
You can create a thread pool using one of the
factory methods in the Executors class.

    ExecutorService executor = Executors.newFixedThreadPool(10);  // create a pool of 10 threads
    
    for (int i = 0; i < 50; i++) {
        int finalI = i;
        executor.submit(() -> {
            System.out.println("Running task " + finalI + " in thread " + Thread.currentThread().getName());
        });
    }
    
    executor.shutdown();

</details>
<br>

[//]: # (Can you explain the concept of a Callable 
        and Future in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a Callable in Java multithreading?
        </b>
    </summary>
<br>

- **Callable:** The Callable interface is similar to Runnable,
  in that both are designed for classes whose instances
  are potentially executed by another thread.

However, Runnable does not return a result and
cannot throw a checked exception, whereas Callable can do both.

A Callable needs to implement a single method,
call(), which returns a value and may throw an exception.

</details>
<br>

[//]: # (When to use Callable/Runnable in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            When to use Callable/Runnable in Java multithreading?
        </b>
    </summary>
<br>

In general, if your task doesn't need to return a result and
doesn't throw any checked exceptions, you can use a Runnable.
If your task needs to return a result or might throw a checked exception,
you should use a Callable.

</details>
<br>

[//]: # (Can you explain Future in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain Future in Java multithreading?  
        </b>
    </summary>
<br>

In Java, Future is an interface that represents the result
of an asynchronous computation.
It provides methods to check if the computation is complete,
to wait for its completion, and to retrieve the result of the computation.

- **boolean isDone():** Returns true if the task completed.
  Completion may be due to normal termination, an exception, or cancellation.

- **V get():** Waits if necessary for the computation to complete,
  and then retrieves its result.
  This method will block if the computation has not yet completed.

- **V get(long timeout, TimeUnit unit):** Waits if necessary for at
  most the given time for the computation to complete,
  and then retrieves its result, if available.

- **boolean cancel(boolean mayInterruptIfRunning):**
  Attempts to cancel execution of this task.

</details>
<br>

[//]: # (How can you use the Java Concurrency API to manage threads?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the Java Concurrency API to manage threads? 
        </b>
    </summary>
<br>

Java Concurrency API provides various classes and interfaces
that can be used to manage and control threads
in a more advanced way compared to simply creating
Thread objects and calling their start() method.
Here are some key components of the Java Concurrency API:

1. **Executor Framework:** This is a framework that creates
   and manages threads. It uses the `Executor`, `ExecutorService`,
   and `ScheduledExecutorService` interfaces, and the `Executors`
   utility class. You can create a pool of threads
   and control them through the `ExecutorService`.

```
ExecutorService executorService = Executors.newFixedThreadPool(10);
executorService.execute(() -> {
    // task to be performed by a thread
});
executorService.shutdown();
```

2. **Future and Callable:** If you need a result from your tasks,
   you can use the `Callable` interface, which represents
   a task that returns a result.
   When you submit a `Callable` to an `ExecutorService`,
   it returns a `Future`, which represents the result of a computation.

```
Callable<Integer> task = () -> {
    // Perform computation
    return 123;
};
Future<Integer> future = executorService.submit(task);
Integer result = future.get();  // This will block until the result is ready
```

3. **Locks:** The `java.util.concurrent.locks`
   package provides a more advanced set of lock operations
   than the implicit locks provided by `synchronized`.
   The `Lock` interface allows more flexible structuring z
   of synchronized code and allows multiple condition variables per lock.

```
Lock lock = new ReentrantLock();
lock.lock();
try {
    // access shared resource
} finally {
    lock.unlock();
}
```

4. **Atomic Variables:** The `java.util.concurrent.atomic`
   package defines classes that support atomic operations
   on single variables. All operations with these classes are atomic,
   which eliminates the need for using a `synchronized` block.

```
AtomicInteger atomicInteger = new AtomicInteger(0);
int newValue = atomicInteger.incrementAndGet();
```

5. **Concurrent Collections:** The `java.util.concurrent` package
   also includes several concurrent collection classes,
   like `ConcurrentHashMap` and `CopyOnWriteArrayList`,
   which are thread-safe versions of `HashMap` and `ArrayList`.

</details>
<br>

[//]: # (Can you explain the concept of a semaphore in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a semaphore in Java multithreading?
        </b>
    </summary>
<br>

A semaphore in Java multithreading is a class in the
java.util.concurrent package that is used to limit the number
of threads that can access a certain resource at the same time.

A semaphore maintains a set of permits.
A thread can acquire a permit from the semaphore,
in which case the number of available permits decreases.
If a thread tries to acquire a permit and none are available,
the thread will block until a permit becomes available
(or until it's interrupted).

A thread can also release a permit back to the semaphore,
in which case the number of available permits increases.

    Semaphore semaphore = new Semaphore(3);  // 3 permits

![img](https://i.stack.imgur.com/cDXIV.png)

</details>
<br>

[//]: # (How can you use the ReentrantLock class in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the ReentrantLock class in Java multithreading?
        </b>
    </summary>
<br>

The `ReentrantLock` class in Java is part of the
`java.util.concurrent.locks` package.
It's an implementation of the `Lock` interface
and works similarly to the implicit locking provided
by the `synchronized` keyword, but with additional features and capabilities.

A `ReentrantLock` is "reentrant" in the sense that a single
thread can acquire the lock multiple times without blocking on itself.
This is useful in situations where it's not easy to ensure
that the lock is always released before a method returns.

Here's an example of how to use a `ReentrantLock`:

```
ReentrantLock lock = new ReentrantLock();

lock.lock();
try {
    // access shared resource
} finally {
    lock.unlock();
}
```

- **Ability to interrupt a thread waiting for a lock:**
  `ReentrantLock` provides a method `lockInterruptibly()`
  that can be used to interrupt a thread that's waiting for a lock.

- **Ability to timeout while waiting for a lock:**
  `ReentrantLock` provides a method `tryLock(long timeout, TimeUnit unit)`
  that can be used to make a thread wait for a
  lock for a certain amount of time before giving up.

- **Fairness policy:** When creating a `ReentrantLock`,
  you can set a fairness policy. If set to `true`,
  the lock will favor granting access to the longest-waiting thread.

</details>
<br>

[//]: # (Can you explain the concept of a ReadWriteLock in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a ReadWriteLock in Java multithreading?
        </b>
    </summary>
<br>

The `ReadWriteLock` interface in Java provides a pair of lock methods:
one for read access and one for write access.
It's part of the `java.util.concurrent.locks` package.
If a thread wants to read the shared data, it acquires the read lock.
If a thread wants to modify the shared data, it acquires the write lock.

The main advantage of a `ReadWriteLock` over a regular lock
(like `ReentrantLock`) is that it allows multiple threads
to read shared data concurrently.
The write lock is exclusive, but the read lock is not,
which can lead to better performance in some scenarios.

Here's an example of how to use a `ReadWriteLock`:

```
ReadWriteLock readWriteLock = new ReentrantReadWriteLock();

// Acquire read lock
readWriteLock.readLock().lock();
try {
    // read shared data
} finally {
    readWriteLock.readLock().unlock();
}

// Acquire write lock
readWriteLock.writeLock().lock();
try {
    // write to shared data
} finally {
    readWriteLock.writeLock().unlock();
}
```

</details>
<br>

[//]: # (Can you explain the concept of a countdown latch in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a countdown latch in Java multithreading?
        </b>
    </summary>
<br>

A `CountDownLatch` in Java multithreading is a utility
class in the `java.util.concurrent` package.
It allows one or more threads to wait until
a set of operations being performed in other threads completes.

A `CountDownLatch` is initialized with a given count,
which represents the number of operations
that must complete before the latch is released.
The `countDown()` method is used to decrement the count,
and the `await()` method is used to block until the count reaches zero.

Here's an example of how to use a `CountDownLatch`:

```
int workerCount = 5;
final CountDownLatch latch = new CountDownLatch(workerCount);

for (int i = 0; i < workerCount; i++) {
    new Thread(() -> {
        // Perform some work...
        latch.countDown();  // Decrement the count
    }).start();
}

try {
    latch.await();  // Wait until the count reaches zero
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
}
```

![img](https://static.javatpoint.com/core/images/countdownlatch-in-java.png)

</details>
<br>

[//]: # (How can you use the CyclicBarrier class in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the CyclicBarrier class in Java multithreading?
        </b>
    </summary>
<br>

The `CyclicBarrier` class in Java is a synchronization mechanism
that allows a set of threads to all wait for each other
to reach a common barrier point.
It is called cyclic because it can be re-used after
the waiting threads are released.

The `CyclicBarrier` is useful in programs
involving a fixed-sized party of threads that must occasionally
wait for each other.

The barrier is called cyclic because it can be re-used after
the waiting threads are released.

```
int partyCount = 3;
CyclicBarrier barrier = new CyclicBarrier(partyCount);

for (int i = 0; i < partyCount; i++) {
    new Thread(() -> {
        System.out.println("Thread " + Thread.currentThread().getId() + " is waiting on barrier");
        try {
            barrier.await();
        } catch (InterruptedException | BrokenBarrierException e) {
            e.printStackTrace();
        }
        System.out.println("Thread " + Thread.currentThread().getId() + " has crossed the barrier");
    }).start();
}
```

![img](https://media.geeksforgeeks.org/wp-content/uploads/cyclicbarrier.png)

</details>
<br>

[//]: # (CyclicBarrier vs countdown latch?)

<details>
    <summary style="font-size: 25px;">
        <b>
            CyclicBarrier vs countdown latch?
        </b>
    </summary>
<br>

In general, **CountDownLatch** is suitable for situations
where one thread needs to wait for one or more operations
in other threads to complete.

**CyclicBarrier** is suitable for situations
where several threads need to all wait together
until they all reach a common point.

</details>
<br>

[//]: # (Can you explain the concept of thread-local 
        variables in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of thread-local 
            variables in Java multithreading?
        </b>
    </summary>
<br>

Thread-local variables in Java are used to create variables
that can only be read and written by the same thread.
This means that even if two threads are executing the same code,
and the code has a reference to a `ThreadLocal` variable,
then the two threads cannot see each other's `ThreadLocal` variables.

```
ThreadLocal<Integer> threadLocal = new ThreadLocal<>();

// In thread 1
threadLocal.set(1);
Integer valueInThread1 = threadLocal.get();  // This will be 1

// In thread 2
threadLocal.set(2);
Integer valueInThread2 = threadLocal.get();  // This will be 2
```

</details>
<br>

[//]: # (How can you use atomic variables in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use atomic variables in Java multithreading?
        </b>
    </summary>
<br>

Atomic variables in Java are used in multithreading environments
to perform atomic operations without using `synchronized` keyword.
The `java.util.concurrent.atomic` package defines classes
that support atomic operations on single variables.
All operations with these classes are atomic,
which eliminates the need for using a `synchronized` block.

Here's an example of how to use an `AtomicInteger`:

```
AtomicInteger atomicInteger = new AtomicInteger(0);

// In thread 1
int newValueInThread1 = atomicInteger.incrementAndGet();  // This will be 1

// In thread 2
int newValueInThread2 = atomicInteger.incrementAndGet();  // This will be 2
```

</details>
<br>

[//]: # (Can you explain the concept of a fork/join 
        framework in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a fork/join 
            framework in Java multithreading?
        </b>
    </summary>
<br>

The Fork/Join framework in Java is a tool for parallelize tasks.
It's designed to help you split up a big task into smaller subtasks,
then run these subtasks in parallel,
and finally combine the results of each subtask
to get the result of the original big task.

In terms of code, you'd use a `ForkJoinPool` to manage threads,
and a `RecursiveTask` or `RecursiveAction`
to represent the job that needs to be done.
The `compute()` method in RecursiveTask or RecursiveAction
is where you define how to split the job and how to combine the results.

```
ForkJoinPool pool = new ForkJoinPool();

RecursiveTask<MyResult> myTask = new RecursiveTask<MyResult>() {
    @Override
    protected MyResult compute() {
        if (jobIsSmallEnough) {
            // do the job directly and return the result
        } else {
            // split the job into smaller jobs
            // use fork() to do each smaller job in parallel
            // use join() to wait for the results
            // combine the results and return
        }
    }
};

MyResult result = pool.invoke(myTask);
```

Within the Fork/Join framework in Java, the fork() and join()
methods are used to manage subtasks within a RecursiveTask or RecursiveAction.

- **fork():** This method asynchronously executes the task that calls it

```
RecursiveTask<Integer> task1 = new MyRecursiveTask();
task1.fork();  // starts task1 asynchronously
```

- **join():** This method is called after fork()
  to wait for a task to complete and obtain its result.

```
Integer result = task1.join();  // waits for task1 to complete and returns the result
```

![img](https://images.idgesg.net/images/article/2023/04/forkjoinpool-100940067-large.jpg?auto=webp&quality=85,70)

</details>
<br>

[//]: # (How can you use the Phaser class in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the Phaser class in Java multithreading?
        </b>
    </summary>
<br>

The `Phaser` class in Java is used for synchronizing threads
that meet at a certain point of execution.
It's more flexible than `CyclicBarrier` and `CountDownLatch`
as it can handle a variable number of threads
and supports multiple phases.

You use `register()` to add threads, `arriveAndAwaitAdvance()`
to signal a thread's arrival and wait for others,
and `arriveAndDeregister()` to remove a thread.

```
Phaser phaser = new Phaser(1);  // 1 represents the main thread

for (int i = 0; i < 3; i++) {
    phaser.register();  // register a new unarrived party
    new Thread(() -> {
        System.out.println(Thread.currentThread().getName() + " arrived");
        phaser.arriveAndAwaitAdvance();  // current thread arrived and wait for others
        System.out.println(Thread.currentThread().getName() + " after passing barrier");
    }).start();
}

// deregister the main thread
phaser.arriveAndDeregister();
```

![img](https://miro.medium.com/v2/resize:fit:563/1*lxI9yzD9H714iVhs93zOyg.jpeg)

</details>
<br>

[//]: # (Can you explain the concept of a stamped lock in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a stamped lock in Java multithreading?
        </b>
    </summary>
<br>

`java.util.concurrent.locks.StampedLock`

The `StampedLock` class in Java is a form of
lock that supports both exclusive and non-exclusive modes.
It was introduced in Java 8 as an alternative to `ReadWriteLock`,
offering better performance under high contention.

`StampedLock` has three modes of operation:

1. **Writing (exclusive lock)**:
   Similar to a `ReentrantReadWriteLock.WriteLock`,
   only one thread can hold the write lock at a time.

2. **Reading (optimistic lock)**:
   This is a non-exclusive lock.
   Multiple threads can hold the read lock, as long
   as any thread does not hold the write lock.
   If a write lock is requested while threads hold the read lock,
   the write lock is blocked until all read locks are released.

3. **Optimistic Reading**:
   This is a weaker form of a read lock
   where a read operation is attempted without
   the explicit acquisition of a read lock.
   If the data read is not modified while reading, the result is valid.
   If the data is modified, the operation is retried with a full read lock.

Here's an example of how to use a `StampedLock`:

```
StampedLock stampedLock = new StampedLock();

// Writing
long stamp = stampedLock.writeLock();
try {
    // write to shared data
} finally {
    stampedLock.unlockWrite(stamp);
}

// Reading
stamp = stampedLock.readLock();
try {
    // read from shared data
} finally {
    stampedLock.unlockRead(stamp);
}

// Optimistic Reading
stamp = stampedLock.tryOptimisticRead();
// read from shared data
if (!stampedLock.validate(stamp)) {
    stamp = stampedLock.readLock();
    try {
        // retry read from shared data
    } finally {
        stampedLock.unlockRead(stamp);
    }
}
```

</details>
<br>

[//]: # (How can you use the Exchanger class in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the Exchanger class in Java multithreading?
        </b>
    </summary>
<br>

The `Exchanger` class in Java is a synchronization
point at which two threads can exchange information.
It's part of the `java.util.concurrent` package.
`Exchanger` waits until two separate threads call its `exchange()` method.
When that happens, it swaps the data supplied by the threads.

Here's an example of how to use an `Exchanger`:

```
Exchanger<String> exchanger = new Exchanger<>();

new Thread(() -> {
    try {
        String message = "Message from Thread 1";
        message = exchanger.exchange(message);  // send and receive
        System.out.println("Thread 1 received: " + message);
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();

new Thread(() -> {
    try {
        String message = "Message from Thread 2";
        message = exchanger.exchange(message);  // send and receive
        System.out.println("Thread 2 received: " + message);
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();
```

![img](https://jenkov.com/images/java-concurrency-utils/exchanger.png)

</details>
<br>

[//]: # (How can you use the CompletableFuture class in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the CompletableFuture class in Java multithreading?
        </b>
    </summary>
<br>

`CompletableFuture` in Java is a way to run tasks in the background

The `CompletableFuture` class in Java is used for asynchronous programming.
It represents a Future that can be explicitly completed,
and supports dependent functions and actions.
You create a CompletableFuture with supplyAsync() or similar methods,
and retrieve the result with get().

It also provides methods for chaining, combining,
and handling exceptions in asynchronous tasks.

```
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    // Some long running task
    try {
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        // Handle interruption
    }
    return "Hello, World!";
});

// Do other things...

// Get the result of the background task
String result = future.get();
```

</details>
<br>

[//]: # (Can you explain the concept of a thread group in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a thread group in Java multithreading?
        </b>
    </summary>
<br>

A `ThreadGroup` in Java is a data structure that controls the state
of multiple threads as a single unit.

Every thread in Java is a member of a thread group.
When a new thread is created, it belongs to the same group
as the thread that created it.

`ThreadGroup` provides several useful methods to operate
on a set of threads as a whole.
For example, you can interrupt all threads in a group,
stop them, or suspend them with a single method call.

```
// Create a new thread group
ThreadGroup group = new ThreadGroup("My Thread Group");

// Create new threads in the group
Thread thread1 = new Thread(group, () -> {
    // Some task...
});
Thread thread2 = new Thread(group, () -> {
    // Some task...
});

// Start the threads
thread1.start();
thread2.start();

// Check the number of active threads in the group
System.out.println("Active threads: " + group.activeCount());

// Interrupt all threads in the group
group.interrupt();
```

</details>
<br>

[//]: # (How can you use the ScheduledExecutorService in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the ScheduledExecutorService in Java multithreading?
        </b>
    </summary>
<br>

The `ScheduledExecutorService` interface in Java is a `ExecutorService`
that can schedule commands to run after a given delay,
or to execute periodically.

```
ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);

Runnable task = () -> System.out.println("Task executed at " + LocalDateTime.now());

// Execute task after 5 seconds delay
executor.schedule(task, 5, TimeUnit.SECONDS);

// Execute task every 10 seconds
executor.scheduleAtFixedRate(task, 0, 10, TimeUnit.SECONDS);
executor.shutdown();
```

</details>
<br>

[//]: # (Can you explain the concept of a thread factory in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a thread factory in Java multithreading?
        </b>
    </summary>
<br>

The `ThreadFactory` interface in Java is a factory
for creating new `Thread` instances.
This interface is used in situations where
you want to customize the properties of the threads being created,
such as their names, daemon status, priority, or `ThreadGroup`.

```
ThreadFactory factory = new ThreadFactory() {
    private final AtomicInteger counter = new AtomicInteger(0);

    @Override
    public Thread newThread(Runnable r) {
        Thread t = new Thread(r);
        t.setName("MyThread-" + counter.getAndIncrement());
        return t;
    }
};

ExecutorService executor = Executors.newFixedThreadPool(2, factory);

executor.submit(() -> {
    // Some task...
});
```

</details>
<br>

[//]: # (How can you use the LockSupport class in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the LockSupport class in Java multithreading?
        </b>
    </summary>
<br>

The `LockSupport` class in Java provides basic synchronization methods
that are useful in creating higher-level blocking/synchronization utilities.
It's part of the `java.util.concurrent.locks` package.
The two main methods in `LockSupport` are `park()` and `unpark(Thread)`.

- `park()`: This method is used to block the current thread,
  unless/until it's interrupted or `unpark(Thread)` is called on it.

- `unpark(Thread)`: This method is used to make
  a thread that called `park()` ready to run (if it's not already ready).

```
Thread thread = new Thread(() -> {
    System.out.println("Thread is starting...");
    LockSupport.park();
    System.out.println("Thread is resuming...");
});

thread.start();

// Sleep for a second to ensure the new thread gets to run
Thread.sleep(1000);

System.out.println("Main thread is going to unpark the other thread");
LockSupport.unpark(thread);
```

</details>
<br>

[//]: # (Can you explain the concept of a thread dump in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a thread dump in Java multithreading?
        </b>
    </summary>
<br>

A thread dump in Java is a snapshot of the state of all threads in a process,
including their method call stacks.
It's useful for diagnosing and debugging concurrency problems.
You can obtain a thread dump using the jstack tool, the Java Debug Interface,
by sending a signal to the JVM, or from a Java profiler.

</details>
<br>

[//]: # (How can you use the ThreadMXBean interface in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
             How can you use the ThreadMXBean interface in Java multithreading?
        </b>
    </summary>
<br>

The ThreadMXBean interface in Java provides methods
for getting information about all live threads and the overall
thread system in the Java Virtual Machine (JVM).
It's part of the java.lang.management package.

</details>
<br>

[//]: # (Can you explain the concept of a thread priority in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a 
            thread priority in Java multithreading?
        </b>
    </summary>
<br>

A thread scheduler in Java is a part of the JVM 
that decides which threads should run. 
It uses a preemptive, priority-based scheduling algorithm, 
meaning that at any given time, the runnable thread 
with the highest priority is chosen to run. 
The exact behavior can depend on the underlying OS and JVM implementation.

</details>
<br>

[//]: # (How can you use the Condition interface in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can you use the Condition interface in Java multithreading?
        </b>
    </summary>
<br>

The Condition interface in Java provides methods for a thread 
to suspend its execution until notified by another thread. 

You create a Condition from a Lock, and then use await() 
to wait on the condition and signal() or signalAll() to wake up 
one or all waiting threads. 

This is often used as a more flexible alternative to 
Object.wait() and Object.notify().

</details>
<br>

[//]: # (Can you explain the concept of a thread state in Java multithreading?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of a thread state in Java multithreading?
        </b>
    </summary>
<br>

In Java, a thread can be in one of several states during its lifecycle. 
These states are represented by the `Thread.State` enum. 
Here are the possible thread states:

- **NEW**: A thread that has not yet started is in this state.
- **RUNNABLE**: A thread executed in the Java virtual machine is in this state.
- **BLOCKED**: A thread blocked waiting for a monitor lock is in this state.
- **WAITING**: A thread that is waiting indefinitely for another thread to perform a particular action is in this state.
- **TIMED_WAITING**: A thread waiting for another thread 
to perform an action for up to a specified waiting time is in this state.
- **TERMINATED**: A thread that has exited is in this state.

You can get the current state of a thread using the `getState()` 
method of the `Thread` class:

</details>
<br>

[//]: # (What are daemon threads in Java and how to create them?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What are daemon threads in Java and how to create them?
        </b>
    </summary>
<br>

`A daemon thread` in Java is a low-priority thread that runs 
in the background and does not prevent the JVM from 
exiting when all user threads finish their execution. 

You can create a daemon thread by using the `setDaemon(true)` method 
from the Thread class

</details>
<br>

[//]: # (What is Project Loom in Java?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Project Loom in Java?
        </b>
    </summary>
<br>

Project Loom is an ongoing project in the OpenJDK community with the goal 
of adding lightweight concurrency support to the Java programming language. 

The main feature of Project Loom is the introduction of 
"virtual threads" (also known as "fibers"), 
which are designed to be much lighter weight than standard 
operating system threads.

As of now, Project Loom is still in the experimental stage 
and is not yet included in any stable Java release.

</details>
<br>