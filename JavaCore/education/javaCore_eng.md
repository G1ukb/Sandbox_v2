<details>
    <summary>
        <b><big><big><big>
            Java Fundamentals
        </big></big></big></b>
    </summary>

<br>
<details>
    <summary>
        <b><big><big>
            OOP principles
        </big></big></b>
    </summary>

- **Encapsulation** (Property of the **relationship** of one system object with another system object)
- **Inheritance** (Property of the **extension** of the parent (base) class by heirs)
- **Polymorphism** (The property of the same objects to perform the **same functionality** in different ways)
- **Abstraction** (Property of **getting** only the parameters we need from the object)

</details>
<br>

<details>
    <summary>
        <b><big><big>
            Overloading and overriding
        </big></big></b>
    </summary>

**When two or more methods in the same class have the same name,
but different parameters**, this is called **overload**.
An overload is considered a condition when the method signature
(name and parameters) is changed

**Overriding** is when a child class overrides a method.
(**declares a method with the same name and input parameters and return value**)
but writes these methods own behavior
(also if we implement a method)

</details>
<br>

<details>
    <summary>
        <b><big><big>
         Is Java Completely OOP
        </big></big></b>
    </summary>

No, because java contains primitives, and they, in turn, are not objects

</details>
<br>

<details>
    <summary>
        <b><big><big>
         Primitives and Reference Data Types
        </big></big></b>
    </summary>

**Reference** data types we need as transfer objects, they store and exchange value

Reference benefits:

* **may be empty**
* **reference data type can copy reference obj = anotherObj();**

**Primitive** data types are single values

Primitive data types:

* byte short int long
* float double
* boolean
* char

**(Primitive work much faster with compiler)**

</details>
<br>

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

<details>
    <summary>
        <b><big><big>
         Constructors (+ initialization blocks)
        </big></big></b>
    </summary>

**Constructor** is a method designed to **initialize an instance of a class**.
There is a constructor in every class! If it is not explicitly declared,
it will be provided by default.

- Default
- With options
- Copy (input parameter is an object of the same class)

**Init Blocks**:
There are static and non-static
In general, initialization blocks are present in Java to initialize
variable **before triggering constructor**

</details>
<br>

<details>
    <summary>
        <b><big><big>
         In what order are class fields initialized?
        </big></big></b>
     </summary>

Static initialization block
Static constructor
Static fields
Regular initialization block
Constructor
fields

</details>
<br>

<details>
    <summary>
        <b><big><big>
         Java class types
        </big></big></b>
    </summary>

* Interface
* Abstract class
* Ordinary class
* Enum

* **Static nested** - have logic that does not depend on object initialization
* **Local internal** - have logic that only services the base class
  while having its own logic and expanding encapsulation
* **Anonymous internal** - in order to have local logic without initialization
  and object description

pros:

* This is a way of logically grouping classes that are only used in one place
* It increases encapsulation
* This can result in more readable and maintainable code

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--A1l3RUvp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.mednikov.net/wp-content/uploads/2019/10/nested-classes-overview.png)
</details>
<br>

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

To indicate that a certain field should be ignored during serialization
of an object, the **transient** modifier is used

With the **volatile** modifier, things are a bit more complicated.
Guaranteed value from memory.

</details>
<br>

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

<details>
    <summary>
        <b><big><big>
         How does clone work?
        </big></big></b>
    </summary>

The default implementation of the Object.clone() method **returns a NON_DEEP Copy**.

**When NON_DEEP copying** if the field value is a primitive type,
it copies its value; otherwise,
if the field value is an object reference, it copies the reference and,
therefore refers to the same object.
</details>
<br>

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

<details>
    <summary>
        <b><big><big>
            Сlass.class
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

</details>
<br>

<details>
    <summary>
        <b><big><big><big>
            Nested class
        </big></big></big></b>
    </summary>

<br>
<details>
    <summary>
        <b><big><big>
         Nested class types
        </big></big></b>
    </summary>

* **Static nested** - have logic that does not depend on object initialization
* **Local internal** - have logic that only services the base class
  while having its own logic and expanding encapsulation
* **Anonymous internal** - in order to have local logic without initialization
  and object description

pros:

* This is a way of logically grouping classes that are only used in one place
* It increases encapsulation
* This can result in more readable and maintainable code

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--A1l3RUvp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.mednikov.net/wp-content/uploads/2019/10/nested-classes-overview.png)
</details>
<br>

<details>
    <summary>
        <b><big><big>
          When to use which type of class
        </big></big></b>
    </summary>

**Local class:**

+ Logical grouping
+ introduction of a new named data type

**Anonymous class:** if you need to use methods or initialize
fields and at the same time the performed action serves only 1 class

**Nested class:** use it if your requirements are similar
local class, you want to make that type more accessible
and you need access to local variables or parameters of the parent's class.

**Static nested:** for static fields of the base static class
and the ability to expand encapsulation for other system objects

[Oracle link](https://docs.oracle.com/javase/tutorial/java/javaOO/whentouse.html)
</details>
<br>

</details>
<br>

<details>
    <summary>
        <b><big><big><big>
            Exceptions
        </big></big></big></b>
    </summary>

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
- **Do not log or forward**, do not neglect possible stuffing and logging
- **Explicitly define the exception to be thrown**. The narrower, the more accurate
- **First catch the bottleneck then the wide**

[infoLink](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Java-Exception-handling-best-practices)
</details>
<br>

</details>
<br>

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
         How childes and base classes behave when deserialized
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

<details>
    <summary>
        <b><big><big><big>
            Annotations
        </big></big></big></b>
    </summary>

<br>
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

<details>
    <summary>
        <b><big><big>
          Explain annotation template
         </big></big></b>
     </summary>

@Target (specify type)
@Retention(specify how it works) //SOURCE, CLASS and RUNTIME
</details>
<br>

<details>
    <summary>
        <b><big><big>
         What is meta annotation
         </big></big></b>
     </summary>

Meta annotations are annotations that extend the behavior of already created annotations.
added via @inherit annotation
</details>
<br>

</details>
<br>