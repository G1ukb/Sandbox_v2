<h1>Nested Classes</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

- What is a nested class in Java? Why would you use one?
- What are the different types of nested classes in Java?
- What is the difference between a static nested class and a non-static (inner) class?
- How do you create an instance of a non-static inner class from outside its outer class?
- Can a nested class access private members of its enclosing class?
- What is an anonymous inner class? When is it typically used?
- Can a nested class have static members?

- How does the memory model differ between static nested classes and non-static inner classes?
- How does an anonymous inner class handle method overriding?
- How do you pass parameters to an anonymous inner class?
- What are some common use cases for static nested classes versus inner classes?
- How do nested classes affect encapsulation and code readability?
- Can an inner class extend another class or implement an interface?

- What are the class file naming conventions for nested classes when compiled?
- What are the implications of using nested classes in serialization?
- Describe a real-world scenario where using a local inner class helped structure code better.
- Can an inner class be declared abstract?
- How can nested classes introduce memory leaks if not used carefully?
- In terms of testability, what challenges do nested classes introduce, and how do you mitigate them?

- How can nested classes impact modularity and separation of concerns?
- Would you recommend the use of nested classes in a plugin-based architecture?

- How do nested classes align with object-oriented principles like cohesion and coupling?
- Would you use nested classes in domain models (e.g., in DDD)? Why or why not?
- How do nested classes compare to Java’s record classes or sealed classes in Java 17+?
- What serialization and deserialization challenges exist with nested and anonymous classes?
- With the rise of modern frameworks and dependency injection, are nested classes still relevant for complex systems?

[//]: # (Nested class types)

<br>
<details>
    <summary style="font-size: 25px;">
        <b>
         Nested class types
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
          When to use which type of class
        </b>
    </summary>
<br>

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

