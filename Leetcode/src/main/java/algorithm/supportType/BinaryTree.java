package algorithm.supportType;

import java.util.Random;

public class BinaryTree {
    Node root;

    public BinaryTree(int nodeCount) {
        String addedValues = "";
        for (int i = 0; i < nodeCount; i++) {
            int value = new Random().nextInt(100);
            addedValues += value + ",";
            add(value);
        }
        System.out.println("Added " + addedValues);
    }

    public void add(int value) {
        root = addRecursive(root, value);
    }

    private Node addRecursive(Node current, int value) {
        if (current == null) {
            return new Node(value);
        }

        if (value < current.value) {
            current.left = addRecursive(current.left, value);
        } else if (value > current.value) {
            current.right = addRecursive(current.right, value);
        } else {
            return current;
        }

        return current;
    }

    public Node getRootNode() {
        return root;
    }
}
