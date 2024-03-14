<h1>CodePipeline</h1> 
<h4> 

[Back to menu](..%2F..%2FMenu.md)

</h4>

[//]: # (Deploy written code in AWS using existing CI/CD pipelines, processes, and patterns?)

<details>
    <summary style="font-size: 25px;">
        <b>
           Deploy written code in AWS using existing CI/CD pipelines, processes, and patterns?
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

[//]: # (1.Commit code to a repository and invoke build, test and/or deployment actions)

<details>
    <summary style="font-size: 25px;">
        <b>
            1.Commit code to a repository and invoke build, test and/or deployment actions
        </b>
    </summary>
<br>

[ORIGINAL](https://aws.amazon.com/blogs/devops/complete-ci-cd-with-aws-codecommit-aws-codebuild-aws-codedeploy-and-aws-codepipeline)

![](https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2020/09/30/DevOps_feedback-diagram.png)

Here’s a general process you can follow to perform these actions:

* **Commit code to a repository:**

    git add .
    git commit -m "Your commit message"
    git push origin Your_Branch

- **Invoke build, test and/or deployment actions in AWS:**
AWS provides various services for automating these processes. 
For example, you can use AWS CodeBuild for building and testing your code. 
AWS CodeDeploy can be used for deploying your application.
You can also use AWS CodePipeline to model and visualize your software release process.

Please note that you would need to configure these services 
according to your requirements. 
The exact commands or steps would depend on your specific setup and the nature 
of your application. 
It’s recommended to refer to the official 
AWS documentation or consult with a DevOps professional for detailed guidance.

![](https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2020/09/30/Screen-Shot-2020-09-30-at-6.05.53-PM.png)

</details>
<br>

[//]: # (2.Use labels and branches for version and release management)

<details>
    <summary style="font-size: 25px;">
        <b>
            2.Use labels and branches for version and release management
        </b>
    </summary>
<br>

[ORIGINAL](https://aws.amazon.com/blogs/devops/implementing-gitflow-using-aws-codepipeline-aws-codecommit-aws-codebuild-and-aws-codedeploy/)

In AWS, you can use labels and branches for version and release management 
in the following way:

- **Branches:** Branches in Git allow you to create independent lines of development.
You can use branches in your AWS CodeCommit repository to isolate work 
on different versions of your project. 
For example, you can create a branch for a new feature and then merge that
branch into the main branch when the feature is ready.

- **Labels:** AWS Elastic Beanstalk uses labels to identify different 
versions of your application. 
A label in AWS Elastic Beanstalk is a name you assign to a version of your application. 
The label helps you track different versions of your application.

You can create an application version in the AWS Management Console, 
AWS CLI, or by using an AWS SDK.
When you create a version, you’ll include a label for that version.

</details>
<br>

[//]: # (3.Use AWS CodePipeline to orchestrate workflows against different environments)

<details>
    <summary style="font-size: 25px;">
        <b>
            3.Use AWS CodePipeline to orchestrate workflows against different environments
        </b>
    </summary>
<br>

[ORIGINAL](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments.html)

AWS CodePipeline is a continuous integration and continuous delivery service 
that allows you to manage and automate your workflows for different environments. 
Here’s a high-level overview of how you can use it:

- **Create a Pipeline:** Start by creating a pipeline in AWS CodePipeline. 
This pipeline will define your workflow.

- **Add Stages:** Add stages to your pipeline for each environment 
(e.g., Development, Testing, Staging, Production).
Each stage represents a phase in your release process.

- **Add Actions:** Within each stage, add actions that represent tasks
such as building code, deploying to an environment, or running tests. 
Actions in a stage can run in parallel or in sequence.

- **Connect to Source Repository:** Connect your pipeline to your source repository. 
AWS CodePipeline can integrate with AWS CodeCommit, GitHub, Bitbucket, and more. 
Whenever a change is pushed to your repository, 
AWS CodePipeline will automatically trigger your pipeline.

- **Automate Deployments:** Use AWS CodeDeploy to automate your deployments. 
You can set up deployment actions in your pipeline stages 
to deploy your application to Amazon EC2, AWS Fargate, AWS Lambda, and more.

- **Monitor Your Pipeline:** Monitor your pipeline’s performance, 
and troubleshoot any issues using AWS CloudWatch.

![](https://mongodb-devhub-cms.s3.us-west-1.amazonaws.com/aws_codepipeline_161a68794c.png)

</details>
<br>

[//]: # (4.Apply AWS CodeCommit, AWS CodeBuild, AWS CodePipeline, AWS CodeStar, and AWS 
CodeDeploy for CI/CD purposes)

<details>
    <summary style="font-size: 25px;">
        <b>
            4.Apply AWS CodeCommit, AWS CodeBuild, AWS CodePipeline, AWS CodeStar, 
            and AWS CodeDeploy for CI/CD purposes
        </b>
    </summary>
<br>

[Pinned Guidelines](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials.html)

[Guide](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-simple-s3.html)

* **AWS CodeCommit:** This is where you’ll store your code. 
It’s a fully-managed source control service that hosts Git repositories.


* **AWS CodeBuild:** This service will compile your source code, run tests, 
and produce packages that are ready to deploy. 
You can configure it to automatically build your application whenever 
code is pushed to your CodeCommit repository.


* **AWS CodePipeline:** This service models and visualizes 
your software release process. You can design your entire workflow 
including building, testing, and deploying your applications. 
CodePipeline will orchestrate the steps and provide you with 
a real-time view of the status of your software delivery


* **AWS CodeStar:** This service is an optional layer of convenience 
that helps you quickly develop, build, and deploy applications 
on AWS by providing a unified user interface, 
enabling you to easily manage your software development activities in one place.


* **AWS CodeDeploy:** This service automates your software deployments, 
allowing you to reliably deploy your application at any scale. 
You can deploy your built and tested code to your servers or 
AWS services like AWS Fargate, Amazon EC2, AWS Lambda, and more.

</details>
<br>

[//]: # (5.Perform a roll back plan based on application deployment policy)

<details>
    <summary style="font-size: 25px;">
        <b>
            5. Perform a roll back plan based on application deployment policy
        </b>
    </summary>
<br>

Sure, here’s a high-level overview of how you can perform a
rollback based on your application deployment policy using AWS services:

* **AWS CodeDeploy:** This service has built-in functionality for automatic rollbacks.
You can configure it to automatically roll back when a deployment fails,
or when CloudWatch alarms are triggered.


* **Deployment Configurations:** In AWS CodeDeploy, you can specify 
a deployment configuration that determines the deployment’s rollout and rollback behavior.
For example, you can specify that the deployment should be rolled back if 
less than 95% of the instances are healthy after the deployment.


* **CloudWatch Alarms:** You can set up CloudWatch alarms based on custom 
health metrics or standard metrics like CPU usage, response time, etc. 
If these alarms are triggered during a deployment, AWS CodeDeploy 
can automatically roll back to the last known good state.


* **Manual Rollback:** If you need more control, you can manually stop 
a deployment and then redeploy the previous version of your application.

</details>
<br>
