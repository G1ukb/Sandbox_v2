<h1>DevOps core</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (Why do we use an IP address mask 
        and how does it work in the context of java?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Why do we use an IP address mask 
            and how does it work in the context of java?
        </b>
    </summary>
<br>

We use an IP subnet mask, also known as netmask, 
to identify the network portion of an IP address. 
It helps us divide a network into subnetworks or subnets, 
which can improve network performance and security. 

The subnet mask determines which part of the IP address refers 
to the network and which part refers to the host.

In Java, you can use the InetAddress class to work with IP addresses and masks.

```java
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.nio.ByteBuffer;

public class SubnetMaskExample {
    public static void main(String[] args) throws UnknownHostException {
        // Define the IP address
        InetAddress ip = InetAddress.getByName("192.168.1.0");
        
        // Define the mask length (e.g., 24 for a typical Class C network)
        int maskLength = 24;
        
        // Calculate the mask bytes
        int maskBytesInt = -1 << (32 - maskLength);
        byte[] maskBytes = ByteBuffer.allocate(4).putInt(maskBytesInt).array();
        
        // Convert the mask bytes to an InetAddress
        InetAddress mask = InetAddress.getByAddress(maskBytes);
        
        System.out.println("IP Address: " + ip.getHostAddress());
        System.out.println("Mask: " + mask.getHostAddress());
    }
}
```

A /24 subnet mask, also called a Class C network, 
uses the first 24 bits for the network address 
and leaves the last 8 bits for host addresses. 
This gives us 256 possible addresses (from 2^8), 
but only 254 usable addresses, 
as the first is the network address, and the last is the broadcast address.

Similarly, a /16 subnet mask, or Class B network, 
uses the first 16 bits for the network address 
and the remaining 16 bits for host addresses. 
This gives us 65,536 possible addresses (from 2^16), 
but 65,534 usable ones, 
again subtracting the network address and broadcast address.

</details>
<br>



