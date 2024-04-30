package restMain.user;

public class User {

    private Integer id;
    private String username;
    private String amount;

    public User() {

    }

    public User(Integer id, String username, String amount) {
        this.id = id;
        this.username = username;
        this.amount = amount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

}
