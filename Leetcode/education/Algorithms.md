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
    isGraph[Is it a graph?] -->|No| isSmallest
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
    IsTree[Is it a tree?
Maximum Depth of Binary Tree
Minimum Height Trees
Subtree of Another Tree]

isAcyclicGraphs[Is problem related to directed or acyclic graphs?
Course Schedule
Network Delay Time
All Ancestors of a Node in a Directed Acyclic Graph
Alien Dictionary]

isShortestPathProblem[Is the problem related to shortest path?
Shortest Path in Binary Matrix
Cheapest Flight Within K Stops]

isWeighed[Is the graph Weighted? Cost between nodes
Minimum Cost to Reach Destination in Time
Path with Maximum Probability]

isConnectivity[Does the problem involve connectivity
Accounts Merge
Redundant Connection
Number of Operations to Make Network Connected]

isBruteForce[Does the problem have small constraints?
Word Search
All Paths From Source to target
Couple Holding Hands]

isSmallest[Need to solve for kth smallest/largest?
Top K Frequent Elements
Kth Smallest Element in a Sorted Matrix
Top K Frequent Words
Find K Closest Elements]

isLinkedList[Involves Linked Lists?
Merge Two Sorted Lists
Odd Even Linked List
Partition List
Remove Duplicates from Sorted List]

isSmallConstraints[Small constraints bounds?
Minimum Falling Path Sum
Unique Paths 1 <= m n <= 100
N-Queens 1 <= n <= 9
Count Square 1 <= arr.length <= 300]

isBruteForceEnough[Is brute force fast enough?
On! N<=20 On^2]

dealsWithSumsOrAdditive[Deals with sums or additive
Max Sum of Rectangle No Larger Than K
Continuous Sub-array Sum
Sub-array Sum Equals K]

calculating[Calculating max/min of something?
Minimum Path Sum
Maximize Sum Of Array
Maximum Length of Repeated Sub-array]

isMonotonic[Monotonic condition?
non-increasing or entirely non-decreasing
Find Minimum in Rotated Sorted Array]

numberOfWays[Asking for number of ways?
Combinations]
```
<h2>

[Link to original chart](https://algo.monster/flowchart)

Topic list:
* [DFS](..%2Fsrc%2Fmain%2Fjava%2Falgorithm%2FDFS.java)
  
</h2>
 
