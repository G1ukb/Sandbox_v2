package easy;

//Write a function to find the longest common prefix
//string amongst an array of strings.
//
//If there is no common prefix, return an empty string "".
//
//Example 1:
//Input: strs = ["flower","flow","flight"]
//Output: "fl"
//
//Example 2:
//Input: strs = ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.

import java.util.Arrays;

public class LongestCommonPrefix {

    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[]{"flower", "flow", "flight"}));
        System.out.println(longestCommonPrefix(new String[]{"dog", "racecar", "car"}));
        System.out.println(longestCommonPrefix(new String[]{"flower", "flower", "flower", "flower"}));
    }

    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 1)
            return strs[0];

        String answer = "";
        boolean isContained = true;

        for (int i = 1; i <= strs[0].length(); i++) {
            String substring = strs[0].substring(0, i);

            for (int k = 0; k < strs.length; k++) {
                if (strs[k].length() < substring.length() || !strs[k].substring(0, i).equals(substring)) {
                    isContained = false;
                    break;
                }
            }

            if (isContained)
                answer = substring;
            else
                break;
        }

        return answer;
    }


}
