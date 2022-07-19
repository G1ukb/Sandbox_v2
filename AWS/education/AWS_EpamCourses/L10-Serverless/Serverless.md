## Serverless

[//]:<>(What ways of triggering a Lambda do you know?)

<details>
    <summary>
        <b><big><big>
            What ways of triggering a Lambda do you know?
        </big></big></b>
    </summary>

Функции Lambda можно активировать разными способами: 
- HTTP-запросом
- загрузкой нового документа в S3
- запланированным заданием
- потоком данных AWS Kinesis
- уведомлением от AWS SNS

</details>

[//]:<>(What is Lambda pricing?)

<details>
    <summary>
        <b><big><big>
            What is Lambda pricing?
        </big></big></b>
    </summary>

AWS Lambda берет деньги за кол-во запросов в месяц
и за время вычислительного времени в месяц,
которые можно использовать для функций,
работающих как на процессорах x86, так и на процессорах arm.

</details>

[//]:<>(How is it possible to test Lambda code without actually running it in AWS?)

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

[//]:<>(What is the difference between synchronous and asynchronous Lambda invocations?)

<details>
    <summary>
        <b><big><big>
            What is the difference between synchronous and asynchronous Lambda invocations?
        </big></big></b>
    </summary>

При синхронном вызове вы ждете, пока функция обработает событие 
и вернет ответ. 

При асинхронном вызове Lambda ставит событие в очередь для обработки 
и немедленно возвращает ответ.

</details>

[//]:<>(What is Lambda concurrency?)

<details>
    <summary>
        <b><big><big>
            What is Lambda concurrency?
        </big></big></b>
    </summary>

Параллелизм Lambda состоит из количества запросов, 
которые определенная функция обслуживает в любой момент времени. 

После вызова функции Lambda использует экземпляр функции 
для обработки события. 
После того как код функции перестанет выполняться, 
он может начать обработку другого запроса.

</details>

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

[//]:<>(What are the advantages of API Gateway endpoints over traditional web applications?)

<details>
    <summary>
        <b><big><big>
            What are the advantages of API Gateway endpoints over traditional web applications?
        </big></big></b>
    </summary>

Gateway API позволяет выполнять общие задачи управления API, 
такие, как безопасность, кэширование, регулирование и мониторинг.

</details>

[//]:<>(Минусы лямбд)

<details>
    <summary>
        <b><big><big>
            Минусы лямбд
        </big></big></b>
    </summary>

Java работает плоховато из-за это того что у java cold start (надо поднимать сначала JVM)

</details>