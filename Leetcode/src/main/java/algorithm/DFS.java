package algorithm;

import algorithm.supportType.BinaryTree;
import algorithm.supportType.Graph;
import algorithm.supportType.Node;

public class DFS {

    /*
    * Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures.
    *
    * The algorithm starts at the root (in case of a graph, an arbitrary node)
    * and explores as far as possible along each branch before backtracking.
    *
    * So the basic idea is to start from the root or any arbitrary node
    * and mark the node and move to the adjacent unmarked node
    * and continue this loop until there is no unmarked adjacent node
    *
    * Here are some common use cases:
    * - To find connected components of a graph.
    * - To detect a cycle in a Graph. DFS for a connected graph produces a tree.
    * - Path Finding: DFS can be used to find a path between two nodes in a graph.
    * - To test if a graph is bipartite.
    * - Finding Strongly Connected Components of a graph:
    * */

    private void dfsRecursiveForBinaryTree(Node node) {
        if (node == null)
            return;
        anyBusinessLogic(node.getNodeVal());

        if (node.hasLeft()) {
            System.out.println("Going left");
            dfsRecursiveForBinaryTree(node.getLeft());
        }
        if (node.hasRight()) {
            System.out.println("Going right");
            dfsRecursiveForBinaryTree(node.getRight());
        }
    }

    private void dfsRecursiveForGraph(int current, boolean[] isVisited, Graph graph) {
        isVisited[current] = true;
        anyBusinessLogic(current);
        for (int dest : graph.getNodeList().get(current)) {
            if (!isVisited[dest])
                dfsRecursiveForGraph(dest, isVisited, graph);
        }
    }

    private void anyBusinessLogic(int vertex) {
        System.out.println("Visited vertex: " + vertex);
    }

    public static void main(String[] args) {
        DFS dfs = new DFS();
        dfs.dfsRecursiveForBinaryTree(new BinaryTree(10).getRootNode());
        dfs.dfsRecursiveForGraph(0, new boolean[5], new Graph(5));
    }
}
