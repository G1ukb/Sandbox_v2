<h1>Collections</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

![img](https://data-flair.training/blogs/wp-content/uploads/sites/2/2018/03/hierarchy-of-collection-framework-in-java.webp)

[//]: # (Can you explain what makes a good key for a HashMap in Java?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain what makes a good key for a HashMap in Java?
        </b>
    </summary>
<br>

In Java, a `HashMap` is a data structure that uses key-value pairs,
where each key is unique.
When choosing a key for a `HashMap`,
there are several important considerations to ensure that
the `HashMap` works correctly and efficiently:

1. **Immutability**: The key should be immutable,
   meaning its state should not change after it's created.
   If a key changes after it's been added to the `HashMap`,
   it can lead to unexpected behavior because the `HashMap`
   may not be able to find the key anymore.

2. **Consistent `equals()` and `hashCode()`**:
   The key's class should override both the `equals()` and `hashCode()` methods,
   and these methods should be consistent with each other.
   That is, if two keys are equal according to the `equals()` method,
   they should also have the same hash code.
   This is crucial for the `HashMap` to correctly store and retrieve values.

3. **Efficient `hashCode()`**: The `hashCode()` method should be efficient
   to compute and should distribute keys evenly across hash values.
   This helps to ensure that the `HashMap` has a good spread of
   keys and performs well.

4. **Appropriate `equals()`**: The `equals()` method should correctly
   determine whether two keys are equal.
   This is used by the `HashMap` to handle hash collisions
   when two different keys have the same hash code.

</details>
<br>

[//]: # (How does the hashCode method contribute to a good HashMap key?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How does the hashCode() method contribute to a good HashMap key?
        </b>
    </summary>
<br>

The `hashCode()` method is crucial for the performance of a `HashMap` in Java.
When you put an entry into a `HashMap`,
it uses the key's `hashCode()` to determine bucket to store the entry
in its underlying array.

Here's how it works:
1. **Determining the storage location**:
   The `HashMap` uses the key's `hashCode()`
   to compute an index into its underlying array
   where it plans to store the entry.

   If the `hashCode()` method is implemented well,
   the computed indices will be evenly distributed across the array,
   leading to a good spread of entries and efficient use of space.

2. **Handling collisions**: Sometimes, two different keys may have the same hash
   code, leading to a "collision".
   When a collision occurs, the `HashMap` stores the entries
   in a linked list or a tree (for large lists) at the computed index.
   It then uses the `equals()` method to distinguish between the keys in the list or tree when you try to retrieve a value.

If the `hashCode()` method is not implemented well
and many keys end up with the same hash code, it can lead to poor performance.
This is because the `HashMap` would end up with many collisions,
causing the linked lists or trees at each index to become long,
which slows down access times.

</details>
<br>

[//]: # (Can you explain the role of the equals 
         method in the context of a HashMap key?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the role of the equals() 
            method in the context of a HashMap key?
        </b>
    </summary>
<br>

equals() method is used in the context of a HashMap key to handle collisions 
and to find the correct entry when multiple entries have the same hash code.

</details>
<br>

[//]: # (How does the choice of a HashMap key 
        affect the performance of the HashMap?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How does the choice of a HashMap key 
            affect the performance of the HashMap?
        </b>
    </summary>
<br>

This can greatly slow down the work of all hash maps. 
Since the choice of the key (its hash code) determines which bucket 
the data will go into, 
if they are sorted through each time like a linked list, 
this will greatly harm the performance

</details>
<br>







[//]: # (Explore the basic principle of basic collections)

<details>
    <summary style="font-size: 25px;">
        <b>
            Reveal the basic principle of how basic collections work
        </b>
    </summary>
<br>

* **List**
* **ArrayList** - Classic storage model where memory cells are allocated
* **LinkedList** - Storage model where everything is stored as a sheet which
  has links to the previous and next elements

* **Queue** (represented by a linked list)
* **PriorityQueue** - PriorityQueue is based on a bunch of priorities.
  The elements of the priority queue are ordered according to
  natural order or comparator,
  provided during queuing
* **ArrayDeque** is a special type of array that grows and allows users to
  add or remove elements from both sides of the queue.

* **Set** (represented by a map whose keys will be set elements)
* **HashSet** - store items in buckets using hash mechanism
* **LinkedHashSet** - stores elements in buckets using hash mechanism,
  while maintaining the insertion order of the elements.
* **TreeSet** - sorted storage of unique elements, redblack tree is used
  for storage, where nodes are distributed left and right depending on their own order

* **Map** (separately because they are not iterable in the usual sense of collections)
* **HashMap** - classic bucket key system, storage in a key value pack
* **LinkedHashMap** - classic bucket key system + order preservation
* **HashTable** - thread safe version of hashmap, works the same
* **TreeMap** - works like a set, storing keys in a red-black tree or self-written
  comparator

</details>
<br>

<details>
    <summary style="font-size: 25px;">
        <b>
            В какой момент, какую использовать
        </b>
    </summary>
<br>

![](https://i.stack.imgur.com/aSDsG.png)

* **List**
* **ArrayList** - когда нужен быстрый поиск по индексу, но мы готовы потерпеть удаление вставку
* **LinkedList** - когда нужна быстрая вставка и удаление, но мы готовы терпеть поиск по индексу


* **Queue** (представлено связным списком) - когда важен порядок вложенности и выдачи
* **PriorityQueue** - когда нужен порядок зависимый от приоритета
* **ArrayDeque** - когда нужен порядок вставки выдачи, но при этом мы хотим получать
  как первый так и последний элемент


* **Set** - когда нужна уникальность
* **HashSet** - когда нужна уникальность и быстрота
* **LinkedHashSet** - когда нужна уникальность и сохранение порядка вставки
* **TreeSet** - когда нужна уникальность и фильтрация для оптимизации
  доступа, удаления, вставки, все работает как Log(n)


* **Map** - когда нужна пара ключ значение
* **HashMap** - когда нужна быстрота
* **LinkedHashMap** - когда нужен порядок вставки
* **HashTable** - когда нужна быстрота и потокобезопасность
* **TreeMap** - когда нужна сортировка по ключам

</details>
<br>

<details>
    <summary style="font-size: 25px;">
        <b>
            Collections
        </b>
    </summary>
<br>

Core collections other than HashTable are non-thread safe, which means
what i.e. when multiple parallel threads save and retrieve
elements from these collections, they can corrupt the data.

2 main synchronization guarantees

1. In the **Collections** package
* Collections.synchronizedList(List)
* Collections.synchronizedSet(Set)
* Collections.synchronizedMap(Map)

**Synchronization in this case is provided by internal blocking,
this means that the collection becomes a monitor, it allows only one
stream, but still saved for reading.**

2. In the **util.concurrent** package (for almost every single case, but the most basic in my opinion)
* ConcurrentHashMap
  **(stores values in buckets in the same way, but the monitor only locks a separate bucket
  for writing, not locking the rest, thereby maintaining thread safety)**
* CopyOnWriteArrayList
  **(get value operations are applied to the original collection when operations
  modifications are carried out on a copy of the existing array, blocking the main one for modification
  after the result overwrites the base, and the next operation repeats the action)**

</details>
<br>

