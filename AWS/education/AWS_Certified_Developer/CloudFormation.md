[//]:# (What is CloudFornmation?)

<details>
    <summary>
        <b><big><big>
            What is CloudFormation?
        </big></big></b>
    </summary>

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

[//]:# (What are the benefits of AWS Cloud Formation?)

<details>
    <summary>
        <b><big><big>
            What is Serverless Application Model "SAM"?
        </big></big></b>
    </summary>

Преимущества CloudFormation:

- <b> Скорость развертывания </b> 

(Сама суть Cloud Formation в том, чтобы
после единовременной настройки Formation не настраивать процесс
деплоя вообще, что играет огромную роль)

- <b> Масштабирование </b> 

(Возможность в любой момент времени контролировать,
уменьшать или увеличивать кол-во развернутых инстансов)

- <b> Интеграция услуг </b> 

(Из-за того что владельцем является AWS есть тонкая настройка
и интеграция предоставляемых услуг сразу на разворачиваемые
инстансы: это могут быть s3, vpc, расширение памяти и т.д.)

- <b> Последовательность </b> 

(CloudFormation гарантирует, что приложения и службы будут
согласованными и идентичными, независимо от того,
сколько экземпляров создается)

- <b> Безопасность </b> 

(Гарантирует снижения риска недосмотра или человеческих ошибок)

- Consistent — infrastructure is provisioned consistently, including mistakes
- Less time and less effort than manual configuring
- Version Control — all templates have versions
- Free to Use
- Can be used to manage updates and dependencies
- Roll back to the previous state or delete the entire stack as well

</details>
<br>

[//]:# (AWS Cloud Formation use cases?)

<details>
    <summary>
        <b><big><big>
            AWS Cloud Formation use cases?
        </big></big></b>
    </summary>

- глобально масштабировать инфраструктуру.
- помогает соблюдать стандарты безопасности,
  соответствия и конфигурации в рамках всей организации,
  учетных записей AWS и регионов.
- легко интегрировать с другими сервисами AWS

</details>
<br>

[//]:# (What happens when a CF stack is updated?)

<details>
    <summary>
        <b><big><big>
            What happens when a CF stack is updated?
        </big></big></b>
    </summary>

AWS CloudFormation сравнивает отправляемые вами изменения
с текущим состоянием вашего стека и обновляет только измененные ресурсы.

</details>
<br>

[//]:# (What is Serverless Application Model "SAM"?)

<details>
    <summary>
        <b><big><big>
            What is Serverless Application Model "SAM"?
        </big></big></b>
    </summary>

Define and provision serverless applications using CloudFormation

consists of

- sam package
    - packages your application and uploads to S3
- sam deploy
    - deploys your serverless app using CloudFormation

</details>
<br>

[//]:# (What "SAM" template tags you know?)

<details>
    <summary>
        <b><big><big>
            What "SAM" template tags you know?
        </big></big></b>
    </summary>

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

[//]:# (What are the essential building blocks which Cloud Formation templates do not work without?)

<details>
    <summary>
        <b><big><big>
            What are the essential building blocks which Cloud Formation templates do not work without?
        </big></big></b>
    </summary>

1. (Необязательный) список параметров шаблона (входные значения)
2. (Необязательный) список выходных значений (например, полный URL-адрес веб-приложения).
3. (Необязательный) список таблиц данных, используемых для поиска значений статической конфигурации (например, имен
   AMI).
4. (Обязательно)    список ресурсов AWS и их значения конфигурации
5. (Обязательно)    номер версии формата файла шаблона
6.

</details>
<br>

[//]:# (Что такое Nested stack?)

<details>
    <summary>
        <b><big><big>
            Что такое Nested stack?
        </big></big></b>
    </summary>

Вложенные стеки — это стеки, созданные как часть других стеков.
Вы создаете вложенный стек в другой стек,
используя ресурс AWS::CloudFormation::Stack.

По мере роста вашей инфраструктуры могут появляться общие шаблоны,
в которых вы объявляете одни и те же компоненты в нескольких шаблонах.
Вы можете выделить эти общие компоненты и создать для них специальные
шаблоны. Затем используйте ресурс в своем шаблоне для ссылки на другие
шаблоны, создавая вложенные стеки.

[![img](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cfn-console-nested-stacks.png)]

</details>
<br>

[//]:# (What is the order of resource creation in CF stacks?)

<details>
    <summary>
        <b><big><big>
            What is the order of resource creation in CF stacks?
        </big></big></b>
    </summary>

С помощью атрибута DependsOn вы можете указать,
что создание определенного ресурса следует за другим.
Когда вы добавляете атрибут DependsOn к ресурсу,
этот ресурс создается только после создания ресурса,
указанного в атрибуте DependsOn.

</details>
<br>

[//]:# (What happens with the resources created within a CF stack when that stack is deleted?)

<details>
    <summary>
        <b><big><big>
            What happens with the resources created within a CF stack when that stack is deleted?
        </big></big></b>
    </summary>

AWS CloudFormation обеспечивает создание или удаление всех ресурсов
стека по мере необходимости.

Поскольку AWS CloudFormation обрабатывает ресурсы стека как единое целое,
все они должны быть успешно созданы или удалены,
чтобы стек был создан или удален.

Если ресурс создать не удается, AWS CloudFormation выполняет
откат стека и автоматически удаляет все созданные ресурсы.

Если ресурс невозможно удалить, все оставшиеся ресурсы
сохраняются до тех пор, пока стек не будет успешно удален.

</details>
<br>

[//]:# (Is it possible to test CF templates before creating any resources with them?)

<details>
    <summary>
        <b><big><big>
           Is it possible to test CF templates before creating any resources with them?
        </big></big></b>
    </summary>

Прежде чем использовать шаблон для создания или обновления стека,
вы можете использовать CloudFormation для его проверки.
Проверка шаблона может помочь вам обнаружить синтаксические
и некоторые семантические ошибки, такие как циклические зависимости,
до того, как CloudFormation создаст какие-либо ресурсы.

</details>
<br>

[//]:# (What is CF pricing?)

<details>
    <summary>
        <b><big><big>
           What is CF pricing?
        </big></big></b>
    </summary>

Общая сумма = (операции стороннего обработчика * цена за обработчик)

+ (продолжительность свыше 30 секунд * цена за секунду)

</details>
<br>

[//]:# (Cloud Formation Template anatomy?)

<details>
    <summary>
        <b><big><big>
           Cloud Formation Template anatomy?
        </big></big></b>
    </summary>

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

[//]:# (What is CF Transform?)

<details>
    <summary>
        <b><big><big>
           What is CF Transform?
        </big></big></b>
    </summary>

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

[//]:# (What is CF Resources?)

<details>
    <summary>
        <b><big><big>
           What is CF Resources?
        </big></big></b>
    </summary>

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

[//]:# (What is CF Outputs?)

<details>
    <summary>
        <b><big><big>
           What is CF Resources?
        </big></big></b>
    </summary>

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

[//]:# (What is happened with CF in case of exception during deployment?)

<details>
    <summary>
        <b><big><big>
           What is happened with CF in case of exception during deployment?
        </big></big></b>
    </summary>

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

[//]:# (What we can do to prevent AWS from deleting successfully provisioned resourced during automatic rollback?)

<details>
    <summary>
        <b><big><big>
           What we can do to prevent AWS from deleting successfully provisioned resourced during automatic rollback?
        </big></big></b>
    </summary>

- In the CloudFormation console, for Stack failure options, 
select "Preserve successfully provisioned resources"
- Use the "--disable-rollback" flag with the AWS CLI

</details>
<br>

[//]:# (Cloud Formation vs Step Functions?)

<details>
    <summary>
        <b><big><big>
           Cloud Formation vs Step Functions
        </big></big></b>
    </summary>

- **Cloud Formation** -  deploy AWS resources using an
infrastructure-as-code (IaC) approach
- **Step Functions** - build and model your serverless application

</details>
<br>

[//]:# (Lambda vs Step Functions?)

<details>
    <summary>
        <b><big><big>
           Lambda vs Step Functions?
        </big></big></b>
    </summary>

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

[//]:# (what is create-stack-set command in AWS CloudFormation template?)

<details>
    <summary>
        <b><big><big>
           What is create-stack-set command in AWS CloudFormation template?
        </big></big></b>
    </summary>

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

[//]:# (How do I prevent the resources in my CloudFormation stack from getting deleted or updated?)

<details>
    <summary>
        <b><big><big>
           How do I prevent the resources in my CloudFormation stack from getting deleted or updated?
        </big></big></b>
    </summary>

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

[//]:# (You have SAM and lambda inside, how you can test lambda locally?)

<details>
    <summary>
        <b><big><big>
           You have SAM and lambda inside, how you can test lambda locally?
        </big></big></b>
    </summary>

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

[//]:# (What is the MOST operationally efficient way to determine the Region in which the template is being deployed?)

<details>
    <summary>
        <b><big><big>
           What is the MOST operationally efficient way to determine the Region in which the template is being deployed?
        </big></big></b>
    </summary>

Use the AWS::Region pseudo parameter.

AWS CloudFormation provides a set of pseudo parameters that are predefined 
by AWS CloudFormation. 

You can use them the same way as you would a parameter, 
as the argument for the Ref function. 

The AWS::Region pseudo parameter is a value that AWS CloudFormation 
resolves as the region where the stack is created

</details>
<br>



