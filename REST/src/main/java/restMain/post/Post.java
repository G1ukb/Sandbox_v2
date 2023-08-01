package restMain.post;

public class Post {

    private int id;
    private int authorId;
    private String text;
    private String date;

    public Post() {
    }

    public Post(int id, int authorId, String text, String date) {
        this.id = id;
        this.authorId = authorId;
        this.text = text;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAuthorId() {
        return authorId;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
