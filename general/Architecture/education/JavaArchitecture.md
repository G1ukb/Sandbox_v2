<h1>Java Programming Architecture</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

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
17. How does the JVM handle the execution of bytecode? Can you explain the process in detail?
18. What is the difference between the JIT compiler and the AOT (Ahead-Of-Time) compiler in Java?
19. Can you explain the concept of “platform independence” in Java? How does it relate to the compilation and interpretation process?
20. Can you explain how multithreading is handled in the JVM? How does it affect the interpretation of Java bytecode?
21. What is the impact of generics in Java on the compilation process?
22. How does the JVM optimize the execution of Java bytecode? Can you explain some of the optimization techniques used by the JVM?
2. What are the main components of the JDK and what are their functions?
3. Can you explain the role of the JRE in running Java applications?
4. How does the JDK interact with the JRE and JVM?
5. What is the purpose of the tools included in the JDK?
6. Can you explain the concept of a SDK and how it differs from the JDK?
7. How does the JRE fit into the Java ecosystem alongside the JDK and JVM?
8. Can you explain the process of compiling and running a Java application using the JDK and JRE?
9. What factors would you consider when deciding which version of the JDK, SDK, or JRE to use in a project?
10. Can you explain how classpath works in relation to the JDK and JRE?
14. What is the role of the Java Development Kit (JDK) in the compilation process of a Java program?
15. What is the role of the SDK (SDK) in the compilation process of a Java program?
1. Can you explain what the invoke-dynamic instruction is and how it works in the JVM?
2. How does invoke-dynamic differ from other JVM invocation instructions like invoke-static or invoke-virtual?
3. Can you provide an example of a situation where using invoke-dynamic would be beneficial?
4. How does invoke-dynamic contribute to the performance of the JVM, especially in the context of dynamic languages?
5. Can you explain how the concept of "bootstrap methods" relates to invoke-dynamic?

[//]: # (What are compiled and interpreted programming 
        languages and their advantages and disadvantages?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are compiled and interpreted programming 
            languages and their advantages and disadvantages?
        </b>
    </summary>
<br>

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
    <summary style="font-size: 25px;">
        <b>
            Is Java compiled or interpreted?
        </b>
    </summary>
<br>

Java is both compiled and interpreted. Here’s how it works:

**Compilation:** Java source code is first compiled into bytecode by the Java compiler.

**Interpretation:** The JVM interprets and executes this bytecode at runtime.

**Just-In-Time Compilation:** Modern JVMs also have a Just-In-Time (JIT) compiler. 
This means that the JVM optimizes our code at runtime 
to gain similar performance benefits to a compiled language.

</details>

[//]: # (Can you explain the difference between JDK, SDK, and JRE?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference between JDK, SDK, and JRE?
        </b>
    </summary>
<br>

1. **JDK (Java Development Kit)**: 
This is a software development environment used for developing 
Java applications and applets. 
It includes the Java Runtime Environment (JRE), 
an interpreter/loader (Java), a compiler (javac), an archiver (jar), 
a documentation generator (Javadoc), 
and other tools needed in Java development.

2. **SDK (Software Development Kit)**: 
This is a set of software development tools that are used 
to develop applications for a specific platform or framework. 
An SDK includes one or more APIs (Application Programming Interfaces), 
programming tools, and documentation. 
The JDK can be considered a type of SDK, but not all SDKs are JDKs. 
For example, Android SDK is used for developing Android applications.

3. **JRE (Java Runtime Environment)**: 
This is a part of the JDK that contains the Java Virtual Machine (JVM), 
libraries, and all other components necessary to run a Java application. 
If you only want to run a Java application, you would only need the JRE, 
not the entire JDK.

</details>


