<h1>Nested Classes</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Nested class types)

<br>
<details>
    <summary style="font-size: 25px;">
        <b>
         Nested class types
        </b>
    </summary>
<br>

* **Static nested** - static logic that does not depend on object initialization
* **Local internal** - logic that depends on object initialization.
  By optimizing logical grouping and expanding encapsulation.
* **Anonymous internal** - simplified form without class creation and initialization

Why do we need it:

* Method of logical grouping so as not to litter the package,
  a way to warn the programmer that a class is being used/owned by another
* Increased encapsulation.
* As a result, we can get more readable and cleaner code.

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--A1l3RUvp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.mednikov.net/wp- content/uploads/2019/10/nested-classes-overview.png)
</details>
<br>

[//]: # (When to use which type of class)

<details>
    <summary style="font-size: 25px;">
        <b>
          When to use which type of class
        </b>
    </summary>
<br>

**Local class:**

+ introduction of a new named data type
+ logical grouping

**Anonymous class:** if you need to use methods or initialize
fields and at the same time the performed action serves only 1 class
and making it even local is considered expensive

**Nested class:** use this if your requirements are similar
local class, you want to make that type more accessible
and you need access to local variables or parameters of the parent's class.

**Static nested:** for static fields of the base static class

+ the ability to expand encapsulation for other system objects

[Oracle link](https://docs.oracle.com/javase/tutorial/java/javaOO/whentouse.html)
</details>
<br>

