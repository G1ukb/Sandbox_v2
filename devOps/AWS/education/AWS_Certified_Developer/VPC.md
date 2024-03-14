<h1>VPC</h1>
<h4> 

[Back to menu](..%2F..%2FMenu.md)

</h4>

[//]: # (What is VPC?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is VPC?
        </b>
    </summary>
<br>

Virtual Private Cloud (VPC) -
it is a secure, isolated private cloud hosted on a public cloud.
VPCs combine the scalability and convenience of public cloud computing
with data isolation for private cloud computing.

</details>
<br>

[//]: # (What is VPC?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What kinds of IP addresses does AWS VPC offer?
        </b>
    </summary>
<br>

Amazon VPC currently supports five (5) IP address ranges,
one (1) primary and four (4)
secondary for IPv4.
Each of these ranges can range in size from /28 (in CIDR notation) to /16.

</details>
<br>

[//]: # (What happens to different IP address types when an EC2 instance is rebooted, stopped, started?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What happens to different IP address types when an EC2 instance is rebooted, stopped, started?
        </b>
    </summary>
<br>

- private ip does not change
- public ip and dns will change

</details>
<br>

[//]: # (What is elastic IP?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is elastic IP?
        </b>
    </summary>
<br>

An elastic IP address is a reserved public IP address 
that you can assign
any EC2 instance in a specific region until you decide 
to release it.

</details>
<br>

[//]: # (How many elastic IPs is it possible to create per account/region?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How many elastic IPs is it possible to create per account/region?
        </b>
    </summary>
<br>

All AWS accounts are limited to five elastic 
IP addresses per region.
They can be changed for an additional fee.

</details>
<br>

[//]: # (What is elastic network interface?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is elastic network interface?
        </b>
    </summary>
<br>

Elastic Network Interface is a logical network component in a VPC,
representing a virtual network card. It may include the following attributes:

* The primary private IPv4 address from your VPC's IPv4 
address range.
* One or more additional private IPv4 addresses from your
  VPC's IPv4 address range.
* One elastic IP address (IPv4)
* One public IPv4 address
* One or more IPv6 addresses
* One or more security groups
* MAC address

</details>
<br>

[//]: # (What is CIDR?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is CIDR?
        </b>
    </summary>
<br>

CIDR was developed as an alternative to traditional subnetting.
The idea is that you can add to the IP address 
itself a specification of the number of significant bits,
forming part of a routing or network.
127.0.0.0/24 tells us that the first 24 bits 
of a given IP address are considered important for network routing.

</details>
<br>

[//]: # (What is NAT?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is NAT?
        </b>
    </summary>
<br>

Network Address Translation (NAT) devices,
running on a public subnet, allow instances on a private
subnets to connect to the Internet,
but do not allow the Internet to initiate connections to instances.

NAT routes traffic from a private subnet to the Internet, replacing
source IP address with its address,
and for response traffic it converts the address back to private
Instance IP addresses.

</details>
<br>

[//]: # (NAT vs VPC vs Internet Gateway "IGW"?)

<details>
    <summary style="font-size: 25px;">
        <b>
            NAT vs VPC?
        </b>
    </summary>
<br>

A Virtual Private Cloud (VPC) and a Network Address Translation (NAT) 
gateway are both components of a network infrastructure, 
but they serve different purposes.

VPC (Virtual Private Cloud): A VPC is a virtual network dedicated 
to your AWS account. It is logically isolated from other virtual 
networks in the AWS Cloud.

NAT (Network Address Translation) Gateway: 
A NAT gateway enables instances in a private subnet 
to connect to the internet or other AWS services, 
but it prevents the internet from initiating connections with those instances

</details>
<br>

[//]: # (What is difference between NAT Gateway and NAT Instance?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is difference between NAT Gateway and NAT Instance?
        </b>
    </summary>
<br>

The significant difference is that GateWay -
automated system controlled by Amazon
and NAT Instance is a special case of deeper settings.

NAT Instance does not provide the same availability 
and throughput
and it needs to be customized according to the needs 
of the application.

NAT instances must have security groups,
associated with incoming traffic from private
subnets and outgoing traffic to the Internet.

</details>
<br>

[//]: # (What is security groups?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is security groups?
        </b>
    </summary>
<br>

A security group controls the traffic allowed 
to reach and leave the resources that it is associated with. 

For example, after you associate a security group with an EC2 instance, 
it controls the inbound and outbound traffic for the instance.

</details>
<br>

[//]: # (What does "local” target mean in terms of an AWS routing table?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What does "local” target mean in terms of an AWS routing table?
        </b>
    </summary>
<br>

Target => Where you want to send traffic for 
the specified destination
(if the destination is my local subnet, 
specify the destination as "local")

</details>
<br>

[//]: # (What is bastion in terms of networking?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is bastion in terms of networking?
        </b>
    </summary>
<br>

A bastion host is a special computer on a network specifically
designed and configured to protect against attacks.
A computer typically hosts one application or process,
such as a proxy server or load balancer,
and all other services are removed or limited,
to reduce the threat to your computer.

</details>
<br>
