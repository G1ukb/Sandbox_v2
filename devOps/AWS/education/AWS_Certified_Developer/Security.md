<h1>Security</h1>
<h4> 

[Back to menu](../../Menu.md)

</h4>

[//]: # (What is Systems Manager Parameter Store?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Systems Manager Parameter Store?
        </b>
    </summary>
<br>

- **store any secrets as a SecureString**
  (store passwords, db connections, license codes)
- You can store values as plain text or encrypt them
- Reference your parameters using common name
- Integrated with AWS Services (EC2, CloudFormation, Lambda, CodeBuild, CodePipeline)

</details>
<br>

[//]: # (Secrets Manager vs Systems Manager Parameter Store?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Secrets Manager vs Systems Manager Parameter Store?
        </b>
    </summary>
<br>

Choosing between AWS Secrets Manager and
Systems Manager Parameter Store boils down to your specific needs:

- **AWS Secrets Manager**: if you require strong secret management
- **Systems Manager Parameter Store**: If you need to manage both
  secrets and non-secret configuration data

</details>
<br>

[//]: # (What is KMS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is KMS?
        </b>
    </summary>
<br>

KMS - is a key management service

</details>
<br>

[//]: # (What is CMS?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is CMS?
        </b>
    </summary>
<br>

CMS — customer master key

- create your alias
- fill description
- can has a state (enabled/disabled/pending/deletion/unavailable)
- can be customer-provided and aws-provided
- never be exported

</details>
<br>

[//]: # (Main cli KMS commands?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Main cli KMS commands?
        </b>
    </summary>
<br>

- kms encrypt (encrypt plain text)
- kms decrypt
- kms re-encrypt (decrypt text and then encrypt)
- kms enable-key-rotation (enables key rotation every 365)
- kms generate-data-key (generate a data key to encrypt data > 4KB)

</details>
<br>

[//]: # (What is Envelope Encryption? data key)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Envelope Encryption? data key
        </b>
    </summary>
<br>

This is key that encrypt and decrypt data but encrypted one is stored
with the data

chain of encryption ->

CMK -> generateDataKey API -> generate Envelope Key -> Encrypts data
(generated key is also encrypted)

opposite side

encrypted envelope key -> call kms api -> decrypts envelope key
-> decrypts data

</details>
<br>

[//]: # (Why to use envelope encryption?)

<details>
    <summary style="font-size: 25px;">
        <b>
            Why to use envelope encryption?
        </b>
    </summary>
<br>

- network (availability) — when your data is stored with the key,
  you also can transfer it over networks
- performance — only the data key goes over the networks, not your data
- need to be transferred to kms

</details>
<br>

[//]: # (What is KMS AWS managed keys? Can you rotate, manage them?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is KMS AWS managed keys? Can you rotate, manage them?
        </b>
    </summary>
<br>

AWS managed keys are KMS keys in your account that are created,
managed, and used by AWS

You can view AWS managed keys and their key policies
in your account and audit their use in AWS CloudTrail logs.
However, you cannot manage, rotate, or change their key policies.
AWS managed keys are created and managed by AWS for specific services,
such as Amazon S3, Amazon EBS, and Amazon RDS.
These services use AWS managed keys to encrypt your data,
but you cannot use them directly yourself.

</details>
<br>

[//]: # (What is key rotation?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is key rotation?
        </b>
    </summary>
<br>

- This is an automatic encryption that is available in CMKs.
- KMS will rotate the cryptographic material on a yearly basis
- it also saves previous versions of cryptographic material so that you
  can still decrypt the files that were previously encrypted

</details>
<br>

[//]: # (What is key ACM?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is key ACM?
        </b>
    </summary>
<br>

AWS Certificate Manager - we can use/crate and manage SSL/TLS
certificates for securing your website

This tool enables secure connections to your website using HTTPS

**! only can be on us-east-1 region**

</details>
<br>

[//]: # (How can we use client-side encryption to protect the files?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How can we use client-side encryption to protect the files?
        </b>
    </summary>
<br>

**AWS Encryption SDK**

Client-side encryption means you need to encrypt the files
where they are currently stored before uploading them to S3.
You can do this in Lambda by using the AWS Encryption SDK.

</details>
<br>

---

[//]: # (How we can store and share accesse of the access token to AWS account?)

<details>
    <summary style="font-size: 25px;">
        <b>
            How we can store and share access of the access token to AWS accounts?
        </b>
    </summary>
<br>

- Use AWS Secrets Manager with an AWS Key Management Service (AWS KMS)
  customer managed key to store the access token.
- Add a resource-based policy to the secret to allow access from other accounts.
- Update the IAM role of the EC2 instances with permissions to access Secrets
  Manager.
- Retrieve the token from Secrets Manager.
- Use the decrypted access token to send the message to the chat

![img](https://codesuccinctly.files.wordpress.com/2022/03/secret-manager-l-1.png)

</details>
<br>

