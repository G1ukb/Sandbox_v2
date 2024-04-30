<h1>Java Fundamentals</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Java OOP)
<details>
    <summary style="font-size: 25px;">
        <b>
            OOP principle
        </b>
    </summary>
<br>

- **Encapsulation** (Property of a single object of the system to build relationship
  with another objects' of the system)
- **Inheritance** (Property of expand (base) class by children)
- **Polymorphism** (The property of the same objects performs the functionality in different ways)
- **Abstraction** (Property of extraction from an object only to us parameters)

Additional:

**Composition**

* Objects can be composed of other objects.
* Composition allows objects to be created from other objects.
* Objects can delegate behavior to their component objects.

**Aggregation**

* Objects can have references to other objects.
* Aggregation is a weaker form of composition
  where objects are not dependent on each other.
* Objects can be associated with each other
  without being composed of each other.

Other OOP principles

* **Modularity**: Classes should be designed to be independent and reusable.
* **Loose coupling**: Classes should be loosely coupled to each other
  to reduce dependencies.
* **High cohesion:** Classes should have a single, well-defined purpose.
* **Single responsibility principle:** Classes should have a single,
  well-defined responsibility.
* **Interface segregation principle:** Interfaces should be small and specific.
* **Dependency inversion principle:** Classes should depend on abstractions,
  not on concrete implementations.
* **Liskov substitution principle:** Subclasses should be substitutable
  for their superclasses.
* **Open/closed principle:** Classes should be open for extension
  but closed for modification.

</details>
<br>

[//]: # (Overloading and overriding)

<details>
    <summary style="font-size: 25px;">
        <b>
              Overloading and overriding
              overload signature
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
          Is Java Completely OOP
        </b>
    </summary>
<br>

No, because java contains primitives, and they, in turn, are not objects

</details>
<br>

[//]: # (Primitives and Reference Data Types)

<details>
    <summary style="font-size: 25px;">
        <b>
         Primitives and Reference Data Types
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
         Changing the value of a primitive, field, reference type when passing to a method
        </b>
    </summary>
<br>

Everything changes in value. Even when an object is passed,
actually passing the value of the reference to
the area in memory where this object is stored.

</details>
<br>

[//]: # (Constructors + initialization blocks)

<details>
    <summary style="font-size: 25px;">
        <b>
         Constructors (+ initialization blocks)
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
          In what order are they initialized
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
          Can a static constructor initialize regular fields (No)
        </b>
    </summary>
<br>

No, directly
Yes, if you create an object with your hands

</details>
<br>

[//]: # (Can an initialization block be described if there is nothing at all in the class except the constructor (Why?)

<details>
    <summary style="font-size: 25px;">
        <b>
          Can an initialization block be described if there is nothing at all in the class except the constructor (Why?)
        </b>
    </summary>
<br>
Yes

(Why?)
For logging
</details>
<br>

[//]: # (Java class types)

<details>
    <summary style="font-size: 25px;">
        <b>
          Java class types
        </b>
    </summary>
<br>
Interface - Abstract class - Ordinary class - Enum

![img](https://dan-it.gitlab.io/fs-book/java-basic/collections/img/inner_classes.png)
</details>
<br>

[//]: # (Class, method, field, access modifiers)

<details>
    <summary style="font-size: 25px;">
        <b>
         Class, method, field, access modifiers
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
          Object class
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
          How does clone work?
        </b>
    </summary>
<br>

The default implementation of the Object.clone() method **returns a Shallow Copy**.

**When shallow copying** if the field value is a primitive type,
it copies its value; otherwise,
if the field value is an object reference, it copies the reference and,
therefore refers to the same object.
</details>
<br>

[//]: # (Rules for redefining hashcode and equals)

<details>
    <summary style="font-size: 25px;">
        <b>
         Hashcode and equals redefinition rules
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
         Class.class
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
         immutable object
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
         String
        </b>
    </summary>
<br>

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

[//]: # (Java Comparable vs Comparator)

<details>
    <summary style="font-size: 25px;">
        <b>
          Java Comparable vs Comparator
        </b>
    </summary>
<br>

Both `Comparable` and `Comparator` are interfaces in Java
that are used to compare objects.
However, they differ in their purpose and implementation:

**Comparable:**

* Defines a single method, `compareTo(T o)`,
  which compares the current object with another object of the same type.
* The object itself implements the `compareTo` method.
* Useful when you want to sort objects
  of the same type using the `Collections.sort()` method
  or the `Arrays.sort()` method.
* Provides a natural ordering for the objects.

**Comparator:**

* Defines a single method, `compare(T o1, T o2)`,
  which compares two objects of the same type.
* The `compare` method is implemented in a separate class.
* Useful when you want to sort objects
  of the same type using a custom comparison logic.
* Allows for more flexible and customizable sorting.
* Used with `Collections.sort()` and `Arrays.sort()` with a custom Comparator

**Example:**

```java
// Comparable example
public class Person implements Comparable<Person> {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(Person o) {
        return this.name.compareTo(o.name);
    }
}

// Comparator example
public class AgeComparator implements Comparator<Person> {
    @Override
    public int compare(Person o1, Person o2) {
        return o1.age - o2.age;
    }
}
```

**When to use which:**

* Use `Comparable` when you want a simple, natural ordering for your objects.
* Use `Comparator` when you need a more flexible and customizable sorting logic.

**Additional Notes:**

* You can implement both `Comparable` and `Comparator` for the same class.
* The `Comparator` interface is often used with the `Collections.sort()` method and the `Arrays.sort()` method to
  provide a custom comparison logic.
* You can also use a lambda expression to create a `Comparator`.

**Summary:**

`Comparable` and `Comparator` are interfaces in Java
that are used to compare objects.
`Comparable` defines a natural ordering for objects,
while `Comparator` allows for a custom comparison logic.
Use `Comparable` when you want a simple, natural ordering for your objects.
Use `Comparator` when you need a more flexible and customizable sorting logic.

</details>
<br>

[//]: # (What are Immutable Classes?)

<details>
    <summary style="font-size: 25px;">
        <b>
          What are Immutable Classes?
        </b>
    </summary>
<br>

Immutable classes are classes whose objects cannot be modified
after they are created.

This means that once an object of an immutable class is created,
its state cannot be changed.

This is in contrast to mutable classes,
whose objects can be modified after they are created.

**Why use Immutable Classes?**

There are several reasons to use immutable classes:

* **Thread safety:** Immutable classes are inherently thread-safe,
  as their state cannot be changed by multiple threads simultaneously.
* **Immutability simplifies reasoning about code:**
  It is easier to reason about the behavior of code
  that uses immutable objects, as you know that
  the state of the objects will not change.
* **Immutability can improve performance:**
  Immutable objects can be cached and reused, as their state will not change.
* **Immutability can make code more maintainable:**
  Immutable objects are less likely to be accidentally modified,
  which can make code more maintainable.

**How to Create Immutable Classes in Java?**

There are several ways to create immutable classes in Java:

* **Make all fields final:** Declare all fields of the class as `final`.
  This will prevent them from being modified after the object is created.
* **Make the constructor private:** Make the constructor of the class private.
  This will prevent other classes from creating instances of the class.
* **Provide methods to create new objects:**
  Provide methods that return new instances of the class with the desired
  state.
* **Return defensive copies:**
  When returning objects from methods, return defensive copies.
  This will prevent other classes from modifying the original objects.

**Example:**

```java
public final class Person {
    private final String name;
    private final int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public Person withName(String newName) {
        return new Person(newName, age);
    }

    public Person withAge(int newAge) {
        return new Person(name, newAge);
    }
}
```

</details>
<br>