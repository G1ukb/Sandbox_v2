public class yieldCounter {

    public static void main(String[] args) {
        Double count = 66.91;
        Double startPrice = 40.85;
        Double currPrice = 32.27;
        Boolean isLong = true;
        Long margin = 3L;
        Double percent = 0.01;

        Counter counter = new Counter();
        counter.priceCounter(count,startPrice, currPrice, isLong, margin, percent);
    }

}

class Counter {
    void priceCounter(Double count, Double startPrice, Double currPrice, Boolean isLong, Long margin, Double percent) {
        double pricePercent = 0.05;
        for (double i = percent; i <= percent * 5; i = i + percent) {
            System.out.println("============" + i * 100 + "%%");

            double cellPrice = isLong ? startPrice + (startPrice * (i / margin)) : startPrice - (startPrice * (i / margin));
            if (isLong){
                System.out.println(cellPrice < currPrice ? "Sell in market (" + cellPrice + ")" : cellPrice);
            } else {
                System.out.println(cellPrice > currPrice ? "Sell in market (" + cellPrice + ")" : cellPrice);
            }
            System.out.println(count * pricePercent);

            pricePercent += 0.05;
        }
    }
}
