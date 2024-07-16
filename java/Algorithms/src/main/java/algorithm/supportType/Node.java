package algorithm.supportType;

public class Node {
    int value;
    String stringValue;
    Node left;
    Node right;

    Node(int value) {
        this.value = value;
        right = null;
        left = null;
    }

    Node(String stringValue) {
        this.stringValue = stringValue;
    }

    public int getNodeVal() {
        return this.value;
    }

    public boolean hasLeft() {
        return this.left != null;
    }

    public boolean hasRight() {
        return this.right != null;
    }

    public Node getLeft() {
        return this.left;
    }

    public Node getRight() {
        return this.right;
    }
}
