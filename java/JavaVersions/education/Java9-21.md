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


2. How do Java Records differ from traditional Java classes?
4. What are the limitations of Java Records compared to regular classes?
5. How do Java Records affect immutability in Java?
6. Can you explain how Java Records interact with Java's type system?
7. How do Java Records handle methods like equals(), hashCode(), and toString()?
8. Can you explain how Java Records can be used with other Java 14 features like Pattern Matching and Switch Expressions?
9. How do Java Records handle constructors and initialization?
10. Can you explain how Java Records can improve code readability and reduce boilerplate code?



