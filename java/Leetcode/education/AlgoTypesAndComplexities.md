<h1>Algorithm types and complexities</h1> 
<h4>

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What are the different types of sorting algorithms and their complexities?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the different types of sorting algorithms
            and their complexities?
        </b>
    </summary>
<br>

There are many different types of sorting algorithms, each with its
own strengths and weaknesses. Here is a summary of
some of the most common sorting algorithms and their complexities:

| Algorithm      | Time Complexity | Space Complexity | Datasets                 |
|----------------|-----------------|------------------|--------------------------|
| Bubble Sort    | O(n^2)          | O(1)             | small datasets           |
| Selection Sort | O(n^2)          | O(1)             | small datasets           |
| Insertion Sort | O(n^2)          | O(1)             | small / already sorted   |
| Merge Sort     | O(n log n)      | O(n)             | large datasets           |
| Quick Sort     | O(n log n)      | O(log n)         | large datasets           |
| Heap Sort      | O(n log n)      | O(1)             | limited amount of memory |
| Radix Sort     | O(nk)           | O(n + k)         | known range of values    |
| Counting Sort  | O(n + k)        | O(k)             | known range of values    |

* **O(n^2):** Quadratic time complexity, meaning the time it takes to
  sort the list grows quadratically with the size of the list.


* **O(n log n):** Logarithmic time complexity, meaning the time
  it takes to sort the list grows logarithmically with the size of the list.


* **O(nk):** Linear time complexity with a constant factor k,
  meaning the time it takes to sort the list grows linearly
  with the size of the list and a constant factor k.


* **O(n + k):** Linear time complexity with a constant factor k,
  meaning the time it takes to sort the list grows linearly
  with the size of the list and a constant factor k.


* **O(1):** Constant space complexity, meaning the amount
  of additional space required to sort the list is constant,
  regardless of the size of the list.


* **O(n):** Linear space complexity, meaning the amount
  of additional space required to sort the list grows linearly with
  the size of the list.


* **O(log n):** Logarithmic space complexity,
  meaning the amount of additional space required to sort the list grows
  logarithmically with the size of the list.


* **O(n + k):** Linear space complexity with a constant factor k,
  meaning the amount of additional space required to sort
  the list grows linearly with the size of the list and a constant factor k.

</details>
<br>

[//]: # (What are the different types of 
        searching algorithms and their complexities?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the different types of 
            searching algorithms and their complexities?
        </b>
    </summary>
<br>

There are many different types of searching algorithms,
each with its own strengths and weaknesses. Here is a summary of
some of the most common searching algorithms and their complexities:

| Algorithm         | Time Complexity | Space Complexity | Situations           |
|-------------------|-----------------|------------------|----------------------|
| Linear Search     | O(n)            | O(1)             | unsorted data        |
| Binary Search     | O(log n)        | O(1)             | sorted data          |
| Hash Table Lookup | O(1)            | O(n)             | accessed by key      |
| Trie              | O(m)            | O(m)             | tree-like structure  |  
| A* Search         | O(b^d)          | O(b^d)           | pathfinding problems |

* **O(n):** Linear time complexity, meaning the time it takes to
  search the data structure grows linearly with the size
  of the data structure.


* O(log n):**** Logarithmic time complexity, meaning the time it
  takes to search the data structure grows
  logarithmically with the size of the data structure.


* **O(1):** Constant time complexity, meaning the time it takes to
  search the data structure is constant,
  regardless of the size of the data structure.


* **O(m):** Linear time complexity with a constant factor m,
  meaning the time it takes to search the data structure grows
  linearly with the length of the search key and a constant factor m.


* **O(b^d):** Exponential time complexity with a constant factor b and a
  constant factor d, meaning the time it takes to
  search the data structure grows exponentially with the branching
  factor b and the depth d of the search space.

</details>
<br>