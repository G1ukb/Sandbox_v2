<h1>Java Fundamentals</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (DOMAIN: General Java Questions)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      General Java Questions
    </b>
  </summary> 

---

[//]: # (Why would you choose Java as a programming language, 
        and what are its main advantages compared to other options?)
<details> 
  <summary style="font-size: 25px;">
    <b>
      Why would you choose Java as a programming language,  
      and what are its main advantages compared to other options?
    </b>
  </summary> 
<br>

1. **Platform Independence**
    - Java code compiles to **bytecode**, which runs on the Java Virtual  
      Machine (JVM).
    - This “write once, run anywhere” approach means you can deploy the  
      same Java application on various operating systems (Windows,  
      macOS, Linux) without recompiling.

2. **Robust Standard Library & Ecosystem**
    - Java’s core library offers a wide range of utilities: collections  
      (lists, maps, sets), I/O, networking, concurrency, and more.
    - The **Java Community** has contributed countless frameworks and  
      libraries (e.g., Spring, Hibernate, Maven), making it easier to  
      build anything from simple scripts to enterprise-level systems.
    - Extensive **documentation** and big support forums (Stack  
      Overflow, official docs) simplify learning and troubleshooting.

3. **Object-Oriented Paradigm**
    - Java was designed from the ground up to be **object-oriented**,  
      emphasizing encapsulation, inheritance, and polymorphism.
    - This often leads to a clear modular structure, which is useful for  
      large, maintainable codebases.
    - In modern Java, you can also leverage **functional** features like  
      lambdas and streams, blending OOP with functional style.

4. **Memory Management & Garbage Collection**
    - Java’s automatic **garbage collector** handles freeing unused  
      objects, reducing memory leaks and simplifying code.
    - You generally don’t deal with manual memory allocation or  
      pointers, lowering the risk of segmentation faults or buffer  
      overflows.

5. **Enterprise Adoption & Community Support**
    - Many large enterprises rely on Java for mission-critical systems,  
      ensuring the language and its ecosystem remain well-supported and  
      **backed by major vendors** (Oracle, IBM, Red Hat, etc.).
    - Abundant job opportunities, continuous updates, and a robust  
      roadmap make Java a stable long-term investment for developers.

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Core OOP in Java)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Core OOP in Java
    </b>
  </summary> 

---

[//]: # (How would you explain the core principles of Java OOP, 
        and why is object-oriented programming so crucial in Java development?)
<details> 
  <summary style="font-size: 25px;">
    <b>
      How would you explain the core principles of Java OOP, 
      and why is object-oriented programming so crucial in Java development?
    </b> 
  </summary> 
<br>

In Java, OOP is built upon four key principles:
**encapsulation**, **inheritance**, **polymorphism**, and **abstraction**.

- **Encapsulation** ensures that an object’s internal state is shielded  
  from external modification by bundling data (fields) and behavior  
  (methods) within a single unit.
  (relationship)

- **Inheritance** allows you to create subclasses that extend or adapt  
  the functionality of existing classes, reducing code duplication.
  (expand)

- **Polymorphism** provides the ability for a single interface or class  
  to have multiple implementations, making it easier to adapt behavior  
  at runtime or compile-time.
  (behavior)

- **Abstraction** hides complex implementation details and exposes only  
  the necessary features of an object, offering a cleaner, more flexible  
  design.
  (flexibility)

---

**Why this technology was added**

Object-oriented programming solves the problem of **managing complexity**  
in large applications. Before OOP, procedural programming dominated,  
making code cumbersome to maintain and scale. Java was designed from  
the ground up with OOP to provide a clean, modular, and reusable  
approach for building enterprise-level software, web applications,  
mobile apps, and more.

---

**Advantages and disadvantages**

- **Advantages**
    - *Modularity*: Breaks down complex systems into smaller, more  
      manageable pieces.
    - *Reusability*: Inheritance and composition allow for easy code reuse.
    - *Scalability*: Objects and classes can grow with the application’s  
      requirements.
    - *Maintainability*: Well-structured OOP code is easier to read,  
      update, and debug.

- **Disadvantages**
    - *Overhead in design*: OOP can introduce extra design complexity  
      (thinking in objects, defining class hierarchies).
    - *Potential for over-engineering*: Improper use of inheritance can  
      make code too complicated.
    - *Learning curve*: Some developers may find purely OOP concepts more  
      difficult at the beginning compared to procedural approaches.



</details>
<br>

[//]: # (How would you compare the concepts of method overloading and method  
        overriding in Java, and how do overload signatures differ from override  
        signatures?)
<details> 
  <summary style="font-size: 25px;">
    <b>
      How would you compare the concepts of method overloading  
      and method overriding in Java, and how do overload signatures  
      differ from override signatures?
    </b>
  </summary> 
<br>

- **Method Overloading**  
  Involves creating multiple methods with the same name in  
  the same class but with different parameter lists (types, number, or  
  order). This helps improve code readability and flexibility.

    - In **overloading**, the signatures **must differ** in at least one  
      of the following: parameter type, parameter count, or parameter  
      order. Return type is not part of the overload signature.


- **Method Overriding**  
  Occurs when a subclass redefines a method inherited from  
  its superclass while keeping the same name, parameters, and return  
  type. It enables dynamic (runtime) polymorphism, allowing subclasses  
  to provide specialized behavior.

</details>
<br>

[//]: # (Is Java a fully object-oriented programming language,  
        and does it contain any features that break pure OOP principles?)
<details> 
  <summary style="font-size: 25px;">
    <b>
      Is Java a fully object-oriented programming language,  
      and does it contain any features that break pure OOP principles?
    </b>
  </summary> 
<br>

Pure OOP languages enforce that every operation must be done through objects.

In Java, **primitive types** (such as `int`, `boolean`, `char`) and  
the presence of **static** methods or variables stand out as  
non-object-oriented elements.

**Why this technology was added**
- *Performance*: Primitive types are more efficient than objects for  
  basic arithmetic and memory usage.

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Primitives and References)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Primitives and References
    </b>
  </summary> 

---

[//]: # (How does Java differentiate between primitive and reference  
        data types, and what impact does this distinction have on memory  
        management and performance?)
<details> 
  <summary style="font-size: 25px;">
    <b>
      How does Java differentiate between primitive and  
      reference data types, and what impact does this  
      distinction have on memory management and performance?
    </b>
  </summary> 
<br>

In Java, data types are categorized as either **primitives** (like  
`int`, `boolean`, `char`) or **reference types** (classes, arrays,  
interfaces, etc.). Here are the key differences:

- **Memory Allocation**
    - *Primitive types* are stored on the stack (or as part of object  
      fields), holding raw values like `42` for an `int`.
    - *Reference types* are stored as references on the stack, but the  
      actual object data resides in the heap.


- **Performance Implications**
    - *Primitives* are generally faster to access and process because  
      the JVM deals with them directly.
    - *Reference types* involve pointer dereferencing to access actual  
      object data in the heap, introducing some overhead.


- **Default Values**
    - *Primitives* have explicit defaults (e.g., `0` for `int`,  
      `false` for `boolean`).
    - *Reference types* default to `null`, indicating no reference to  
      an object.


- **Wrapper Classes**
    - For every primitive type, Java provides a corresponding wrapper  
      class (e.g., `Integer` for `int`) to treat primitives as objects  
      when needed.
    - Autoboxing and unboxing occur automatically in certain contexts,  
      which can impact performance if used excessively.


- **Passing Values**
    - When passing primitives, Java copies the actual value.
    - When passing reference types, Java copies the reference (pointer),  
      allowing the method to manipulate the same object.

---

Java’s **primitive** and **reference** types address two main issues:

- **Efficiency**: Certain operations (like math calculations) become  
  significantly faster using primitives rather than objects.
- **Flexibility**: Reference types let you model real-world entities  
  with classes, giving you the benefit of OOP concepts like  
  encapsulation, inheritance, and polymorphism.

---

**When to use this technology rather than the analogs**

- Use **primitive types** for performance-critical operations, simple  
  state tracking, and when you need direct numeric or boolean  
  manipulation.
- When a value can never be `null` or needs no extra behavior.


- Use **reference types** for representing more complex data,  
  leveraging OOP features such as inheritance, polymorphism, and  
  design patterns.
-  When you need to store the data in **collections** or use  
   **generics**.
- If you foresee expansions (adding methods, fields) to your data  
  representation.

</details>
<br>

[//]: # (How does passing primitives, fields, or reference types to a method  
        in Java affect the possibility of changing their values, and what is the  
        difference between modifying a local copy versus the original object?)
<details>
  <summary style="font-size: 25px;">
    <b>
      How does passing primitives, fields, or reference types  
      to a method in Java affect the possibility of changing  
      their values, and what is the difference between modifying  
      a local copy versus the original object?
    </b>
  </summary> 
<br>

- **Primitive Types**
    - When you pass a primitive (e.g., `int`, `boolean`) to a method,  
      Java creates a **copy** of that value.
    - Any modifications made to that parameter inside the method  
      won’t affect the original variable outside the method scope.


- **Reference Types**
    - When a reference type (e.g., `StringBuilder`, a user-defined  
      class) is passed, Java copies the **reference**.
    - Inside the method, you can **alter the object’s fields** or  
      state, and those changes persist after the method returns.
    - But if you reassign the reference to a new object, it doesn’t  
      affect the original reference outside the method.


- **Fields in Objects**
    - Fields are also stored inside an object’s memory space.
    - If a method has a reference to the object, it can directly  
      alter those fields, and the changes persist.
    - This is why careful design (e.g., encapsulation) is important  
      to prevent unintended modifications.

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Constructors and Initialization)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Constructors and Initialization
    </b>
  </summary> 

---

[//]: # (How do constructors and initialization blocks work in Java,  
        and how do they differ in controlling object creation and default  
        settings?)
<details>
  <summary style="font-size: 25px;">
    <b>
      How do constructors and initialization blocks  
      work in Java, and how do they differ in controlling  
      object creation and default settings?
    </b>
  </summary> 
<br>

- **Constructors**
    - Special methods that share the class name and have  
      no return type.
    - Can be overloaded with multiple parameter sets.
    - Primary purpose: to set up instance fields or  
      resources when creating new objects.

- **Initialization Blocks**
    - **Instance Initialization Blocks (IIB)**
        - Enclosed in braces `{ ... }` inside the class but  
          outside any method.
        - Run **each time** an instance is created, just  
          before the constructor’s body.

    - **Static Initialization Blocks (SIB)**
        - Labeled with the `static` keyword.
        - Executed **once** when the class is loaded.
        - Often used for initializing static fields  
          or performing class-wide setup.

---

**Use Cases**
- Constructors let you pass arguments to  
  configure your object’s initial state.
- Initialization blocks handle setup tasks or  
  repetitive code that you want to run for all  
  constructors, or for static fields.

</details>
<br>

[//]: # (In what order are constructors and initialization blocks in Java  
        executed, and how do static initializers fit into that sequence?)
<details>
  <summary style="font-size: 25px;">
    <b>
      In what order are constructors and initialization blocks  
      in Java executed, and how do static initializers  
      fit into that sequence?
    </b>
  </summary> 
<br>

**Detailed Order**
- **Static fields** and **static blocks** (once, class load time).
- **super()** or super(...) in the constructor chain.
- **Instance fields** and **instance blocks** in the class,  
  in the order encountered.
- **Constructor** body of the class.

</details>
<br>

[//]: # (Can a static constructor in Java initialize instance "non-static" fields,  
        and what are the limitations on such initializations?)
<details>
  <summary style="font-size: 25px;">
    <b>
      Can a static constructor in Java initialize instance (non-static) fields,  
      and what are the limitations on such initializations?
    </b>
  </summary> 
<br>

No, Java doesn’t have a true **static constructor**. Static blocks  
are allowed, but they cannot initialize **regular instance fields**  
because those fields belong to objects, not to the class.

</details>
<br>

[//]: # (If a Java class has nothing except for a constructor, 
        can we still define an initialization block, and how would it behave?)
<details>
  <summary style="font-size: 25px;">
    <b>
      If a Java class has nothing except for a constructor,  
      can we still define an initialization block, and how  
      would it behave?
    </b>
  </summary> 
<br>

Yes, you can define an **initialization block** even
if the only thing in your class is a constructor.
The block will execute right before the constructor
each time an object is instantiated,
even if there are no other fields or methods to initialize.

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Classes, Interfaces, and Access Modifiers)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Classes, Interfaces, and Access Modifiers
    </b>
  </summary> 

---

[//]: # (What is the difference between package-private and protected in Java, 
        and when should each be used?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What is the difference between package-private  
      and protected in Java, and when should each be used?
    </b>
  </summary>
<br>

- **package-private** (default access) makes a class, method, or field  
  visible only within the **same package**.
- **protected** makes a class, method, or field visible within the  
  **same package** *and* to **subclasses** (even if they’re in  
  different packages).

</details>
<br>

[//]: # (Can a class in Java be declared as private, 
        and what are the rules around private inner classes?)
<details>
  <summary style="font-size: 25px;">
    <b>
      Can a class in Java be declared as private,  
      and what are the rules around private inner classes?
    </b>
  </summary> 
<br>

A **top-level** class in Java **cannot** be declared `private`; it can  
only be declared `public`, package-private (default), or `abstract` or  
`final` in combination with these access levels. However, **nested  
classes** (inner or static) **can** be declared `private`, making them  
accessible only within the enclosing class.

</details>
<br>

[//]: # (What are the different types of classes in Java,  
        and how do they differ in usage  and functionality?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What are the different types of classes in Java,
      and how do they differ in usage and functionality?
    </b>
  </summary> 
<br>

- **Concrete (Regular) Classes**
    - The typical class type in Java.
    - Can be instantiated freely using the `new` keyword.
    - Provides complete implementations for all methods.


- **Abstract Classes**
    - Declared with the `abstract` keyword.
    - Can **not** be instantiated directly.
    - Often contain one or more abstract methods (methods without a  
      body).
    - Serve as a base class to provide partial implementation and  
      shared fields/methods for subclasses.


- **Anonymous Classes**
    - Declared and instantiated at once, usually inside a method or  
      another class.
    - Have **no name** and **cannot** have an explicit constructor.
    - Typically used to implement interfaces or extend a class on the  
      fly.
    - Useful for concise event handlers or callbacks.


- **Nested Classes**
    - Declared **inside** another class.
    - Two main types:
        - **Static Nested Classes**
            - Declared with the `static` keyword.
            - Behave like top-level classes but are logically grouped  
              within the outer class.
            - Don’t hold an implicit reference to the outer class.
        - **Inner (Non-static) Classes**
            - No `static` keyword.
            - Each instance is linked to an instance of the outer class.
            - Can access the outer class’s fields and methods directly.


- **Local Classes**
    - Defined **inside** a block, method, or constructor (but named,  
      unlike anonymous classes).
    - Scope is restricted to the block where they’re declared.
    - Often used for helper functionality needed in a single place.

---

- You want a **strict inheritance** hierarchy with partial  
  implementations: use abstract classes.
- You want a quick, one-off implementation: anonymous classes.
- You want to **logically group** classes: static nested or inner  
  classes.
- You need **tighter coupling** between an inner class and outer class  
  members: non-static inner classes.
- You need a short-lived helper class in a method: local class.

</details>
<br>

[//]: # (What are the differences between using an interface and an abstract class in Java, and in which scenarios should each be used?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What are the differences between using an interface  
      and an abstract class in Java, and in which scenarios  
      should each be used?
    </b>
  </summary> 
<br>

- **Interface**:
    - All methods are implicitly `public` and **abstract** (unless they’re `default` or `static` in newer Java versions).
    - Cannot have instance fields except for `public static final` constants.
    - Used primarily to define capabilities or behaviors that multiple, unrelated classes can implement.

- **Abstract Class**:
    - Can have both **abstract methods** (without body) and **concrete methods** (full implementation).
    - Can declare instance fields to hold state.
    - Subclasses must extend the abstract class and provide implementations for any abstract methods.

**Key Differences**
- **Multiple Inheritance**
    - A class can implement **multiple interfaces** but can only extend **one** class (abstract or not).
- **Fields and State**
    - Interfaces can declare constants (`public static final`), but no instance fields.
    - Abstract classes can have instance fields, constructors, and non-abstract methods that operate on that state.
- **Default/Static Methods (Java 8+)**
    - Interfaces can now contain `default` methods (with body) and `static` methods, allowing limited code sharing.
    - Abstract classes have always allowed concrete methods, enabling more extensive code sharing and state handling.

**Use Cases**
- **Interface**
    - When you need multiple unrelated classes to adhere to the same contract (e.g., `Comparable`, `Runnable`).
    - When you want to specify capabilities (e.g., `Serializable`) without imposing a common ancestor in the class hierarchy.
- **Abstract Class**
    - When you need a **base class** that shares **fields** or method implementations among subclasses.
    - When you want stronger coupling between the subclass and superclass, often reflecting an **is-a** relationship.
    - Suited for partial implementations of a concept, ensuring subclasses fill in the abstract parts.

</details>
<br>

[//]: # (How do classes, methods, fields, and access modifiers work in Java,  
        and why are they crucial for defining structure and visibility in code?)
<details>
  <summary style="font-size: 25px;">
    <b>
      How do classes, methods, fields,  
      and access modifiers work in Java,  
      and why are they crucial for defining  
      structure and visibility in code?
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
In Java can be declared as abstract, final, static, native, synchronized.

The **native** modifier before a method declaration indicates that it is specific
for the operating system. Like an abstract method, it also has not body,
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

[//]: # (What is the significance of java.lang.Object in Java, 
        and how does it serve as the root of the class hierarchy?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What is the significance of java.lang.Object in Java,  
      and how does it serve as the root of the class hierarchy?
    </b>
  </summary> 
<br>

- **Root of the Class Hierarchy**
    - Every Java class **implicitly** inherits from `Object` if no  
      other superclass is specified.
    - This ensures a **uniform** set of capabilities (like `toString()`,  
      `equals()`, and `hashCode()`) across all Java objects.

- **Core Methods**
    - **`toString()`**: Returns a string representation of the object.
        - Often overridden by subclasses to provide meaningful details.
    - **`equals(Object obj)`**: Determines whether two objects  
      logically match, beyond default reference comparison.
    - **`hashCode()`**: Produces an integer hash code, typically  
      consistent with `equals()` for storing objects in hash-based  
      collections.
    - **`getClass()`**: Returns the runtime class of an object.
    - **`clone()`** (protected): Used to create a shallow copy of an  
      object; subclasses must override and implement `Cloneable`.
    - **`finalize()`** (deprecated in Java 9+): Allowed cleanup before  
      garbage collection, but is mostly deprecated due to unreliable  
      behavior.

- **Implicit Inheritance**
    - When you write `public class MyClass { }` without any `extends`,  
      it implicitly becomes `public class MyClass extends Object { }`.
    - This means you can call `toString()`, `equals()`, and other  
      `Object` methods on any instance of `MyClass`.

- **Extending Object vs. Other Classes**
    - You **cannot** extend two classes in Java (no multiple  
      inheritance). Therefore, `Object` is always the single ultimate  
      parent.
    - If you explicitly write `extends SomeOtherClass`, that class  
      itself will eventually be a subclass of `Object`.

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Equals, hashCode, and toString Methods)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Equals, hashCode, and toString Methods
    </b>
  </summary> 

---

[//]: # (How can we implement the equals and hashCode 
        methods properly in Java to maintain consistency, 
        especially for objects stored in hash-based collections?)
<details>
  <summary style="font-size: 25px;">
    <b>
      How can we implement the equals() and hashCode() methods  
      properly in Java to maintain consistency,  
      especially for objects stored in hash-based collections?
    </b>
  </summary> 
<br>

**Contract Between `equals()` and `hashCode()`**
- **Reflexive**: `x.equals(x)` should always be `true`.
- **Symmetric**: `x.equals(y)` implies `y.equals(x)`.
- **Transitive**: if `x.equals(y)` and `y.equals(z)`, then  
  `x.equals(z)` must also be `true`.
- **Consistent**: repeated calls of `x.equals(y)` should remain  
  consistent unless fields change.
- **Non-null**: `x.equals(null)` should be `false`.
- **hashCode()**: if `x.equals(y)` is `true`, then  
  `x.hashCode() == y.hashCode()` must be `true`.

---

**When to use this technology**

- Use Java’s `equals()` and `hashCode()` whenever you want your  
  objects to behave correctly in standard Java data structures and  
  APIs.
- If you have a scenario that relies on object identity (i.e., same  
  memory reference) instead of logical equality, rely on the default  
  `Object` methods or track IDs differently.

</details>
<br>

[//]: # (What are the common pitfalls when overriding `toString` in Java, 
        and are there any performance or security concerns?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What are the common pitfalls when overriding `toString()`  
      in Java, and are there any performance or security concerns?
    </b>
  </summary> 
<br>

While overriding `toString()` can greatly improve the readability and  
debugging experience of Java objects, it can also introduce **performance**  
overhead if it’s called frequently or builds large strings. **Security**  
risks may arise if `toString()` reveals sensitive information, exposing  
it unintentionally in logs or error messages.

**Best Practices**
- **Keep It Simple**
    - Only include the essential data that characterizes the object.
    - Omit large or transient internal data structures.

- **Hide Confidential Fields**
    - Omit or mask fields like passwords and credentials.
    - Provide a separate debugging method if full detail is sometimes  
      needed in a safe environment.

- **Use StringBuilder (or Similar)**
    - When building strings, ensure minimal overhead, especially if  
      you’re concatenating multiple fields.

- **Avoid Dependence on `toString()` in Production Logic**
    - `toString()` is meant for human-readable output (debugging,  
      logging). Using it in production logic (e.g., to parse object  
      states) can lead to brittle code and confusion.

</details>
<br>

[//]: # (In what situations might a developer choose *not* to override `equals` 
        or `hashCode`, and when is the default implementation sufficient?)
<details>
  <summary style="font-size: 25px;">
    <b>
      In what situations might a developer choose *not* to override  
      `equals()` or `hashCode()`, and when is the default  
      implementation sufficient?
    </b>
  </summary> 
<br>

**Scenarios Where You Might *Not* Override**
- **No Hash-Based Structures**
    - If you never store instances of the class in `HashMap`,  
      `HashSet`, or other hash-based collections, you may not need  
      consistent custom hashing logic.
    - For example, short-lived objects that only live in  
      local variables or ephemeral data structures.

- **Trivial or Immutable Data**
    - Sometimes, your class is effectively a *value holder* but  
      used in contexts where identity vs. value equality is never  
      in question.
    - Overriding can add complexity if it isn’t a real  
      requirement.

- **Performance Considerations**
    - Overriding `equals()` and `hashCode()` can create overhead if  
      done incorrectly (especially if you include many fields or  
      expensive calculations).
    - For classes used in extremely performance-sensitive or  
      low-level contexts, the minimal overhead of default  
      implementations might be desirable.

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Object Cloning)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Object Cloning
    </b>
  </summary> 

---

[//]: # (How does the `clone` mechanism in Java function,  
        and what are the caveats of using the `clone` method  
        in production code?)
<details>
  <summary style="font-size: 25px;">
    <b>
      How does the `clone()` mechanism in Java function,  
      and what are the caveats of using the `clone()` method  
      in production code?
    </b>
  </summary> 
<br>

**Shallow vs. Deep Copy**
- **Shallow Copy**: Copies the object’s primitive fields directly  
  and **references** to any non-primitive fields, meaning child  
  objects are not duplicated. Modifications to these child objects  
  affect both the original and cloned object.
- **Deep Copy**: Recursively duplicates all objects referenced by  
  the fields, ensuring a fully independent copy. Java’s default  
  `clone()` only provides a shallow copy unless you manually code  
  a deeper approach.

**Alternatives**
- **Copy Constructors**: A constructor that takes an instance of  
  the same class and manually copies or clones the fields.
- **Serialization**: Serialize and then deserialize an object to  
  produce a deep copy.
- **Libraries**: Some libraries (like Apache Commons Lang) provide  
  helper methods for deeper copying strategies.

---

- If your class is **simple** (mostly primitives and immutable fields)  
  and you want a quick duplication mechanism, `clone()` can be enough.
- If you **must** align with older code or libraries that rely on  
  `clone()`, implementing `Cloneable` might be necessary.
- Otherwise, consider copy constructors, library-based deep-copy  
  utilities, or serialization for a safer, more explicit copying  
  strategy.

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Reflection)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Reflection
    </b>
  </summary> 

---

[//]: # (What is `Class<T>` in Java, 
        how is it used to represent the runtime type of objects,
        and what reflective capabilities does it provide?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What is `Class|T|` in Java,  
      how is it used to represent the runtime type of objects,  
      and what reflective capabilities does it provide?
    </b>
  </summary> 
<br>

1. **What is `Class<T>`?**
    - Every Java type (including arrays, primitives, and interfaces) has  
      an associated `Class` object.
    - You obtain it by calling `.getClass()` on an instance or using  
      `TypeName.class` syntax. For example:
      ````
      ```
      java
      String s = "Hello";
      Class<?> clazz1 = s.getClass();       // from an instance
      Class<String> clazz2 = String.class;  // from the type directly
      ```
      ````
    - `Class<T>` is **parameterized** with `T`, often used to cast the  
      result of reflection operations to a specific type.


- **Runtime Type Information (RTTI)**
    - Java eliminates certain generic type information during  
      compilation (type erasure), but `Class<T>` provides **runtime**  
      metadata.
    - Developers can query the class for details like:
        - Field names and types
        - Method names, signatures, and annotations
        - Constructor details
        - Superclass and interface hierarchy


- **Reflective Operations**
    - **Creating Instances**:
      ````
      java
      Class<?> clazz = Class.forName("com.example.Foo");
      Object fooInstance = clazz.getDeclaredConstructor().newInstance();
      ````
        - Dynamically loads a class by name and instantiates it using  
          its no-arg constructor (if accessible).

    - **Invoking Methods**:
      ````
      java
      Method method = clazz.getMethod("someMethod", String.class);
      Object result = method.invoke(fooInstance, "Hello");
      ````
        - Locates a method with a particular signature, then calls it  
          reflectively.

    - **Accessing Fields**:
      ````
      java
      Field field = clazz.getDeclaredField("someField");
      field.setAccessible(true);  // bypass private if needed
      field.set(fooInstance, 42); // set the field to 42
      ````
        - Allows reading or modifying fields (even private) if you  
          enable accessibility.


- **Performance and Security Considerations**
    - **Reflection Overhead**: Reflective calls bypass normal  
      compile-time checks, making them slower than direct method  
      invocations or field access.
    - **Security Manager**: In Java environments with a security  
      manager, reflective operations may be restricted.
    - **Accessibility**: `setAccessible(true)` can break  
      encapsulation. Overusing reflection can lead to fragile designs.
    - **Type Safety**: Reflection is less type-safe at compile time;  
      errors might surface only at runtime (e.g., `ClassCastException`).


- **Common Use Cases**
    - **Dependency Injection / IoC** frameworks like Spring or Guice  
      rely heavily on reflection to discover and instantiate beans.
    - **Serialization** and **ORM** frameworks (e.g., Jackson, Hibernate)  
      inspect classes at runtime to map objects to/from JSON, XML, or  
      databases.
    - **Plugin Systems** that load classes dynamically based on  
      configuration or user input.
    - **Utilities** that generate or manipulate code (e.g., for  
      testing or mocking).

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Immutability)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Immutability
    </b>
  </summary> 

---

[//]: # (What does it mean for a class to be immutable in Java,  
        and what are the benefits and best practices of creating  
        immutable objects?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What does it mean for a class to be immutable  
      in Java, and what are the benefits and best  
      practices of creating immutable objects?
    </b>
  </summary> 
<br>

**Definition of Immutability**
- A class is considered immutable if its **publicly visible** state  
  does not change after construction.
- Typical rules for immutability:
    - Make all fields `private` and `final`.
    - Don’t provide any setters or methods that alter fields.
    - Ensure **defensive copies** of mutable inputs and outputs.

**Why Immovable State Matters**
- **Thread Safety**: Immutable objects can be shared freely between  
  threads without synchronization.
- **Simplicity**: Fewer side effects and consistent state make code  
  easier to reason about.
- **Caching & Reuse**: An immutable instance is never “outdated,” so  
  it can be safely cached and reused.

**Common Best Practices**
- Mark the class as `final` to prevent subclasses from adding  
  mutability.
- If you must include mutable objects (e.g., `Date`, arrays), use  
  **defensive copying** to prevent external modifications.
- Provide **no-args constructors** only if they make sense;  
  typically immutable classes require all needed data at creation.

**Drawbacks**
- **Performance & Memory**: Creating new objects each time a change  
  is needed can be more costly than updating fields in a mutable  
  object, especially in tight loops.
- **Complex Wrappers**: For certain data structures or massive  
  objects, constant recreation might be cumbersome or inefficient.

**Use Cases**
- **Value Objects**: e.g., points, money, date ranges—where a  
  concept does not change once created.
- **DTOs (Data Transfer Objects)** in multithreaded contexts to  
  ensure data consistency.
- **Functional Programming**: In Java’s Streams or lambda  
  environments, immutability complements side-effect-free  
  operations.

</details>
<br>

[//]: # (What are immutable classes in Java, 
        and why are they advantageous for thread safety and design?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What are immutable classes in Java,  
      and why are they advantageous for thread safety  
      and design?
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

---

</details> 
<br>

[//]: # (DOMAIN: Sorting <Comparable and Comparators>)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      Sorting (Comparable and Comparators)
    </b>
  </summary> 

---

[//]: # (What is the difference between `Comparable` and `Comparator` in Java, 
        and how should each be used for custom sorting?)
<details>
  <summary style="font-size: 25px;">
    <b>
      What is the difference between `Comparable` and `Comparator`  
      in Java, and how should each be used for custom sorting?
    </b>
  </summary> 
<br>

1. **`Comparable<T>`**
    - An interface in `java.lang` that requires the single method  
      `compareTo(T o)`.
    - The class implementing this interface **must** define how it  
      compares itself to another of the same type.
    - Common usage is for *natural ordering*, such as alphabetical  
      order (`String`) or ascending numeric order (`Integer`).
    - Implementation pattern:
      ```` java
      public class Person implements Comparable<Person> {
          private String name;
          private int age;
 
          public Person(String name, int age) {
              this.name = name;
              this.age = age;
          }
 
          @Override
          public int compareTo(Person other) {
              // Compare by name, for example
              return this.name.compareTo(other.name);
          }
      }
      ````


- **`Comparator<T>`**
    - Defined in `java.util`, offering multiple static and default  
      methods (from Java 8 onward), like `comparing()`, `thenComparing()`,  
      etc.
    - Allows you to create an external comparator object or lambda that  
      determines ordering for a given type—particularly useful if:
        - You don’t control the code of the class (so can’t implement  
          `Comparable`).
        - You need multiple different sort orders for the same class.
    - Example usage:
      ````  java
      // Comparator as a separate entity
      Comparator<Person> byAge = Comparator.comparingInt(p -> p.age);
  
      // Then we can use it in sorting
      List<Person> people = Arrays.asList(
          new Person("Alice", 30),
          new Person("Bob", 20),
          new Person("Charlie", 25)
      );
      people.sort(byAge); // Sort by age ascending
      ````     

**When to Use Each**
- **Comparable**:
    - Implement when you want a *single* natural ordering inherently  
      part of your class.
    - All objects automatically know how to compare themselves, so no  
      additional comparator is needed for basic sorting.
- **Comparator**:
    - Use for *multiple custom orders* or when you *cannot or prefer  
      not to modify* the class.
    - Often used inline with lambdas or method references (Java 8+).

**Pitfalls & Considerations**
- **Comparable** ties sorting logic *inside* the class—changes to  
  ordering require modifying its code.
- **Comparator** can define *multiple*, *optional*, or *combined*  
  sort sequences.
- Be mindful of **consistency**:
    - If a class implements `Comparable`, ensure `compareTo()` is  
      consistent with `equals()`.
    - Inconsistent ordering can cause subtle issues in sorted  
      collections.

</details>
<br>

---

</details> 
<br>

[//]: # (DOMAIN: Packages)
<details> 
  <summary style="font-size: 30px;" class="DOMAIN">
    <b>
      General Java Questions
    </b>
  </summary> 

---

[//]: # (How do Java packages help organize code, 
         and why are they important for maintaining a clean,
         modular project structure?)
<details>
  <summary style="font-size: 25px;">
    <b>
      How do Java packages help organize code, and  
      why are they important for maintaining a clean,  
      modular project structure?
    </b>
  </summary> 
<br>

**Namespace Separation**
- A package is a **directory structure** within which classes live,  
  used to group related functionality.
- The package name (e.g., `com.example.myapp`) serves as a unique  
  namespace, preventing collisions with classes from other  
  libraries.
- By placing classes in relevant packages, you clearly demarcate  
  different modules or layers of an application (e.g., `service`,  
  `controller`, `model`).

**Access Control**
- Packages influence **default (package-private)** access. Classes  
  in the same package can access each other’s package-private  
  members.
- This helps **encapsulation**, letting you share internal details  
  within a package while hiding them from the rest of the  
  application.

**Organizational Conventions**
- Java strongly encourages **reverse domain naming** for top-level  
  package structure (e.g., `com.mycompany.project`).
- Within the project, subpackages can reflect the application’s  
  architecture (e.g., `com.mycompany.project.utils`,  
  `com.mycompany.project.controllers`).
- This hierarchical approach fosters clarity in large-scale  
  environments: developers quickly locate relevant classes based  
  on their domain.

**Collaboration and Maintenance**
- Packages help break a big codebase into smaller, more manageable  
  pieces.
- Teams can work on separate packages or modules, reducing the risk  
  of conflicts.
- A well-structured package hierarchy makes it intuitive for  
  newcomers to navigate the code, speeding up onboarding.

**Dependency Management**
- In modern builds (with Maven, Gradle), you can arrange code into  
  different **modules**, each with its own **packages**.
- This separation supports reusability: you can share or version  
  specific modules across projects more easily.
- Tools also rely on package names to generate artifact IDs, JAR  
  structures, or project documentation.

</details>
<br>

---

</details> 
<br>
