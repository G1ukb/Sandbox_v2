[//]: # (Java Fundamentals)

<details>
    <summary>
        <b><big><big><big>
            Java Fundamentals
        </big></big></big></b>
    </summary>

[//]: # (Java OOP)

<br>
<details>
    <summary>
        <b><big><big>
            OOP principle
        </big></big></b>
      </summary>

- **Encapsulation** (Property of a single object of the system to build relationship
  with another objects' of the system)
- **Inheritance** (Property of expand (base) class by children)
- **Polymorphism** (The property of the same objects performs the functionality in different ways)
- **Abstraction** (Property of extraction from an object only to us parameters)

</details>
<br>

[//]: # (Overloading and overriding)

<details>
    <summary>
        <b><big><big>
              Overloading and overriding
              overload signature
         </big></big></b>
     </summary>

When two or more methods in the same class have the same name,
but different parameters, this is called overload.
An overload is considered a condition when the method signature (name and parameters) is changed

Overriding is when a child class overrides a method.
(declares a method with the same name and input parameters and return value)
but writes this methods own behavior
(also if we implement a method)

</details>
<br>

[//]: # (Is Java Completely OOP)

<details>
     <summary>
         <b><big><big>
          Is Java Completely OOP
         </big></big></b>
     </summary>

No, because java contains primitives, and they, in turn, are not objects

</details>
<br>

[//]: # (Primitives and Reference Data Types)

<details>
    <summary>
        <b><big><big>
         Primitives and Reference Data Types
        </big></big></b>
    </summary>

**Reference** data types we need as transfer objects they store and
exchange value

Link Benefits:

* **may be empty**
  * **reference data type can copy reference obj = anotherObj();**

**Primitive** data types are single values ​​stored in memory.

Primitive data types:

* byte short int long
  * float double
  * boolean
  * char

**(with compiler they work much faster due to memory device and JVM)**
</details>
<br>

[//]: # (Changing the value of a primitive, field, reference type when passing to a method)

<details>
    <summary>
        <b><big><big>
         Changing the value of a primitive, field, reference type when passing to a method
        </big></big></b>
    </summary>

Everything changes in value. Even when an object is passed,
actually passing the value of the reference to
the area in memory where this object is stored.

</details>
<br>

[//]: # (Constructors + initialization blocks)

<details>
    <summary>
        <b><big><big>
         Constructors (+ initialization blocks)
        </big></big></b>
    </summary>

**Constructor** is a method designed to initialize an instance of a class.
There is a constructor in every class! If it is not explicitly declared,
it will be provided by default.

- Default
  - With options
  - Copy (input parameter is an object of the same class)

**Init Blocks**:
There are static and non-static
In general, initialization blocks are present in Java to initialize a variable before firing.
constructor

</details>
<br>

[//]: # (In what order are they initialized)

<details>
     <summary>
         <b><big><big>
          In what order are they initialized
         </big></big></b>
     </summary>

Statics
Static init block
Static constructor
Static fields
Then regular instances
init block
constructor
fields

</details>
<br>

[//]: # (Can a static constructor initialize regular fields No)

<details>
     <summary>
         <b><big><big>
          Can a static constructor initialize regular fields (No)
         </big></big></b>
     </summary>

No, directly
Yes, if you create an object with your hands

</details>
<br>

[//]: # (Can an initialization block be described if there is nothing at all in the class except the constructor (Why?)

<details>
     <summary>
         <b><big><big>
          Can an initialization block be described if there is nothing at all in the class except the constructor (Why?)
         </big></big></b>
     </summary>
Yes

(Why?)
For logging
</details>
<br>

[//]: # (Java class types)

<details>
     <summary>
         <b><big><big>
          Java class types
         </big></big></b>
     </summary>
Interface - Abstract class - Ordinary class - Enum

![img](https://dan-it.gitlab.io/fs-book/java-basic/collections/img/inner_classes.png)
</details>
<br>

[//]: # (Class, method, field, access modifiers)

<details>
    <summary>
        <b><big><big>
         Class, method, field, access modifiers
        </big></big></b>
    </summary>

**Access**
Java uses the following access modifiers:

- **public**: public class or class member.
- **private**: private class or class member, opposite of the public modifier.
- **protected**: such a class or class member is accessible from anywhere in the current class or package
- **package private**. Such fields or methods are visible to all classes in the current package.

**In class context**
Abstract, final, static modifiers are used in class context

**In the context of methods**
Methods in Java can be declared as abstract, final, static, native, synchronized.

The **native** modifier before a method declaration indicates that it is specific
for the operating system. Like an abstract method, it also has no body,
and the implementation is in compiled form in JVM files.

The **synchronized** modifier for a method says that before it is executed, there must be
the object's monitor is captured (for a non-static method), or the monitor
associated with the class (for a static method).

**In the context of Fields**
They can be declared with such modifiers as static, final, transient, volatile.

To indicate that a certain field should be ignored during serialization of an object,
the **transient** modifier is used

With the **volatile** modifier, things are a bit more complicated. Guaranteed value from memory.


</details>
<br>

[//]: # (Object.class)

<details>
     <summary>
         <b><big><big>
          Object class
         </big></big></b>
     </summary>

In fact, all classes inherit from the Object class.
And the Object class is necessary in order to be able to work with these objects.

To work with objects:

- toString
- hashCode - By default - an integer address in memory
- equals - returns the result of comparing two objects
- getClass - get object class at run time.
- finalize - marks an object for GC cleanup
- clone - shallow copy method

Multithreading

- notify
  - wait
  - notify all

</details>
<br>

[//]: # (How does clone work?)

<details>
     <summary>
         <b><big><big>
          How does clone work?
         </big></big></b>
     </summary>

The default implementation of the Object.clone() method **returns a Shallow Copy**.

**When shallow copying** if the field value is a primitive type,
it copies its value; otherwise,
if the field value is an object reference, it copies the reference and,
therefore refers to the same object.
</details>
<br>

[//]: # (Rules for redefining hashcode and equals)

<details>
    <summary>
        <b><big><big>
         Hashcode and equals redefinition rules
        </big></big></b>
    </summary>

**Reflexivity:** An object must equal itself.

**Symmetric:** if a.equals(b) returns true, then b.equals(a) must also return true.

**Transitivity:** if a.equals(b) returns true and b.equals(c) also returns true, then c.equals(a)
should also return true.

**Consistency:** calling the equals() method again must return the same
and the same value until any value of the object's properties is changed.
That is, if two objects are equal in Java, then they will be equal as long as their properties remain unchanged.

**Null Comparison**: The object must be tested against null.
If the object is null, then the method should return false, not a NullPointerException.
For example, a.equals(null) should return false.

</details>
<br>

[//]: # (Class.class)

<details>
    <summary>
        <b><big><big>
         Class.class
        </big></big></b>
    </summary>

The template initially described in the class, transforming into bytecode, looks like a set
arrays that contain a large amount of data.
Who uploaded, which fields + count, which constructors + count,
package, parent, interfaces.

* getSuperclass()
* getPackage()
* getMethods()
* getInterfaces()

**java.lang.Class** represents methods for getting this data
(as a method of application - reflection)
methods are also provided for determining the class type

* isPrimitive()
* isLocalClass()
* isInterface()
* isInstance(Object obj)
* isEnum()
* isAssignableFrom(Class<?> cls)
* isAnonymousClass()

</details>
<br>

[//]: # (Immutable object)

<details>
    <summary>
        <b><big><big>
         immutable object
        </big></big></b>
    </summary>

An immutable object is an object that is internal
whose state remains constant after it has been fully created.

This means that the immutable object's public API guarantees that we
that he would behave the same throughout his life.

To achieve this, the following elements are used:

* **final** - guarantees the immutability of the reference, but not the value
* If an immutable object stores references to other objects
  make sure that its fields are also final, and it does not have the opportunity to change
  its meaning from outside. For example, by closing access to networks and filling in the fields only
  once in the element's constructor.

What gives us Immutable object:

* we can safely share the object throughout the application
* it has no side effects of changing the state

</details>
<br>

[//]: # (String)

<details>
    <summary>
        <b><big><big>
         String
        </big></big></b>
    </summary>

A string object representing a set of char elements

2 ways to create

* using a **customized constructor** ("123")
* by creating **object new String**("123")

In this case, when creating, an object will be created, placed in the string pool
and as a result, a reference to the object in the string pool will be returned to us

Java string pool: Java string pool refers to a set of strings,
which are stored in heap memory.
However, every time a new object is created,
**string pool first checks if this object is present in the pool or not**.

**String objects are themselves immutable**. This means that the string is part of
an array of strings and returns a reference to a new string each time it changes.
Since with each change we try to check the entire pool of strings for the presence
search word, the operation can be extremely demanding on performance

To avoid this problem, there were
created **mutable StringBuffer and StringBuilder**

They are streams of strings allowing the string to be manipulated to win performance.

At the same time, there are two of them for dividing into work in a multi-threaded environment and not.
**StringBuffer is synchronized - StringBuilder is faster**

</details>
<br>  

</details>
<br>

[//]: # (Nested classes)

<details>
    <summary>
        <b><big><big><big>
            Inner Nested Classes
        </big></big></big></b>
    </summary>

[//]: # (Nested class types)

<br>
<details>
    <summary>
        <b><big><big>
         Nested class types
        </big></big></b>
    </summary>

* **Static nested** - static logic that does not depend on object initialization
* **Local internal** - logic that depends on object initialization.
  By optimizing logical grouping and expanding encapsulation.
* **Anonymous internal** - simplified form without class creation and initialization

Why do we need it:

* Method of logical grouping so as not to litter the package,
  a way to warn the programmer that a class is being used/owned by another
* Increased encapsulation.
* As a result, we can get more readable and cleaner code.

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--A1l3RUvp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.mednikov.net/wp- content/uploads/2019/10/nested-classes-overview.png)
</details>
<br>

[//]: # (When to use which type of class)

<details>
    <summary>
        <b><big><big>
          When to use which type of class
        </big></big></b>
    </summary>

**Local class:**

+ introduction of a new named data type
+ logical grouping

**Anonymous class:** if you need to use methods or initialize
fields and at the same time the performed action serves only 1 class
and making it even local is considered expensive

**Nested class:** use this if your requirements are similar
local class, you want to make that type more accessible
and you need access to local variables or parameters of the parent's class.

**Static nested:** for static fields of the base static class

+ the ability to expand encapsulation for other system objects

[Oracle link](https://docs.oracle.com/javase/tutorial/java/javaOO/whentouse.html)
</details>
<br>

</details>
<br>

[//]: # (Annotations)

<details>
    <summary>
        <b><big><big><big>
            Annotations
        </big></big></big></b>
    </summary>

[//]: # (What is and what is the main reason for using annotations?)

<br>
<details>
    <summary>
        <b><big><big>
            What is and what is the main reason for using annotations?
         </big></big></b>
     </summary>

Annotations are descriptors included in the text of the program,
and are used to store program code metadata,
required at different stages of the program life cycle.

The information stored in annotations can be used by appropriate
handlers to create the necessary auxiliary files
or for marking classes, fields, etc.

</details>
<br>

[//]: # (Instructions to execute annotations by execution type?)

<details>
     <summary>
         <b><big><big>
             Annotation execution instructions (by execution type)?
          </big></big></b>
      </summary>

Instructions for the compiler (Compiler)
@Override
@SuppressWarnings
Build-time instruction
Instruction at Runtime
@Deprecated

</details>
<br>

[//]: # (What types of objects can be returned from an annotation method declaration?)

<details>
     <summary>
         <b><big><big>
             What types of objects can be returned from an annotation method declaration?
          </big></big></b>
      </summary>

The return type must be
- primitive,
- String ,
- class,
- Enum
- an array of one of the previous types.

</details>
<br>

[//]: # (How custom annotations can help improve code)

<details>
     <summary>
         <b><big><big>
             How custom annotations can help improve code
          </big></big></b>
      </summary>

* Reduce coding effort by adding default behavior to methods.
* Adding custom behavior to classes and interfaces
* Save the effort of writing XML descriptors and marker interfaces.

</details>
<br>

[//]: # (Short annotation template)

<details>
     <summary>
         <b><big><big>
          Brief annotation template
          </big></big></b>
      </summary>

@Target (specify type)
@Retention(specify how it works) //SOURCE, CLASS and RUNTIME
</details>
<br>

[//]: # (What is meta annotation)

<details>
     <summary>
         <b><big><big>
          What is meta annotation
          </big></big></b>
      </summary>

Meta annotations are annotations that extend the behavior of already 
created annotations.
added via @inherit annotation
</details>
<br>

</details>
<br>

[//]: # (Exeptions)

<details>
    <summary>
        <b><big><big><big>
            Exceptions
        </big></big></big></b>
    </summary>

[//]: # (Best practices for using exceptions)

<br>
<details>
    <summary>
        <b><big><big>
         Best practices for using exceptions
        </big></big></b>
    </summary>

- **Be careful what you register**
  Error result logs should not contain private information
- **It's wrong to catch exceptions and do nothing with them**
- **Include a global exception handler to avoid a critical situation in
  important point for you**
- **Do not close the resource with your hands**
- **Dump Early, Catch Later** is the rule to cover
  as much as possible or catch as early as possible
- **Do not forget about log or forward**, do not neglect possible stuffing and logging
- **Explicitly define the exception to be thrown**. The narrower, the more accurate
- **First catch the bottleneck then the wide**

[infoLink](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Java-Exception-handling-best-practices)
</details>
<br>

</details>
<br>

[//]: # (Generics)

<details>
    <summary>
        <b><big><big><big>
            Generics
        </big></big></big></b>
    </summary>

[Usefully resource](https://convincedcoder.com/2018/09/29/Java-generics-wildcards-type-erasure/)

[//]: # (What is type erasure and how does it work)

<details>
    <summary>
        <b><big><big>
            What is type erasure and how does it work
         </big></big></b>
     </summary>

When writing code, we specify generics of various kinds in order to
make our classes more scalable

And in order for this mechanism to work correctly from the point of view of compilation.
The compiler converts the generic type to an object. This is called type erasure.

    How it works
    public static <E> boolean containsElement(E [] elements, E element){
    after compilation it looks like
    public static boolean containsElement(Object [] elements, Object element){

</details>
<br>

[//]: # (What is a bridge method)

<details>
    <summary>
        <b><big><big>
            What is the bridge method
         </big></big></b>
     </summary>

The hidden mechanism of the Java compiler, in which he himself tries to exclude
type substitution error
And for this it generates an additional method for working with wildcard methods

    Example:
    public class MyComparator implements Comparator<Integer> {
    public int compare(Integer a, Integer b) {

    The comparator is explicitly typed, so comparing two Object objects will not be correct

.

    So the compiler will create a bridge method to avoid the problem:

    public class MyComparator implements Comparator<Integer> {
    public int compare(Integer a, Integer b) {
    
    //THIS is a "bridge method"
    public int compare(Object a, Object b) {
    return compare((Integer)a, (Integer)b);

</details>
<br>

</details>
<br>

[//]: # (Collections)

<details>
    <summary>
        <b><big><big><big>
            Collections
        </big></big></big></b>
    </summary>

![img](https://data-flair.training/blogs/wp-content/uploads/sites/2/2018/03/hierarchy-of-collection-framework-in-java.webp)

[//]: # (Explore the basic principle of basic collections)

<details>
    <summary>
        <b><big><big>
            Reveal the basic principle of how basic collections work
         </big></big></b>
     </summary>

* **List**
* **ArrayList** - Classic storage model where memory cells are allocated
* **LinkedList** - Storage model where everything is stored as a sheet which
  has links to the previous and next elements

* **Queue** (represented by a linked list)
* **PriorityQueue** - PriorityQueue is based on a bunch of priorities.
  The elements of the priority queue are ordered according to
  natural order or comparator,
  provided during queuing
* **ArrayDeque** is a special type of array that grows and allows users to
  add or remove elements from both sides of the queue.

* **Set** (represented by a map whose keys will be set elements)
* **HashSet** - store items in buckets using hash mechanism
* **LinkedHashSet** - stores elements in buckets using hash mechanism,
  while maintaining the insertion order of the elements.
* **TreeSet** - sorted storage of unique elements, redblack tree is used
  for storage, where nodes are distributed left and right depending on their own order

* **Map** (separately because they are not iterable in the usual sense of collections)
* **HashMap** - classic bucket key system, storage in a key value pack
* **LinkedHashMap** - classic bucket key system + order preservation
* **HashTable** - thread safe version of hashmap, works the same
* **TreeMap** - works like a set, storing keys in a red-black tree or self-written
  comparator

</details>
<br>

<details>
    <summary>
        <b><big><big>
            В какой момент, какую использовать
         </big></big></b>
     </summary>

![](https://i.stack.imgur.com/aSDsG.png)

* **List**
* **ArrayList** - когда нужен быстрый поиск по индексу, но мы готовы потерпеть удаление вставку
* **LinkedList** - когда нужна быстрая вставка и удаление, но мы готовы терпеть поиск по индексу


* **Queue** (представлено связным списком) - когда важен порядок вложенности и выдачи
* **PriorityQueue** - когда нужен порядок зависимый от приоритета
* **ArrayDeque** - когда нужен порядок вставки выдачи, но при этом мы хотим получать
  как первый так и последний элемент


* **Set** - когда нужна уникальность
* **HashSet** - когда нужна уникальность и быстрота
* **LinkedHashSet** - когда нужна уникальность и сохранение порядка вставки
* **TreeSet** - когда нужна уникальность и фильтрация для оптимизации
  доступа, удаления, вставки, все работает как Log(n)


* **Map** - когда нужна пара ключ значение
* **HashMap** - когда нужна быстрота
* **LinkedHashMap** - когда нужен порядок вставки
* **HashTable** - когда нужна быстрота и потокобезопасность
* **TreeMap** - когда нужна сортировка по ключам

</details>
<br>

<details>
    <summary>
        <b><big><big>
            Collections
         </big></big></b>
     </summary>

Core collections other than HashTable are non-thread safe, which means
what i.e. when multiple parallel threads save and retrieve
elements from these collections, they can corrupt the data.

2 main synchronization guarantees

1. In the **Collections** package
* Collections.synchronizedList(List)
* Collections.synchronizedSet(Set)
* Collections.synchronizedMap(Map)

**Synchronization in this case is provided by internal blocking,
this means that the collection becomes a monitor, it allows only one
stream, but still saved for reading.**

2. In the **util.concurrent** package (for almost every single case, but the most basic in my opinion)
* ConcurrentHashMap
  **(stores values in buckets in the same way, but the monitor only locks a separate bucket
  for writing, not locking the rest, thereby maintaining thread safety)**
* CopyOnWriteArrayList
  **(get value operations are applied to the original collection when operations
  modifications are carried out on a copy of the existing array, blocking the main one for modification
  after the result overwrites the base, and the next operation repeats the action)**

</details>
<br>

</details>
<br>

[//]: # (Multithreading)

<details>
    <summary>
        <b><big><big><big>
            Multithreading
        </big></big></big></b>
    </summary>

[//]: # (Basic concepts)

<br>
<details>
    <summary>
        <b><big><big>
            Basic concepts
         </big></big></b>
     </summary>

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
     <summary>
         <b><big><big>
             Happens before
          </big></big></b>
      </summary>

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
     <summary>
         <b><big><big>
             PESC in multithreading
          </big></big></b>
      </summary>

![](https://jenkov.com/images/java-concurrency/producer-consumer-2.png)

</details>
<br>

[//]: # (Locks/Atomics)

<details>
    <summary>
        <b><big><big>
            Locks/Atomics
         </big></big></b>
     </summary>

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
      <summary>
          <b><big><big>
              Starvation/DeadLock/LiveLock
           </big></big></b>
       </summary>

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

</details>
<br>

[//]: # (IO/NIO)

<details>
    <summary>
        <b><big><big><big>
            IO/NIO
        </big></big></big></b>
    </summary>

<br>
<details>
    <summary>
        <b><big><big>
            IO vs NIO difference
         </big></big></b>
     </summary>

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

</details>
<br>

[//]: # (Serializations)

<details>
    <summary>
        <b><big><big><big>
            Serialization
        </big></big></big></b>
    </summary>

<br>
<details>
    <summary>
        <b><big><big>
         Ways to Serialize an Object
        </big></big></b>
    </summary>

2 ways to serialize an object

**Serialization using the Serializable method:**

- specific marker interface
- to use it, we must call writeObject on the io stream

**Serialization using the Externalizable method:**

- successor of marker interface with two read/writeExternal methods
- allows us to create custom serialization and deserialization settings

</details>
<br>

<details>
    <summary>
        <b><big><big>
         How descendants and base classes behave when deserialized
        </big></big></b>
    </summary>

When a class implements the java.io.Serializable interface,
all its subclasses are also serializable.

Conversely, when an object has a reference to another object,
these objects must implement the Serializable interface separately,
otherwise a NotSerializableException will be thrown

</details>
<br>

</details>
<br>

[//]: # (Classloading)

<details>
    <summary>
        <b><big><big><big>
            Classloading
        </big></big></big></b>
    </summary>

<br>
<details>
    <summary>
        <b><big><big>
         Classloader and in what situations it can be useful for us
        </big></big></b>
    </summary>

Class loaders are responsible for **dynamically loading Java classes in the JVM**
during execution.

Also, these Java classes are not immediately loaded into memory,
and when they are required by the application (LAZY).

* **Bootstrap** - bootstrap class loader
* **Extension** - provides loading of extensions
* **System** - loads all files in the classpath variable

Delegation model - a model in which class loaders delegate
search for a class up the chain.

However, in scenarios where we need to load classes from the local hard drive
or from the network, we may need
use custom class loaders.

* Help modifying existing bytecode
* Create classes dynamically suited to the needs of the user
  (e.g. switching JDBC)

</details>
<br>

</details>
<br>

[//]: # (Garbage collector)

<details>
    <summary>
        <b><big><big><big>
            Garbage collector
        </big></big></big></b>
    </summary>

<br>
<details>
    <summary>
        <b><big><big>
         What are and which when to use
        </big></big></b>
    </summary>

* Serial Garbage Collector
* Parallel Garbage Collector
* Concurrent Mark Sweep (CMS)
* Garbage First (G1)

The **Serial** garbage collector is well suited for single-threaded environments.
It uses a single thread for garbage collection.
It works by holding all application threads.
(Suitable for 1 core situation only)

**Parallel** is the default garbage collector used by the JVM.
The operation of the parallel garbage collector is the same as that of the sequential one.
except that it runs on multiple build threads.
(Suitable for standard situations)

**CMS** - It does not freeze application threads during garbage collection.
GC threads run concurrently with application threads, but pay more
CPU usage.

**G1** - used if we have a large (more than 4 GB) memory (heap).
He divides everything into fragments. But there are problems with fragmentation, and because of this
it needs more memory.

</details>
<br>

</details>
<br>