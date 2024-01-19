public class multiCount {

    public static void main(String[] args) {
        double initNum = 0;
        double wantedSumm = 234.6482;
        double multi = 1.25;
        double summ = 0;

        while (summ <= wantedSumm) {
            summ = initNum++;
            double postMultiValue = 0;
            for (int i = 0; i < 5; i++) {
                postMultiValue = initNum * multi;
                summ += postMultiValue;
            }
            System.out.println("For " + initNum + " Summ will be " + summ);
        }
    }

}
