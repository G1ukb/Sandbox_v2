package twoSum;

import java.util.Arrays;

public class TwoSum {

    /*
    * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
    */

    public static void main(String[] args) {
        int[] nums = {2,5,5,11};
        int target = 10;

        System.out.println(Arrays.toString(twoSum(nums, target)));
    }

    public static int[] twoSum(int[] nums, int target) {
        int[] sumIndexes = new int[2];
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = 1; j < nums.length; j++) {
                if (Integer.sum(nums[i], nums[j]) == target) {
                    sumIndexes[0] = i;
                    sumIndexes[1] = j;
                }
            }
        }
        return sumIndexes;
    }

}