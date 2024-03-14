package medium;

//Given a string s, find the length of the longest
//    substring
//without repeating characters.
//Example 1:
//
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.
//Example 2:
//
//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.
//Example 3:
//
//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
//Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

public class LongestSubstringWithoutRepeatingCharacters {

    public static void main(String[] args) {
        String example = "pwwkew";
        System.out.println(lengthOfLongestSubstring(example));

        example = " ";
        System.out.println(lengthOfLongestSubstring(example));
    }

    public static int lengthOfLongestSubstring(String s) {
        char[] charArray = s.toCharArray();
        char[] longestCharArray = new char[0];

        for (int i = 0; i < charArray.length; i++) {
            for (int j = i; j <= charArray.length; j++) {
                char[] chars = s.substring(i, j).toCharArray();
                if(isCharArrayContainsUniqueSymbolsOnly(chars)) {
                    if (chars.length > longestCharArray.length)
                        longestCharArray = chars;
                } else {
                    break;
                }
            }
        }

        return longestCharArray.length;
    }

    public static boolean isCharArrayContainsUniqueSymbolsOnly(char[] chars) {
        if (chars.length == 1)
            return true;

        for (int i = 0; i < chars.length; i++) {
            char symbol = chars[i];
            for (int j = i+1; j < chars.length; j++) {
                if (symbol == chars[j])
                    return false;
            }
        }

        return true;
    }

    //pwwkew
    //p -> pw -> w
    //

}
