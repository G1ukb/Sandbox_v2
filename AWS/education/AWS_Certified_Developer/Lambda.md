<h1> Lambda </h1>

[//]:# (Lambdas vs. ec2)

<details>
    <summary>
        <b><big><big>
            Lambdas vs. ec2?
        </big></big></b>
    </summary>

Виртуальные функции — никаких серверов для управления!
- Ограничено по времени - короткие исполнения 
- Запускать по требованию (лямбда запускается только тогда, когда необходима)
- Масштабирование автоматизировано! 
(В случае необходимости можно настроить автоматическую масштабируемость)
- Интеграция со всем набором сервисов AWS.
- Интегрирован со многими языками программирования
- Простой мониторинг с помощью AWS CloudWatch.
- Легко получить больше ресурсов для каждой функции (до 10 ГБ ОЗУ!)
- Увеличение оперативной памяти также улучшит работу процессора и сети!

</details>
<br>

[//]:# (What ways of triggering a Lambda do you know?)

<details>
    <summary>
        <b><big><big>
            What ways of triggering a Lambda do you know?
        </big></big></b>
    </summary>

Функции Lambda можно активировать разными способами:
- HTTP-запросом
  (При этом HTTP запрос может содержать несколько заголовков значения.
  Для этого настраивается APL (application load balancer) которые будет конвертировать
  ...?name=one&name=two --> {"name":["one,"two"]})
- загрузкой нового документа в S3 (действие, загрузка определенного вайла по маске и т.д.)
- запланированным заданием (с помощью EventBridge (например раз в минуту))
- потоком данных AWS Kinesis
- Event Source Mapping for SQS & SQS FIFO
- уведомлением от AWS SNS

</details>  
<br>

[//]:# (What is Lambda@Edge?)

<details>
    <summary>
        <b><big><big>
            What is Lambda@Edge?
        </big></big></b>
    </summary>

Lambda@Edge is a feature of Amazon CloudFront that allows you 
to run code closer to users of your application, 
which improves performance and reduces latency. 
It’s an extension of AWS Lambda that lets you deploy Python and Node.js 
functions at Amazon CloudFront edge locations.

- You can customize the content that your CloudFront distribution delivers 
to your end users.
- It allows you to run your code in response to events generated 
by the Amazon CloudFront content delivery network (CDN).
- You don’t have to provision or manage infrastructure in multiple locations 
around the world.
- It can automatically scale and run your code at AWS locations around the world.
- It supports a limited set of runtimes and features.

**Lambda@Edge can be used for various purposes such as website security,
real-time image transformation, intelligent bot mitigation,
search engine optimization, and more.**

For example, you can trigger a Lambda function 
to add HTTP security headers on all origin responses without 
having to modify your application code on your origin.

</details>
<br>

[//]:# (Lambda@Edge vs CloudFront Functions?)

<details>
    <summary>
        <b><big><big>
            Lambda@Edge vs CloudFront Functions
        </big></big></b>
    </summary>

In summary, CloudFront Functions are ideal for lightweight, 
short-running functions and are executed at the edge locations closest to the user. 

They are more suitable for simple request transformations. 
On the other hand, Lambda@Edge functions are more suitable 
for compute-intensive workloads and provide more features 
along with an increased execution time capability. 

They are executed at Regional Edge Locations in major AWS Regions.

</details>
<br>

[//]:# (What is Lambda – Event Source Mapping for SQS & SQS FIFO? Lambda event trigger)

<details>
    <summary>
        <b><big><big>
            What is Lambda – Event Source Mapping for SQS & SQS FIFO?
        </big></big></b>
    </summary>

Лямбда позволяет автоматически обработать некоторое кол-во сообщение из очередей SQS
и SQS FIFO.

При этом Лямбда будет автоматически масштабироваться при чтении сообщение партиями (1-10) для
более быстрой обработки. 
При возникновении ошибки сообщения отправляются в очередь как отдельные элементы.
(Так же есть настройка очереди недоставленных сообщений, в случае сбоев (DLQ))
Lambda удаляет сообщение из очереди после успешной обработки. 

Может масштабироваться:
- масштабируется по количеству активных групп сообщений.
- может создать до 60 экземпляров в минуту
- одновременно обрабатывать до 1000 пакетов сообщений в минуту

</details>  
<br>

[//]:# (What is Lambda - Directions?)

<details>
    <summary>
        <b><big><big>
            What is Lambda - Directions?
        </big></big></b>
    </summary>

Лямбда предлагает возможность настроить направление (конечные точки) для работы функции
(до отсылки результата реста на клиент)

Работает для асинхронных вызовов предлагая выбрать сценарии для успешных или фейл активностей.

Конечной точной можно выбрать:
- SQS
- SNS
- другая Lambda
- Bus Amazon EventBridge

</details>  
<br>

[//]:# (What is Lambda pricing?)

<details>
    <summary>
        <b><big><big>
            What is Lambda pricing?
        </big></big></b>
    </summary>

Оплата за запросы:
- Первые миллион запросов бесплатны
- 0,20 доллара США за 1 миллион запросов в дальнейшем

Оплата за продолжительность: (с шагом 1 мс)
- 400 000 ГБ-секунд вычислительного времени в месяц БЕСПЛАТНО (если используется 1гб ОЗУ)
- 3 200 000 секунд, если для функции используется 128 МБ ОЗУ 
- После этого 1 доллар США за 600 000 ГБ-секунд.

AWS Lambda очень дешевый и из-за этого очень популярный

</details>
<br>

[//]:# (How is it possible to test Lambda code without actually running it in AWS?)

<details>
    <summary>
        <b><big><big>
            How is it possible to test Lambda code without actually running it in AWS?
        </big></big></b>
    </summary>

С помощью интерфейса командной строки (CLI) AWS SAM
вы можете локально тестировать и «пошагово» отлаживать
свои бессерверные приложения перед их загрузкой в облако AWS

</details>
<br>

[//]:# (What is the difference between synchronous and asynchronous Lambda invocations?)

<details>
    <summary>
        <b><big><big>
            What is the difference between synchronous and asynchronous Lambda invocations?
        </big></big></b>
    </summary>

**При синхронном** вызове вы ждете, пока функция обработает событие
и вернет ответ.

- Клиент отправляет запрос / SDK / CLI --(request)--> Lambda
- Клиент отправляет запрос / SDK / CLI <-(response)-- Lambda
(В том числе если возникла ошибка. Ее обработкой должен заниматься клиент)

**При асинхронном** вызове Lambda ставит событие в очередь для обработки.
В случае возникновения ошибки Lambda пытается повторить событие

(1 минута ожидания 1 раз 2 остальные (всего 3 раза))
Есть четкая настройка действий на успешное и неуспешное выполнение

Асинхронные вызовы позволяют ускорить обработку запроса если вам не нужно ждать результат
(пример вам нужно перебрать 1000 файлов)

**Как это работает**:
При асинхронном вызове любой запрос пользователя будет возвращать ожидаемый результат (например 200)
ДАЖЕ ЕСЛИ на самом деле запрос вызвал ошибку. При возникновении ошибки несколько раз подряд система
обработает запрос и (например отправит сообщение SQS что что-то пошло не так)

</details>
<br>

[//]:# (What is Lambda Environment Variables?)

<details>
    <summary>
        <b><big><big>
            What is Lambda Environment Variables?
        </big></big></b>
    </summary>

Лямбда предлагает возможность настроить параметры окружения на подобии postman реализации

Есть возможность создать переменные типа ключ значения (только тип string)
И работать с ключами, а лямбда будет самостоятельно подставлять указанные значения.

**Чем это полезно:**
- Настройте поведение функции без обновления кода
- Переменные среды доступны для вашего кода
- Lambda Service также добавляет собственные системные переменные среды.
- Полезно хранить секретные параметры (они зашифрованные KMS)
  (Секреты могут быть зашифрованы сервисным ключом Lambda или вашим собственным ключом CMK.)

</details>  
<br>

[//]:# (What is Lambda Logging & Monitoring? Tracing with x-ray?)

<details>
    <summary>
        <b><big><big>
            What is Lambda Logging & Monitoring? Tracing with x-ray?
        </big></big></b>
    </summary>

Лямбда позволяет отслеживать все свои действия с помощью мониторов/логирования/AWS X-Ray
- Вызовы, продолжительность, одновременные выполнения
- Количество ошибок, показатели успеха, дроссели
- Сбои асинхронной доставки
- Скорость итерирования (потоки Kinesis и DynamoDB)

Для X-Ray есть переменные среды (они включаются по умолчанию, но о них удобно знать):
- X_AMZN_TRACE_ID: содержит заголовок трассировки.
- AWS_XRAY_CONTEXT_MISSING: по умолчанию LOG_ERROR.
- AWS_XRAY_DAEMON_ADDRESS: IP_ADDRESS демона X-Ray:PORT

</details>  
<br>

[//]:# (How Lambda can connet VPC & private subnet 
or If Lambda in VPC how it connect to public www?)

<details>
    <summary>
        <b><big><big>
            How Lambda can connet VPC & private subnet 
            or If Lambda in VPC how it connect to public www?
        </big></big></b>
    </summary>

**Если лямбда находится за пределами vpc (virtual private connection)**
- **У нее есть доступ к сети интернет, но нет прямого доступа к VPC**
- Лямбда должна создать ENI (Elastic Network Interface) в подсетях VPC и подключаться через него
- Для этого должна быть явно прописана роль **AWSLambdaVPCAccessExecutionRole**

Выглядит это следующим образом

Lambda ---> [(private subnet) ---> (ENI (Elastic Network Interface))  ---> (Destination (example S3))   ]

**Если лямбда находится в vpc и (virtual private connection)**
- **У нее НЕТ доступа к сети интернет, но ЕСТЬ прямой доступ к компонентам VPC**
- Лямбда может использовать 2 варианта
  - Использовать NAT который будет использовать IGW (InternetGetWay)
    (При этом IGW сможет стучать как за пределы (www) так и во внутренние aws сервисы)
  - **если нужен приватный доступ к aws сервисам** можно воспользоваться VPC Endpoint для того,
  чтобы стучать в aws сервисы приватно

выглядит это следующим образом

[(private subnet) Lambda <---> private s3] -> 
1) [] -> Nat -> IGW -> www (or) aws s3
2) [] -> private VPC endpoint -> aws s3


</details>  
<br>

[//]:# (Lambda Concurrency and Throttling? Cold Start?)

<details>
    <summary>
        <b><big><big>
            Lambda Concurrency and Throttling?
        </big></big></b>
    </summary>

Лямбда позволяет вызывать обработку лямбды до 1000 одновременных исполнений.
- Каждая лямбда функция может ограничить максимальное кол-во обработок (=limit)
- Каждый вызов вызодящий за пределы ограничения будет вызывать ("тротлинг")

**Поведение лямбды при тротлинге**
- **При синхронном вызове** возврат ThrottleError - 429
- **При асинхронном вызове** повтор попытки автоматически через время (максмум до 6 часов)
, затем помещение в DLQ

**Чем опасны лимиты**

Если у вас есть три одновременно работающие лямбда функции и на одну из них поступает сразу 
1000 запросов, то остальные 2 функции будут выивать тротринг до тех пор пока тысяча не будет 
уменьшаться. (ЛИМИТЫ ЗАПРОСОВ ДЕЙСТВУЮ ДЛЯ ВСЕХ ЛЯМБД В СУММЕ)

**Холодный запуск**

Как и в Java когда первый раз запрос обрабатывает хуже потому что нужно первый раз достать ресурсы,
так и в лямбдах может возникнуть данная ситуация.
Для борьбы с этим в лямбда есть **предоставленный параллелизм (provisioned concurrency)**.
лямбда функция вызывается заранее, чтобы предотвратить холодный вызов. 
Все настройки выполняются через **Application Auto Scaling**

</details>  
<br>

[//]:# (Lambda limits?)

<details>
    <summary>
        <b><big><big>
            Lambda limits?
        </big></big></b>
    </summary>

Выполнение:
- Распределение памяти: 128 МБ – 10 ГБ (с шагом 1 МБ)
- Максимальное время выполнения: 900 секунд (15 минут)
- Переменные среды (4 КБ)
- Емкость диска в «контейнере функций» (в /tmp): 512 МБ.
- Параллельные выполнения: 1000 (можно увеличить)

Развертывание:
- Размер развертывания функции Lambda (сжатый ZIP-файл): 50 МБ.
- Размер несжатого развертывания (код + зависимости): 250 МБ.
- Можно использовать каталог /tmp для загрузки других файлов при запуске.
- Размер переменных среды: 4 КБ.

</details>  
<br>

[//]:<>(What kinds of Lambda concurrency allocations are there?)

<details>
    <summary>
        <b><big><big>
            What kinds of Lambda concurrency allocations are there?
        </big></big></b>
    </summary>

Доступны два типа управления параллелизмом:

**Зарезервированный параллелизм** — зарезервированный параллелизм
гарантирует максимальное количество одновременных экземпляров для функции.
Когда функция зарезервировала параллелизм, никакая другая функция
не может использовать этот параллелизм.

**Предоставленный параллелизм**. - Предоставленный параллелизм
инициализирует запрошенное количество сред выполнения,
чтобы они были готовы немедленно реагировать на вызовы вашей функции.

</details>
<br>

[//]:<>(What resources trigger Lambda? How?)

<details>
    <summary>
        <b><big><big>
            What resources trigger Lambda? How?
        </big></big></b>
    </summary>

Lambda, Api Gateway, DynamoDB, S3, SNS, SQS

By event

</details>
<br>

[//]:<>(What AWS resources can Lambda access? How?)

<details>
    <summary>
        <b><big><big>
            What kinds of Lambda concurrency allocations are there?
        </big></big></b>
    </summary>

Теперь ваши функции Lambda могут получать доступ к базам данных
Amazon RDS, хранилищам данных Amazon Redshift,
узлам Amazon ElasticCache и другим конечным точкам,
которые доступны только из определенного VPC.

Вы должны предоставить дополнительную информацию о конфигурации VPC,
такую как идентификаторы подсети VPC и идентификаторы группы безопасности,
чтобы разрешить функциям Lambda доступ к ресурсам в Amazon VPC.

</details>
<br>

[//]:<>(What are the advantages of API Gateway endpoints over traditional web applications?)

<details>
    <summary>
        <b><big><big>
            What are the advantages of API Gateway endpoints over traditional web applications?
        </big></big></b>
    </summary>

Gateway API позволяет выполнять общие задачи управления API,
такие, как безопасность, кэширование, регулирование и мониторинг.

Gateway API предоставляет ендпоинты к вашим приложениям AWS


</details>
<br>

[//]:<>(What is API Gateway mock endpoints?)

<details>
    <summary>
        <b><big><big>
            What is API Gateway mock endpoints?
        </big></big></b>
    </summary>

Creation of mock endpoints for mock not crated rests

</details>
<br>

[//]:<>(What is API Gateway Stage?)

<details>
    <summary>
        <b><big><big>
            What is API Gateway Stage?
        </big></big></b>
    </summary>

stage -> этап

This is references in the lifecycle of the API using variables

This stage vars can be used to ref a specific backend endpoint
(e.g. Lambda function)

</details>
<br>

[//]:<>(What is API Request Transformation?)

<details>
    <summary>
        <b><big><big>
            What is API Request Transformation?
        </big></big></b>
    </summary>

We can dynamically transform request and response params by adding new params

Example of request 
    
    -- request-parameters '{"append:header.header1":"$context.reqId"}'

(this will add new header to requests)

Example of response

    -- response-parameters '{
    "500" : {"append:header.header1":"$context.reqId""}'

(this will add new header if backend returns 500 status code)

</details>
<br>

[//]:# (How you can transform API requests and responses)

<details>
    <summary>
        <b><big><big>
            How you can transform API requests and responses?
        </big></big></b>
    </summary>

- Using Request Transformation
- Parameter mapping
  (overwrite:path: "/sessions/${request.path.sessionId}/topics")

</details>
<br>

[//]:<>(What is $Latest on lambda?)

<details>
    <summary>
        <b><big><big>
            What is $Latest on lambda?
        </big></big></b>
    </summary>

This is alias for latest version on lambda code.
You also can use previous lambda version by using create alias function

</details>
<br>

[//]:<>(What is lambda alias? version? alias vs version)

<details>
    <summary>
        <b><big><big>
            What is lambda alias? version? alias vs version
        </big></big></b>
    </summary>

A lambda version is a snapshot of your Lambda function.
When you create a new lambda function, it is named as $LATEST.

A lambda alias at its simplest is a pointer to the lambda function’s version.
We can use aliases to point to any lambda version you specify.

**An alias is a pointer to a specific Lambda function version. 
Aliases will not be updated automatically**

</details>
<br>

[//]:<>(Lambda alias vs env variables?)

<details>
    <summary>
        <b><big><big>
            Lambda alias vs env variables?
        </big></big></b>
    </summary>

**Lambda** allows you to create aliases that are associated 
with a specific version of a function. 
They are not a method of changing the behavior of a particular function.

**Environment variables** can be used to change the behavior of a Lambda 
function without requiring you to update code and re-deploy the function.

</details>
<br>

[//]:<>(What is step functions in lambda?)

<details>
    <summary>
        <b><big><big>
            What is step functions in lambda? Pros?
        </big></big></b>
    </summary>

This is a chain of lambda functions that work in queue order.
It can be chained. But each step can consists of parallel steps

Pluses
- Visualize (you can see all steps)
- Automate (each step is triggered and tracked automatically)
- Logging

![img](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2019/09/18/step-functions-map-example.png)

</details>
<br>

[//]:<>(What is step functions workflows? what type do you know?)

<details>
    <summary>
        <b><big><big>
            What is step functions workflows? what type do you know?
        </big></big></b>
    </summary>

Standard workflow
- Long-Running (may run for up to a year)
- At-Most-Once (task never executed once unless you specify retry actions)
- Non-Idempotent

Express Workflows
- Short-time (up to 5 min)
- At-Least-Once (for run mor than once)
- idempotent

Express can be
  - Synchronous express 
    - Wait until it completes
    - returns the result
    - (operations that are performed one at a time)
  - Asynchronous express
    - confirms that workflow has started
    - result can be found in cloudwatch
    - (operations don't depend on the completion and result)

</details>
<br>

[//]:<>(Lambda storages?)

<details>
    <summary>
        <b><big><big>
            Lambda storages? 
        </big></big></b>
    </summary>

|                | Native within lambda              |                           | External Storage Options     |                                     |
|----------------|-----------------------------------|---------------------------|------------------------------|-------------------------------------|
|                | /tmp                              | Lambda layer              | S3                           | EFS (elastic file system)           |
| Use case       | Temporary data                    | Library and SDK           | Persistent data              | Persistent data                     |
| Pluses         | the fastest                       |                           | best AWS service integration | best integration with other lambdas |
| Minuses        | cannot be shared between lambdas  |                           | slowest                      |                                     |
| Size           | 512 MB - 10 GB                    | 50 mb zipped 250 unzipped | Elastic                      | Elastic                             |
| Dynamic update | dynamic read/write                | updates require new layer | Store and retrieve           | dynamic read/write                  |
| Shared         | within env                        | across env                | across lambdas               | across env                          |


</details>
<br>

[//]:<>(Error handling in lambda?)

<details>
    <summary>
        <b><big><big>
            Error handling in lambda?
        </big></big></b>
    </summary>

- Auto retried system (2 times)
- Dead-letter queues (Lambda -> SQS or Lambda -> SNS)
  - only error msg
- Lambda Destinations (Lambda success -> SQS_1 or failure -> SQS_2) 

can be found in json (param: responsePayload:/errorMessage: "test")

</details>
<br>

[//]:<>(How we can deploy Lambda code?)

<details>
    <summary>
        <b><big><big>
            How we can deploy Lambda code?
        </big></big></b>
    </summary>

- by console
- .zip file achieve
  - Using the Lambda console
  - Using the AWS CLI
  - Using Amazon S3
- deployment package (you can create package by yourself and upload from PC)
    - up to 50 mb
    - if it more than 50 mb use S3
- Lambda layers 
  - can be shared between lambdas
  - best practise
- The CloudFormation
- Container images

</details>
<br>

[//]:<>(Lambda performance best practices?)

<details>
    <summary>
        <b><big><big>
            Lambda performance best practices?
        </big></big></b>
    </summary>

- See your memory and CPU
- Dependencies
- Only what you need

</details>
<br>

[//]:<>(How we can improve Lambda performance?)

<details>
    <summary>
        <b><big><big>
            Lambda performance best practices?
        </big></big></b>
    </summary>

- Increase the function memory allocation, 
  that will also increase the CPU allocation.
  (if function has CPU bound also)

</details>
<br>

[//]:<>(How we can transfer existing external RESTs into AWS?)

<details>
    <summary>
        <b><big><big>
            How we can transfer existing external RESTs into AWS?
        </big></big></b>
    </summary>

- create API Gateway (supports OpenAPI v2-v3)
- create lambdas
- connect rest in gateway into lambdas

</details>
<br>

[//]:<>(Минусы лямбд)

<details>
    <summary>
        <b><big><big>
            Минусы лямбд
        </big></big></b>
    </summary>

Java работает плоховато из-за это того что у java cold start (надо поднимать сначала JVM)

</details>
<br>

[//]:# (What is EventBridge?)

<details>
    <summary>
        <b><big><big>
            What is EventBridge?
        </big></big></b>
    </summary>

EventBridge is a serverless service that uses events 
to connect application components together, 
making it easier for you to build scalable event-driven applications.

Part of  Event-driven architecture

</details>  
<br>

---

[//]:# (What is Lambda event and context?)

<details>
    <summary>
        <b><big><big>
            What is Lambda event and context?
        </big></big></b>
    </summary>

Event is the data that's passed to the function upon execution.
- path
- httpMethod
- headers
- queryStringParameters
- body

Context's main role is to provide information about the current execution environment
* function_name – The name of the Lambda function.
* function_version – The version of the function.
* invoked_function_arn – The Amazon Resource Name (ARN) that's used to invoke the function. Indicates if the invoker specified a version number or alias.
* memory_limit_in_mb – The amount of memory that's allocated for the function.
* aws_request_id – The identifier of the invocation request.
* log_group_name – The log group for the function.
* log_stream_name – The log stream for the function instance.

</details>  
<br>

[//]:# (How we can control featute A/B testing in case if we have 2 features, but whant use only one?)

<details>
    <summary>
        <b><big><big>
            How we can control feature A/B testing in case if we have two features, but want to use only one?
        </big></big></b>
    </summary>

By adding an override to the feature and setting the identifier 
of the override to the engineer’s user ID, 
and setting the variation to Variation A, 
the engineer can ensure that Variation A 
is the only variation that appears when they hit the application’s endpoint. 

This is because overrides in Amazon CloudWatch Evidently 
allow you to specify a specific variation for a specific identifier,
which in this case is the engineer’s user ID.

</details>
<br>