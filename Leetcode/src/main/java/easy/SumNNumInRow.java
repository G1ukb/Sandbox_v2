package easy;

public class SumNNumInRow {

    // arr[] = {1, 4, 20, 3, 10, 5} points = 3 summ = 33

    public static void main(String[] args) {
        System.out.println(maxSum(new int[]{1, 4, 20, 3, 10, 5}, 3));
    }

    public static int maxSum(int[] arr, int points) {
        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;

        for (int i = 0; i < arr.length; i++) {
            currentSum += arr[i];
            if (i >= points - 1) {
                maxSum = Math.max(maxSum, currentSum);
                currentSum -= arr[i - (points - 1)];
            }
        }

        return maxSum;
    }
}
