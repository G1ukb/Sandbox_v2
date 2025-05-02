<h1>Reflection</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

- What is reflection in Java? In what package is it provided?
- Why would a developer use Java reflection?
- What is the difference between getDeclaredMethods() and getMethods()?
- Can reflection be used to access private fields or methods? How?
- What are the limitations or downsides of using reflection in Java?
- Does reflection work with generic types? Why or why not?

- What are the performance implications of using reflection?
- How do annotations relate to reflection in Java?
- What are some real-world use cases where Java reflection is commonly applied?

- How does Java reflection enable dependency injection frameworks like Spring?
- Describe a situation where misuse of reflection caused a bug or maintenance issue.
- How does reflection affect testability and code readability?

- How do modern frameworks (Spring, Hibernate) abstract and encapsulate reflection safely?
- Would you design a critical system (e.g., financial transaction processing) with reflection-heavy logic? Why or why not?
- What are the security implications of allowing reflection in untrusted environments like scripting APIs or web plugins?
- What changes would you anticipate in Java reflection with the evolution of Project Valhalla, Panama, or Loom? *

[//]: # (What is Java Reflection and what are its pros and cons?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is Java Reflection and what are its pros and cons?
        </b>
    </summary>
<br>

Reflection in Java is a powerful feature that allows you to
inspect, modify, and manipulate classes, methods, fields,
and other components of a Java application at runtime.

Pros of Reflection:

1. Runtime Type Identification: Java Reflection enables a program
   to inspect objects at runtime and determine their
   class, fields, methods, and other properties.
   This could be useful in scenarios like
   serialization/deserialization, cloning, etc.

2. Dynamic Operation: It allows for dynamic invocation of methods,
   instantiation of objects, and setting/getting field values, etc.

3. Extensibility Features: Reflection is useful in designing extensible
   applications or development tools, where the
   user or developer can add functionality without modifying the core system.
   Frameworks like Spring and Hibernate use
   reflection extensively for things like dependency injection,
   creating proxies, and map objects to database records.

Cons of Reflection:

1. Performance Overhead: Reflection involves types being resolved dynamically,
   so it can be slower than invoking methods or accessing fields directly.

2. Security Restrictions: Reflection requires runtime permissions
   which might not be available in a security-conscious
   or sandbox environment.

3. Complexity: Using reflection involves writing more complex code,
   which can be harder to understand and maintain.
   It can also introduce new bugs and challenges,
   like dealing with checked exceptions.

4. Breaking Encapsulation: By allowing code to perform operations
   that are normally not allowed, such as accessing private fields,
   reflection can break encapsulation
   and potentially violate some OOP principles.

</details>
<br>