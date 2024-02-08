<h1>Generics</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (For what proposes generics was added into Java? )
<details>
    <summary style="font-size: 25px;">
        <b> 
            For what proposes generics were added into Java?
        </b>
    </summary>
<br>

**The main reason** for adding generics was to provide stronger type checks
at compile time.

The Java compiler uses this information **to ensure that you only one type**
is used or added for the collections.

Before generics, you could store any type of objects
in collections, which means you could have a List of Strings,
but also add an Integer to it.
This would compile fine, but would throw a ClassCastException
at runtime when you try to retrieve the Integer as a String.

With generics, you can specify the type of objects stored in a collection,
providing type safety.
If you try to add an object of another type,
it will result in a compile-time error.
This helps in identifying potential errors early in the development cycle,
making the code more robust and less prone to runtime errors.

</details>
<br>

[//]: # (Advantages of using generics?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Advantages of using generics?
        </b>
    </summary>
<br>

- **Type Safety:** Generics provide compile-time type safety.
  This means that if you try to use the wrong type of object,
  the compiler will give you an error.
  This can prevent potential ClassCastException that can occur at runtime.

- **Code Reusability:** Generics allow you to write code that can be used
  with any type of object, while still being type safe.
  For example, you can write a single generic method for sorting objects
  of any type, rather than having to write separate methods for each type.

- **Elimination of Type Casting:** Without generics, you would need
  to cast objects retrieved from a collection.
  With generics, the type casting is implicit,
  making the code cleaner and less prone to runtime errors.

- **Implementing Generic Algorithms:** Generics enable programmers
  to implement generic algorithms that work on collections of different types,
  can be customized, and are type-safe and easier to read.

</details>
<br>

[//]: # (Are there any disadvantages of generics?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Are there any disadvantages of generics?
        </b>
    </summary>
<br>

- **Type Erasure:** Generics in Java use type erasure,
  which means the type information is not available at runtime.
  This can limit what you can do with generics.
  For example, you cannot use instanceof with a generic type,
  create an array of a generic type,
  or create a new instance of a generic type.

- **Confusing Syntax:** The syntax for generics can be verbose and confusing,
  especially for complex types.
  This can make the code harder to read and understand.

- **Backward Compatibility:** While generics provide compile-time type safety,
  they are implemented in a way that is backward compatible with
  older versions of Java that do not support generics.
  This means that it is still possible to cause a ClassCastException
  by misusing generics.

- **No Support for Primitive Types:** Generics do not support
  primitive types. You have to use wrapper classes instead.

</details>
<br>

[//]: # (Can you explain the concept of type erasure in Java Generics?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of type erasure in Java Generics?
        </b>
    </summary>
<br>

Type erasure is a process by which the Java compiler enforces
type checking at compile time and then removes, or "erases",
the type information at runtime.

This is done to maintain backward compatibility with older
versions of Java that do not support generics.

Before erasure:

        List<String> list = new ArrayList<>();
        list.add("Hello");
        String str = list.get(0);

After erasure:

        List list = new ArrayList();
        list.add("Hello");
        String str = (String) list.get(0);

</details>
<br>

[//]: # (What is the difference between a wildcard 
         and a type parameter in Java Generics?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between a wildcard 
            and a type parameter in Java Generics?
        </b>
    </summary>
<br>

Wildcard and type param have logically differences

**Wildcard (?):** used when object type doesn't matter or is unknown.
**Type Parameter (T):** used when need specific type that
will be determined later

</details>
<br>

[//]: # (Can you explain the difference between <? extends T> and <? super T>?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference between
            < ? extends T> and < ? super T>?
        </b>
    </summary>
<br>

**This is bounded wildcards**:

- **<? extends T>:** This means that the type
  parameter will be a **subtype of T (or T itself)**.

    - It could be a class that extends T or an
      interface that is implemented by T.

    - This is known as an **upper bounded wildcard**.

    - For example, List<? extends Number> can be a list of Number,
      or any subtype of Number, like Integer, Double, etc.

    - However, you can't add any object to such a
      list because the compiler can't determine
      which subtype of Number it will be.

    - **USE CASE:** **Use <? extends T> when you only need to get objects from
      a data structure.**


- **< ? super T>:** This means that the type parameter will
  be a supertype of T (or T itself).
  **This is known as a lower bounded wildcard**.

    * For example, List<? super Integer> can be a list of Integer,
      or any supertype of Integer, like Number or Object.

    * You can add an Integer or any subtype of Integer to such a list.
      But when you get an object from the list,
      you don't know what type it will be
      (other than it will be some supertype of Integer).

    - **USE CASE:** **when you need to put objects in a data structure.**

</details>
<br>

[//]: # (Can you explain the PECS 
        "Producer Extends, Consumer Super" principle?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the PECS 
            (Producer Extends, Consumer Super) principle?
            What means by "Consumer" and "Producer"
        </b>
    </summary>
<br>

It is a principle in Java Generics that helps to decide
when to use a wildcard and what type of wildcard to use.

**PECS defines the relationship between a system element and code**

- **Producer** defines that the element produces something for the code
- **Consumer** defines that the element is consuming something from code


- **Producer Extends:** If you need to retrieve or
  read data from a data structure, use the <? extends T> wildcard

        public void processNumbers(List<? extends Number> numbers) {
            for (Number number : numbers) {
            // process number
            }
        }

- **Consumer Super:** If you need to put or write data
  into a data structure, use the <? super T> wildcard

        public void addIntegers(List<? super Integer> integers) {
            integers.add(1);
            integers.add(2);
        }

By following the PECS principle, you can ensure that your
code is type-safe and that it works with the widest possible
range of data structures.

</details>
<br>

[//]: # (How do you handle exceptions when working with Java Generics?)
<details>
    <summary style="font-size: 25px;">
        <b>
            How do you handle exceptions when working with Java Generics?
        </b>
    </summary>
<br>

* Generic classes cannot extend Throwable
* Cannot be thrown
* Cannot be in catch

But as Producers can handle exceptions for read state

    public <T extends Exception> void handleException(T exception) {
    // handle exception
    }

</details>
<br>

[//]: # (What is reification and how does it relate to Java Generics?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is reification and how does it relate to Java Generics?
        </b>
    </summary>
<br>

**Reification** is the process by which an abstract idea about
a program feature becomes an explicit part of a program's structure.

In other words, when something is reified,
it has a distinct representation at runtime.

**Java Generics are not reified,**
meaning that they do not have a distinct representation at runtime.

</details>
<br>

[//]: # (Can you explain how to use multiple bounds in Java Generics?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use multiple bounds in Java Generics?
        </b>
    </summary>
<br>

In Java Generics,
you can use multiple bounds to restrict a type parameter
to specify that it must extend or implement multiple types.

This is done using the extends
keyword followed by the types, separated by &.

    <T extends Type1 & Type2 & ... & TypeN>

</details>
<br>


