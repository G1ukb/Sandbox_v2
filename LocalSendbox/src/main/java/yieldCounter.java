public class yieldCounter {

    public static void main(String[] args) {
        Counter counter = new Counter();
        counter.priceCounter(0.0018,54230.0, false);
    }

}

class Counter {
    void priceCounter(Double count, Double startPrice, Boolean isLong){

        for (double i = 0.05; i <= 0.25; i = i + 0.05) {
            System.out.println("============" + i * 100 + "%%");
            System.out.println(isLong ? startPrice + (startPrice * (i / 2)) : startPrice - (startPrice * (i / 2)));
            System.out.println(count * i);
        }
    }
}
