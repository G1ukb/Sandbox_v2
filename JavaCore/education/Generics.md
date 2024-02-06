<h1>Generics</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

* Can you explain what Java Generics are and why they are used?
* How does type erasure work in Java Generics?
* What is the difference between a List<Object> and a List<?>?
* Can you explain the PECS (Producer Extends, Consumer Super) principle?
* How would you implement a generic method in Java?
* What is a bounded type parameter and how is it used in Java Generics?
* Can you give an example of a generic class and explain its components?
* How do Java Generics improve type safety?
* What is a wildcard in Java Generics and when would you use one?
* Can you explain type inference in the context of Java Generics?
* How do you handle exceptions when working with Java Generics?
* What is reification and how does it relate to Java Generics?
* Can you explain the concept of type variance in Java Generics?
* How would you design a data structure using Java Generics?
* What are the limitations of Java Generics?
* How do Java Generics interact with Java’s type system?
* Can you explain the difference between raw types and parameterized types in Java Generics?
* How would you use Java Generics to enforce rules at compile time?
* Can you give an example of how Java Generics can be used with Java Streams?
* How have Java Generics evolved in recent versions of Java?


[//]: # (What is type erasure and how does it work)

<details>
    <summary>
        <b><big><big>
            What is type erasure and how does it work
         </big></big></b>
     </summary>

When writing code, we specify generics of various kinds in order to
make our classes more scalable

And in order for this mechanism to work correctly from the point of view of compilation.
The compiler converts the generic type to an object. This is called type erasure.

    How it works
    public static <E> boolean containsElement(E [] elements, E element){
    after compilation it looks like
    public static boolean containsElement(Object [] elements, Object element){

</details>
<br>

[//]: # (What is a bridge method)

<details>
    <summary>
        <b><big><big>
            What is the bridge method
         </big></big></b>
     </summary>

The hidden mechanism of the Java compiler, in which he himself tries to exclude
type substitution error
And for this it generates an additional method for working with wildcard methods

    Example:
    public class MyComparator implements Comparator<Integer> {
    public int compare(Integer a, Integer b) {

    The comparator is explicitly typed, so comparing two Object objects will not be correct

.

    So the compiler will create a bridge method to avoid the problem:

    public class MyComparator implements Comparator<Integer> {
    public int compare(Integer a, Integer b) {
    
    //THIS is a "bridge method"
    public int compare(Object a, Object b) {
    return compare((Integer)a, (Integer)b);

</details>
<br>
