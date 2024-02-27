<h1>Security</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Can you explain the concept of "defense in depth" 
        in the context of software security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the concept of "defense in depth" 
            in the context of software security?
        </b>
    </summary>
<br>

"Defense in depth" is a cyber-security strategy that using
multiple layers of security controls
if one layer of defense turns out to be inadequate,
another layer of defense will hopefully prevent a full breach.

- Layered Security (network firewalls, data encryption, secure coding practices)
- Principle of Least Privilege
- Regular Updates and Patches (fix known vulnerabilities)
- Use of Security Tools (intrusion detection systems, security scanners)
- Regular Audits
- Employee Training
- Incident Response Plan (plan in place for responding to security incidents)
- Data Backups

</details>

[//]: # (Can you explain the difference between 
        authentication and authorization?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference between 
            authentication and authorization?
        </b>
    </summary>
<br>

- **Authentication:** This is the process of verifying the identity of a user,
  device, or system.
    - Strong Password Policies
    - Multi-Factor Authentication
    - Limit Login Attempts (prevent brute force)
    - Use Secure Protocols

- **Authorization:** authentication + determination what that
  user is allowed to do
    - Principle of Least Privilege
    - Role-Based Access Control
    - Regular Audits
    - Use of Access Control Lists

</details>

[//]: # (How would you protect sensitive data in transit and at rest?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you protect sensitive data in transit and at rest?
        </b>
    </summary>
<br>

Protecting Data in Transit Level:

- Use Secure Protocols (HTTPS for web, SFTP for file, TLS for email)
- VPN
- Encryption

Protecting Data at Rest level:

- Encryption
- Access Controls
- Regular Audits
- Secure Backups

Both:

- Key Management: (secure key generation, storage, and rotation)
- Data Minimization: (store the minimum amount of sensitive data necessary)

</details>

[//]: # (How do you ensure secure user session management in a web application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How do you ensure secure user session management in a web application?
        </b>
    </summary>
<br>

- Session ID: (long enough to prevent brute force attacks)
- Secure Transmission
- Regenerate Session ID // Timeout // Logout // Session Termination
- Secure Cookie Attributes:
- Server-Side Session Management

</details>

[//]: # (How does security work in REST with the use of keys, 
         with the use of certificates? 
         What is the difference and which one to choose?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does security work in REST with the use of keys, 
            with the use of certificates? 
            What is the difference and which one to choose?
        </b>
    </summary>
<br>

This is a layer of security

- HTTP Strict Transport Security (header tells the browser to always use HTTPS)
- Content Security Policy (CSP): prevent cross-site scripting (XSS)
- X-Content-Type-Options:
- X-Frame-Options:
- X-XSS-Protection
- Access-Control-Allow-Origin: (which websites can make cross-origin requests)

</details>

[//]: # (How does security work in REST with the use of keys, 
         with the use of certificates? 
         What is the difference and which one to choose?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does security work in REST with the use of keys, 
            with the use of certificates? 
            What is the difference and which one to choose?
        </b>
    </summary>
<br>

- API Keys: used to authenticate a user and to control
  and monitor API usage.
  (they do not provide protection against attack)

- SSL/TLS Certificates: used to create an encrypted connection
  They use a pair of keys. (provide protection)

</details>

[//]: # (What is OAuth 2.0?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is OAuth 2.0?
        </b>
    </summary>
<br>

OAuth 2.0 is an authorization framework
that enables applications to obtain limited access
to user accounts on an HTTP service.

Here are the key steps of OAuth 2.0:

- The client requests authorization from the resource owner.
- Resource owner grants authorization, the client receives an
  authorization grant.
- Request an access token from the authorization server
- If the authorization grant is valid, the authorization server
  issues an access token to the client.
- The client requests the resource from the resource server
  and presents the access token for authentication.
- If the access token is valid, the resource server serves
  the resource to the client.

</details>

[//]: # (What is JWT for REST security?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is JWT for REST security?
        </b>
    </summary>
<br>

JSON Web Token (JWT) is an open standard used 
to share security information between two parties
JWTs are often used for authentication and authorization purposes.

- A client sends a login request with credentials
- The server verifies the credentials. If they are valid, 
the server generates a JWT, signs it, and sends it back to the client.
- The client stores the JWT, often in local storage or a cookie, 
and includes it in the header of subsequent requests to the server.
- The server verifies the JWT signature. 
If it's valid, the server processes the request.
- If the JWT is expired or invalid, the server returns an error, 
and the client must re-authenticate.

- Stateless, Scalable Authentication
- Fine-Grained Access Control
- Mobile-Friendly

</details>

[//]: # (When to use OAuth 2.0 and JWT?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            When to use OAuth 2.0 and JWT?
        </b>
    </summary>
<br>

OAuth 2.0 is an authorization protocol used when an 
application needs to access a service on behalf of a user, 
while JWT is a token format used for securely transmitting 
information between parties. 

They are often used together, with OAuth 2.0 being 
used to authorize the application and 
JWT being used to represent the user's identity and permissions.

</details>