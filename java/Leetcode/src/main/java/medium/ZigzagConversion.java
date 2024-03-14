package medium;

public class ZigzagConversion {

//    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
//    (you may want to display this pattern in a fixed font for better legibility)
//
//    P   A   H   N
//    A P L S I I G
//    Y   I   R
//    And then read line by line: "PAHNAPLSIIGYIR"
//
//    Example 1:
//
//    Input: s = "PAYPALISHIRING", numRows = 3
//    Output: "PAHNAPLSIIGYIR"
//    Example 2:
//
//    Input: s = "PAYPALISHIRING", numRows = 4
//    Output: "PINALSIGYAHRPI"
//    Explanation:
//    P     I    N
//    A   L S  I G
//    Y A   H R
//    P     I
//    Example 3:
//
//    Input: s = "A", numRows = 1
//    Output: "A"

    public static void main(String[] args) {
        String str = "PAYPALISHIRING";
        int numRows = 4;

        System.out.println(convert(str, numRows));
    }

    public static String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }

        StringBuilder answer = new StringBuilder();
        int diff = 2 * (numRows - 1);
        int diagonalDiff = diff;
        int secondIndex;
        int index;

        for (int i = 0; i < numRows; i++) {
            index = i;

            while (index < s.length()) {
                System.out.println(s.charAt(index));
                answer.append(s.charAt(index));

                if (i != 0 && i != numRows - 1) {
                    diagonalDiff = diff - 2 * i;
                    secondIndex = index + diagonalDiff;

                    if (secondIndex < s.length()) {
                        System.out.println(s.charAt(secondIndex));
                        answer.append(s.charAt(secondIndex));
                    }
                }

                index += diff;
            }
        }

        return answer.toString();
    }

}
