<h1>Classloading</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

<br>
<details>
    <summary style="font-size: 25px;">
        <b>
         Classloader and in what situations it can be useful for us
        </b>
    </summary>
<br>

Class loaders are responsible for **dynamically loading Java classes in the JVM**
during execution.

Also, these Java classes are not immediately loaded into memory,
and when they are required by the application (LAZY).

* **Bootstrap** - bootstrap class loader
* **Extension** - provides loading of extensions
* **System** - loads all files in the classpath variable

Delegation model - a model in which class loaders delegate
search for a class up the chain.

However, in scenarios where we need to load classes from the local hard drive
or from the network, we may need
use custom class loaders.

* Help modifying existing bytecode
* Create classes dynamically suited to the needs of the user
  (e.g. switching JDBC)

</details>
<br>
