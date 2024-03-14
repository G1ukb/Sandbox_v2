package algorithm;

import algorithm.supportType.Graph;

import java.util.LinkedList;

public class BFS {

    void bfsAlgo(Graph graph, int startPoint) {
        boolean[] visited = new boolean[graph.getNodeList().size()];
        LinkedList<Integer> queue = new LinkedList<>();

        visited[startPoint] = true;
        queue.add(startPoint);

        while (!queue.isEmpty()) {
            startPoint = queue.poll();
            System.out.print(startPoint + " ");

            for (int n : graph.getNodeList().get(startPoint)) {
                if (!visited[n]) {
                    visited[n] = true;
                    queue.add(n);
                }
            }
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph();
        BFS bfs = new BFS();
        bfs.bfsAlgo(graph, 0);
    }

}
