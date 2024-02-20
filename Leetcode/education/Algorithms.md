<h1>Algorithm</h1> 
<h4>

[Back to menu](..%2FMenu.md)

</h4>

- Is it a graph?
    - |Yes| Is it a binary or graph tree?
        - |Yes| [DFS](..%2Fsrc%2Fmain%2Fjava%2Falgorithm%2FDFS.java)
        - |No| Is a problem related to directed or acyclic graphs?
            - |Yes| [TopologicalSort](..%2Fsrc%2Fmain%2Fjava%2Falgorithm%2FTopologicalSort.java)
            - |No| Is the problem related to the shortest path?
                - |Yes| Is the graph Weighted? Cost between nodes
                    - |Yes| [Dijkstra](..%2Fsrc%2Fmain%2Fjava%2Falgorithm%2FDijkstra.java)
                    - |No| [BFS](..%2Fsrc%2Fmain%2Fjava%2Falgorithm%2FBFS.java)
                - |No| Does the problem involve connectivity?
                    - |Yes| Disjoint Set Union
                    - |No| Does the problem have small constraints?
                        - |No| [BFS](..%2Fsrc%2Fmain%2Fjava%2Falgorithm%2FBFS.java)
                        - |Yes| [DFS](..%2Fsrc%2Fmain%2Fjava%2Falgorithm%2FDFS.java)/Backtracking

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
 
