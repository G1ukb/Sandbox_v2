<h1>Elastic Load Balancing (ELB)</h1> 
<h4> 

[Back to menu](../../Menu.md)

</h4>

[//]: # (What is Elastic load balancing [ELB]?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Elastic load balancing [ELB]? Why use a load balancer?
        </b>
    </summary>
<br>

Elastic Load Balancer is a managed load balancer.
It helps balance traffic between several downstream instances (for example EC2)

**Advantages**
- Distribute the load among multiple slave instances
- Provide a single point of access (DNS) for your application.
- Work seamlessly with downstream instances.
- Regularly check the performance (heilchecks) of your copies.
- Separates public traffic from private (giving priority to private)
- Integrated and works with other AWS services as needed
  (EC2, EC2 Auto Scaling Groups, Amazon ECS)

</details>
<br>

[//]: # (What is Health Checks in ELB?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Health Checks in ELB?
        </b>
    </summary>
<br>

Health checks are critical for load balancers.
They allow the load balancer to know which instances it is forwarding traffic to.

Health check is performed per port and route (/health is general)
If the response is not 200 (OK), the instance is faulty.
And the traffic stops for this instance and is distributed further

</details>
<br>

[//]: # (Types of load balancer on AWS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Types of load balancer on AWS?
        </b>
    </summary>
<br>

**There are 4 types of load balancers**

1) **Classic Load Balancer (CLB)** (v1 - old generation) - 2009
   HTTP, HTTPS, TCP, SSL (TCP Secure)

2) **Application Load Balancer (ALB)** (v2 - new generation) - 2016
   HTTP, HTTPS, websocket

3) **Network Load Balancer (NLB)** (v2 - new generation) - 2017
   TCP, TLS (TCP Secure), UDP

4) **Gateway Load Balancer (GWLB)** - 2020
   Operates at Layer 3 (Network Layer) – IP Protocol

</details>
<br>

[//]: # (Explain work of the ALB?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Explain work of the Application Load balancer (ALB)?
        </b>
    </summary>
<br>

Application Load Balancer (v2)

It is now possible to combine instances into groups to which ALB will be routed
using certain rules

**Routing rules:**
- Route based on URL path (example.com/users and example.com/posts).
- Routing based on hostname in URL (one.example.com and other.example.com)
- Routing based on query string, headers (example.com/users?id=123&order=false)
- ALBs are great for microservices and container-based applications.
  (example: Docker and Amazon ECS)
- Has a port mapping feature to forward to a dynamic port in ECS.

**What you should pay close attention to**

Services that process a request coming from a client (and distributed using ALB)
do not see the user's end host because ALB moves this information into headers
request

- The true client IP is inserted into the **X-Forwarded-For** header
- Port **X-Forwarded-Port**
- Proto* **X-Forwarded-Proto**

</details>
<br>

[//]: # (Explain work of the NLB?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Explain work of the Network Load Balancer (NLB)?
        </b>
    </summary>
<br>

Network load balancers (layer 4) allow you to:
- Redirect TCP and UDP traffic to your instances.
- Process millions of requests per second
- Lower latency ~100ms (compared to 400ms for ALB)
- NLB has one static IP address per Availability Zone
  and supports the assignment of elastic IP addresses.
  (useful for whitelisting specific IP addresses)
- NLB is used for maximum performance, TCP or UDP traffic.
- Not included in the AWS Free Tier.

TCP and HTTP hosts are used as redirection masks (TCP + Rules)

NLB also connects to groups waiting for it, namely:
- to a group of EC2 machines (grouped by their names)
- to a group of machines united by a group of private IPs
- to enabled ALB

</details>
<br>

[//]: # (Explain work of the GWLB?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Explain work of the Gateway Load Balancer (GWLB)?
        </b>
    </summary>
<br>

GWLB is useful to us if we need it before the end point (Ec2)
will receive a request from the user, additionally pass it through third-party
proxy instances (ec2). This could be a security check, targetint, security, etc.

![](https://d2908q01vomqb2.cloudfront.net/5b384ce32d8cdef02bc3a139d4cac0a22bb029e8/2021/07/08/Screen-Shot-2021-07-08-at-12.39.00-PM.png)

</details>
<br>

[//]: # (What is Sticky Sessions [Session Affinity]?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Sticky Sessions (Session Affinity)?
        </b>
    </summary>
<br>

AWS ELB offers the ability to implement stickiness so that
the same client is always redirected to the same
instance** behind load balancer

- This works for CLB and ALB
- the system is implemented through the “Cookie” used for sticking,
  having an expiration date that you control

**Enabling stickiness may cause imbalanced loading of EC2 server instances**

**Cookies are divided into two types**
1) Application Based Cookies
  - Can include any custom attributes required by the application.
  - The cookie name must be specified individually for each target group.
    (This means that if the user somehow ends up in a different target group,
    prescribed cookies may not work)
  - Do not use AWSALB, AWSALBAPP or AWSALBTG (reserved for ELB use).

2) Duration based cookies
  - Cookie created by the load balancer.
  - Cookie name: AWSALB for ALB, AWSELB for CLB.

</details>
<br>

[//]: # (What is Cross-Zone Load Balancing?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Cross-Zone Load Balancing?
        </b>
    </summary>
<br>

**With Cross-zone load balancing:**
- each load balancer instance is distributed evenly
  in all registered copies in all AZ
  (This means that if there are 2 zones (A and B) and 2 EC2 are running in zone A, and 10 in B.
  And the load on the zones from the client is distributed in half (50/50), then regardless of this
  all instances in all zones will participate in balancing)

![](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/images/cross_zone_load_balancing_enabled.png)

**Without load balancing between zones:**
- Requests are distributed across instances only within the zone
  (i.e. from the situation above. 50% load on zone A where 2 ec2 will be divided only between instances
  in this AZ 25/25)

</details>
<br>

[//]: # (What is ELB SSL Certificates?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is ELB SSL (TLS) Certificates?
        </b>
    </summary>
<br>

**The SSL certificate allows traffic between your clients and the load balancer
be encrypted during transmission (in-flight encryption)**
- SSL refers to the secure sockets layer used to encrypt connections.
- TLS refers to Transport Layer Security which is a newer version.
- TLS certificates are mostly used nowadays, but people still call them SSL.
- Public SSL certificates are issued by CA Certificate Authorities.
- SSL certificates have an expiration date (set by you) and must be renewed
- You can manage certificates using ACM (AWS Certificate Manager).
- Clients can use SNI (Server Name Indicator),
  to specify the hostname they are accessing.

**Server Name Indication (SNI)**
- SNI solves the problem of loading multiple SSL certificates onto one web server
  (to serve multiple websites).
- This is a "newer" protocol that requires the client
  specified the hostname of the target server in the initial SSL call
  After this, the server will find the correct certificate or return the default certificate
- (**NOTE**) Works only for ALB and NLB (new generations), CloudFront

Therefore, if we need multi-certificates to access several resources
- Multiple CLBs must be used for multiple hostnames with multiple SSL certificates.
- For new versions of ELB, Server Name Indication (SNI) is used

![](https://miro.medium.com/max/1400/1*wV9ShOOD95MMyXE2fzZ6Lg.png)

</details>
<br>

[//]: # (What is ELB Connection Draining?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is ELB Connection Draining?
        </b>
    </summary>
<br>

Titles:
- Connection Draining - if it is a CLB
- Deregistration Delay - if it is ALB or NLB

This feature represents **time to complete "in-flight queries"** while
the instance is deregistered or is inoperative. Those. in case what time is ELB
necessary in order to understand that the final service is not available and send requests
to a new ec2 instance.

This variable can be set from 1 to 3600 seconds (300 (5 minutes) is the default. 0 is disabled)

If the site requires a fast response, the threshold is set to a low value
(for example 30 seconds).

</details>
<br>

[//]: # (What is an ELB Auto Scaling Group?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is an ELB Auto Scaling Group?
        </b>
    </summary>
<br>

**Auto Scaling Group (ASG) Goal:**
- Scaling up (adding EC2 instances) to accommodate increased workload.
- Scaling (removing EC2 instances) according to the reduced load.
- Making sure we have a minimum and maximum number of EC2 instances running.
- Automatically register new instances with the load balancer.
- Re-creation of an EC2 instance if the previous instance terminates
  (for example, if it is inoperative).

**A very cool feature is to scale ASG based on CloudWatch alarms**
- The alarm monitors a metric (such as a CPU average or a custom metric).
- Metrics such as average CPU utilization are calculated for all ASG instances.
- Based on alarm:
  - You can increase the maximum number of instances
  - You can reduce the maximum number of instances

</details>
<br>

[//]: # (What is an ELB Auto Scaling Group?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is an ELB ASG Dynamic Scaling Policies?
        </b>
    </summary>
<br>

Auto Scaling Groups - **Dynamic Scaling Policies**
- The simplest and easiest to configure instance expansion policies for ASG
  - For example
    - When a CloudWatch alarm is triggered (eg CPU > 70%), add 2 units.
    - When a CloudWatch alarm is triggered (e.g. CPU < 30%), remove 1
  - There are also planned actions
    - Increase at 3.00 decrease at 13.00
  - Allow for scaling based on known usage patterns.
    - Increase minimum capacity to 10 at 5:00 pm on Fridays.

There is also a function **predictive scaling**
- Based on these ASG and ELB performance metrics, you can create 
a policy taking into account the load forecast

**Good indicators for scaling**
- CPUUtilization: Average CPU utilization. use in your instances
- RequestCountPerTarget: to make sure the number of requests on EC2 instances is stable
- Average network input/output (if your application is network bound)
- Any custom metric (that you obtained using CloudWatch)

**After scaling, a cool-down period is triggered (default 300 seconds)**.
During the recovery period, ASG will not start or stop additional
instances (so that the metrics stabilize)

</details>
<br>
