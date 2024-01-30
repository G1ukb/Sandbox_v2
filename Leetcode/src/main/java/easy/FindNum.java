package easy;

//Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
//    Input: nums = [1,3,5,6], target = 5
//    Output: 2
//    Input: nums = [1,3,5,6], target = 2
//    Output: 1

public class FindNum {

    public static void main(String[] args) {
        int[] nums = new int[]{1,3,5,6};
        System.out.println(calculate(nums, 2));
    }

    public static int calculate(int[] arr, int num) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == num)
                return i;
            else if (arr[i] > num)
                return i;
        }

        return arr.length;
    }

}
