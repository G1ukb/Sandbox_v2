[//]:# (What is Amazon Simple Notification Service "Amazon SNS"?)

<details>
    <summary>
        <b><big><big>
            What is Amazon Simple Notification Service "Amazon SNS"?
        </big></big></b>
    </summary>

Amazon Simple Notification Service (Amazon SNS) -
is a web service for sending notifications from the cloud.
It provides developers with the ability to publish messages
from the application and immediately deliver them to subscribers
or other applications.

</details>
<br>

[//]:# (What messaging patterns do SNS and SQS implement? Какие шаблоны обмена сообщениями реализуют SNS и SQS?)

<details>
    <summary>
        <b><big><big>
            What messaging patterns do SNS and SQS implement? Какие шаблоны обмена сообщениями реализуют SNS и SQS?
        </big></big></b>
    </summary>

Amazon SNS allows apps to send urgent messages
to several subscribers using the “push” mechanism,
which eliminates the need to periodically check or “query”
Availability of updates.

SQS is a message queuing service used for messaging
through a survey model (when the user himself asks if there is a message),
and can be used to separate sending and receiving components.

</details>
<br>

[//]:# (What delivery protocols does SNS support?)

<details>
    <summary>
        <b><big><big>
            What delivery protocols does SNS support?
        </big></big></b>
    </summary>

Messages are sent using transport protocols
HTTP, HTTPS, Email-JSON and SQS,
will consist of a simple JSON object,
which will include the attached information

</details>
<br>

[//]:# (How large SQS messages can be? What happens when that limit is exceeded?)

<details>
    <summary>
        <b><big><big>
            How large SQS messages can be? What happens when that limit is exceeded?
        </big></big></b>
    </summary>

The maximum size is 262,144 bytes (256 KB).

To send messages larger than 256 KB, you can use
Amazon SQS Extended Client Library for Java.

This library allows you to send Amazon SQS messages,
containing a link to the message payload in Amazon S3.
The maximum payload size is 2 GB.

If exceeded, aws will split the messages and send

</details>
<br>

[//]:# (What are the typical scenarios for using SQS?)

<details>
    <summary>
        <b><big><big>
            What are the typical scenarios for using SQS?
        </big></big></b>
    </summary>

The best mechanism for using queues is the actual queue mechanism
when something simultaneously receives a huge number of messages and these
We cannot process messages immediately due to our computing abilities

A physical example is SMS voting, when a huge number of people
fig into the service and it throws all messages into a queue and processes
without the risk of slowing down the entire system

</details>
<br>

[//]:# (What’s the difference between standard and FIFO queues in SQS?)

<details>
    <summary>
        <b><big><big>
            What’s the difference between standard and FIFO queues in SQS?
        </big></big></b>
    </summary>

Standard queues

- **Unlimited bandwidth.**
  Standard queues support an almost unlimited number of
  transactions per second (TPS).

- **Delivery on the “at least once” principle.**
  The message is delivered at least once, sometimes several copies of
the message are delivered.

- **Best Possible Ordering**
  Sometimes messages may be delivered in a different order than
  the order in which they are sent.

FIFO (First in First out) queues

- **High throughput.**
  By default, FIFO queues support up to 300 messages.
  per second (300 send, receive, or delete operations per second).

- **Strictly one-time processing.**
  The message is delivered once and remains available as long as
  until the recipient processes and deletes it.
  Duplicate messages are not placed in the queue.

- **Delivery on a first-in, first-out basis.**
  The order in which messages are sent and received is
  strictly preserved.

</details>
<br>

[//]:# (What is SNS pricing?)

<details>
    <summary>
        <b><big><big>
            What is SNS pricing?
        </big></big></b>
    </summary>

Depending on the type of message transmission, the price is based on the number of messages
as an example
Mobile Push Notifications $0.50 per million notifications

</details>
<br>

[//]:# (What is SQS pricing?)

<details>
    <summary>
        <b><big><big>
            What is SNS pricing?
        </big></big></b>
    </summary>

Depending on the type of message transmission, the price is based on the number of messages
and type of selected processing (Standard \\ FIFO)
as an example
From 1 Million to 100 Billion Requests/Month (ST)$0.40 (FIFO)$0.50

</details>
<br>

[//]:# (What are SNS security best practices?)

<details>
    <summary>
        <b><big><big>
            What are SNS security best practices?
        </big></big></b>
    </summary>

Tips from aws:
- Make sure that topics (sns) are not public
- Implement access with minimal privileges
- Implement server-side encryption
- Forced encryption of data during transmission
- Consider using VPC endpoints to access Amazon SNS.

</details>
<br>

[//]:# (What are the security features supported by SNS/SQS?)

<details>
    <summary>
        <b><big><big>
            What are the security features supported by SNS/SQS?
        </big></big></b>
    </summary>

Amazon SNS предоставляет полный набор функций безопасности
для защиты ваших данных от несанкционированного и анонимного доступа,
включая шифрование сообщений при передаче с помощью сертификатов
Amazon ATS, шифрование сообщений в состоянии покоя с помощью ключей
AWS KMS, конфиденциальность сообщений с помощью AWS PrivateLink
и аудит с помощью AWS CloudTrail.

Кроме того, вы можете подписать зашифрованные очереди Amazon SQS
на зашифрованные темы Amazon SNS,
чтобы установить сквозное шифрование в своих сценариях обмена сообщениями.

</details>
<br>

[//]:# (What is the anatomy of an SNS message? "атрибуты SNS")

<details>
    <summary>
        <b><big><big>
            What is the anatomy of an SNS message? (атрибуты SNS)
        </big></big></b>
    </summary>

Имя — имя атрибута сообщения.
Имя не должно начинаться или заканчиваться точкой,
а также не должно иметь последовательных точек.
Имя может содержать до 256 символов.

Тип — поддерживаемые типы данных атрибута сообщения:
String, String.Array, Number и Binary.

Значение – указанное пользователем значение атрибута сообщения.
Для строковых типов данных атрибут value имеет те же ограничения
на содержимое, что и тело сообщения.

</details>
<br>

[//]:# (What can SNS do in case of failing messages?)

<details>
    <summary>
        <b><big><big>
            What can SNS do in case of failing messages?
        </big></big></b>
    </summary>

Если сообщение не может быть успешно доставлено с первой попытки,
Amazon SNS применяет четырехэтапную политику повторных попыток:
1) повторные попытки без задержки между попытками,
2) повторные попытки с минимальной задержкой между попытками,
3) повторные попытки в соответствии с отсрочкой (настроено)
4) повторные попытки с максимальной задержкой между попытками.

Когда политика повторной доставки сообщения исчерпана,
Amazon SNS может переместить сообщение в очередь недоставленных
сообщений (DLQ).

</details>
<br>

[//]:# (What is Amazon SNS dead-letter queues DLQs?)

<details>
    <summary>
        <b><big><big>
            What is Amazon SNS dead-letter queues (DLQs)?
        </big></big></b>
    </summary>

Очередь недоставленных сообщений — это очередь Amazon SQS,
которую подписка Amazon SNS может использовать для сообщений,
которые не могут быть успешно доставлены подписчикам.
Сообщения, которые не могут быть доставлены из-за ошибок клиента
или сервера, помещаются в очередь недоставленных сообщений
для дальнейшего анализа или повторной обработки.

</details>
<br>

[//]:# (What is SNS message filtering?)

<details>
    <summary>
        <b><big><big>
            What is SNS message filtering?
        </big></big></b>
    </summary>

По умолчанию подписчик темы Amazon SNS получает каждое сообщение,
опубликованное в теме.
Чтобы получать подмножество сообщений,
подписчик должен назначить политику фильтрации для подписки на тему.

Политика фильтрации — это простой объект JSON,
содержащий атрибуты, определяющие, какие сообщения получает подписчик.
Когда вы публикуете сообщение в теме,
Amazon SNS сравнивает атрибуты сообщения с атрибутами в политике
фильтрации для каждой из подписок темы.
Если какой-либо из атрибутов совпадает, Amazon SNS отправляет
сообщение подписчику.
В противном случае Amazon SNS пропускает подписчика
без отправки сообщения.
Если у подписки нет политики фильтрации, подписка получает
каждое сообщение, опубликованное в ее теме.

</details>
<br>

[//]:# (How is it possible to monitor SNS delivery process?)

<details>
    <summary>
        <b><big><big>
            How is it possible to monitor SNS delivery process?
        </big></big></b>
    </summary>

- aws консоль CloudWatch,
- собственного интерфейса командной строки (CLI) CloudWatch
- программно с помощью CloudWatch API.

</details>
<br>

[//]:# (How is it possible to monitor SNS delivery process?)

<details>
    <summary>
        <b><big><big>
            What is message lifecycle in SQS?
        </big></big></b>
    </summary>

![img](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/images/sqs-message-lifecycle-diagram.png)

- Отправка сообщения (сообщение избыточно распределяется по серверам Amazon SQS.)
- Получение сообщения (Пока сообщение A обрабатывается, оно остается в очереди и не возвращается для последующих запросов на получение)
- Удаление

</details>
<br>

[//]:# (What’s the difference between short and long polling in SQS?)

<details>
    <summary>
        <b><big><big>
            What’s the difference between short and long polling in SQS?
        </big></big></b>
    </summary>

![img](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/images/sqs-message-lifecycle-diagram.png)

Длительный опрос Amazon SQS — это способ извлечения сообщений
из ваших очередей Amazon SQS.

В то время как **обычный короткий опрос** возвращает результат немедленно,
даже если опрашиваемая очередь сообщений пуста

**длительный** опрос не возвращает ответ до тех пор, пока сообщение
не поступит в очередь сообщений или пока не истечет
время длительного опроса.

</details>
<br>

[//]:# (What is SQS Delay Queues?)

<details>
    <summary>
        <b><big><big>
            What is SQS Delay Queues?
        </big></big></b>
    </summary>

This is a special type of messages that you can use to
- postpone delivery of new messages
- messages in Delay Queue remain invisible for the duration of delay 
(0-900s (15min))
- Large distributed apps may need to introduce delay in processing

</details>
<br>

[//]:# (How you can manage large SQS messages in S3?)

<details>
    <summary>
        <b><big><big>
            How you can manage large SQS messages in S3
        </big></big></b>
    </summary>

to store large messages 256KB - 2GB you need following
- use S3
- AWS SDK for Java
- SQS Extended client library for Java
- An S3 bucket

</details>
<br>

[//]:# (What is SES "Simple Email Service"? SES vs SNS)

<details>
    <summary>
        <b><big><big>
            What is SES "Simple Email Service"
        </big></big></b>
    </summary>

When you want to send automated emails

SES:
- can trigger a lambda function or sns
- it can be used for both incoming and ongoing email
- email address is all that need to start
- email only
- not subscribe based

SNS:
- pub/sub messages service formats as SMS, HTTP, SQS, email
- can trigger lambda
- can fan out messages to a large number of recipients
- consumers must subscribe to a topic to receive notification

</details>
<br>

[//]:# (What you should do to prevent duplicate messages from being processed?)

<details>
    <summary>
        <b><big><big>
            What you should do to prevent duplicate messages from being processed?
        </big></big></b>
    </summary>

Create a DynamoDB table to store the SQS message IDs 
of the messages that have been successfully processed. 
Configure the Lambda function to check the DynamoDB table 
to see if a message has already been successfully processed 
and only process messages that are not already processed.

If you are receiving multiple messages with the same message ID,
you can use DynamoDB to record the message IDs of messages 
that were already successfully processed and have your Lambda 
function check the DynamoDB table before processing each message.

</details>
<br>