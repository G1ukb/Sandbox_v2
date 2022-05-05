package initBlockTest;

public class JavaCore {

    public static void main(String[] args) {
        InitBlockTest initBlockTest = new InitBlockTest();
    }

}

class InitBlockTest {

    private Integer initBlockTest = 0;
    {
        System.out.println("Сработал обычный блок инициализации");
        initBlockTest = 10;
    }
    static {
        System.out.println("Сработал статический блок инициализации");
    }

    InitBlockTest() {
        System.out.println("Сработал конструктор");
    }
}
