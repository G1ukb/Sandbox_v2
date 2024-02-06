<h1>Collections</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>


![img](https://data-flair.training/blogs/wp-content/uploads/sites/2/2018/03/hierarchy-of-collection-framework-in-java.webp)

[//]: # (Explore the basic principle of basic collections)

<details>
    <summary>
        <b><big><big>
            Reveal the basic principle of how basic collections work
         </big></big></b>
     </summary>

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
    <summary>
        <b><big><big>
            В какой момент, какую использовать
         </big></big></b>
     </summary>

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
    <summary>
        <b><big><big>
            Collections
         </big></big></b>
     </summary>

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

