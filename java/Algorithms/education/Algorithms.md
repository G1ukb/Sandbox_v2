<h1>Algorithm</h1> 
<h4>

[Back to menu](../Menu.md)

</h4>

- Is it a graph?
    - |Yes| Is it a binary or graph tree?
        - |Yes| [DFS](../src/main/java/algorithm/DFS.java)
        - |No| Is a problem related to directed or acyclic graphs?
            - |Yes| [TopologicalSort](../src/main/java/algorithm/TopologicalSort.java)
            - |No| Is the problem related to the shortest path?
                - |Yes| Is the graph Weighted? Cost between nodes
                    - |Yes| [Dijkstra](../src/main/java/algorithm/Dijkstra.java)
                    - |No| [BFS](../src/main/java/algorithm/BFS.java)
                - |No| Does the problem involve connectivity?
                    - |Yes| [Disjoint](../src/main/java/algorithm/Disjoint.java)
                    - |No| Does the problem have small constraints?
                        - |No| [BFS](../src/main/java/algorithm/BFS.java)
                        - |Yes| [DFS](../src/main/java/algorithm/DFS.java)/Backtracking

    - |No| Need to solve for the smallest / largest?
        - |Yes| Heap/Sorting
        - |No| Involves Linked Lists?
            - |Yes| TwoPointers
            - |No| Small constraints bounds?
                - |Yes| Is brute force fast enough?
                    - |Yes| Brute force/ Backtracking
                    - |No| Dynamic Programming
                - |No| isAboutSub-arrays
                    - |Yes| Deals with sums or additive?
                        - |Yes| Prefix Sums
                        - |No| Sliding Window
                    - |No| Calculating max/min of something?
                        - |Yes| Monotonic condition?
                            - |Yes| Binary Search
                            - |No| Can be split into problems?
                                - |Yes| Dynamic Programming
                                - |No| Greedy Algorithms
                        - |No| Asking for a number of ways? Combinations
                            - |No| Multiple Sequences?
                                - |Yes| Monotonic Conditions?
                                    - |No| Can be split into problems?
                                        - |Yes| Dynamic Programming
                                        - |No| Greedy Algorithms
                                    - |Yes| Two Pointers
                                - |No| Two Pointers

<h2>

[Link to original chart](https://algo.monster/flowchart)

</h2>
 
