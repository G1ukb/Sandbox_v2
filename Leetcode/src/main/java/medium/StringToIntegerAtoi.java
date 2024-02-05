package medium;

// Implement the myAtoi(string s) function, which converts a string to a 32-bit
// signed integer (similar to C/C++'s atoi function).
//
// The algorithm for myAtoi(string s) is as follows:
//
// 1.Read in and ignore any leading whitespace.
// 2. Check if the next character (if not already at the end of the string) is '-' or '+'.
// Read this character in if it is either. This determines if the final result is negative or positive respectively.
// Assume the result is positive if neither is present.
// 3. Read in next the characters until the next non-digit character or the end of the input is reached.
// The rest of the string is ignored.
// 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read,
// then the integer is 0. Change the sign as necessary (from step 2).
// 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1],
// then clamp the integer so that it remains in the range.
// Specifically, integers less than -231 should be clamped to -231, and integers greater than
// 231 - 1 should be clamped to 231 - 1.
// 6. Return the integer as the final result.
// Note:
//
// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
// Example 1:
//
// Input: s = "42"
// Output: 42
//
// Example 2:
//
// Input: s = "   -42"
// Output: -42
// Example 3:
//
// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//        ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//        ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//        ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

import java.math.BigInteger;

public class StringToIntegerAtoi {

    public static void main(String[] args) {
        String inputString = "-91283472332 with words";
        System.out.println(myAtoi(inputString));

        inputString = "words and 987";
        System.out.println(myAtoi(inputString));

        inputString = "20000000000000000000";
        System.out.println(myAtoi(inputString));

        inputString = "  0000000000012345678";
        System.out.println(myAtoi(inputString));

        inputString = "+-12";
        System.out.println(myAtoi(inputString));
    }

    public static int myAtoi(String s) {
        StringBuilder answer = new StringBuilder();
        boolean isFirstDigitFound = false;

        s = s.trim();
        for (int i = 0; i < s.length(); i++) {
            if (i == 0 && (s.charAt(i) == '-' || s.charAt(i) == '+')) {
                answer.append(s.charAt(i));
                continue;
            }
            if (!(s.charAt(i) >= '0' && s.charAt(i) <= '9')) {
                break;
            } else {
                if(s.charAt(i) != '0' && !isFirstDigitFound) {
                    isFirstDigitFound = true;
                    answer.append(s.charAt(i));
                } else if (isFirstDigitFound)
                    answer.append(s.charAt(i));
            }
        }

        if (!isFirstDigitFound)
            answer.delete(0, answer.length());

        if (answer.length() == 0)
            return 0;
        else if (answer.length() > 12) answer.setLength(12);

        long num = Long.parseLong(answer.toString());
        return num < 0 ? (int) Math.max(num, Integer.MIN_VALUE) : (int) Math.min(num, Integer.MAX_VALUE);
    }

}
