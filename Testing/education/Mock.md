<h1>Mock</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

2. Can you provide an example of when you would use a mock, a stub, and a spy in a test scenario?
3. How do mocks, stubs, and spies contribute to the isolation of tests?
4. Can you explain how to implement a mock, a stub, and a spy using a popular testing framework like Mockito or JUnit?
5. What are the advantages and disadvantages of using mocks, stubs, and spies in testing?

[//]: # (Can you explain the difference between a mock, 
        a stub, and a spy in testing?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference between a mock, 
            a stub, and a spy in testing?
        </b>
    </summary>
<br>

1. **Stub**: A stub is a minimal implementation of an interface, 
which returns hardcoded values. 
Stubs are typically used when you want to isolate 
the system under test from other parts of the system, 
such as external services or databases. 
They provide pre-determined responses to method calls, 
and are usually not concerned with the behavior of the system under test.

2. **Mock**: A mock is a fake implementation of an interface 
or a class in which you define the output of certain method calls. 
Mock objects are configured to perform a certain behavior during a test. 
They are typically used in interaction-based testing, 
where the behavior of the system under test is more important than the state. 
Mocks can also be used to verify that certain methods have been called on them, 
usually with specific parameters.

3. **Spy**: A spy is partial mock. It's a real object, 
but its behavior can be controlled or inspected by the test. 
You can configure some methods to behave as you like, 
while other methods do what they normally do.
Spies are typically used when you want to test some methods of a class, 
but not others, or when you want to verify that certain methods
have been called without affecting their behavior.

</details>
<br>