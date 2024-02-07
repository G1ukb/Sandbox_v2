<h1>Java Fundamentals</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Java OOP)

<br>
<details>
    <summary>
        <b><big><big><big>
            OOP principle
        </big></big></big></b>
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
        <b><big><big><big>
              Overloading and overriding
              overload signature
         </big></big></big></b>
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
         <b><big><big><big>
          Is Java Completely OOP
         </big></big></big></b>
     </summary>

No, because java contains primitives, and they, in turn, are not objects

</details>
<br>

[//]: # (Primitives and Reference Data Types)

<details>
    <summary>
        <b><big><big><big>
         Primitives and Reference Data Types
        </big></big></big></b>
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
        <b><big><big><big>
         Changing the value of a primitive, field, reference type when passing to a method
        </big></big></big></b>
    </summary>

Everything changes in value. Even when an object is passed,
actually passing the value of the reference to
the area in memory where this object is stored.

</details>
<br>

[//]: # (Constructors + initialization blocks)

<details>
    <summary>
        <b><big><big><big>
         Constructors (+ initialization blocks)
        </big></big></big></b>
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
         <b><big><big><big>
          In what order are they initialized
         </big></big></big></b>
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
         <b><big><big><big>
          Can a static constructor initialize regular fields (No)
         </big></big></big></b>
     </summary>

No, directly
Yes, if you create an object with your hands

</details>
<br>

[//]: # (Can an initialization block be described if there is nothing at all in the class except the constructor (Why?)

<details>
     <summary>
         <b><big><big><big>
          Can an initialization block be described if there is nothing at all in the class except the constructor (Why?)
         </big></big></big></b>
     </summary>
Yes

(Why?)
For logging
</details>
<br>

[//]: # (Java class types)

<details>
     <summary>
         <b><big><big><big>
          Java class types
         </big></big></big></b>
     </summary>
Interface - Abstract class - Ordinary class - Enum

![img](https://dan-it.gitlab.io/fs-book/java-basic/collections/img/inner_classes.png)
</details>
<br>

[//]: # (Class, method, field, access modifiers)

<details>
    <summary>
        <b><big><big><big>
         Class, method, field, access modifiers
        </big></big></big></b>
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
         <b><big><big><big>
          Object class
         </big></big></big></b>
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
         <b><big><big><big>
          How does clone work?
         </big></big></big></b>
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
        <b><big><big><big>
         Hashcode and equals redefinition rules
        </big></big></big></b>
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
        <b><big><big><big>
         Class.class
        </big></big></big></b>
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
        <b><big><big><big>
         immutable object
        </big></big></big></b>
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
        <b><big><big><big>
         String
        </big></big></big></b>
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