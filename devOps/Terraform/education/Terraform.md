<h1>Terraform</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (Can you delve deeper into Terraform 
        and illustrate its use with an example?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you delve deeper into Terraform 
            and illustrate its use with an example?
        </b>
    </summary>
<br>

Terraform is a popular Infrastructure as Code (IaC) tool 
that allows you to define and provide data center infrastructure 
using a declarative configuration language.

Terraform uses text files, often referred to as "Terraform files" 
or "Terraform configurations," 
which describe the desired state of the infrastructure.

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "bucket" {
  bucket = "terraform-bucket-example"
  acl    = "private"

  tags = {
    Managed = "Terraform"
  }
}
```

After writing the script, running `terraform init` sets up
the Terraform working directory. 
Next, `terraform plan` lets you visualize what changes will be made, 
and `terraform apply` performs those changes. 
To delete the created resources, `terraform destroy` would be used.

In what situation must use: 
Whenever the requirement is to manage a wide range of service providers, 
or the need for unifying cloud service architectures or 
when a repeatable infrastructure setup is essential, Terraform comes to rescue.

Why better than analogs: Terraform shines in multi-cloud environments. 
The ability to handle complex dependencies visually is one of 
Terraform's distinctive features compared to other IaC tools.

Pros:
1. Cloud-agnostic approach facilitates the management of diverse resources.
2. Terraform configuration files are easy-to-understand and 
self-document the infrastructure.
3. Ability to preview changes before actual execution ensures safer deployments.

Cons:
1. Managing remote state (json file with changes) can be complicated, 
and resource dependencies can sometimes be difficult to handle.
2. Unique syntax used

</details>
<br>