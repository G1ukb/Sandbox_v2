package algorithm;

import algorithm.supportType.Graph;

import java.util.Stack;

public class TopologicalSort {

//    Topological sorting for Directed Acyclic Graph (DAG)
//    is a linear ordering of vertices such that for every directed-edge uv,
//    vertex u comes before v in the ordering.
//    Topological Sorting for a graph is not possible if the graph is not a DAG
//
//    Topological Sort is mainly used for scheduling jobs from the given dependencies among jobs

    void topologicalSortUtil(int v, boolean[] visited, Stack<Integer> stack, Graph graph) {
        visited[v] = true;
        for (Integer integer : graph.getNodeList().get(v)) {
            if (!visited[integer])
                topologicalSortUtil(integer, visited, stack, graph);
        }
        stack.push(v);
    }

    public void topologicalSort(Graph graph) {
        Stack<Integer> stack = new Stack<>();
        boolean[] visited = new boolean[graph.getNodeList().size()];

        for (int i = 0; i < graph.getNodeList().size(); i++)
            if (!visited[i])
                topologicalSortUtil(i, visited, stack, graph);

        while (!stack.empty())
            anyBusinessLogic(stack.pop());
    }

    private void anyBusinessLogic(int value) {
        System.out.print(value + " ");
    }

    public static void main(String[] args) {
        TopologicalSort topologicalSort = new TopologicalSort();
        topologicalSort.topologicalSort(new Graph());
    }
}
