<h1>Algorithm</h1> 
<h4>

[Back to menu](..%2FMenu.md)

</h4>

```mermaid
flowchart TD
    isGraph[Is it a graph?] -->|Yes| IsTree
    IsTree -->|Yes| DFS
    IsTree -->|No| isAcyclicGraphs
    isAcyclicGraphs -->|Yes| TopologicalSort
    isAcyclicGraphs -->|No| isShortestPathProblem
    isShortestPathProblem -->|Yes| isWeighed
    isWeighed -->|Yes| Dijkstra[Dijkstra's Algorithm]
    isWeighed -->|No| BFS
    isShortestPathProblem -->|No| isConnectivity
    isConnectivity -->|Yes| Disjoint[Disjoint Set Union]
    isConnectivity -->|No| isBruteForce
    isBruteForce -->|No| BFS
    isBruteForce -->|Yes| DFS/Backtracking
    IsTree[Is it a tree?]

isAcyclicGraphs[Is problem related to 
directed or acyclic graphs?]

isShortestPathProblem[Is the problem related 
to shortest path?]

isWeighed[Is the graph Weighted? 
Cost between nodes]

isConnectivity[Does the problem 
involve connectivity?]

isBruteForce[Does the problem have 
small constraints?]
```

```mermaid
flowchart TD
    isSmallest -->|Yes| Heap/Sorting
    isSmallest -->|No| isLinkedList
    isLinkedList -->|Yes| TwoPointers
    isLinkedList -->|No| isSmallConstraints
    isSmallConstraints -->|Yes| isBruteForceEnough
    isBruteForceEnough -->|Yes| Brute[Brute force/ Backtracking]
    isBruteForceEnough -->|No| Dynamic[Dynamic Programming]
    isSmallConstraints -->|No| isAboutSub-arrays
    isAboutSub-arrays -->|Yes| dealsWithSumsOrAdditive
    dealsWithSumsOrAdditive -->|Yes| Prefix[Prefix Sums]
    dealsWithSumsOrAdditive -->|No| Sliding[Sliding Window]
    isAboutSub-arrays -->|No| calculating
    calculating -->|Yes| isMonotonic
    isMonotonic -->|Yes| Binary[Binary Search]
    isMonotonic -->|No| subProblems
    subProblems[Can be split into sub problems?]
    subProblems -->|Yes| DynamicProgramming[Dynamic Programming]
    subProblems -->|No| greedy[Greedy Algorithms]
    calculating -->|No| numberOfWays
    numberOfWays -->|Yes| isBruteForceEnough
    numberOfWays -->|No| MultipleSequences?
    MultipleSequences? -->|Yes| isMonotonicConditions[Monotonic Conditions?]
    isMonotonicConditions -->|No| subProblems
    isMonotonicConditions -->|Yes| TwoPointers
    MultipleSequences? -->|No| indices
    indices[Find or enumerate indices?]
    indices -->|Yes| isMonotonicCondition
    isMonotonicCondition[Monotonic Condition?]
    isMonotonicCondition -->|Yes| TwoPointers
    indices -->|No| O1[O1 memory required?]
    O1 -->|Yes| isMonotonicCondition

isSmallest[Need to solve for 
kth smallest/largest?]

isLinkedList[Involves Linked Lists?]

isSmallConstraints[Small constraints bounds?]

isBruteForceEnough[Is brute force fast enough?
On! N<=20 On^2]

dealsWithSumsOrAdditive[Deals with sums or additive?]

calculating[Calculating max/min of something?]

isMonotonic[Monotonic condition?]

numberOfWays[Asking for number of ways?
Combinations]
```

<h2>

[Link to original chart](https://algo.monster/flowchart)

Topic list:
* [DFS](..%2Fsrc%2Fmain%2Fjava%2Falgorithm%2FDFS.java)
  
</h2>
 
