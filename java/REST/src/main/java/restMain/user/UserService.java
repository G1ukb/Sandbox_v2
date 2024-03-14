package restMain.user;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Scope("singleton")
public class UserService {

    private List<User> userList;

    public UserService() {
        this.userList = new ArrayList<>();
    }

    public List<User> getUserList() {
        return userList;
    }

    public void addUsers(List<User> users) {
        this.userList = users;
    }

    public void addUser(User user) {
        userList.add(user);
    }

}
