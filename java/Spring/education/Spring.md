<h1>Spring</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (What are the pros and cons of the Spring Framework?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             What are the pros and cons of the Spring Framework?
        </b>
    </summary>
<br>

**Pros of Spring Framework:**
+ Spring Framework provides a large set of infrastructures 
for efficient building, testing, and deploying applications.
+ Simplifies Java EE complexities by providing default configurations
+ Open Source
+ Inversion of Control (IoC)
+ Integration with Other Frameworks
+ Testability: Spring puts a lot of emphasis on testing.

**Cons of Spring Framework:**
- Complexity
- High barrier to entry
- Numerous Configurations 
- Performance: sometimes cause minor performance degradation
- Multiple Ways to Accomplish a Task: multiple ways to achieve the same functionality

</details>

[//]: # (What is Inversion of Control IoC?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             What is Inversion of Control (IoC)?
        </b>
    </summary>
<br>

Inversion of Control (IoC) is a software design principle 
that reverses the flow of control in a system. 
Instead of having your application code control the flow of a process, 
the control is handed over to a generic, reusable framework or container.

DI - @Autowired when spring injects the dependency itself
DL - getBean() when we can manually pick up this dependency for use

</details>

[//]: # (Can you explain the different types of beans in the Spring Framework?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the different types of beans in the Spring Framework?
        </b>
    </summary>
<br>

* **Singleton**: The scope of a bean when using this will be one instance per IoC container.
* **Prototype**: Here, the scope of a single component can be any number of object instances.
* **Request**: A bean is scoped to an HTTP request.
* **Session Beans:** They are created for an individual HTTP session.
  * **Session**: Here the scope of the bean is the HTTP session.
  * **Global-session**: The scope of the bean here is the global HTTP session.
* **Application Beans:** scoped to the lifecycle of a ServletContext
* **WebSocket Beans**: created for the lifetime of a websocket
* **Custom bean scope**: implement Scope and control init and destroy flow

</details>

[//]: # (What is the default scope of a Spring bean?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
             What is the default scope of a Spring bean?
        </b>
    </summary>
<br>

The default scope of a Spring bean is singleton.

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

[//]: # (What are the @PreDestroy and @PostConstruct annotations in Spring?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the @PreDestroy and @PostConstruct annotations in Spring?
        </b>
    </summary>
<br>

**@PostConstruct:** This annotation is used on a method 
that needs to be executed after dependency injection 
is done to perform any initialization.

Use cases:
- Initializing default values
- Starting background tasks
- Loading data

**@PreDestroy:** This annotation is used on methods as a callback notification 
to signal that the instance is in the process 
of being removed by the container.

Use cases:
- Releasing resources
- Stopping background tasks
- Saving data

</details>

[//]: # (What are the @DependsOn and @Conditional annotations in Spring?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the @DependsOn and @Conditional annotations in Spring?
        </b>
    </summary>
<br>

1. @DependsOn: This annotation is used to define a dependency 
between Spring beans. 
It can be used to ensure that a certain bean is initialized before another. 

   ```
   @Bean
   @DependsOn("otherBean")
   public MyBean myBean() {
       // ...
   }
   ```
   
2. @Conditional: This annotation is used to indicate that 
a component or configuration should only be registered 
if the specified conditions match. 
It's often used in conjunction with a Condition implementation. 

   ```
   @Bean
   @Conditional(MyCondition.class)
   public MyBean myBean() {
       // ...
   }
   ```
   
Use cases:
* Environment-specific beans
* Optional components
* Feature flags
* Hardware-specific beans

</details>

[//]: # (How do you define a condition for the @Conditional annotation?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How do you define a condition for the @Conditional annotation?
        </b>
    </summary>
<br>

In Spring, conditions for the @Conditional annotation 
are defined by implementing the Condition interface. 
This interface has one method, matches(). 
That returns a boolean. 
If matches() returns true, the condition is met and the bean is registered. 
If it returns false, the condition is not met and the bean is not registered.

```
@Bean
@Conditional(MyCondition.class)
public MyBean myBean() {
    // ...
}

public class MyCondition implements Condition {
    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        return context.getEnvironment().getProperty("my.property", Boolean.class, false);
    }
}
```

</details>

[//]: # (What is the @Primary annotation in Spring?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the @Primary annotation in Spring?
        </b>
    </summary>
<br>

The @Primary annotation in Spring is used 
when you have more than one bean of the same type, 
and you want to give one of them higher preference. 

So, when an @autowiring conflict occurs, 
the @Primary annotated bean gets the priority.

</details>

[//]: # (How does the @Primary annotation interact with the @Qualifier annotation in Spring?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does the @Primary annotation interact with the @Qualifier annotation in Spring?
        </b>
    </summary>
<br>

If you use both @Primary and @Qualifier, @Qualifier takes precedence.

The @Qualifier annotation, on the other hand, 
allows you to specify the name of the bean that should be autowired.

But @Primary only gives priority

</details>

[//]: # (What are the differences between @Autowired and @Resource?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the differences between @Autowired and @Resource?
        </b>
    </summary>
<br>

The @Autowired and @Resource annotations in Spring 
are both used for dependency injection,
but they have some differences in how they work:

1. Source: @Autowired is a Spring-specific annotation, 
while @Resource is part of the JSR-250 specification, 
which means it's not specific to Spring and can be used in any Java program.

2. Injection type: @Autowired performs injection by type. 
This means it looks for a bean of the same type as the field or setter method.
If there are multiple beans of the same type, 
it selects the primary bean or the one specified by @Qualifier.

On the other hand, @Resource performs injection by name. 
This means it looks for a bean with the same name 
as the field or setter method. 
If a name is not specified, it falls back to by-type autowiring.

3. Required behavior: By default, @Autowired is required, 
meaning that if Spring can't find a matching bean to inject, 
it will throw an exception.
You can change this behavior by setting @Autowired(required=false). 

@Resource, on the other hand, is not required by default. 
If a matching bean can't be found,
it won't throw an exception unless you set @Resource(lookup="beanName"), 
in which case it becomes required.

</details>

[//]: # (Can you explain how to use event listeners in Spring?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use event listeners in Spring?
        </b>
    </summary>
<br>

Events in the Spring framework allow communication between components
in a loosely coupled fashion.
Handling these events can be either synchronous or asynchronous.

pluses:
+ Loose Coupling: publisher and listeners don't depend directly on each other.
+ Ease of Use
+ Synchronous and Asynchronous Support
+ Extensibility: Spring events can be extended 
to create complex event handling logic if necessary.

minuses: 
- Hidden Behavior
- Synchronous Performance: slow down the publisher if you have long-running or blocking tasks in your listeners
- Debugging and Testing: more difficult with event-driven programming

Below is the explanation of how to create and handle a custom event:

1. Define an Event: Create an event class extending `ApplicationEvent`.

```java
public class CustomEvent extends ApplicationEvent {
    public CustomEvent(Object source) {
        super(source);
    }
}
```

2. Publish an Event: Use `ApplicationEventPublisher` to publish events. 
This can be a part of any Service.

```java
@Service
public class CustomEventPublisher {

    private final ApplicationEventPublisher eventPublisher;

    @Autowired
    public CustomEventPublisher(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    public void publishCustomEvent() {
        CustomEvent customEvent = new CustomEvent(this);
        eventPublisher.publishEvent(customEvent);
    }
}
```

3. Create an Event Listener: 
Annotate a method with `@EventListener` to handle the custom event.

```java
@Component
public class CustomEventListener {

    @EventListener
    public void handleCustomEvent(CustomEvent event) {
        // Handle event
    }
}
```

</details>


/////////////

- What is Servlet Context