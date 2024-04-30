package restMain.post;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import restMain.user.User;

import java.util.ArrayList;
import java.util.List;

@Service
@Scope("singleton")
public class PostService {

    private List<Post> postList;

    public PostService() {
        this.postList = new ArrayList<>();
    }

    public List<Post> getPostList() {
        return postList;
    }

    public void addPosts(List<Post> postList) {
        this.postList = postList;
    }

    public void addPost(Post post) {
        this.postList.add(post);
    }

}
