package medium;

public class AddTwoNumbers {

//    You are given two non-empty linked lists representing two non-negative integers.
//    The digits are stored in reverse order, and each of their nodes contains a single digit.
//    Add the two numbers and return the sum as a linked list.
//    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//    Input: l1 = [2,4,3], l2 = [5,6,4]
//    Output: [7,0,8]
//    Explanation: 342 + 465 = 807.
//    Example 2:
//
//    Input: l1 = [0], l2 = [0]
//    Output: [0]
//    Example 3:
//
//    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//    Output: [8,9,9,9,0,0,0,1]

//    Constraints:
//
//    The number of nodes in each linked list is in the range [1, 100].
//        0 <= Node.val <= 9
//    It is guaranteed that the list represents a number that does not have leading zeros.


    public static void main(String[] args) {
        ListNode firstNode = createListNodeFromNum(new ListNode(), String.valueOf(9999).toCharArray(), 0);
        ListNode secondNode = createListNodeFromNum(new ListNode(), String.valueOf(9999999).toCharArray(), 0);

        System.out.println(getValueAsString(calculate(firstNode, secondNode)));
    }

    public static ListNode calculate(ListNode l1, ListNode l2) {
        ListNode resultNode = null;
        ListNode currentNode = null;
        int nextValueIsBiggerOn = 0;

        do {
            //Create node
            if (resultNode == null) {
                resultNode = new ListNode();
                currentNode = resultNode;
            } else {
                ListNode newNode = new ListNode();
                currentNode.next = newNode;
                currentNode = newNode;
            }

            int val1 = l1 == null ? 0 : l1.val;
            int val2 = l2 == null ? 0 : l2.val;

            currentNode.val = (val1 + val2 + nextValueIsBiggerOn) % 10;
            nextValueIsBiggerOn = (val1 + val2 + nextValueIsBiggerOn) / 10;

            l1 = l1 == null ? null : l1.next;
            l2 = l2 == null ? null : l2.next;

        } while (l1 != null || l2 != null);

        if (nextValueIsBiggerOn > 0) {
            currentNode.next = new ListNode(nextValueIsBiggerOn);
        }

        return resultNode;
    }

    //Support method to clearly create object
    public static ListNode createListNodeFromNum(ListNode resultListNode, char[] charArray, int i) {
        resultListNode.val = Integer.parseInt(String.valueOf(charArray[i]));
        if (i + 1 < charArray.length) {
            ListNode newNode = new ListNode();
            resultListNode.next = newNode;
            createListNodeFromNum(newNode, charArray, i + 1);
        }
        return resultListNode;
    }

    //Support method for back testing
    public static String getValueAsString(ListNode listNode) {
        String resultString = "";
        while (listNode != null) {
            resultString += listNode.val;
            listNode = listNode.next;
        }
        return resultString;
    }

    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

}
