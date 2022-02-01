public class yieldCounter {

    public static void main(String[] args) {
        Double count = 0.1344;
        Double startPrice = 0.07173663;
        Boolean isLong = false;
        Long margin = 2L;
        Double percent = 0.02;

        Counter counter = new Counter();
        counter.priceCounter(count,startPrice, isLong, margin, percent);
    }

}

class Counter {
    void priceCounter(Double count, Double startPrice, Boolean isLong, Long margin, Double percent) {
        double pricePercent = 0.05;
        for (double i = percent; i <= percent * 5; i = i + percent) {
            System.out.println("============" + i * 100 + "%%");
            System.out.println(isLong ? startPrice + (startPrice * (i / margin)) : startPrice - (startPrice * (i / margin)));
            System.out.println(count * pricePercent);

            pricePercent += 0.05;
        }
    }
}
