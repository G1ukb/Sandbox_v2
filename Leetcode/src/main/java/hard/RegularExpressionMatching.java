package hard;

// Given an input string s and a pattern p,
// implement regular expression matching with support for '.' And '*' where:
//
//        '.' Matches any single character.
//        '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).
//
//Example 1:
//
//Input: s = "aa", p = "a"
//Output: false
//Explanation: "a" does not match the entire string "aa".
//
// Example 2:
//
//Input: s = "aa", p = "a*"
//Output: true
//Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
//
// Example 3:
//
//Input: s = "ab", p = ".*"
//Output: true
//Explanation: ".*" means "zero or more (*) of any character (.)".

public class RegularExpressionMatching {

    public static void main(String[] args) {
        String input = "aa";
        String pattern = "a";
        System.out.println(isMatch(input, pattern));

        input = "aa";
        pattern = "a*";
        System.out.println(isMatch(input, pattern));

        input = "ab";
        pattern = ".*";
        System.out.println(isMatch(input, pattern));

        input = "ab";
        pattern = "a***abc";
        System.out.println(isMatch(input, pattern));
    }

    public static boolean isMatch(String s, String p) {
        char[] patternArray = p.toCharArray();
        String clearPatternStr = "";

        for (int i = 0; i < patternArray.length; i++) {
            if (i != 0 && (patternArray[i] == '*' && patternArray[i-1] == '*'))
                continue;

            clearPatternStr += patternArray[i];
        }


        return s.matches(clearPatternStr);
    }

}
