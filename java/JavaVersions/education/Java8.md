<h1>Java 8</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

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



