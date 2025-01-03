<h1>Spring AOP</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (AOP)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            AOP
        </b>
    </summary>
<br>

**AOP** provides the ability to dynamically add end-to-end logic before, after, or around the actual logic
with simple plug-in functions.

The main goal of AOP is to make existing code easy to maintain. We can wrap around the problem area and add an additional
logic in the event that changes to an existing one will entail a large cost.

Another logic that wraps the existing one can be duplicated for several methods.
And also it is easy to change or edit it for all methods at once.

There are 2 types of Spring AOP implementation:
- Using XML Configuration Files
- Using the AspectJ annotation style

Basic elements of AOP:
Advice - (an analogue of a method with a condition) determines when the method is called (before, after return, after ejection, after, around (when calling the method))
Aspect - (class analog) is a class for advice methods
Joinpoint - (similar to annotation) a specific point in the application where advice should be called
Pointcut - (condition) - an expression that helps to determine the necessary advice and determine whether it should be called or not

Spring AOP is implemented in a proxy pattern, creates an object by wrapping an existing object by calling
necessary methods before or after their development

</details>