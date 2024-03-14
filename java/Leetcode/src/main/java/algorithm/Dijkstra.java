package algorithm;

import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Dijkstra {

    // Dijkstra's algorithm is a graph search algorithm
    // that solves the single-source shortest path problem
    // for a graph with non-negative-edge path costs,
    // producing the shortest path tree.

    public static int shortestPath(int[][] grid, int startX, int startY, int endX, int endY) {
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        int[][] selectedPoints = new int[grid.length][grid[0].length];
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(cell -> cell[2]));

        for (int[] row : selectedPoints) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }
        selectedPoints[startX][startY] = 0;
        pq.offer(new int[]{startX, startY});


        while (!pq.isEmpty()) {
            int[] cell = pq.poll();

            if (cell[0] == endX && cell[1] == endY) {
                return selectedPoints[endX][endY];
            }

            for (int[] direction : directions) {
                int newX = cell[0] + direction[0];
                int newY = cell[1] + direction[1];

                if (newX >= 0 && newX < grid.length && newY >= 0 &&
                    newY < grid[0].length && grid[newX][newY] == 0) {

                    int newDist = selectedPoints[cell[0]][cell[1]] + 1;
                    if (newDist < selectedPoints[newX][newY]) {
                        pq.offer(new int[]{newX, newY, newDist});
                        selectedPoints[newX][newY] = newDist;
                        System.out.println("Selected path: " + newX + ":" + newY);
                    }
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[][] grid = new int[][]{
            {0, 0, 0, 0, 0},
            {0, 1, 0, 1, 0},
            {0, 1, 0, 1, 1},
            {0, 1, 0, 0, 0},
        };

        System.out.println("Shortest path length is " + shortestPath(grid, 0, 0, 3, 4));
    }

}
