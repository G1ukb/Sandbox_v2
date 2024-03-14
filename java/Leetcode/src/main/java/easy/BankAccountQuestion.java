package easy;

import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;

public class BankAccountQuestion {

    private static final String TEXT = "I am a {0} account with {1, number, #} units of {2} currency";

    public static void main(String[] args) throws Exception {
        List<BankAccount> accounts = new ArrayList<BankAccount>();
        accounts.add(new SavingAccount("USD", 3)); //Savings
        accounts.add(new SavingAccount("EUR", 2)); //Savings
        accounts.add(new CheckingAccount("HUF", 100)); //Checking
        accounts.add(new CheckingAccount("COP", 10000)); //Checking
        accounts.add(new BrokerageAccount("GBP", 2)); //Brokerage
        accounts.add(new BrokerageAccount("INR", 600)); //Brokerage

        accounts.stream().forEach(
            account -> System.out.println(
                MessageFormat.format(TEXT,
                    new Object[]{
                        account.getAccountType().getName(),
                        account.getCurrency(),
                        account.getUtils()
                    })
            )
        );
    }
}

enum BankAccountType {
    SAVING("saving"),
    CHECKING("checking"),
    BROKERAGE("brokerage");

    private final String name;

    BankAccountType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

abstract class BankAccount {

    private final BankAccountType bankAccountType;
    private final String utils;
    private final int currency;

    public BankAccount(final BankAccountType bankAccountType, String utils, int currency) {
        this.bankAccountType = bankAccountType;
        this.utils = utils;
        this.currency = currency;
    }

    public BankAccountType getAccountType() {
        return bankAccountType;
    }

    public String getUtils() {
        return utils;
    }

    public int getCurrency() {
        return currency;
    }
}

class SavingAccount extends BankAccount {
    public SavingAccount(String utils, int currency) {
        super(BankAccountType.SAVING, utils, currency);
    }
}

class CheckingAccount extends BankAccount {
    public CheckingAccount(String utils, int currency) {
        super(BankAccountType.CHECKING, utils, currency);
    }
}

class BrokerageAccount extends BankAccount {
    public BrokerageAccount(String utils, int currency) {
        super(BankAccountType.BROKERAGE, utils, currency);
    }
}
