<h1>Generics</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

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
