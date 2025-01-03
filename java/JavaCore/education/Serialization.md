<h1>Serialization</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

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

