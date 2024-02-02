
5. JavaScript компилируемый или интерпритируемый
6. Python compiled or interpreted
6. Can you explain the role of the Java Compiler and Java Virtual Machine (JVM) in the execution of a Java program?
7. What is bytecode in the context of Java? How does it contribute to Java’s platform independence?
8. How does Just-In-Time (JIT) compilation work in the JVM? What are its advantages and disadvantages?
9. Can you describe the process of loading, linking, and initialization in the JVM?
10. What are class loaders in Java? Can you explain their role in the JVM and the delegation model they use?
11. What is the difference between static and dynamic binding in Java? How does it affect the performance of a Java application?
12. Can you explain the concept of reflection in Java? How can it be used and what are its implications on performance?
13. Can you discuss the HotSpot JVM and its features? How does it improve the performance of a Java application?
14. What is the role of the Java Development Kit (JDK) in the compilation process of a Java program?
15. What is the role of the SDK (SDK) in the compilation process of a Java program?
16. SDK vs JDK
17. How does the JVM handle the execution of bytecode? Can you explain the process in detail?
18. What is the difference between the JIT compiler and the AOT (Ahead-Of-Time) compiler in Java?
19. Can you explain the concept of “platform independence” in Java? How does it relate to the compilation and interpretation process?
20. Can you explain how multithreading is handled in the JVM? How does it affect the interpretation of Java bytecode?
21. What is the impact of generics in Java on the compilation process?
22. How does the JVM optimize the execution of Java bytecode? Can you explain some of the optimization techniques used by the JVM?


[//]: # (What are compiled and interpreted programming 
        languages and their advantages and disadvantages?)
<br>
<details>
    <summary>
        <b><big><big><big>
            What are compiled and interpreted programming 
            languages and their advantages and disadvantages?
        </big></big></big></b>
    </summary>

**Compiled languages** are translated into machine code,
which can be executed by the processor.

+ They run faster and more efficiently
+ Has better control over hardware resources

- require an additional ‘build’ stage
- Every time you make changes, you will need to ‘rebuild’ the program

**Interpreted languages** are read and executed line by line by another program

+ immediately sees all changes and translates it to you
+ JIT (Just-In-Time) compilation
  + dynamic recompilation 
  + microarchitecture-specific speedups

- Interpreted languages are much slower than compiled ones.

</details>

[//]: # (Is Java compiled or interpreted?)
<br>
<details>
    <summary>
        <b><big><big><big>
            Is Java compiled or interpreted?
        </big></big></big></b>
    </summary>

Java is both compiled and interpreted. Here’s how it works:

**Compilation:** Java source code is first compiled into bytecode by the Java compiler.

**Interpretation:** The JVM interprets and executes this bytecode at runtime.

**Just-In-Time Compilation:** Modern JVMs also have a Just-In-Time (JIT) compiler. 
This means that the JVM optimizes our code at runtime 
to gain similar performance benefits to a compiled language.

</details>



