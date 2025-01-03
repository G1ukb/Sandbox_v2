<h1>Spring Security</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (What are the key elements and purposes of Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the key elements and purposes of Spring Security?
        </b>
    </summary>
<br>

Spring Security is a powerful framework that provides
comprehensive security services for Java EE-based applications.
It's highly customizable and has an authentication
and access-control framework to secure Spring-based applications.

Key elements and purposes of Spring Security include:

1. Authentication: Spring Security provides mechanisms
   to validate the identity of a user in your application.
   It supports various types of authentication mechanisms
   like HTTP Basic Authentication, form-based authentication, OAuth, etc.

2. Authorization: After authentication,
   Spring Security handles access to resources
   based on permissions (known as "authorities" or "roles")
   associated with the authenticated user.

3. Protection against Attacks:
   Spring Security provides out-of-the-box mechanisms
   to protect against common vulnerabilities, such as
   CSRF (Cross-Site Request Forgery), session fixation, etc.

4. Servlet API Integration: Spring Security is fully integrated
   with the standard Java Servlet API.
   It provides adapters for many popular Java frameworks, such as Spring MVC.

5. Security Context Propagation: Spring Security propagates security
   and identity information between software components regardless of
   whether the invocation is due to the remote invocation of a web service,
   a scheduled task, or a message being delivered asynchronously.

```java

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) {
        http
            .authorizeRequests()
            .anyRequest().authenticated()
            .and()
            .formLogin()
            .loginPage("/login").permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) {
        auth
            .inMemoryAuthentication()
            .withUser("user").password(passwordEncoder().encode("password")).roles("USER");
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

</details>

[//]: # (How does Spring Security handle authentication and authorization?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring Security handle authentication and authorization?
        </b>
    </summary>
<br>

Spring Security has two main areas of focus: authentication and authorization.

1. Authentication: Authentication is the process of validating
   the identity of a user.
   This is typically done by requiring the user to provide credentials
   (like a username and password) that can be verified.

   Spring Security provides an `AuthenticationManager` interface
   to encapsulate the authentication logic.
   The primary strategy provided is a `ProviderManager`,
   which delegates to a chain of `AuthenticationProvider` instances,
   each of which provides support for different types of authentication
   (like LDAP, DAO-based, etc.).
   User details are loaded using `UserDetailsService`,
   and passwords are encoded and matched using `PasswordEncoder`.

   ```java
   @Configuration
   @EnableWebSecurity
   public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

       @Autowired
       public void configureGlobal(AuthenticationManagerBuilder auth) {
           auth
               .inMemoryAuthentication()
               .withUser("user").password(passwordEncoder().encode("password")).roles("USER");
       }

       @Bean
       public PasswordEncoder passwordEncoder() {
           return new BCryptPasswordEncoder();
       }
   }
   ```

2. Authorization: Authorization is the process of
   determining whether an authenticated user has enough privileges or
   permissions to perform a certain operation.

   In Spring Security, you can specify authorization semantics
   using method-level security or URL-based security.
   In URL-based security, you map request patterns
   to certain access control rules.
   Method-level security works similarly, but for your Spring beans.

   Here's an example of configuring URL-based authorization:

   ```java
   @Configuration
   @EnableWebSecurity
   public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
       // ... other configurations

       @Override
       protected void configure(HttpSecurity http) {
           http
               .authorizeRequests()
                   .antMatchers("/admin/**").hasRole("ADMIN") // only admin can access /admin/**
                   .anyRequest().authenticated()    // all other requests require authentication
                   .and()
               .logout().permitAll() // allow all users to access the logout page
                   .and()
               .formLogin()     // enable form-login
                  .permitAll(); // allow all users to access login page
       }
   }
   ```

</details>

[//]: # (Can you explain how to use the 
        @Secured and @PreAuthorize annotations in Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use the 
            @Secured and @PreAuthorize annotations in Spring Security?
        </b>
    </summary>
<br>

The `@Secured` and `@PreAuthorize` annotations
are used to secure methods at the method level using Spring Security.
These allow you to specify access restrictions on a method,
typically checking the role or authority of the authenticated user.

Here is how to use them:

1. Enable Method Security: To enable the annotations,
   you need to add `@EnableGlobalMethodSecurity` to a configuration class.

   ```java
   @Configuration
   @EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
   public class SecurityConfig extends WebSecurityConfigurerAdapter {
      // Other configurations
   }
   ```

2. `@Secured`: This annotation is a simple way to restrict access
   at the method level based on roles.
   The specified roles are hard-coded in the annotation.

   ```java
   @Service
   public class MyService {

      @Secured("ROLE_ADMIN")
      public void performAdminTask() {
         // Admin task
      }
   }
   ```

3. `@PreAuthorize`: This annotation offers more flexibility
   because it supports Spring Expression Language (SpEL),
   so you can write more complex security constraints:

   ```java
   @Service
   public class MyService {

       @PreAuthorize("hasRole('ROLE_ADMIN') or #user.name == authentication.principal.username")
       public void performTask(User user) {
           // Task
       }
   }
   ```

</details>

[//]: # (How does Spring Security handle password encoding?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring Security handle password encoding?
        </b>
    </summary>
<br>

Spring Security provides support for password encoding to protect
passwords stored in your application from being easily
revealed or used if your data is compromised.

It provides the `PasswordEncoder` interface for encoding passwords,
and several implementations for different encoding schemes.
The most common implementation you'll see is `BCryptPasswordEncoder`
which is a good general-purpose password encoder.

```java

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) {
        auth
            .inMemoryAuthentication()
            .passwordEncoder(passwordEncoder())
            .withUser("user").password(passwordEncoder().encode("password")).roles("USER");
    }
}
```

In the above example, we declare a `PasswordEncoder` bean
that is then used to encode the password for the in-memory user "user".
When authenticating users, Spring Security will
use this password encoder to compare the encoded password
in your database with the password submitted by the user,
which gets encoded the same way.

In newer Spring Security versions (5.0 and later),
it is satisfying to note that the system requires a PasswordEncoder
and storing passwords in plain text in your database is no longer allowed.

</details>

[//]: # (Can you explain how to use the
        SecurityContextHolder in Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use the 
            SecurityContextHolder in Spring Security?
        </b>
    </summary>
<br>

The SecurityContextHolder in Spring Security is
where the system stores details about the authenticated user.
It uses a ThreadLocal strategy to save security context,
and from this context, user details and roles
can be obtained as needed throughout your application,
allowing you to make security-based decisions or provide personalized content.

The `SecurityContextHolder` uses a strategy specified
in `SecurityContextHolderStrategy` for storing this security context.
The default strategy is `ThreadLocal`.
This means it stores the details in a `ThreadLocal`
which is accessible from anywhere in your application.

You can fetch the `Authentication` object,
which contains these security details,
from the `SecurityContextHolder` at any point in time with the following code:

```java
Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
UserDetails userDetails = (UserDetails) authentication.getPrincipal();

String username = userDetails.getUsername();
String password = userDetails.getPassword();
Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
```

This is a lightweight security context that Spring Security
manages for you and you can use anywhere within your application
to get user details or check permissions when you need them.

</details>

[//]: # (How would you handle session management 
        in a Spring Security application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle session management 
            in a Spring Security application?
        </b>
    </summary>
<br>

Session management in a Spring Security application
is an essential aspect in securing user interactions with the application.
Spring Security provides extensive session management support,
including custom session creation policies,
concurrent session controls,
session fixation protections,
session timeout settings, and "remember-me" functionality.

1. Session Creation Policy: Spring Security allows you to control
   when sessions are created.
   You can specify a session creation policy to always create an HTTP session,
   never create one, create one only if required,
   or delegate this decision to a custom implementation.

    ```
    http
        .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);
    ```

2. Concurrent Session Control:
   You can control concurrent sessions for a user
   (i.e., limit the number of sessions a user can have).
   You can restrict users from logging into the application more than once
   at the same time, or else limit the number of concurrent sessions
   a user can have.

    ```
    http
        .sessionManagement()
            .maximumSessions(1)
            .expiredUrl("/sessionExpired.html");
    ```

3. Session Fixation Protection:
   Session Fixation is a type of attack where a hacker
   manages to fix the session ID of a user's session.
   Spring Security provides automatic protection against
   session fixation attacks by changing the session ID when a user logs in.

4. Session Timeout: You can specify a timeout interval
   after which the application should automatically invalidate a session.

5. Remember-Me: For clients that wish to remain authenticated/identified
   between sessions (like "Remember Me?" checkboxes),
   you can use Spring Security's remember-me authentication.

    ```java
    @Configuration
    @EnableWebSecurity
    public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) {
            http
                .authorizeRequests()
                    .anyRequest().authenticated()
                    .and()
                .formLogin()
                    .loginPage("/login")
                    .permitAll()
                    .and()
                .rememberMe();
        }
    }
    ```

Remember that these configurations only make sense
in a stateful application where the HTTP session is used.

For stateless applications, like Restfull services,
the best practice is to use stateless authentication strategies, like
OIDC or JWT tokens.

</details>

[//]: # (Can you explain how to use the 
        @EnableWebSecurity annotation in Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use the 
            @EnableWebSecurity annotation in Spring Security?
        </b>
    </summary>
<br>

The @EnableWebSecurity annotation marks a configuration class
as a Spring Security configuration.
It allows you to add your own security configurations
by extending the WebSecurityConfigurerAdapter or WebSecurityConfigurer class
and overriding its methods to fit your project requirements.

</details>

[//]: # (How would you implement OAuth2 authentication with Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you implement OAuth2 authentication with Spring Security?
        </b>
    </summary>
<br>

Implementing OAuth2 authentication in Spring Security involves several steps:

1. Add Dependencies:

    ```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-oauth2-client</artifactId>
    </dependency>
    ```

2. Register Your App: In order to use OAuth2,
   you'll need to register your application with a Provider
   (like Google, GitHub, Facebook).
   The provider will then generate a Client ID and Secret
   for your application which you should take note of.

3. Configure application.properties:
   In your `application.properties` or `application.yml` file,
   you need to provide your client ID and secret,
   along with other properties like the provider's authorization
   and token URIs and the scopes required.

    ```properties
    spring.security.oauth2.client.registration.google.client-id=<YOUR-CLIENT-ID>
    spring.security.oauth2.client.registration.google.client-secret=<YOUR-CLIENT-SECRET>
    ```

   These are the minimum configurations required for OAuth2.

4. Write a Controller: You'll need a controller
   or end-point for your app to let users login.
   By default, Spring Boot auto-configures a login page.

    ```java
    @Controller
    public class UserController {
        @GetMapping("/user")
        public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
            return Collections.singletonMap("name", principal.getAttribute("name"));
        }
    }
    ```

5. Implement Security Configuration:
   You may also want to override default Spring Security
   auto-configurations for more control:

    ```java
    @Configuration
    public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) {
      http.authorizeRequests()
          .antMatchers("/", "/login**", "/error**").permitAll()
          .anyRequest().authenticated()
          .and()
          .oauth2Login();
      }
    }
    ```

   This configuration restricts access to all URLs except "/", "/login**", and "/error**". For OAuth2 login, it
   configures the application to redirect users to the default OAuth2 Provider's login page when unauthenticated.

</details>

[//]: # (How would you implement JWT authentication with Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you implement JWT authentication with Spring Security?
        </b>
    </summary>
<br>

JSON Web Tokens (JWT) offer a method to encode claims in a JSON object
that is then digitally signed.
JWTs are often used to implement stateless authentication mechanisms
for REST APIs, where the token is sent with each request.

1. Dependencies: First, you'd need to add Spring Security
   and a JWT library, like JJWT, to your project's dependencies.

2. Implement a Filter: To do JWT authentication,
   you'd typically implement a custom filter that:
    - Checks for the presence of a JWT in the Authorization header
      of the incoming request.
    - If a token is found, it validates the token and sets the authentication
      in Spring's `SecurityContext`.

   ```java
   public class JwtAuthenticationFilter extends OncePerRequestFilter {

       @Override
       protected void doFilterInternal(HttpServletRequest request, 
                                       HttpServletResponse response, FilterChain filterChain) {
           
           String token = request.getHeader("Authorization");
         
           if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
               token = token.substring(7);
           
               // Use JJWT library to validate the JWT
               Jws<Claims> claims = Jwts.parser()
                   .setSigningKey("secret")
                   .parseClaimsJws(token);
               
               // Create an Authentication and set it in the SecurityContext
               Authentication auth = new UsernamePasswordAuthenticationToken(
                   claims.getBody().getSubject(), null, new ArrayList<>());
               
               SecurityContextHolder.getContext().setAuthentication(auth);
           }
           
           filterChain.doFilter(request, response);
       }
   }
   ```

3. Setup Spring Security: Then, configure Spring Security
   to use your custom filter and to protect your application's
   endpoints:

    ```java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfig extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) {
            http
                .csrf().disable()
                .authorizeRequests().anyRequest().authenticated()
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        }
    }
    ```

</details>

[//]: # (How would you handle Two-Factor Authentication with Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle Two-Factor Authentication with Spring Security?
        </b>
    </summary>
<br>

Two-Factor Authentication (2FA) is an authentication method
where a user is required to provide two forms of verification
before they're granted access.

With Spring Security, implementing 2FA involves several steps:

1. Authentication: First, the user must authenticate with their
   username and password in the usual way.
   If the credentials are valid, instead of creating
   a fully authenticated session,
   the application creates a partially authenticated session,
   often called a "pre-authenticated" session.

2. Two-Factor Code Generation:
   The application generates a secret code for the user
   (this could be done through an SMS
   service, an email service, or a Time-based One-Time Password (TOTP)
   like Google Authenticator).
   The generated code is
   then usually stored in the database associated with the user account.

3. Two-Factor Code Input: After the first factor is verified,
   the user is redirected to a page where they can input the
   code which was sent to them.

4. Fully Authenticate the User: Once the user inputs the correct code,
   the application fully authenticates their session.

```java

@Service
public class TwoFactorAuthenticationService {

    public void authenticate(String password, String code) {
        Authentication firstFactor = attemptPasswordAuthentication(password);
        if (firstFactor == null) {
            throw new AuthenticationException();
        }

        SecurityContextHolder.getContext().setAuthentication(firstFactor);

        Authentication secondFactor = attemptTwoFactorAuthentication(code);
        if (secondFactor == null) {
            throw new AuthenticationException();
        }

        SecurityContextHolder.getContext().setAuthentication(secondFactor);
    }

    private Authentication attemptPasswordAuthentication(String password) {
        // ... Insert code to authenticate with password
    }

    private Authentication attemptTwoFactorAuthentication(String code) {
        // ... Insert code to authenticate with second factor
    }
}
```

</details>

[//]: # (How would you handle password reset functionality 
         in a Spring Security application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle password reset functionality 
            in a Spring Security application?
        </b>
    </summary>
<br>


Handling password reset functionality
in a Spring Security application typically comes down to several steps:

1. User Requests Password Reset:
   A user requests password reset by entering their email on a recovery page.
   The application verifies if the email exists in the database.

2. Generate Reset Token: The application creates a unique token
   associated with the user. This is often done by
   generating a random UUID or another secure random token.

3. Send Reset Link: Email the user with a link to reset their password.
   This link includes the generated token as a URL parameter.
   The email sending functionality can be realized
   using Spring Mail or third-party libraries/services.

4. User Clicks the Link: The user clicks the link in their email
   and is directed to your application's password reset page.
   The application verifies the validity of the token

5. User Resets Password: The user enters a new password.
   The application validates the input, then encrypts the new
   password (for example, using a `BCryptPasswordEncoder`),
   saves it to the database and invalidates the token.


- Generate Reset Token:

```java
public void createPasswordResetToken(User user) {
    String token = UUID.randomUUID().toString();
    PasswordResetToken passwordResetToken = new PasswordResetToken(token, user);
    passwordResetTokenRepository.save(passwordResetToken); // assuming the PasswordResetToken class and an appropriate repository are implemented
}
```

- User Clicks the Link:

```java

@RestController
@RequestMapping("/reset-password")
public class ResetPasswordController {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @GetMapping("/{token}")
    public String validateToken(@PathVariable("token") String token) {
        // find a token in the password reset repository
        PasswordResetToken passwordResetToken = passwordResetTokenRepository.findByToken(token);

        // if the token doesn't exist or has expired, throw an exception...

        // otherwise token is valid, so return the token for future use
        return token;
    }
}
```

- User Resets Password:

```java

@RestController
@RequestMapping("/reset-password")
public class ResetPasswordController {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/{token}")
    public void resetPassword(@PathVariable("token") String token, @RequestParam("password") String password) {
        // find the user by the token
        User user = userDetailsService.loadUserByResetPasswordToken(token);

        // if user/token not found, throw an exception...

        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user); // assuming User entity has a field 'password' and there's a UserRepository
    }
}
```

</details>

[//]: # (Can you explain how to use the 
        @AuthenticationPrincipal annotation in Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use the 
            @AuthenticationPrincipal annotation in Spring Security?
        </b>
    </summary>
<br>

The @AuthenticationPrincipal annotation in Spring Security
is designed to inject the currently authenticated user
into controller methods.

This makes it easy to access the authenticated user's details
without manually having to retrieve them from the SecurityContext.

```java

@RestController
@RequestMapping("/api")
public class MyController {

    @GetMapping("/user")
    public String user(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        return "Hello, " + userPrincipal.getUsername();
    }
}
```

</details>

[//]: # (How would you handle exception handling and 
         access denied scenarios in Spring Security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle exception handling and 
            access denied scenarios in Spring Security?
        </b>
    </summary>
<br>

Exception handling and access denied scenarios in Spring Security
are managed using AuthenticationEntryPoint and AccessDeniedHandler.
For application-wide exception handling,
Spring's @ControllerAdvice and @ExceptionHandler annotations can be used.

1. Exception Handling: Spring Security provides an
   `AuthenticationEntryPoint` for handling authentication exception scenarios.
   This is a place where we can define a custom response or redirection
   if authentication fails.

    ```
    http.exceptionHandling().authenticationEntryPoint(new AuthenticationEntryPoint() {
        @Override
        public void commence(HttpServletRequest request, HttpServletResponse response,
                             AuthenticationException authException) throws IOException {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized access");
        }
    });
    ```

2. Access Denied Handling: If a user is authenticated
   but doesn't have sufficient permissions to access a certain
   resource, an `AccessDeniedException` will be thrown.
   Spring Security provides an `AccessDeniedHandler` that lets you
   customize the response in such scenarios:

    ```
    http.exceptionHandling().accessDeniedHandler(new AccessDeniedHandler() {
        @Override
        public void handle(HttpServletRequest request, HttpServletResponse response,
                           AccessDeniedException accessDeniedException) throws IOException {
            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access is denied");
        }
    });
    ```

3. Using `@ControllerAdvice`:
   If you want to handle exceptions across the whole application
   (not just Spring Security),
   you can define a `@ControllerAdvice` class
   and use `@ExceptionHandler` methods:

    ```java
    @ControllerAdvice
    public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

        @ExceptionHandler({ AccessDeniedException.class })
        public ResponseEntity<Object> handleAccessDeniedException(Exception ex, WebRequest request) {
            return new ResponseEntity<Object>("Access denied message here", new HttpHeaders(), HttpStatus.FORBIDDEN);
        }
    }
    ```

</details>
