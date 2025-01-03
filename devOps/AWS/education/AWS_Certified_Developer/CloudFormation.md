<h1>CloudFormation</h1> 
<h4> 

[Back to menu](../../Menu.md)

</h4>

[//]: # (What is CloudFornmation?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is CloudFormation?
        </b>
    </summary>
<br>

AWS CloudFormation is a service that helps you model
and set up your AWS resources so that you can spend
less time managing those resources and more
time focusing on your applications that run in AWS.

Workflow:

- can use YAML or JSON templates
- need to be uploaded to S3
- CloudFormation Service reads template and males api calls
- CloudFormation Stack — this is a resulting set of resources that
  are build by CloudFormation

</details>
<br>

[//]: # (What are the benefits of AWS Cloud Formation?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Serverless Application Model "SAM"?
        </b>
    </summary>
<br>

**AWS CloudFormation offers several benefits:**
Infrastructure as Code: AWS CloudFormation is essentially **infrastructure as code**,
which can create a seamless clone of the server configuration at any time. 
This allows for the infrastructure to be deployed quickly, reliably, and repeatedly.

**Simplified Infrastructure Management:** 
AWS CloudFormation simplifies the management of AWS infrastructure resources 
by assisting in simple modeling and setting up with ease in an orderly manner. 
It allows you to spend less time managing those resources 
and more time focusing on your applications that run in AWS.

**Quick Replication of Infrastructure:** If your application requires additional 
availability, you can easily replicate your infrastructure in multiple regions
using the same CloudFormation template.

**Easy Control and Tracking of Infrastructure Changes:** 
AWS CloudFormation allows you to easily control 
and track changes to your infrastructure. 
If problems occur after you complete an update, 
you can easily roll back your infrastructure to the original settings.

**Automation:** AWS CloudFormation helps to automate the process of creating,
configuring, and managing AWS resources.

**Template-Based Design:** It is easier to build a CloudFormation using
a template design which can be designed with respect to user preference. 
A template describes all your resources and their properties.

In summary, AWS CloudFormation is a powerful tool that can help manage, 
replicate, and track changes to your AWS infrastructure 
in a simplified and automated manner.

https://www.gangboard.com/blog/aws-cloudformation/

</details>
<br>

[//]: # (AWS Cloud Formation use cases?)

<details>
    <summary style="font-size: 25px;">
        <b>
            AWS Cloud Formation use cases?
        </b>
    </summary>
<br>

AWS CloudFormation can be used in a variety of scenarios, including but not limited to:

**Manage Infrastructure with DevOps:** 
AWS CloudFormation can automate, test, 
and deploy infrastructure templates with continuous integration 
and delivery (CI/CD) automations.

**Scale Production Stacks:** 
It can run anything from a single Amazon Elastic Compute Cloud (EC2) 
instance to a complex multi-region application.

**Share Best Practices:** It can define an Amazon Virtual Private Cloud (VPC)
subnet or provisioning services like AWS OpsWorks or 
Amazon Elastic Container Service (ECS) with ease.

**Simplify Infrastructure Management:** 
For a scalable web application that also includes a backend database, 
you might use an Auto Scaling group, an Elastic Load Balancing load balancer, 
and an Amazon Relational Database Service database instance.

**Quickly Replicate Your Infrastructure:** 
If your application requires additional availability,
you can easily replicate it in multiple regions so that
if one region becomes unavailable, your users can still use 
your application in other regions.

**Easily Control and Track Changes to Your Infrastructure:**
In some cases, you might have underlying resources that you want to upgrade incrementally.

https://aws.amazon.com/ru/cloudformation/
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html

</details>
<br>

[//]: # (What happens when a CF stack is updated?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What happens when a CF stack is updated?
        </b>
    </summary>
<br>

When a CloudFormation (CF) stack is updated, the following steps occur:

**Submit Changes:** You submit changes, such as new input 
parameter values or an updated template

**Comparison:** AWS CloudFormation compares the changes
you submit with the current state of your stack.

**Update Resources:** AWS CloudFormation updates only the changed resources.

**Update Methods: AWS CloudFormation provides two methods for updating stacks:** 
direct update or creating and executing change sets.
- Direct Update: When you directly update a stack, you submit 
changes and AWS CloudFormation immediately deploys them
- Change Sets: With change sets, you can preview the changes 
AWS CloudFormation will make to your stack,
and then decide whether to apply those changes

AWS CloudFormation сравнивает отправляемые вами изменения
с текущим состоянием вашего стека и обновляет только измененные ресурсы.

</details>
<br>

[//]: # (What is Serverless Application Model "SAM"?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Serverless Application Model "SAM"?
        </b>
    </summary>
<br>

Define and provision serverless applications using CloudFormation

consists of

- sam package
    - packages your application and uploads to S3
- sam deploy
    - deploys your serverless app using CloudFormation

</details>
<br>

[//]: # (What "SAM" template tags you know?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What "SAM" template tags you know?
        </b>
    </summary>
<br>

    AWSTemplateFormatVersion: '2010-09-09'
    Transform: 'AWS::Serverless-2016-10-31'
    Resources:
      MyFunction:
        Type: 'AWS::Serverless::Function'
        Properties:
          Handler: index.handler 
          //Function within your code that is called to begin execution.
          Runtime: nodejs6.10
          //The runtime environment.
          CodeUri: 's3://my-bucket/function.zip'

</details>
<br>

[//]: # (What is Nested stack?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What is Nested stack?
        </b>
    </summary>
<br>

A Nested Stack in AWS CloudFormation is a stack created as part of another stack.
You create a nested stack within another stack by using 
the AWS::CloudFormation::Stack resource. 
As your infrastructure grows, common patterns 
can emerge in which you declare the same components in multiple templates

Here are some key points about nested stacks:

- **Efficiency:** Reusing common template patterns using nested stacks
is efficient and considered a best practice in CloudFormation.

- **Hierarchy of Stacks:** Nested stacks can themselves contain other nested stacks,
resulting in a hierarchy of stacks

- **Stack Operations:** Certain stack operations, such as stack updates, 
should be initiated from 
the root stack rather than performed directly on nested stacks themselves

- **Template-Based Design:** You can separate out these common 
components and create dedicated templates for them.

[![img](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cfn-console-nested-stacks.png)]

</details>
<br>

[//]: # (What happens with the resources created within a CF stack when that stack is deleted?)

<details>
    <summary style="font-size: 25px;">
        <b>
            What happens with the resources created within a CF stack when that stack is deleted?
        </b>
    </summary>
<br>

When a CloudFormation (CF) stack is deleted, 
AWS CloudFormation deletes all the resources 
that were created as part of that stack1. Here’s the process in detail:

- **Delete Stack Command:** You initiate the delete stack command.

- **Resource Deletion:** AWS CloudFormation deletes all 
the resources associated with the stack. 
The resources are deleted in the reverse order of their creation.

- **Stack Deletion:** Once all the resources are deleted,
the stack itself is deleted.

- **Rollback on Failure:** If a resource can’t be deleted,
any remaining resources are retained until the stack can be successfully deleted.
AWS CloudFormation rolls the stack back and automatically 
deletes any resources that were created.

Please note that you are charged for the stack resources 
for the time they were operating, even if you deleted the stack right away. 
Also, it’s important to remember that some resources might not 
be deleted if there are dependencies outside the stack.

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html

</details>
<br>

[//]: # (Is it possible to test CF templates before creating any resources with them?)

<details>
    <summary style="font-size: 25px;">
        <b>
           Is it possible to test CF templates before creating any resources with them?
        </b>
    </summary>
<br>

Yes, it is possible to test AWS CloudFormation (CF) templates 
before creating any resources with them. 
Here are a few methods:

* **Validate the Template:** AWS provides a command aws cloudformation 
validate-template that checks your template for syntax errors. 
However, this command only checks the syntax of your template 
and does not ensure that the property values specified for a resource 
are valid for that resource. 
It also does not determine the number of resources that will 
exist when the stack is created.
 
* **Use AWS CloudFormation Linter (cfn-lint):** 
This tool validates your CloudFormation templates against the AWS CloudFormation Resource Specification2. It checks for valid values for resource properties and best practices2. Plugins for cfn-lint are available for a number of code editors2.
 
* **Create Change Sets:** 
Before updating your stacks, you can create change sets.
This allows you to see how the changes might impact your resources.

Please note that there is no sandbox or test area for AWS CloudFormation stacks,
so you will be charged for the resources you create during testing. 
Therefore, it’s recommended to delete any resources or 
stacks once you’re done testing to avoid unnecessary charges.

</details>
<br>

[//]: # (Cloud Formation Template anatomy?)

<details>
    <summary style="font-size: 25px;">
        <b>
           Cloud Formation Template anatomy?
        </b>
    </summary>
<br>

    ---
    AWSTemplateFormatVersion: "version date"
    // The AWS CloudFormation template version that the template conforms to
    
    Description:
    String
    // A text string that describes the template.
    
    Metadata:
    template metadata
    // Objects that provide additional information about the template.
    
    Parameters:
    set of parameters
    // Values to pass to your template at runtime
    
    Rules:
    set of rules
    // Validates a parameter or a combination of parameters passed 
    // to a template during a stack creation or stack update.
    
    Mappings:
    set of mappings
    // keys and associated values that you can use to specify conditional
    // parameter values, similar to a lookup table. 
    
    Conditions:
    set of conditions
    // Conditions that control whether certain resources
    
    Transform:
    set of transforms
    // For serverless applications (also referred to as Lambda-based applications),
    //  specifies the version of the AWS Serverless Application Model (AWS SAM) 
    //  to use.
    
    Resources:
    set of resources
    // Specifies the stack resources and their properties like EC2
    
    Outputs:
    set of outputs
    // Describes the values that are returned whenever 
    // you view your stack's properties.

</details>
<br>

[//]: # (What is CF Transform?)

<details>
    <summary style="font-size: 25px;">
        <b>
           What is CF Transform?
        </b>
    </summary>
<br>

The optional Transform section specifies one or more macros 
that AWS CloudFormation uses to process your template. 

The Transform section builds on the simple, 
declarative language of AWS CloudFormation with a powerful macro system.

    // Start of processable content for MyMacro and AWS::Serverless
    Transform:
    - MyMacro
    - 'AWS::Serverless'

</details>
<br>

[//]: # (What is CF Resources?)

<details>
    <summary style="font-size: 25px;">
        <b>
           What is CF Resources?
        </b>
    </summary>
<br>

The Resources section defines the resources you are provisioning. 
Outputs are used to output user defined data relating to the resources 
you have built and can also be used as input to another CloudFormation stack. 
Transforms are used to reference code located in S3.

    Resources:
      MyEC2Instance:
        Type: "AWS::EC2::Instance"
        Properties:
          ImageId: "ami-0ff8a91507f77f867"

</details>
<br>

[//]: # (What is CF Outputs?)

<details>
    <summary style="font-size: 25px;">
        <b>
           What is CF Resources?
        </b>
    </summary>
<br>

The Resources section defines the resources you are provisioning.
Outputs are used to output user defined data relating to the resources
you have built and can also be used as input to another CloudFormation stack.
Transforms are used to reference code located in S3.

    Resources:
      MyEC2Instance:
        Type: "AWS::EC2::Instance"
        Properties:
          ImageId: "ami-0ff8a91507f77f867"

</details>
<br>

[//]: # (What is happened with CF in case of exception during deployment?)

<details>
    <summary style="font-size: 25px;">
        <b>
           What is happened with CF in case of exception during deployment?
        </b>
    </summary>
<br>

The Outputs section is used to output user-defined data relating 
to the resources you have built. 
You can also use the Export field within the Outputs section 
to export values to be used as input for another CloudFormation stack.


    Outputs:
      Logical ID:
        Description: Information about the value
        Value: Value to return
        Export:
        Name: Name of resource to export

</details>
<br>

[//]: # (What we can do to prevent AWS from deleting successfully provisioned resourced during automatic rollback?)

<details>
    <summary style="font-size: 25px;">
        <b>
           What we can do to prevent AWS from deleting successfully provisioned resourced during automatic rollback?
        </b>
    </summary>
<br>

- In the CloudFormation console, for Stack failure options, 
select "Preserve successfully provisioned resources"
- Use the "--disable-rollback" flag with the AWS CLI

</details>
<br>

[//]: # (Cloud Formation vs Step Functions?)

<details>
    <summary style="font-size: 25px;">
        <b>
           Cloud Formation vs Step Functions
        </b>
    </summary>
<br>

- **Cloud Formation** -  deploy AWS resources using an
infrastructure-as-code (IaC) approach
- **Step Functions** - build and model your serverless application

</details>
<br>

[//]: # (Lambda vs Step Functions?)

<details>
    <summary style="font-size: 25px;">
        <b>
           Lambda vs Step Functions?
        </b>
    </summary>
<br>

- Lambda allows developers to run code in the cloud without requiring 
them to configure the underlying infrastructure,
operating systems, or runtime.
  **However, it does not provide any orchestration capabilities.**

- Step Functions is a visual workflow service that helps developers 
use AWS services to build distributed applications.
It automatically triggers and tracks each step and **retries when there are errors**,
so your application executes in order and as expected.

</details>
<br>

---

[//]: # (what is create-stack-set command in AWS CloudFormation template?)

<details>
    <summary style="font-size: 25px;">
        <b>
           What is create-stack-set command in AWS CloudFormation template?
        </b>
    </summary>
<br>

Use the AWS CLI create-stack-set command to create a stack set 
in the desired Regions. 

AWS Cloud Formation Stack Sets allow developers to deploy Cloud Formation
stacks across multiple AWS accounts and regions with a single Cloud Formation
template. 

By using the AWS CLI create-stack-set command, 
the developer can deploy the same Cloud Formation stack to multiple 
regions without additional application code, 
thereby meeting the requirement for geographic load testing of an API.

Reference:
https://aws.amazon.com/ru/about-aws/whats-new/2021/04/deploy-cloudformation-stacks-concurrently-across-multiple-aws-regions-using-aws-cloudformation-stacksets/

</details>
<br>

[//]: # (How do I prevent the resources in my CloudFormation stack from getting deleted or updated?)

<details>
    <summary style="font-size: 25px;">
        <b>
           How do I prevent the resources in my CloudFormation stack from getting deleted or updated?
        </b>
    </summary>
<br>

To prevent deletion or updates to resources in a CloudFormation stack, you can:

- Set the DeletionPolicy attribute to prevent the deletion of an 
individual resource at the stack level.
- Use AWS Identity and Access Management (IAM) policies 
to restrict the ability of users to delete or update a stack and its resources.
- Assign a stack policy to prevent updates to stack resources.
- Turn on termination protection to prevent users from deleting
the stack from the AWS CloudFormation console

</details>
<br>

[//]: # (You have SAM and lambda inside, how you can test lambda locally?)

<details>
    <summary style="font-size: 25px;">
        <b>
           You have SAM and lambda inside, how you can test lambda locally?
        </b>
    </summary>
<br>

The developer can test a specific Lambda function locally by choosing option:
Run the cdk synth and sam local invoke commands with 
the function construct identifier and the path 
to the synthesized CloudFormation template.

The cdk synth command synthesizes and prints the CloudFormation
template for this stack to the console.

The sam local invoke command allows you to invoke 
Lambda functions locally for testing.

</details>
<br>

[//]: # (What is the MOST operationally efficient way to determine the Region in which the template is being deployed?)

<details>
    <summary style="font-size: 25px;">
        <b>
           What is the MOST operationally efficient way to determine the Region in which the template is being deployed?
        </b>
    </summary>
<br>

Use the AWS::Region pseudo parameter.

AWS CloudFormation provides a set of pseudo parameters that are predefined 
by AWS CloudFormation. 

You can use them the same way as you would a parameter, 
as the argument for the Ref function. 

The AWS::Region pseudo parameter is a value that AWS CloudFormation 
resolves as the region where the stack is created

</details>
<br>



