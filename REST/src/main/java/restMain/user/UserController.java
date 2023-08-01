package restMain.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class UserController {

    UserService userService;
    List<User> mockedUsers = new ArrayList<>(Arrays.asList(new User(0, "0", "0"),
        new User(1, "1", "1")));

    @Autowired
    UserController(UserService userService) {
        this.userService = userService;
        userService.addUsers(mockedUsers);
    }

    @GetMapping("/users")
    public User getUser(@RequestParam(value = "id") int id) {
        return findUserById(id);
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        user.setId(userService.getUserList().size() + 1);
        user.setAmount(String.valueOf(0));
        userService.addUser(user);
        return user;
    }

    @DeleteMapping("/users")
    public void deleteUser(@RequestParam(value = "id") int id) {
        User userById = findUserById(id);
        userService.getUserList().remove(userById);
    }

    @PutMapping("/users")
    public User updateUser(@RequestParam(value = "id") int id, @RequestBody User user) {
        User userById = findUserById(id);
        if (userById != null) {
            userById.setUsername(user.getUsername());
        }
        return userById;
    }

    private User findUserById(int id) {
        for (User next : userService.getUserList()) {
            if (next.getId() == id) {
                return next;
            }
        }
        return null;
    }

    public void updateUserAmountById(int id, boolean isDecreased) {
        User userById = findUserById(id);
        if (userById != null) {
            if (isDecreased)
                userById.setAmount(String.valueOf(Integer.parseInt(userById.getAmount()) + 1));
            else
                userById.setAmount(String.valueOf(Integer.parseInt(userById.getAmount()) - 1));
        }
    }

}