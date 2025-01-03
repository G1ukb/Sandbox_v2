<h1>EC2</h1> 
<h4> 

[Back to menu](../../Menu.md)

</h4>

[//]: # (EC2 Instance Types?)

<details>
    <summary style="font-size: 25px;">
        <b>
            EC2 Instance Types?
        </b>
    </summary>
<br>

* **General Purpose Instances:** These instances provide a balance of compute,
memory, and networking resources, and can be used for a variety of diverse workloads.
They are ideal for applications that use these resources in equal proportions
such as web servers and code repositories.

* **Compute Optimized Instances:** These instances are ideal for compute-bound
applications that benefit from high-performance processors.

* **Memory Optimized Instances:** These instances are designed to 
deliver fast performance for workloads that process large data sets in memory.

* **Storage Optimized Instances:** These instances are designed for 
workloads that require high, sequential read and write access to 
very large data sets on local storage.

* **Accelerated Computing Instances:** These instances use hardware accelerators,
or co-processors, to perform functions, 
such as floating-point number calculations, graphics processing, 
or data pattern matching, more efficiently than is possible in software running on CPUs.

</details>
<br>

[//]: # (What types of volumes are offered by EC2?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What types of volumes are offered by EC2?
        </b>
    </summary>
<br>

- **General Purpose SSD (gp2 and gp3):** These are suitable for a broad 
range of workloads, including virtual desktops,
low-latency interactive apps, and dev/test environments.


- **Provisioned IOPS SSD (io1 and io2):** These are designed for
I/O-intensive applications such as large relational or NoSQL databases.


- **io2 Block Express volumes:** These offer higher performance 
and are ideal for your largest, most I/O intensive, mission-critical deployments.


- **Throughput Optimized HDD (st1):** 
These are designed for frequently accessed, 
throughput-intensive workloads with large datasets and large I/O sizes.


- **Cold HDD (sc1):** These are designed for less frequently accessed workloads.

</details>
<br>

[//]: # (What is the difference between AMI and snapshot in terms of EC2?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between AMI and snapshot in terms of EC2?
        </b>
    </summary>
<br>

- **Amazon Machine Image (AMI):** An AMI is a template that contains 
a software configuration (for example, an operating system, an application server,
and applications). 
It includes one or more Amazon Elastic Block Store (EBS) snapshots or, 
for instance-store-backed AMIs, a template for the root volume of the instance. 
When you create an AMI of an existing EC2 instance, 
a snapshot is taken for all the volumes that are attached to the instance. 
You can use AMIs to launch new instances with preconfigured software and data.

- **Snapshot:** A snapshot is a point-in-time copy of your data.
It is a backup of the disk drive. You can’t use snapshots to launch a new instance, 
but you can use them to replace volumes on an existing instance. 
If you experience data corruption or a volume failure, 
you can create a volume from a snapshot that you have 
taken and replace the old volume. 
You can also use snapshots to provision new volumes and attach them during 
a new instance launch.

</details>
<br>

[//]: # (How is it possible to install/configure software on a EC2 instance?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How is it possible to install/configure software on a EC2 instance?
        </b>
    </summary>
<br>

sudo yum install links

</details>
<br>

[//]: # (What keys are created for each EC2 instance? What for?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What keys are created for each EC2 instance? What for?
        </b>
    </summary>
<br>

* **The public key** is stored on your EC2 instance, 
and it is placed in an entry within ~/.ssh/authorized_keys
when your instance boots for the first time.


* **The private key** is stored by you. 
It allows you to securely SSH into your instance. 
Anyone who possesses your private key can connect to your instances, 
so it’s important that you store your private key in a secure place

</details>
<br>

[//]: # (What happens to EC2 instances when they are stopped and started vs re-started?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What happens to EC2 instances when they are stopped and started vs re-started?
        </b>
    </summary>
<br>

When you stop and start an Amazon EC2 instance, 
it involves giving up the physical hardware that the server was running 
on and EC2 is free to start somebody else’s instance there. 

Here are some key points to note:

* Your EBS boot volume (and other attached EBS volumes) are still preserved.
* When you start the instance again, EC2 picks some hardware to run it on, 
ties in the EBS volume(s), and boots it up again.
* The instance gets a new internal and external IP address.
* If an Elastic IP address was associated with the instance before 
it was stopped, then you’ll need to re-associate it after the start.
* Any contents on the instance’s former ephemeral storage were wiped
and you are given fresh ephemeral storage.
* A fresh billing hour is started for the instance when you start it again.

On the other hand, when you reboot an instance, 
it’s a simple reboot at the OS level and the instance 
stays running on the same hardware. Here are some key points to note:

* The instance keeps the same private and public IP addresses.
* If an Elastic IP address was associated, it remains associated.
* The same ephemeral storage is kept without getting wiped.
* No new billing hour is started on a reboot.

</details>
<br>

[//]: # (What is the difference between IAM roles and EC2 VPC security groups?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between IAM roles and EC2 VPC security groups?
        </b>
    </summary>
<br>

- **IAM Roles:** An IAM role is an identity within your AWS account that
has specific permissions. It is similar to an IAM user, 
but is not associated with a specific person. 
IAM roles determine which AWS API commands can be executed using the 
AWS CLI or any of the many AWS SDKs. 
You can temporarily assume an IAM role in the AWS Management Console by switching roles.
IAM roles, users, and groups have nothing to do with accessing your EC2 instance.

- **EC2 VPC Security Groups:** Security groups act like a 
firewall for your EC2 instances. 
They determine which computers can connect to your EC2 instance 
and on which ports other computers can connect. 
For example, they can specify that the world can connect to your HTTP port, 
or that only your local computer can SSH into the EC2 instance. 
The security groups say nothing about which people can connect to your EC2 instance.

</details>
<br>

[//]: # (Is it possible to decrease the size of an existing EBS volume?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Is it possible to decrease the size of an existing EBS volume?
        </b>
    </summary>
<br>

No, it is not possible to directly decrease the size of an existing Amazon EBS volume.
The size of an EBS volume can only be increased, not decreased.

However, there is a workaround to effectively reduce the size of an EBS volume:

* Create a snapshot of the current volume.
* Create a new, smaller EBS volume.
* Attach the new volume to your EC2 instance.
* Format the new volume.
* Mount the new volume.
* Copy the data from the old volume to the new volume.
* Prepare the new volume for use.
* Detach and unmount the old volume.

https://medium.com/@m.yunan.helmy/decrease-the-size-of-ebs-volume-in-your-ec2-instance-ea326e951bce
https://repost.aws/knowledge-center/ebs-increase-decrease-volume-size

</details>
<br>

[//]: # (Is it possible to reuse a EBS volume for multiple instances?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Is it possible to reuse a EBS volume for multiple instances?
        </b>
    </summary>
<br>

Yes, it is possible to reuse an EBS volume for multiple instances using
a feature called Amazon EBS Multi-Attach. 
This feature allows you to attach a single Provisioned IOPS SSD (io1 or io2) 
volume to multiple instances that are in the same Availability Zone. 
You can attach multiple Multi-Attach enabled volumes to an instance or set of instances.

</details>
<br>

[//]: # (How is it possible to get such metadata as current region/AZ from within a running EC2 instance?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How is it possible to get such metadata as current region/AZ from within a running EC2 instance?
        </b>
    </summary>
<br>

AWS API Url get
http://169.254.169.254/latest/meta-data/

Java SDK static EC2Instance.getMetadata();

</details>
<br>

[//]: # (What are the available elastic load balancer types? What is the key difference between them?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What are the available elastic load balancer types? What is the key difference between them?
        </b>
    </summary>
<br>

- **Application Load Balancers:** These are used to route HTTP/HTTPS (or Layer 7) traffic. 
An Application Load Balancer makes routing decisions at the application 
layer (HTTP/HTTPS), supports path-based routing, 
and can route requests to one or more ports on each container instance in your cluster.

- **Network Load Balancers:** These are used to route TCP (or Layer 4) traffic. 
A Network Load Balancer makes routing decisions at the transport layer (TCP/SSL). 
It can handle millions of requests per second.

- **Gateway Load Balancers:** These are used to manage and deploy network 
security systems in a scalable manner.

- **Classic Load Balancers:** These provide basic load balancing across multiple 
Amazon EC2 instances and operate at both the request level and connection level.

</details>
<br>

[//]: # (What are the key events in EC2 instance lifecycle?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What are the key events in EC2 instance lifecycle?
        </b>
    </summary>
<br>


* Start -> Pending -> Running -> Rebooting 
* Shutting-Down -> Terminating 
* Stopping -> Stopped

![img](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/instance_lifecycle.png)

</details>
<br>

[//]: # (EC2 Instance Pricing Options?)

<details>
    <summary style="font-size: 25px;">
        <b>
            EC2 Instance Pricing Options? (On Demand/Reserved/Spot/Dedicated)
        </b>
    </summary>
<br>

- On Demand - pay the hour or the second
- Reserved - reserved capacity for one or three years. Up to 72% discount
- Spot - purchase unused capacity (90% discount)
- Dedicated - physical ec2 - most expensive

</details>
<br>

[//]: # (What is AMI?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is AMI? What is EC2 Image builder?
        </b>
    </summary>
<br>

AMI (Amazon Machine Images) - is configuration of setup EC2 env.

EC2 Image Builder is a tool there you can build your own EC2 instance 
  by using already worked ec2 instance by coping all settings

This is suitable in situation where you are not created previous ec2 
  and need a quick copy 

</details>
<br>

[//]: # (In order to enable encryption using EC2 and Elastic Block Store, you must?)

<details>
    <summary style="font-size: 25px;">
        <b>
            In order to enable encryption using EC2 and Elastic Block Store, you must?
        </b>
    </summary>
<br>

Configure encryption when creating the EBS volume -
When you create a new, empty EBS volume, you can encrypt it by
enabling encryption for the specific volume creation operation.

</details>
<br>

[//]: # (How you can encrypt AMI if you already have unencrypted AMI?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How you can encrypt AMI if you already have unencrypted AMI?
        </b>
    </summary>
<br>

It is not possible to encrypt an AMI after it has been created. 
You will need to create a copy of the AMI and add encryption for the copy.

</details>
<br>

[//]: # (Where you can store user session state?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Where you can store user session state?
        </b>
    </summary>
<br>

- Store session state in DynamoDB (preferred)
- Use an ElastiCache cluster

</details>
<br>