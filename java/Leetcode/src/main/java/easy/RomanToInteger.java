package easy;

//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
//Symbol Value
//I 1
//V 5
//X 10
//L 50
//C 100
//D 500
//M 1000

//Example 3:
//Input: s = "MCMXCIV"
//Output: 1994
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//Runtime 2ms Beats 100.00% of users with Java
//Memory 44.48MB Beats 73.08% of users with Java

public class RomanToInteger {

    public static void main(String[] args) {
        System.out.println(romanToInt("MCMXCIV"));
    }

    public static int romanToInt(String s) {
        int left = s.length() - 1;
        int count = 0;

        while (left >= 0) {
            switch (s.charAt(left)) {
                case 'I':
                    count += 1;
                    break;
                case 'V': {
                    count += 5;
                    if (left != 0 && s.charAt(left - 1) == 'I') {
                        count -= 1;
                        left--;
                    }
                    break;
                }
                case 'X': {
                    count += 10;
                    if (left != 0 && s.charAt(left - 1) == 'I') {
                        count -= 1;
                        left--;
                    }
                    break;
                }
                case 'L': {
                    count += 50;
                    if (left != 0 && s.charAt(left - 1) == 'X') {
                        count -= 10;
                        left--;
                    }
                    break;
                }
                case 'C': {
                    count += 100;
                    if (left != 0 && s.charAt(left - 1) == 'X') {
                        count -= 10;
                        left--;
                    }
                    break;
                }
                case 'D': {
                    count += 500;
                    if (left != 0 && s.charAt(left - 1) == 'C') {
                        count -= 100;
                        left--;
                    }
                    break;
                }
                case 'M': {
                    count += 1000;
                    if (left != 0 && s.charAt(left - 1) == 'C') {
                        count -= 100;
                        left--;
                    }
                    break;
                }
            }
            left--;
        }

        return count;
    }

}
