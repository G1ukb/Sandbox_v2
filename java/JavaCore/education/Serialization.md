<h1>Serialization</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

- What is Java Serialization? Why is it used?
- Which interface must a class implement to be serializable?
- What is the role of serialVersionUID in serialization?
- What will happen if a class does not have serialVersionUID explicitly defined?
- How do you serialize and deserialize an object in Java?
- What is the difference between Serializable and Externalizable interfaces?
- Can a static field be serialized? Why or why not?
- What happens if a superclass is not serializable but the subclass is?
- How would you prevent a specific field from being serialized?
- Is constructor of a Serializable class called during deserialization? Explain why.

- What are some of the consequences of changing a serializable class after it has been serialized?
- How would you implement custom serialization logic for a class?
- How does Java handle the serialization of object graphs (i.e., references to other objects)?
- What are the limitations of Java's default serialization mechanism?

- What are the performance costs associated with Java serialization?
- How does serialization affect versioning and compatibility between different JVMs or application versions?
- Discuss the security implications of deserialization. What kinds of attacks can occur?
- How do Java serialization filters (introduced in Java 9) help improve security?
- What is the difference between deep copy and serialization? Can serialization be used for deep cloning?
- What is the behavior of serialization with circular references?

- Would you recommend using Java serialization in a distributed system? Why or why not?
- What kind of problems can arise when serializing and deserializing across microservices?
- How can you standardize serialization practices across a team or organization?
- What logging or monitoring would you put in place to detect deserialization issues in production?
- How do you test serialization logic during CI/CD pipelines?

- Compare and contrast Java serialization with other serialization formats such as JSON, Avro, Protobuf, and Thrift.
- What is your strategy for serialization in a system with millions of objects transferred per minute?
- How would you design a serialization framework that is extensible, testable, and secure?


[//]: # (Ways to Serialize an Object?)
<details>
    <summary style="font-size: 25px;">
        <b>
         Ways to Serialize an Object
        </b>
    </summary>
<br>

2 ways to serialize an object

**Serialization using the Serializable method:**

- specific marker interface
- to use it, we must call writeObject on the io stream

**Serialization using the Externalizable method:**

- successor of marker interface with two read/writeExternal methods
- allows us to create custom serialization and deserialization settings

</details>
<br>

[//]: # (How descendants and base classes behave when deserialized)
<details>
    <summary style="font-size: 25px;">
        <b>
         How descendants and base classes behave when deserialized
        </b>
    </summary>
<br>

When a class implements the java.io.Serializable interface,
all its subclasses are also serializable.

Conversely, when an object has a reference to another object,
these objects must implement the Serializable interface separately,
otherwise a NotSerializableException will be thrown 

</details>
<br>

