package easy;

public class PossibleDigits {

    public static void main(String[] args) {
        System.out.println(getNumOfWays("1?3?"));
        System.out.println(getNumOfWays("??"));
    }

    public static int getNumOfWays(String questionString) {
        if (!questionString.contains("?"))
            return 0;

        int numOfWays = 1;
        for (int i = 0; i < questionString.length(); i++) {
            if (questionString.charAt(i) == '?') {
                int sum = 10;
                if (i > 0 && Character.isDigit(questionString.charAt(i - 1))) {
                    sum--;
                }
                if (i < questionString.length() - 1 && Character.isDigit(questionString.charAt(i + 1))) {
                    sum--;
                }
                numOfWays *= sum;
            }
        }

        return numOfWays;
    }

}
