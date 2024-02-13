package medium;

//Given an integer array nums of length n and an integer target,
//find three integers in nums such that the sum is closest to target.
//Return the sum of the three integers.
//You may assume that each input would have exactly one solution.
//
//Example 1:
//Input: nums = [-1,2,1,-4], target = 1
//Output: 2
//Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
//
//Example 2:
//Input: nums = [0,0,0], target = 1
//Output: 0
//Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class ThreeSumClosest {

    public static void main(String[] args) {
        int[] nums = new int[]{-1,2,1,-4};
        int target = 1;
        System.out.println(threeSumClosest(nums, target));

        nums = new int[]{0,0,0};
        target = 1;
        System.out.println(threeSumClosest(nums, target));

        nums = new int[]{4,0,5,-5,3,3,0,-4,-5};
        target = -2;
        System.out.println(threeSumClosest(nums, target));
    }

    public static int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int answer = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int j = i + 1;
            int k = nums.length - 1;

            while (j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - sum) < Math.abs(target - answer)) {
                    answer = sum;
                }

                if (sum > target) {
                    k--;
                }
                else if (sum < target) {
                    j++;
                } else if (sum == target) {
                    return target;
                }
            }
        }

        return answer;
    }

}
