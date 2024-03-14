package medium;

//Given a string s, return the longest palindromic substring in s.
//
//Example 1:
//Input: s = "babad"
//Output: "bab"
//Explanation: "aba" is also a valid answer.
//
//Example 2:
//Input: s = "cbbd"
//Output: "bb"

public class LongestPalindromicSubstring {

    public static void main(String[] args) {
        String palindromicString = "babad";
        System.out.println(longestPalindrome(palindromicString));

        palindromicString = "a";
        System.out.println(longestPalindrome(palindromicString));
    }

    public static String longestPalindrome(String s) {
        String returnString = "";

        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j <= s.length(); j++) {
                String sub = s.substring(i, j);
                if (returnString.length() < sub.length() && isPalindromic(sub.toCharArray()))
                    returnString = sub;
            }
        }

        return returnString;
    }

    public static boolean isPalindromic(char[] array) {
        for (int i = 0; i < array.length / 2; i++) {
            if (array[i] != array[array.length - 1 - i])
                return false;
        }
        return true;
    }

}

