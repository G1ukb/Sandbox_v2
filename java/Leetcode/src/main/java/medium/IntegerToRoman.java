package medium;

//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
//Symbol Value
//I - 1
//V - 5
//X - 10
//L - 50
//C - 100
//D - 500
//M - 1000
//For example, 2 is written as II in Roman numeral,
//just two ones added together. 12 is written as XII, which is simply X + II.
//The number 27 is written as XXVII, which is XX + V + II.
//
//Roman numerals are usually written largest to smallest from left to right.
//However, the numeral for four is not IIII. Instead, the number four is written as IV.
//Because the one is before the five, we subtract it making four.
//The same principle applies to the number nine, which is written as IX.
//There are six instances where subtraction is used:
//
//I can be placed before V (5) and X (10) to make 4 and 9.
//X can be placed before L (50) and C (100) to make 40 and 90.
//C can be placed before D (500) and M (1000) to make 400 and 900.
//Given an integer, convert it to a roman numeral.
//
//Example 1:
//
//Input: num = 3
//Output: "III"
//Explanation: 3 is represented as 3 ones.
//
//Example 2:
//
//Input: num = 58
//Output: "LVIII"
//Explanation: L = 50, V = 5, III = 3.
//
//Example 3:
//
//Input: num = 1994
//Output: "MCMXCIV"
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//Runtime 4 ms Beats 61.08% of users with Java
//Memory 43.80 MB Beats 84.68% of users with Java

public class IntegerToRoman {

    public static void main(String[] args) {
        System.out.println(intToRoman(1994));
    }

    public static String intToRoman(int num) {
        StringBuilder answer = new StringBuilder();

        int mCount = num / 1000;
        for (int i = 0; i < mCount; i++) {
            answer.append('M');
        }
        answer.append(intToString("C", "D", "M", num % 1000 / 100));
        answer.append(intToString("X", "L", "C", num % 1000 % 100 / 10));
        answer.append(intToString("I", "V", "X", num % 1000 % 100 % 10));


        return answer.toString();
    }

    public static StringBuilder intToString(String romanLetter, String middleLetter, String maxHeightLetter, int count) {
        StringBuilder answer = new StringBuilder();
        if (count == 0)
            return answer;

        if (count < 4) {
            for (int i = 0; i < count; i++) {
                answer.append(romanLetter);
            }
        } else if (count == 4) {
            answer.append(romanLetter);
            answer.append(middleLetter);
        } else if (count == 5)
            answer.append(middleLetter);
        else if (count < 9) {
            answer.append(middleLetter);
            for (int i = 0; i < count % 5; i++) {
                answer.append(romanLetter);
            }
        } else {
            answer.append(romanLetter);
            answer.append(maxHeightLetter);
        }

        return answer;
    }
}
