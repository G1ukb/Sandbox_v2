<h1>Java 9-17 features</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What is last java LTS version?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is last java LTS version?
        </b>
    </summary>
<br>

- Java 17 (LTS) - September 2021
- Java 21 (JDK 21) — Released in September 2023

next will be 25 (LTS) September 2025

</details>
<br>

[//]: # (Can you explain what Java Records are 
        and why they were introduced in Java 14?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain what Java Records are 
            and why they were introduced in Java 14?
        </b>
    </summary>
<br>

Java Records are a new kind of class
that are a transparent holder for shallowly immutable data,
and they were introduced to simplify the creation of such classes,
encourage immutability, improve code readability, and ensure correctness.

Here's an example of a Record:

```
public record Point(int x, int y) { }
```

This single line of code is equivalent to the following
traditional class declaration:

```
public final class Point {
    private final int x;
    private final int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int x() { return x; }
    public int y() { return y; }

    @Override
    public boolean equals(Object obj) { /* ... */ }
    @Override
    public int hashCode() { /* ... */ }
    @Override
    public String toString() { /* ... */ }
}
```

1. **Simplicity**: Records make it easier and simpler to create classes 
that are intended to be simple data carriers.

2. **Safety**: Records are implicitly final and their fields 
are implicitly final too, which encourages immutability.

3. **Readability**: By reducing boilerplate code, 
Records make the code more readable and easier to understand.

4. **Correctness**: Records automatically provide correct implementations 
of `equals()`, `hashCode()`, and `toString()`.

</details>
<br>

[//]: # (Can you provide a detailed explanation of the intern
        method in Java and its usage with an example?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide a detailed explanation of the intern
            method in Java and its usage with an example?
        </b>
    </summary>
<br>

The intern() method in Java is a method of the String class 
that returns a canonical representation of the string object. 

A canonical representation is a single instance of the string 
that is shared by all other strings with the same content.

When you create a string literal in Java, a new String object is created. 
However, if you use the intern() method, 
the Java Virtual Machine (JVM) will check if a String object 
with the same content already exists in the string pool. 

If so, it will return the existing String object instead of creating a new one.

```
String s1 = "Hello";
String s2 = "Hello";
String s3 = s1.intern();

System.out.println(s1 == s2); // true
System.out.println(s1 == s3); // true
```

In what situation must use: 
The intern() method should be used when you need to ensure 
that all references are to a particular string value point to the same object. 
This can be useful for performance optimization 
and for maintaining consistency and avoiding errors.

</details>
<br>


2. How do Java Records differ from traditional Java classes?
4. What are the limitations of Java Records compared to regular classes?
5. How do Java Records affect immutability in Java?
6. Can you explain how Java Records interact with Java's type system?
7. How do Java Records handle methods like equals(), hashCode(), and toString()?
8. Can you explain how Java Records can be used with other Java 14 features like Pattern Matching and Switch Expressions?
9. How do Java Records handle constructors and initialization?
10. Can you explain how Java Records can improve code readability and reduce boilerplate code?



