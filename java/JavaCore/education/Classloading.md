<h1>Classloading</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

<h1>Basic Understanding</h1>

----

[//]: # (What Is a Classloader and How Can It Benefit Java Applications?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
         What Is a Classloader and How Can It Benefit Java Applications?
        </b>
    </summary>
<br>

A Classloader in Java is a part of the Java Runtime Environment
that dynamically loads Java classes into the Java Virtual Machine (JVM).
Classes are loaded as needed, rather than all at once,
which helps save memory and improves performance.
Classloaders work in a hierarchy, starting with the Bootstrap ClassLoader,
which loads core Java API classes, followed by the Extension ClassLoader
and System/Application ClassLoader for loading extensions
and application classes.

<h2> Types of Classloaders </h2>

1. **Bootstrap ClassLoader**: Loads core Java API classes (e.g., `java.lang` package).
    - **Example**: The `java.lang.String`
      class is loaded by the Bootstrap ClassLoader,
      which is part of the core Java library.
2. **Extension ClassLoader**: Loads classes from the `ext` directory.
    - **Example**: Classes located in the `$JAVA_HOME/lib/ext` directory,
      such as optional security packages, are loaded by the Extension ClassLoader.
3. **System/Application ClassLoader**: Loads classes defined by the `CLASSPATH`.
    - **Example**: Application-specific classes defined in
      the project’s classpath are loaded by the System ClassLoader.

<h2> Advantages </h2>

- **Flexibility**: Classes are loaded as needed, saving memory.
    - **Example**: Only classes that are actually used are loaded,
      which optimizes resource usage.
- **Security**: Different Classloaders provide separate namespaces,
  isolating classes.
    - **Example**: Applets loaded by different ClassLoaders
      cannot interfere with each other.
- **Extensibility**: New classes can be added without restarting the application.
    - **Example**: A plugin architecture can load plugins
      dynamically using custom ClassLoaders.

<h2> Disadvantages </h2>

- **Complexity**: Managing multiple Classloaders can be challenging.
    - **Example**: Debugging classloading issues such as
      `ClassNotFoundException` or `NoClassDefFoundError` can be
      difficult when multiple ClassLoaders are involved.
- **Performance Overhead**: Dynamic class loading
  can cause delays if not optimized.
    - **Example**: Loading classes over a network can introduce latency,
      affecting performance.

**[Read More on Classloaders](https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-5.html#jvms-5.3)**

</details>
<br>

[//]: # (What Are the Stages in the Lifecycle of a Class in Java?)
<details>
    <summary style="font-size: 25px;">
        <b>
         What Are the Stages in the Lifecycle of a Class in Java?
        </b>
    </summary>
<br>

The lifecycle of a class in Java consists of several steps:
loading, linking, initialization, usage, and unloading.
Understanding these stages helps in optimizing performance
and resource management.

- **Loading**: The class is loaded into JVM memory by a Classloader.
    - **Trigger**: Happens when a class is first needed.
    - **Process**: Loads binary data and creates a `Class` object.
    - **Example**: When the `main` method is invoked, the JVM loads the
      `Main` class using a ClassLoader.


- **Linking**:
    - **Verification**: Ensures the class file complies with JVM rules.
        - **Example**: The JVM checks bytecode for any security violations
          or inconsistencies.
    - **Preparation**: Allocates memory for class variables.
        - **Example**: Static variables are assigned default values
          during this phase.
    - **Resolution**: Resolves symbolic references.
        - **Example**: Resolving a reference to another class or method,
          such as linking `java.util.List` to `java.util.ArrayList`.


- **Initialization**: Initializes static fields and executes static blocks.
    - **Example**: Static initializers,
      such as `static { System.out.println("Initializing..."); }`,
      are executed during this phase.


- **Usage**: The class’s methods are executed and fields accessed.
    - **Example**: Instances of the class are created, and methods are invoked.


- **Unloading**: The class and its loader are garbage collected
  when no longer needed.
    - **Example**: Classes loaded by a custom ClassLoader
      are unloaded when the application
      no longer holds references to the ClassLoader.

**[More About Class Lifecycle](https://medium.com/@wakefulinsomnia/how-does-java-classloader-system-work-82eaf378f73b)**

</details>
<br>

[//]: # (What Are the Different Types of Classloaders in Java and What Is Their Role?)
<details>
    <summary style="font-size: 25px;">
        <b>
        What Are the Different Types of Classloaders in Java and What Is Their Role?
        </b>
    </summary>
<br>

- **Bootstrap ClassLoader**: Loads core Java APIs (e.g., `rt.jar`).
    - **Example**: Classes like `java.util.HashMap`
      are loaded by the Bootstrap ClassLoader.


- **Extension ClassLoader**: Loads classes from the `ext` directory.
    - **Example**: Loading cryptographic extensions from the `ext` directory.


- **System/Application ClassLoader**: Loads classes defined by the `CLASSPATH`.
    - **Example**: Loads application-specific classes defined
      in the `CLASSPATH` environment variable.


- **Custom ClassLoader**: Developers can extend the `ClassLoader`
  class to load classes from non-standard sources (e.g., network).
    - **Example**: A custom ClassLoader can load classes
      from an encrypted file or a remote server.

**[ClassLoader Types Documentation](https://www.baeldung.com/java-classloaders)**

</details>
<br>

[//]: # (How Does the Parent Delegation Model Work in Java Classloading?)
<details>
    <summary style="font-size: 25px;">
        <b>
        How Does the Parent Delegation Model Work in Java Classloading?
        </b>
    </summary>
<br>

The parent delegation model ensures that a child ClassLoader
always delegates the class loading request to its parent first.
This prevents loading the same class multiple times by different ClassLoaders,
thus maintaining consistency.

- **Process**: A ClassLoader first asks its parent to load a class.
  If the parent can't find it,
  then the current ClassLoader attempts to load the class.
    - **Example**: If the System ClassLoader is asked to load `java.lang.String`,
      it will delegate the request to the Bootstrap ClassLoader,
      which will load it if it hasn’t already.

**[Delegation Model Explained](https://www.javatpoint.com/delegation-event-model-in-java)**

</details>
<br>

[//]: # ( What Issues Can Occur When Two Classloaders Load the Same Class in Java?)
<details>
    <summary style="font-size: 25px;">
        <b>
         What Issues Can Occur When Two Classloaders Load the Same Class in Java?
        </b>
    </summary>
<br>

- **Class Identity**: Even if two ClassLoaders load a class with the same name,
  they are treated as distinct.
    - **Example**: Two plugins using different ClassLoaders
      may each load `com.example.MyClass`,
      but these classes will not be considered the same by the JVM.
- **Type Compatibility**: Instances of the same class loaded
  by different ClassLoaders are not compatible.
    - **Example**: Casting an object of `MyClass` loaded by one ClassLoader
      to `MyClass` loaded by another ClassLoader will throw `ClassCastException`.
- **Linkage Errors**: Can occur if classes loaded by different ClassLoaders
  reference each other unexpectedly.
    - **Example**: A `NoClassDefFoundError` may occur if a class loaded
      by one ClassLoader references a class that another ClassLoader fails to load.

[Understanding ClassLoader Issues](https://www.performetriks.com/post/understanding-the-performance-impact-of-java-class-loaders)

</details>
<br>

[//]: # (What Are Common Problems When Working with Java Classloaders?)
<details>
    <summary style="font-size: 25px;">
        <b>
        What Are Common Problems When Working with Java Classloaders?
        </b>
    </summary>
<br>

- **Class Not Found Errors**: These occur when the classloader cannot find
  a particular class.
    - **Example**: Trying to load a class that is not in the specified
      classpath results in `ClassNotFoundException`.


- **Linkage Errors**: These errors occur when a class depends on
  another class that has undergone incompatible changes.
    - **Example**: Removing or modifying a method signature
      can result in a `NoSuchMethodError`.


- **Memory Leaks**: Improper handling of ClassLoaders can lead to memory leaks.
    - **Example**: If a ClassLoader is not garbage collected
      due to lingering references,
      it can continue to hold large portions of memory.


- **Security Issues**: Loading classes from untrusted sources
  can expose an application to security risks.
    - **Example**: If a ClassLoader loads classes from a manipulated source,
      it could result in executing malicious code.

- **Version Conflicts**: When multiple versions of the same library are present,
  ClassLoaders may load the wrong version.
    - **Example**: A dependency loaded by one ClassLoader
      might conflict with another version loaded by a different ClassLoader,
      causing unexpected behavior.

</details>
<br>

[//]: # (How Does a Classloader Affect the Security of Java Applications?)
<details>
    <summary style="font-size: 25px;">
        <b>
        How Does a Classloader Affect the Security of Java Applications?
        </b>
    </summary>
<br>

- **Class Loading from Untrusted Sources**: ClassLoaders that load classes
  from untrusted sources can be manipulated to execute malicious code.
    - **Example**: A ClassLoader downloading classes over the network
      could load and execute compromised code if not properly verified.


- **Class Replacement Attacks**: If not secured, legitimate
  classes can be replaced with malicious versions.
    - **Example**: An attacker could replace `UserAuthentication` class
      with a compromised version that contains vulnerabilities.


- **Leaking Sensitive Information**: Improper use of ClassLoaders
  can lead to sensitive data being exposed.
    - **Example**: A ClassLoader that exposes internal methods
      to an untrusted environment could leak confidential information.


- **Memory Leaks and Resource Exhaustion**: Poor ClassLoader management
  can lead to resource exhaustion, potentially causing denial of service.
    - **Example**: A ClassLoader repeatedly loading classes
      without releasing them can consume all available memory.

</details>
<br>

[//]: # (How Is Memory Managed by Classloaders in Java?)
<details>
    <summary style="font-size: 25px;">
        <b>
        How Is Memory Managed by Classloaders in Java?
        </b>
    </summary>
<br>

- **Memory Allocation for Classes**: When a ClassLoader loads a class,
  it allocates memory for various components of the class, such as metadata,
  constant pool, and static fields.
    - **Example**: A class loaded by the Bootstrap ClassLoader
      will have its metadata stored in the Metaspace,
      while static fields are allocated memory during initialization.


- **Class Metadata**: Contains information about the class structure,
  including methods, fields, and constructors.
    - **Example**: The JVM uses Metaspace (in Java 8 and later)
      to store class metadata, which grows dynamically as more classes are loaded.


- **Runtime Constant Pool**: Stores literals and symbolic references,
  which are resolved during the linking phase.
    - **Example**: The string constants defined in a class
      are placed in the runtime constant pool.


- **Static Fields**: Memory for static fields is allocated
  when the class is initialized.
    - **Example**: Static fields of a utility class like `Math.PI`
      are initialized when the class is loaded.


- **Code**: Memory is also allocated for the bytecode of the class’s methods,
  which includes compiled native code if JIT compilation occurs.
    - **Example**: The bytecode for a method such as
      `public void calculate()` is stored in the JVM's method area.

</details>
<br>

[//]: # (What Happens If a Custom Classloader Reloads 
        an Already Loaded Class with Changes?)
<details>
    <summary style="font-size: 25px;">
        <b>
        What Happens If a Custom Classloader Reloads 
        an Already Loaded Class with Changes?
        </b>
    </summary>
<br>

When a custom ClassLoader attempts to load a class that it has already loaded,
it typically returns the already loaded class from its cache.

- **No Automatic Reload**: The custom ClassLoader will not automatically
  detect changes in the class file.
    - **Example**: If `MyClass.class` has been modified,
      the current instance of the ClassLoader will still return the original version.


- **Caching Behavior**: The ClassLoader maintains a cache of loaded classes.
    - **Example**: When `findClass()` is called again for the same class,
      it simply returns the cached `Class` object.


- **Solution**: To reload a modified class,
  a new instance of the ClassLoader must be created.
    - **Example**: Creating a new instance of `CustomClassLoader`
      allows loading the modified version of the class.

</details>
<br>

[//]: # (How Can a Custom Classloader Reload a Class with New Changes?)
<details>
    <summary style="font-size: 25px;">
        <b>
        How Can a Custom Classloader Reload a Class with New Changes?
        </b>
    </summary>
<br>

If you need to reload a class with the latest changes,
you must design your custom ClassLoader to support this functionality.

- **Discard the ClassLoader**: One common technique
  is to discard the entire ClassLoader that loaded the class
  and create a new instance of the ClassLoader.
    - **Example**: A new instance of `CustomClassLoader`
      can load the updated version of `MyClass`,
      ensuring that the new definition is used.

- **Versioning**: Implement a versioning system
  within your ClassLoader where each class is associated
  with a version identifier.
    - **Example**: Before loading a class,
      check if the version has been updated and reload if necessary.

[Java Class Reloading Techniques](https://dzone.com/articles/hot-class-reload-in-java)

</details>
<br>

----

<h1>Custom Classloader</h1>

----

[//]: # (How Can You Create a Custom ClassLoader in Java?)
<details>
    <summary style="font-size: 25px;">
        <b>
        How Can You Create a Custom ClassLoader in Java?
        </b>
    </summary>
<br>

1. **Extend ClassLoader**

   Start by creating a new class that extends the built-in `ClassLoader` class.
   This will allow you to customize the process of finding and loading classes.

2. **Override findClass**

   **The findClass method** is where you define how
   your class loader reads class data and
   converts it into a Class object.

   Typically, this involves reading a class file from a file system,
   a network, or other sources, and then calling
   defineClass to create a Class instance from the byte array of the class data.

   Example Code

    ```java
    import java.io.ByteArrayOutputStream;
    import java.io.File;
    import java.io.FileInputStream;
    import java.io.IOException;
    import java.io.InputStream;
    
    public class CustomClassLoader extends ClassLoader {
    
      private String pathToBin = "/path/to/classes/";
    
      @Override
      protected Class<?> findClass(String name) throws ClassNotFoundException {
        try {
          byte[] classData = loadClassData(name);
          return defineClass(name, classData, 0, classData.length);
        } catch (IOException e) {
          throw new ClassNotFoundException("Could not load class " + name, e);
        }
      }
    
      private byte[] loadClassData(String name) throws IOException {
        String filePath = pathToBin + name.replace('.', File.separatorChar) + ".class";
        try (InputStream inputStream = new FileInputStream(filePath);
             ByteArrayOutputStream byteStream = new ByteArrayOutputStream()) {
          int nextValue;
          while ((nextValue = inputStream.read()) != -1) {
            byteStream.write(nextValue);
          }
          return byteStream.toByteArray();
        }
      }
    
      public static class Main {
        public static void main(String[] args) {
          CustomClassLoader classLoader = new CustomClassLoader();
          try {
            Class<?> loadedClass = classLoader.loadClass("com.example.MyClass");
            Object instance = loadedClass.getDeclaredConstructor().newInstance();
            System.out.println("Loaded class: " + loadedClass.getName());
          } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | NoSuchMethodException | InvocationTargetException e) {
            e.printStackTrace();
          }
        }
      }
    }
    ```

3. **Use Your ClassLoader**

   ```java
    public static void main(String[] args) {
      CustomClassLoader classLoader = new CustomClassLoader(ClassLoader.getSystemClassLoader());
      try {
        Class<?> myClass = classLoader.loadClass("com.example.MyClass");
        System.out.println("Loaded: " + myClass.getName());
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      }
    }
   ```

Custom class loaders are particularly useful in hot deployment,
where applications or modules are dynamically updated without restarting the JVM.

Custom class loaders are frequently used in environments
like application servers (e.g., Tomcat)
or IDEs to manage modules in isolation.

[Java Official Documentation on ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html)

[Custom ClassLoader Tutorial](https://www.baeldung.com/java-classloaders)

</details>
<br>

[//]: # (In What Scenarios Is a Custom Classloader Essential?)
<details>
    <summary style="font-size: 25px;">
        <b>
        In What Scenarios Is a Custom Classloader Essential?
        </b>
    </summary>
<br>

- **Modular Applications**

  In large-scale applications,
  especially those that need to load modules or plugins dynamically,
  custom class loaders can be used to load different modules without
  interfering with each other.
  This is common in enterprise applications, IDEs (like Eclipse),
  and application servers (like Tomcat or JBoss)
  where different applications or modules
  need to run in isolation within the same JVM.


- **Hot Deployment**

  Custom class loaders enable hot deployment,
  where new versions of classes or modules can be loaded
  into a running application without needing to restart.
  This is particularly useful for development environments
  and for applications requiring high availability.


- **Security**

  Custom class loaders enhance security by controlling
  what classes are loaded and from where.
  For example, a custom class loader can prevent
  loading classes from untrusted sources or enforce additional
  checks before a class is loaded, such as verifying digital signatures.


- **Loading Classes from Non-Standard Sources**

  If classes need to be loaded from non-standard sources like databases,
  over a network, or from encrypted storage,
  custom class loaders can be designed to manage these specific cases,
  making them invaluable in scenarios
  that require unconventional loading techniques.


- **Isolation in Testing**

Custom class loaders are also useful for isolating test environments.
For example, multiple versions of the same library
can be loaded in isolated class loaders to perform compatibility tests.


- **Plugin Systems**

Plugin-based software, such as IDEs or browsers,
often use custom class loaders to load plugins dynamically,
allowing the application to extend its functionality on the fly.


[Java World: Understanding Java Class Loaders](https://www.infoworld.com/article/2338644/all-about-java-class-loaders.html#:~:text=Java%20class%20loaders%20keep%20different,load%20shared%20libraries%20without%20conflicts.)

[Dynamic Module Loading in Java](https://www.baeldung.com/java-modularity)

</details>
<br>

[//]: # (How Is Security Managed With Custom Classloaders?)
<details>
    <summary style="font-size: 25px;">
        <b>
        How Is Security Managed With Custom Classloaders?
        </b>
    </summary>
<br>

- **Controlling Class Loading Sources**

  Custom class loaders can restrict where classes are loaded from,
  which is crucial for preventing unauthorized code execution.


- **Class Bytecode Verification**

  Before a class is defined using defineClass,
  the bytecode can be verified to ensure it doesn't contain
  potentially harmful operations.
  This can involve checking for compliance with
  Java language specifications or scanning for known vulnerabilities
  or malicious patterns.


- **Security Policies and Permissions**

  Java’s security manager and permission model can be
  integrated with custom class loaders to enforce security policies
  at the class loading level.
  Custom class loaders can check security permissions before loading
  a class, ensuring that the code adheres to the security constraints
  defined by the application’s security policy.


- **Encryption and Decryption**

  In sensitive applications, classes might be stored in an encrypted
  format to protect intellectual property or sensitive logic.
  Custom class loaders can be used to decrypt class data on-the-fly
  during loading, ensuring that the class files residing
  on disk remain encrypted and protected from unauthorized access.


- **Auditing and Logging**

  Custom class loaders can implement detailed auditing and logging
  of class loading activities, which is useful
  for security monitoring and forensic analysis.
  This can help in detecting unusual or unauthorized
  class loading patterns that might indicate a security breach.


- **Resource Isolation**

  By managing how resources are loaded
  (e.g., configuration files, libraries),
  custom class loaders can prevent unauthorized access
  to critical resources, ensuring that loaded classes
  cannot access or alter resources outside their designated scope.

A simple example showing how a custom class loader could verify permissions:

```java
import java.security.Permission;

public class SecureClassLoader extends ClassLoader {

    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        // Check permission before loading
        SecurityManager security = System.getSecurityManager();
        if (security != null) {
            security.checkPermission(new RuntimePermission("loadClass." + name));
        }
        // Continue loading class
        return super.findClass(name);
    }
}
```

[Java Security Manager and Policy](https://docs.oracle.com/javase/8/docs/technotes/guides/security/PolicyFiles.html)

[Protecting Against Unauthorized Class Loading](https://www.infoworld.com/article/2168816/java-security-how-to-install-the-security-manager-and-customize-your-security-policy.html#:~:text=A%20security%20manager%20allows%20you,something%20that%20potentially%20is%20unsafe.)

</details>
<br>

[//]: # (How Can Classloaders Be Used to Isolate Applications in Java?)
<details>
    <summary style="font-size: 25px;">
        <b>
        How Can ClassLoaders Be Used to Isolate Applications in Java?
        </b>
    </summary>
<br>

To isolate applications in Java, you can use separate instances 
of custom class loaders for each application. 
This isolates the classes used by each application, 
preventing them from interacting directly, 
thus avoiding conflicts and maintaining modularity.

For instance, in an enterprise environment where multiple applications
are deployed on the same JVM (such as within an application server), 
custom class loaders ensure that:

- Each application’s dependencies are isolated.
- Different versions of a library can coexist without class conflicts.
- The scope of each application remains independent, reducing unintended interference.

Using a custom class loader for each application can look like this:

```java
public class ApplicationIsolator {
    public static void main(String[] args) {
        ClassLoader app1Loader = new CustomClassLoader();
        ClassLoader app2Loader = new CustomClassLoader();

        try {
            Class<?> app1Class = app1Loader.loadClass("com.example.App1Main");
            Class<?> app2Class = app2Loader.loadClass("com.example.App2Main");

            // Create isolated instances
            Object app1Instance = app1Class.getDeclaredConstructor().newInstance();
            Object app2Instance = app2Class.getDeclaredConstructor().newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

- [Isolating Java Applications Using Custom ClassLoaders](https://www.alibabacloud.com/blog/implementing-java-class-isolation-loading_597343)

</details>
<br>