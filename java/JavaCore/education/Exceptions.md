<h1>Exceptions</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

- What is an exception in Java? How is it different from an error?
- What is the difference between checked and unchecked exceptions?
- What is the parent class of all exceptions in Java?
- What is the syntax of a try-catch block in Java?
- How does the finally block work? Will it always execute? What happens if an exception is thrown in the finally block?
- What happens if an exception is thrown but not caught?
- How do you create and throw a custom exception in Java?
- What is the purpose of the throw and throws keywords?
- Can you catch multiple exceptions in a single catch block? How?
- What is exception chaining and why would you use it?

- When should you create a custom exception class?
- What is a multi-catch block and what are its limitations?
- How does exception handling work with try-with-resources?
- Why can’t you catch Error or Throwable in most cases?

[//]: # (Best practices for using exceptions)

<br>
<details>
    <summary style="font-size: 25px;">
        <b>
         Best practices for using exceptions
        </b>
    </summary>
<br>

- **Be careful what you register**
  Error result logs should not contain private information
- **It's wrong to catch exceptions and do nothing with them**
- **Include a global exception handler to avoid a critical situation in
  important point for you**
- **Do not close the resource with your hands**
- **Dump Early, Catch Later** is the rule to cover
  as much as possible or catch as early as possible
- **Do not forget about log or forward**, do not neglect possible stuffing and logging
- **Explicitly define the exception to be thrown**. The narrower, the more accurate
- **First catch the bottleneck then the wide**

[infoLink](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Java-Exception-handling-best-practices)
</details>
<br>

