package medium;

//Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//
//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//
//Example 1:
//
//Input: x = 123
//Output: 321
//Example 2:
//
//Input: x = -123
//Output: -321
//Example 3:
//
//Input: x = 120
//Output: 21

public class ReverseInteger {

    public static void main(String[] args) {
        int integer = -123;
        System.out.println(reverse(integer));
    }

    public static int reverse(int x) {
        try {
            StringBuilder stringBuffer = new StringBuilder(String.valueOf(x));
            boolean isNegative = false;

            if (stringBuffer.charAt(0) == '-'){
                stringBuffer.delete(0,1);
                isNegative = true;
            }

            Integer answer = Integer.valueOf(stringBuffer.reverse().toString());

            return isNegative ? answer * -1 : answer;
        } catch (Exception exception) {
            return 0;
        }
    }

}
