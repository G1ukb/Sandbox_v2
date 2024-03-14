package hard;

import java.util.Arrays;

public class MedianOfTwoSortedArrays {

//    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//    The overall run time complexity should be O(log (m+n)).

//    Example 1:
//
//    Input: nums1 = [1,3], nums2 = [2]
//    Output: 2.00000
//    Explanation: merged array = [1,2,3] and median is 2.
//    Example 2:
//
//    Input: nums1 = [1,2], nums2 = [3,4]
//    Output: 2.50000
//    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


    public static void main(String[] args) {
        int[] first = new int[]{1,3};
        int[] second = new int[]{2};

        System.out.println(findMedianSortedArrays(first, second));

        first = new int[]{1,2};
        second = new int[]{3,4};

        System.out.println(findMedianSortedArrays(first, second));
    }

    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] newArray = new int[nums1.length + nums2.length];

        for (int i = 0; i < nums1.length; i++) {
            newArray[i] = nums1[i];
        }
        for (int i = 0; i < nums2.length; i++) {
            newArray[nums1.length + i] = nums2[i];
        }

        newArray = Arrays.stream(newArray).sorted().toArray();

        if (newArray.length % 2 != 0)
            return newArray[newArray.length / 2];
        else
            return (double) (newArray[newArray.length / 2] + newArray[newArray.length / 2 - 1]) / 2;
    }

}
