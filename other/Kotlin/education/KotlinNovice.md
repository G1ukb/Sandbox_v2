<h1>Kotlin Novice Questions</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

* How do you use generics in Kotlin?
* What is the difference between lazy and lateinit in Kotlin?
* How do you use the let function in Kotlin?
* What are inline functions in Kotlin?
* How do you use the also function in Kotlin?
* What is the difference between filter and map in Kotlin?
* How do you use the run function in Kotlin?
* What are destructuring declarations in Kotlin?
* How do you use the with function in Kotlin?
* What is the difference between forEach and forEachIndexed in Kotlin?
* How do you use the takeIf function in Kotlin?

[//]: # (What is Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is Kotlin?
        </b>
    </summary>
<br>

Kotlin is an Object-oriented and Functional programming
language developed by JetBrains.

The main idea behind the creation of Kotlin was to develop a new language
for the JVM (Java Virtual Machine) that would be
more efficient and productive than Java

+ compile faster than java and save java Multiplatform Capability
+ 100% associated with Java in both directions
+ designed to be more readable and simpler to use as Java
+ Null Safety improvements

- all disadvantages of young language
  - small community
  - not reach resources for learning
- in some areas compilation speed can be slower
- still, we have association issues with some java libs

</details>

[//]: # (What is the difference between val and var in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between val and var in Kotlin?
        </b>
    </summary>
<br>

var (Variable): It is a mutable variable, meaning its value can
be changed anytime throughout the program

val (Value): It is an immutable variable, similar to a final variable in Java

</details>

[//]: # (How do you define a function in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How do you define a function in Kotlin?
        </b>
    </summary>
<br>

    fun functionName(parameter1: Type1, parameter2: Type2, ...): ReturnType {
    // function body
    return result
    }

</details>

[//]: # (What are Kotlin coroutines and how are they used?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are Kotlin coroutines and how are they used?
        </b>
    </summary>
<br>

Kotlin's coroutines are a design pattern that you can use to simplify code
that executes asynchronously

Coroutines are recommended for asynchronous programming on Android.
They help manage long-running tasks that might otherwise block
the main thread and cause your app to become unresponsive

</details>

[//]: # (How does null safety work in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does null safety work in Kotlin?
        </b>
    </summary>
<br>

- **Nullable and Non-Nullable Types:** in Kotlin all types are non-null by design.
  But i can create nullable value

      val b: String? = "value" // might be null

- **Null Checks:** When you want to access a nullable reference,
  you must handle the null case check
- **Safe Calls** Kotlin provides a safe call operator (?.)
- **Elvis Operator:** (?:)

      val length = b?.length ?: 0 // length will be 0 if b is null
- **Not-null Assertion Operator** (!!) (exclamation mart)

</details>

[//]: # (What is the difference between List and MutableList in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between List and MutableList in Kotlin?
        </b>
    </summary>
<br>

- **List:** This is an interface which provides read-only access to the list
- **MutableList:** This is an interface that supports adding and removing elements

</details>

[//]: # (What are data classes in Kotlin and how do they differ from regular classes?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are data classes in Kotlin and how do they differ from regular classes?
        </b>
    </summary>
<br>

In Kotlin, a data class is a special kind of class that is primarily used to hold data

    data class User(val name: String, val age: Int)

The key differences between data classes and regular classes are

- Data classes automatically generate equals(), hashCode(), toString(), copy(),
  and componentN() functions based on the properties declared in the primary constructor
- Data classes are primarily used to hold data.
  Regular classes can hold both data and behaviors
- Data classes cannot be extended by another class.
  They are final classes by default
- Data classes cannot be sealed, open, abstract, or inner

</details>

[//]: # (What are sealed classes in Kotlin and what are they used for?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are sealed classes in Kotlin and what are they used for?
        </b>
    </summary>
<br>

Sealed classes in Kotlin are used to represent restricted class 
hierarchies that provide more control over inheritance

    sealed class Error {
    data class IOError(val description: String) : Error()
    object RuntimeError : Error()
    }

In this example, Error is a sealed class that has two subclasses: 
IOError and RuntimeError. 
You can be sure that an instance of Error is always one of these two subclasses.

- Sealed classes allow you to define their permitted subtypes.
- This feature provides more fine-grained control over inheritance.
- It is useful for domain modeling and increasing the security of libraries.
- Sealed classes work well with the Java Reflection API, Java Records,
and Pattern Matching.

</details>

[//]: # (What is the purpose of the companion object in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the purpose of the companion object in Kotlin?
        </b>
    </summary>
<br>

In Kotlin, the companion object is a design pattern that allows you
to create methods and variables associated with a class rather
than instances of it. This is similar to the static keyword in Java.

</details>

[//]: # (How do you use lambda expressions in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How do you use lambda expressions in Kotlin?
        </b>
    </summary>
<br>

Lambda expressions in Kotlin are anonymous functions;
that is, functions that are not declared,
but passed immediately as an expression.

They are handy when you want to quickly define a function
that isn’t going to be used elsewhere.

    val multiply = { a: Int, b: Int -> a * b }
    
    fun main() {
    println(multiply(5, 2))  // prints: 10
    }

</details>

[//]: # (What are extension functions in Kotlin and how do you define them?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are extension functions in Kotlin and how do you define them?
        </b>
    </summary>
<br>

Extension functions in Kotlin allow you to extend a class with new functionality
without having to inherit from the class or use any type of design pattern
such as Decorator.
This is done via special declarations called extensions.

Kotlin supports extension functions and extension properties.

    // Define an extension function on String
    fun String.addExclamation(): String {
    return this + "!"
    }
    
    fun main() {
    val myString = "Hello, World"
    println(myString.addExclamation())  // prints: Hello, World!
    }

</details>

[//]: # (How do you use the when expression in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How do you use the when expression in Kotlin?
        </b>
    </summary>
<br>

This is a switch case

    fun describe(x: Any): String =
      when (x) {
      1 -> "One"
      "Hello" -> "Greeting"
      is Long -> "Long"
      !is String -> "Not a string"
      else -> "Unknown"
    }
    
    fun main() {
      println(describe(1))  // prints: One
      println(describe("Hello"))  // prints: Greeting
      println(describe(1000L))  // prints: Long
      println(describe(2))  // prints: Not a string
      println(describe("Other"))  // prints: Unknown
    }

</details>

[//]: # (What is the difference between == and === in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between == and === in Kotlin?
        </b>
    </summary>
<br>

In Kotlin, there are two types of equality:
Structural equality and Referential equality.

* Structural Equality (==): This checks if the values of two objects are equal.
* Referential Equality (===): This checks if two references point to the same object

</details>

[//]: # (What is the difference between apply and with in Kotlin?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between apply() / with() /
            let() / run() / also() in Kotlin?
        </b>
    </summary>
<br>

- With: used for simple object clone (return some other object)
- Let: used in null check/non obj state change operations
- Apply: used for object configuration and returning the object itself
- Run: used for executing a block of code on an object 
and returning the result of the block.
- Also: used for performing additional operations or side effects
on an object and returning the object itself.

- **apply** is typically used when you need to do something with an object and then return it.

      data class Person(var name: String, var tutorial: String)
      var person = Person("Anupam", "Kotlin")
      
      person.apply {
        this.tutorial = "Swift"
      }
      
      println(person) // Person(name=Anupam, tutorial=Swift)

- **with** is typically used when you need to perform some operations
  on an object and return some other object.

      data class Person(var name: String, var tutorial: String)
      var person = Person("Anupam", "Kotlin")
      
      with(person) {
         this.tutorial = "Swift"
      }
      
      println(person) // Person(name=Anupam, tutorial=Swift)

- **let** - It is called on an object and returns the result of the lambda expression.

It is mainly used for null checks and to avoid NullPointerExceptions.

      fun main(args: Array<String>) {
      var str = "Hello World"
      str.let { println("$it!!") }
      println(str)
      
      }
      //Prints
      //Hello World!!
      //Hello World

it keyword contains the copy of the property inside let.

- let for null checks

      name = null
      name?.let { println(it) } //nothing happens

- Chaining let functions

      a = a.let { it + 2 }.let { val i = it + bi}

- **run** - It is called on an object and returns the result
  of the lambda expression.

It is mainly used when the lambda expression is doing
more than just accessing the properties of the object

      var p : String? = null
      p?.let { println("p is $p") } ?: run { println("p was null. Setting default value to: ")
      p = "Kotlin"}
      
      println(p)
      //Prints
      //p was null. Setting default value to:
      //Kotlin

- **also** - perform additional operations on an object

      val numbers = mutableListOf("one", "two", "three")
      numbers
      .also { println("The list elements before adding new one: $it") }
      .add("four")


</details>


