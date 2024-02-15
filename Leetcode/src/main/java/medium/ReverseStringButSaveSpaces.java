package medium;

import java.util.Arrays;

public class ReverseStringButSaveSpaces {

//    Reverse a String by preserving the spaces
//
//    Input:  "ab  cde fpo"
//    Output: "op  fed cba"

    public static void main(String[] args) {
        System.out.println(reverseStringButSaveSpaces("ab  cde fpo"));
    }

    public static String reverseStringButSaveSpaces(String string) {
        char[] inputArray = string.toCharArray();
        StringBuilder builder = new StringBuilder(string);

        for (int i = 0; i < inputArray.length; i++) {
            if (inputArray[i] == ' ') builder.setCharAt(i, ' ');
        }

        // Copy non-space characters from right to left
        int j = inputArray.length - 1;
        for (int i = inputArray.length - 1; i >= 0; i--) {
            if (inputArray[i] != ' ') {
                while (builder.charAt(j) == ' ') {
                    j--;
                }
                builder.setCharAt(j--, inputArray[i]);
            }
        }

        return builder.toString();
    }

}
