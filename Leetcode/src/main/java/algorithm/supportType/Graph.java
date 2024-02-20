package algorithm.supportType;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Graph {

    private List<List<Integer>> nodeList;

    public Graph(int graphCount) {
        nodeList = new ArrayList<>(graphCount);
        for (int i = 0; i < graphCount; i++) {
            nodeList.add(new ArrayList<>());
        }
        fillRandomGraph(graphCount);
    }

    public Graph() {
        nodeList = new ArrayList<>(7);
        for (int i = 0; i < 7; i++) {
            nodeList.add(new ArrayList<>());
        }

        //   5
        //    \
        // 4 - 2 - 1 - 0
        //       /
        //  6 - 3

        addEdge(4, 2);
        addEdge(5, 2);
        addEdge(2, 1);
        addEdge(6, 3);
        addEdge(3, 1);
        addEdge(1, 0);
    }

    public void addEdge(int src, int destination) {
        nodeList.get(src).add(destination);
        nodeList.get(destination).add(src);
    }

    private void fillRandomGraph(int graphCount) {
        StringBuffer stringBuffer = new StringBuffer();
        for (int i = 0; i < graphCount; i++) {
            int valueToAdd = new Random().nextInt(graphCount - 1) + 1;
            addEdge(i, valueToAdd);
            stringBuffer.append("For " + i + ": " + valueToAdd + " ");
        }
        System.out.println(stringBuffer);
    }

    public List<List<Integer>> getNodeList() {
        return nodeList;
    }
}
