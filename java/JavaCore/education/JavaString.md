<h1>Java String</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Can you explain the concept of String immutability in Java?)
<details>
    <summary style="font-size: 25px;">
        <b> 
            Can you explain the concept of String immutability in Java?
        </b>
    </summary>
<br>

In Java, strings are immutable. This means that once a String object is created,
it cannot be changed or modified.

Any operation that appears to change the string instead
creates a new String object.

**Benefits:**

- **Security:** Strings are immutable and do not need any synchronization.

- **Performance Optimization:** Immutable strings can be pooled.
  In Java, string literals are automatically pooled,
  meaning that two String objects created with the
  same literal will actually be the same object in memory.
  This can save memory and improve performance.

**Hashcode Caching:** Since a String is immutable,
its hashcode doesn't change over time.
This means it can be cached when it's calculated the first time,
which can improve performance when using
String objects as keys in a HashMap or similar data structures.

</details>
<br>

[//]: # (Are there any disadvantages to using strings?)
<details>
    <summary style="font-size: 25px;">
        <b> 
            Are there any disadvantages to using strings?
        </b>
    </summary>
<br>

**Immutability:** Strings in Java are immutable,
which means once a String object is created, it cannot be changed.
If you need to modify a string extensively
(like in a loop or concatenating in multiple steps),
this can lead to performance issues because
each modification creates a new String object.
In such cases, it's more efficient to use StringBuilder or StringBuffer.

</details>
<br>

[//]: # (How does the String Pool work in Java?)
<details>
    <summary style="font-size: 25px;">
        <b> 
            How does the String Pool work in Java?
        </b>
    </summary>
<br>

The String Pool in Java is a pool of strings stored in the Java Heap Memory.
It is possible because of the immutability of strings in Java,
and it is one of the many optimizations
that the Java Virtual Machine (JVM) has to conserve memory.

</details>
<br>

[//]: # (How is a string searched in the String Pool?)
<details>
    <summary style="font-size: 25px;">
        <b> 
            How is a string searched in the String Pool?
        </b>
    </summary>
<br>

When a string literal is used in Java,
the JVM checks the string pool to see
if an equivalent string already exists.
This check is done using the equals() method and the hashcode of the string.

The string pool in the JVM is implemented as a hash table
or similar data structure. In a hash table,
the hashcode of the key (in this case, the string)
is used to determine the position (also known as the bucket)
where the value should be stored or retrieved from.

This allows for efficient insertion and retrieval of values,
as it can be done in constant time, i.e., O(1).

</details>
<br>

[//]: # (What is the difference between creating a 
         String using new keyword and String literal?)
<details>
    <summary style="font-size: 25px;">
        <b> 
            What is the difference between creating a 
            String using new keyword and String literal?
        </b>
    </summary>
<br>

- **String Literal:** When you create a string as a string literal,
  like String s = "Hello";.
  The JVM checks the string pool
  to see if a string with the same content exists.
    - If it does, the JVM returns a reference to the existing string in the pool.
    - If it doesn't, the JVM creates a new string in the pool
      and returns a reference to it.

- **New Keyword:** When you create a string using the new keyword,
  like String s = new String("Hello").
  the JVM creates a new string object in the heap memory,
  regardless of whether an identical string exists in the string pool.
  This can result in multiple string objects with the same content.

</details>
<br>

[//]: # (Can you explain the difference between String, 
         StringBuilder, and StringBuffer?)
<details>
    <summary style="font-size: 25px;">
        <b> 
            Can you explain the difference between String, 
            StringBuilder, and StringBuffer?
        </b>
    </summary>
<br>

- **String:**
    - immutable
    - it can be inefficient for large amounts of string processing.


- **StringBuilder:**
    - mutable,
    - faster in simple concatenations.
    - not synchronized


- **StringBuffer:**
    - mutable
    - thread save
    - slower than StringBuilder

In summary, use String for strings that won't change.
Use StringBuilder for strings that will change within
a single-threaded environment, and use StringBuffer
for strings that might need to be changed
across a multi-threaded environment.

</details>
<br>

[//]: # (How does the equals method work for Strings in Java?)
<details>
    <summary style="font-size: 25px;">
        <b> 
            How does the equals() method work for Strings in Java?
        </b>
    </summary>
<br>

* Check for Same Object - references
* Check for Null
* Check for Type
* Compare Lengths
* Compare Characters — compared as two char[] arrays

</details>
<br>

