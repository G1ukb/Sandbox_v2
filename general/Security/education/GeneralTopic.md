<h1>Security</h1> 
<h4> 

[Back to menu](../Menu.md)

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

- HTTP Strict Transport Security (header tells the browser to always use HTTPS)
- Content Security Policy (CSP): prevent cross-site scripting (XSS)
- X-Content-Type-Options:
- X-Frame-Options:
- X-XSS-Protection
- Access-Control-Allow-Origin: (which websites can make cross-origin requests)


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

Pros of OAuth 2.0:

- Delegated Access
- Flexibility

Cons of OAuth 2.0:

- Complexity: can be trickier to manage and revoke access to resources.
- Incompatibility with Previous Version

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

[//]: # (What is SAML/SAML2 and how does it work?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is SAML/SAML2 and how does it work?
        </b>
    </summary>
<br>

Security Assertion Markup Language (SAML)
is a standard for exchanging authentication and authorization data
between parties.

SAML2, an extension of SAML, is an XML-based protocol that
uses security tokens containing assertions to pass information
about a principal (usually an end user) from a SAML authority,
known as an Identity Provider, to a SAML consumer, known as a Service Provider.

This enables single sign-on (SSO),
allowing users to log in once and gain access to different applications,
which boosts productivity and eases the user authentication process.

In what situation must use:

- When implementing single sign-on and enterprise-level application integrations.
- Providing secure access to apps and services across different domains.
- When interoperability is required as SAML is an industry-standard protocol.

Pros:

- Supports both front-channel (browser-based)
  and back-channel (server-to-server) communication.
- SAML avoids password sharing issues by using Federation Metadata
  that enables a trust relationship between the provider and the consumer.
- Supports cross-domain, single sign-on,
  thereby reducing the need for maintaining multiple usernames and passwords.
- Industry-standard protocol, providing broad interoperability.
- Can be used for both on-premise and cloud services.

Cons:

- It can be complex to implement with a steep learning curve.
- It is an XML-based protocol, which can be verbose and
  require more processing power.

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

[//]: # (What is OpenID, at what conditions should it be used 
        in contrast with alternatives and what are the pros and cons?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is OpenID, at what conditions should it be used 
            in contrast with alternatives and what are the pros and cons?
        </b>
    </summary>
<br>

OpenID is an open standard and decentralized authentication protocol.
It allows users to authenticate across multiple websites
using third-party services, eliminating the need to create
and remember a separate username and password for each site.

The pros of using OpenID include simplified account management
for users, quicker registration and login process,
and decrease a load on your system in managing user credentials.

The main cons are dependency on third-party services
(which you have no control over), potential privacy concerns for users
(as their identity provider may track their logins or share user info),
and potential for a confusing user experience
if a user has multiple OpenID identities.

How it works:

1. The user starts on the Relying Party's website
   (a site that wants to authenticate the user).

2. The user indicates they want to authenticate using OpenID,
   which usually involves selecting their OpenID provider
   and/or entering their OpenID Identifier.

3. The Relying Party uses the user's OpenID identifier
   to discover the user's OpenID provider.
   This typically involves a couple of HTTP requests.

4. The Relying Party redirects the user's browser to their OpenID provider.

5. Assuming authentication is successful at the OpenID provider,
   the provider generates a response that includes
   whether authentication was successful,
   who the user is, and optionally, other information about the user.

6. The OpenID provider then redirects the user's browser back
   to the Relying Party's return URL.
   This redirection request includes the authentication response.

7. The Relying Party verifies the response from the OpenID provider,
   and if everything checks out correctly, the user is now authenticated.

8. The relying party can then give access to the user
   based on the verified identity.

</details>

[//]: # (What is OWASP ZAP and how does it work?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is OWASP ZAP and how does it work?
        </b>
    </summary>
<br>

The OWASP Zed Attack Proxy (ZAP) is one of the world’s
most popular free security tools
for automatically finding security vulnerabilities
in web applications while during the development and testing phase.

This intercepting proxy acts as a man-in-the-middle
between the tester's browser and the web application
so the tester can inspect, intercept and modify the raw traffic
passing in between.

In what situation must use:

- Allow finding vulnerabilities during the web application development phase.
- When you need passive scanning of security vulnerabilities.
- It's open-source and free,
  with a very active community providing regular updates.

Pros:

- Detects a wide range of security vulnerabilities.
- Provides active and passive scanning methods.
- It's highly configurable and versatile.

Cons:

- It might require expertise and customization
  to identify complex security vulnerabilities.
- Comprehensive scans can sometimes be time-consuming.

</details>

[//]: # (What is OWASP Dependency Check and how does it work?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is OWASP Dependency Check and how does it work?
        </b>
    </summary>
<br>

OWASP Dependency Check is an open-source tool
used to detect publicly disclosed vulnerabilities in application dependencies.

It works by checking project dependencies and matching them against
the Common Vulnerabilities and Exposures (CVE) database.

Which is a list of entries—each containing an identification number,
a description, and at least one public reference—for publicly
known cyber-security vulnerabilities.

In what situation must use:

- When you need to identify vulnerabilities in application dependencies.
- When incorporating security checks in your CI/CD pipeline.
- During the application development and testing phase for improved security.

Why better than analogs:

- It's open-source and thus, freely available for use.
- Detailed reporting of vulnerabilities that includes description,
  CVSS scores, and other related details.
- Supports multiple languages and ecosystems, making it highly versatile.

Pros:

- It Can be used as a CI /CD tool, a Maven plugin, an Ant task, or a Jenkins plugin.
- Auto-updates its database from NIST on first run.
- Can generate reports in multiple formats including HTML, JSON, JUnit, etc.

Cons:

- It may return false positives, requiring manual triage.
- Performance might be slow due to large database of vulnerabilities.

</details>
