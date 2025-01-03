<h1>Annotations</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (What Is an Annotation and Why Is It Used?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What Is an Annotation and Why Is It Used?
        </b>
    </summary>
<br>

Annotations are descriptors included in the program code 
and used to store metadata that is needed at various stages of the program lifecycle.

The information stored in annotations can be used by handlers 
to create necessary auxiliary files or for marking classes, fields, etc.

**Pros**:
- **Code Clarity**: Annotations reduce boilerplate code and make 
the code easier to read and maintain.
- **Compile-Time Checking**: Annotations help in error checking at compile time, 
thus preventing potential runtime errors.
- **Flexibility**: They allow for more flexible code configurations, 
reducing the need for external configuration files.

**Cons**:
- **Runtime Overhead**: Extensive use of annotations 
requiring runtime reflection can lead to performance degradation.
- **Increased Complexity**: Improper use can make the code harder 
to understand and maintain, especially for new developers.
- **Dependency**: Over-reliance on annotations 
can make the code tightly coupled to a specific framework or library, 
making it harder to switch

For more information, see [Java Annotations](https://docs.oracle.com/javase/tutorial/java/annotations/).

</details>
<br>

[//]: # (What Are the Best Use Cases for Annotations?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What Are the Best Use Cases for Annotations?
        </b>
    </summary>
<br>

Annotations are useful when their advantages, 
like reducing boilerplate and improving code maintainability, 
outweigh any potential performance costs.

They are particularly helpful in large applications 
using frameworks like **Spring** and **Hibernate**, 
where annotations can simplify development and maintenance significantly.

</details>
<br>

[//]: # (How Are Annotations Executed Based on Their Type?)
<details>
    <summary style="font-size: 25px;">
        <b>
             How Are Annotations Executed Based on Their Type?
        </b>
    </summary>
<br>

- **Compiler Instructions**: These annotations give instructions to the compiler. 
Examples include `@Override` and `@SuppressWarnings`.
- **Build-Time Instructions**: Processed during the build phase to generate code 
or resources.
- **Runtime Instructions**: Annotations like `@Deprecated` 
are retained at runtime and can be accessed via reflection.

</details>
<br>

[//]: # (What Is a Meta-Annotation?)
<details>
    <summary style="font-size: 25px;">
        <b>
          What Is a Meta-Annotation?
        </b>
    </summary>
<br>

A **meta-annotation** is an annotation used to define other annotations. 
Meta-annotations provide metadata about how annotations should be used or processed.

**Common Meta-Annotations in Java**:
- **@Target**: Specifies where an annotation can be applied, 
such as methods or fields.
- **@Retention**: Specifies how long an annotation should be retained 
(`SOURCE`, `CLASS`, or `RUNTIME`).
- **@Inherited**: Indicates that the annotation can be inherited by subclasses.
- **@Documented**: Signals that an annotation should be included 
in the generated documentation.
- **@Repeatable**: Allows the same annotation to be used multiple times 
on the same element.

</details>
<br>

[//]: # (What Types of Objects Can Be Returned from 
        an Annotation Method Declaration?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What Types of Objects Can Be Returned from an Annotation Method Declaration?
        </b>
    </summary>
<br>

The return type of an annotation method must be one of the following:
- **Primitive types** (e.g., `int`, `float`)
- **String**
- **Class**
- **Enum**
- An **array** of the above types

</details>
<br>

[//]: # (How Can Custom Annotations Improve Code Quality?)
<details>
    <summary style="font-size: 25px;">
        <b>
             How Can Custom Annotations Improve Code Quality?
        </b>
    </summary>
<br>

Custom annotations improve code quality by:
- **Reducing Boilerplate**: Adding default behaviors to methods and classes, 
reducing repetitive code.
- **Adding Behavior**: Allowing for custom behaviors or validations, 
making code more modular.
- **Replaces Configuration Files**: They can replace complex XML configuration 
files with simpler, inline annotations.

</details>
<br>

[//]: # (What Does a Brief Annotation Template Look Like?)
<details>
    <summary style="font-size: 25px;">
        <b>
          What Does a Brief Annotation Template Look Like?
        </b>
    </summary>
<br>

**Example**:
  ```java
  @Target(ElementType.METHOD) // Can be applied to methods only.
  @Retention(RetentionPolicy.RUNTIME) // Retained at runtime.
  public @interface BriefAnnotation {
      String author() default "Unknown";
  }
  ```

**Explanation**:
- **@Target**: Defines where the annotation can be applied (e.g., method).
- **@Retention**: Defines whether the annotation is available at runtime, 
during compile time, etc.

</details>
<br>

[//]: # (How Do Annotations Affect the Performance of Java Applications?)
<details>
    <summary style="font-size: 25px;">
        <b>
          How Do Annotations Affect the Performance of Java Applications?
        </b>
    </summary>
<br>

Annotations themselves do not directly affect the performance of the code 
they annotate. 
However, annotations that require runtime reflection can impact performance 
since reflection is generally slower than direct code execution.

**Example**: 
Frameworks like **Spring** use annotations extensively to manage dependency injection
and other configurations, which can result in performance overhead during startup.

More about reflection impact: 
[Java Reflection Documentation](https://docs.oracle.com/javase/tutorial/reflect/).

</details>
<br>

[//]: # (How Can One Minimize the Performance 
        Impact of Annotations in Java Applications?)
<details>
    <summary style="font-size: 25px;">
        <b>
            How Can One Minimize the Performance 
            Impact of Annotations in Java Applications?
        </b>
    </summary>
<br>

- **Use Compile-Time Annotations When Possible**: 
Prefer annotations that are handled at compile-time rather than runtime.
- **Cache Reflective Data**:
Cache results when accessing annotations through reflection 
to avoid repeated costly operations.
- **Limit Reflection**: Use reflection only when necessary. 
Explore alternatives that do not rely on reflection.
- **Use Proxies and Code Generation**: Instead of reflection, 
use proxies or generated code, which can execute faster.

**Example**: Spring's use of AOP proxies to manage cross-cutting 
concerns without relying entirely on reflection.

</details>
<br>
