<h1>Spring</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Spring pros and cons)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Spring pros and cons
        </b>
    </summary>
<br>

**pros**
+ many components
+ ability to work with aspects of AOP
+ easy setup of Model View Controller
+ implementation of Inversion of control

**minuses**
- entry threshold (many practices, approaches, documentation)
  is a framework
- may be slower in some situations

</details>

[//]: # (What is IoC)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             What is IoC
        </b>
    </summary>
<br>

IoC is an architectural solution that uses the Spring Container 
that implements the principles
DI and DL to manage dependencies automatically

DI - @Autowired when spring injects the dependency itself
DL - getBean() when we can manually pick up this dependency for use

</details>

[//]: # (Bean types)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             Bean types
        </b>
    </summary>
<br>

Singleton: The scope of a bean when using this will be one instance per IoC container.
Prototype: Here, the scope of a single component can be any number of object instances.
Request: A bean is scoped to an HTTP request.
Session: Here the scope of the bean is the HTTP session.
Global-session: The scope of the bean here is the global HTTP session.
Custom bean scope: implement Scope and control init and destroy flow

</details>

[//]: # (Bean life cycle)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             bean life cycle
        </b>
    </summary>
<br>

- object constructor
- dependency injection 
- calling Aware interfaces to define beans metadata (
example BeanNameAware, BeanFactoryAware)
- initialization (@PostCostruct/initMethod/afterPropertiesSet())
- post init (BeanPostProssesor.postProcAfterInit())

- @PreDestroy
- destroy
- DisposableBean.destroy()
  ![](https://itsobes.ru/assets/JavaSobes/303.jpg)

</details>

[//]: # (What can be annotated)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             What can be annotated / What happens if several components fit
        </b>
    </summary>
<br>

- field
- method
- constructor

If several components fit, the spring will throw an error. 
The @qulifier annotation will help solve the problem

</details>

[//]: # (How spring can be configured)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How can you configure a spring
        </b>
    </summary>
<br>

XML based configuration:
+ the oldest method that has many examples and some tricky cases
+ concentrated in 1 or more xml files

- xml, high entry threshold you need to know properties
- you will see errors only when you start the application

Annotation based configuration:
instead of using xml inside xml it is described that the context will be annotation-config
further annotations are placed as in the java config, (@Component, @Service, @Repo
ComponentScan, and so on)

+ Simplicity and ease of use

- decentralized, without additional tools you can not see how the files are connected
  and they can be scattered over many places of the monolith, which is inconvenient

Java based configuration:
Annotated the class as @Configuration, then annotate the object creation methods
using the @Bean annotation

+ centralization
+ possibility of additional custom logic

</details>

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
