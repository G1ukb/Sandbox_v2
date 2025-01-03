<h1>Java 8</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (Can you explain the difference 
        between using a stream and a foreach loop in Java?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference 
            between using a stream and a foreach loop in Java?
        </b>
    </summary>
<br>

1. **Functional Programming vs Imperative Programming**:
   Streams are a feature of functional programming
   and allow you to write more declarative code,
   focusing on what you want to do rather than how to do it.

   `foreach` loops, on the other hand, are a feature of imperative
   programming and require you to specify how to do something.

2. **Parallelism**: One of the main advantages of streams
   is that they can easily be run in parallel,
   allowing you to take advantage of multicore processors.
   To run a stream in parallel, you need to replace
   `stream()` with `parallelStream()`.

3. **Chaining**: With streams, you can chain multiple operations
   together into a pipeline, which can make your code more readable and concise.
   With a `foreach` loop, you typically need to
   use additional loops or temporary collections for each intermediate operation.

4. **Performance**: In general, the performance of streams and `foreach`
   loops is similar for small amounts of data. For large amounts of data,
   parallel streams can be faster than `foreach`
   loops because they can take advantage of multicore processors.

5. **Readability:** Stream operations can be chained together,
   which allows for a more declarative style of programming.
   This can make your code more readable because it focuses
   on what you want to do, rather than how to do it.
   However, for someone unfamiliar with streams or functional programming,
   a foreach loop might be easier to understand.

```
// Using a stream
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
    .filter(n -> n % 2 == 0)
    .mapToInt(Integer::intValue)
    .sum();

// Using a foreach loop
int sum = 0;
for (int n : numbers) {
    if (n % 2 == 0) {
        sum += n;
    }
}
```

</details>
<br>

[//]: # (In what situation should you use a stream 
        and in what situation should you use a loop?)

<details>
    <summary style="font-size: 25px;">
        <b>
            In what situation should you use a stream 
            and in what situation should you use a loop?
        </b>
    </summary>
<br>

Choose Stream if:

- multiple operations
  (like filtering, transforming, and then collecting the results)
- if you need parallelism
- better in big amount of data with parallelism

Choose Loop if:

- single operation on each element of a collection
- if you have side effects (modify external vars)

</details>
<br>

[//]: # (What are the disadvantages of 
         using streams over foreach loops in Java?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What are the disadvantages of 
            using streams over foreach loops in Java?
        </b>
    </summary>
<br>

1. **Performance Overhead**: Streams can have a slight performance overhead
   for simple operations or small data sets due to the additional
   setup required for streams.
   For these cases, a `foreach` loop might be faster.

2. **Debugging**: Debugging a stream, especially one with multiple operations,
   can be more challenging than debugging a `foreach` loop.
   With a loop, you can add debugging statements at any point in the loop.
   With a stream, this is more challenging because the operations
   are typically performed in a single line of code.

3. **Learning Curve**: If you're new to functional programming concepts,
   streams can be harder to understand and use correctly
   compared to traditional loops.

4. **Side Effects**: Streams are designed to work with
   pure functions that don't have side effects.
   If you need to modify external state during the iteration,
   a `foreach` loop is a more natural choice.

5. **Exception Handling**: Checked exceptions can't be thrown directly
   from inside a lambda expression used in a stream operation.
   You would need to wrap them in unchecked exceptions or use a workaround,
   which can complicate your code.

6. **Maintainability:** With streams, operations on elements are often
   more isolated and easier to modify without affecting other parts of the code.
   This can make your code more maintainable.
   However, if a stream operation becomes very complex,
   it might be more maintainable to break it up into a foreach loop
   or multiple smaller methods.

</details>
<br>

[//]: # (Can you explain the purpose and usage of the Predicate 
         interface in Java with an example?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the purpose and usage of the Predicate 
            interface in Java with an example?
        </b>
    </summary>
<br>

The Predicate interface in Java is a functional interface 
that represents a predicate (a boolean-valued function) 
of one argument. 

Predicates are used to filter collections or test conditions.

The Predicate interface has a single method, 
test, which takes an argument of type T and returns a boolean value. 
The test method returns true if the predicate is satisfied by the argument, 
and false otherwise.

```
List<String> names = Arrays.asList("John", "Mary", "Bob", "Alice");

// Create a predicate to filter names starting with "M"
Predicate<String> startsWithM = name -> name.startsWith("M");

// Filter the list of names using the predicate
List<String> filteredNames = names.stream()
.filter(startsWithM)
.collect(Collectors.toList());

// Print the filtered names
System.out.println(filteredNames); // [Mary, Bob]
```

In what situation must use: 
The Predicate interface should be used 
when you need to filter a collection or test a condition. 

Predicates are often used in conjunction with the Stream API, 
which provides a powerful and concise way to process collections of data.

</details>
<br>

[//]: # (What is FlatMap?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is FlatMap?
        </b>
    </summary>
<br>

FlatMap is an intermediate operation in Java streams
that is used to transform and flatten a stream of elements 
into a new stream of elements. 

It takes each element in the stream and applies a function to it, 
which can return either a single element or a stream of elements. 
The resulting elements are then flattened into a single stream.

**Example:**

```
List<String> words = Arrays.asList("Hello", "world", "this", "is", "a", "sentence");

// Use flatMap to split each word into a stream of characters
Stream<Character> characters = words.stream()
    .flatMap(word -> word.chars().mapToObj(c -> (char) c));

// Print the characters
characters.forEach(System.out::println);
```
**Pros and Cons:**

**Pros:**
* Concise and efficient.
* Lazy evaluation.

**Cons:**
* Can be difficult to understand for beginners.

</details>
<br>

* What is the difference between `flatMap` and `map`?
* Can I use `flatMap` to combine multiple streams?
