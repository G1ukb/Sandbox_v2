public class yieldCounter {

    public static void main(String[] args) {
        Counter counter = new Counter();
        counter.priceCounter(0.1344,0.0704305, true, 2L, 0.02);
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
