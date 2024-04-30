<h1>REST</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What is the Richardson Maturity Model?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the Richardson Maturity Model?
        </b>
    </summary>
<br>

The Richardson Maturity Model 
is used to define the maturity level of a REST API

**Level 0** — HTTP is used purely as a transport system for remote interactions.
This level represents a system similar to SOAP-based web services.

**Level 1** — Resources: application is leveraging the use of multiple URIs 
to identify individual resources.
But, this level still uses only HTTP POST for all operations

**Level 2** — HTTP Verbs: This level uses different HTTP methods 
(GET, POST, PUT, PATCH, DELETE, etc.) to define operations on the resources.
And HTTP status codes to express errors.

**Level 3** — Hypermedia Controls (HATEOAS): also return the information 
about how to interact with the server, transition states, 
and what operations can be performed next.



</details>

[//]: # (What are the rules of HATEOAS?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the rules of HATEOAS?
        </b>
    </summary>
<br>

* Server sends URLs for all actions: 
The client then uses these URIs to navigate the service.
* No hard code information: not need it to hard code information about the service. 
With HATEOAS, the server provides all action URLs dynamically
* Links indicate state: resource that can be deleted might include delete url. 
If resource cannot be updated or deleted, there is no link presented.
* Use of MIME types: links to interact with applications. 
  * application/json (default) 
  * application/hal+json (HAL (Hypertext Application Language) 
  easy way to hyperlink between resources in your API) 
  * application/vnd.siren+json (specification for representing entities, 
  including relations with other entities and actions)

</details>

[//]: # (How can you write your own SOAP service?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How can you write your own SOAP service?
        </b>
    </summary>
<br>

SOAP (Simple Object Access Protocol) is a protocol 
used for exchanging structured information in web services using XML. 
In Java, SOAP web services are implemented using the Java API 
for XML Web Services (JAX-WS).

Step 1: Select the appropriate dependencies or libraries. 
For a Maven project, ensure the `jaxws-rt` dependency is added to your pom.xml.

```xml
<dependency>
    <groupId>com.sun.xml.ws</groupId>
    <artifactId>jaxws-rt</artifactId>
    <version>2.3.2</version>
</dependency>
```

Step 2: Define the Service Endpoint Interface (SEI). 
This is the Java interface that defines the methods exposed by the service.

```java
import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public interface HelloService {

    @WebMethod
    String sayHello(String name);
}
```

Step 3: Implement the Service Endpoint Interface.

```java
import javax.jws.WebService;

@WebService(endpointInterface = "com.example.HelloService")
public class HelloServiceImpl implements HelloService {

    @Override
    public String sayHello(String name) {
        return "Hello, " + name;
    }
}
```

Step 4: Publish the SOAP web service. Here is a simple standalone server that publishes the service at a particular URL.

```java
import javax.xml.ws.Endpoint;

public class HelloServicePublisher {

    public static void main(String[] args) {
        Endpoint.publish("http://localhost:8080/ws/hello", new HelloServiceImpl());
    }
}
```

You can then access your SOAP service at `http://localhost:8080/ws/hello` 
and use tools like SoapUI or cURL to test it.

</details>

////////////////////////////////////

Pluses and Minuses of REST // SOAP
SOAP vs REST

[//]: # (HTTP)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Что такое HTTP запрос и его структура
        </b>
    </summary>
<br>

HTTP - Трансферный протокол, который позволяет обмениваться данными в среде интернет 

Запрос
![img](https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/468/original/core_components_of_HTTP_Request.png?1622561120)

Ответ
![img](https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/467/original/core_components_of_HTTP_Response.png?1622561057)

</details>

[//]: # (Какие HTTP запросы бывают)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Какие HTTP запросы бывают
        </b>
    </summary>
<br>

* **GET**: используется для получения сведений с сервера и 
в основном является операцией только для чтения.
* **HEAD**: запрос get, но без тела (для извлечения метаинформации которая содержится в
заголовках ответа)
* **POST**: этот метод используется для создания новых ресурсов на сервере.
* **PUT**: этот метод используется для обновления старого/существующего 
ресурса на сервере или для замены ресурса.
* **DELETE**: этот метод используется для удаления ресурса на сервере.
* **PATCH**: используется для изменения ресурса на сервере.
* **OPTIONS**: Это извлекает список поддерживаемых опций ресурсов, 
присутствующих на сервере.

</details>

[//]: # (Rest)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Что такое Rest что такое RestFULL
        </b>
    </summary>
<br>

**Rest** - набор архитектурных правил соблюдая которые обеспечивается
максимально оптимальная разработка веб-сервисов.

REST - может использоваться практически для любого протокола,
при использовании для веб-API он обычно использует преимущества HTTP.

Одним из ключевых преимуществ API REST является то,
что он обеспечивает большую гибкость.

**RestFull** система - система которая реализуется все описанные правила

</details>

[//]: # (Минусы рест запросов)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Минусы рест запросов
        </b>
    </summary>
<br>

С точки зрения **клиентской** стороны, REST не хранит временного состояния 
из-за этого поведение временных переменных (хранение, безопасность, доступность)
полностью хранится на клиентской стороне.

С точки зрения **серверной** стороны, REST не накладывает ограничений безопасности
За обработку и безопасность данных которые передаются через REST
берет на себя сервер

</details> 

[//]: # (Правила Rest)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Правила Rest
        </b>
    </summary>
<br>

**1. Клиент-сервер**

Это ограничение основано на том, что клиент и сервер
должны быть отделены друг от друга и иметь возможность развиваться индивидуально.
Ui - как клиент

**2. Stateless (Отсутствие состояния)**

**Сервер не должен запоминать состояние** пользователя между запросами —
в каждом запросе передаётся информация, идентифицирующая пользователя
(например, token, полученный через OAuth-авторизацию)
и все параметры, необходимые для выполнения операции.

Независимость от состояния означает, что данные,
возвращаемые определенным вызовом API, не должны зависеть от вызовов, 
сделанных ранее.

Сделано это для мультизапросов, если сразу много пользователей обращаются к
системе трудозатратно запоминать состояние каждого из них.

**3. Кэширование**

**Ответ сервера может быть кэширован** на
определенный период времени и использоваться повторно без новых запросов к серверу.
(получение константных значений, таких как рабочие часовые пояса)

**4. Унифицированный интерфейс**

Все рест запросы должны быть построены с использованием общего шаблона
построения запросов. Для того чтобы каждый разработчик мог писать запросы
не применяя никаких правил из головы.

+ HATEOAS
  (Система, которая позволяет возвращать вместе с ответом рест запроса также и ссылки
  содержащие возможные рест запросы последующие за уже совершившимся.
  Таким образом мы усведомляем разработчика или пользователя о том каким рестом
  он может воспользоваться далее, и даем ему последнюю версию этого реста.
  Так же данные могут подставляться динамически)

+ самоОписываемость selfDescriptive
  (единый интерфейс между клиентами и серверами. Самоописательное сообщение содержит всю информацию, 
   необходимую получателю для его понимания. Не должно быть дополнительной информации в отдельной 
   документации или в другом сообщении.)


**5. Многоуровневая система**

Многоуровневое означает, что клиент не знает, является ли сервер,
который отвечает, на самом деле конечным сервером,
который обслуживает ресурс, что является отличным
принципом для обеспечения балансировки нагрузки и предоставления общих кэшей.

Нужно для масштабирования

**6. (Добавочное) удобство представления данных**
В качестве представления данных объекта передаются данные в формате JSON или XML

Рест должны отдавать единый формат ответа, для того чтобы обработчики были настроены
под что-то конкретное и не случалось исключений на этой почве.
</details>

[//]: # (SOAP против REST)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            SOAP против REST
        </b>
    </summary>
<br>

Самое главное различие - логическое

**SOAP** - это протокол, который используется для реализации веб-сервисов

а **REST** - это набор архитектурных правил

Soap не может использовать REST, но REST может использовать SOAP

из минусов:
- SOAP только xml
- и не имеет возможности кешироваться
- работает медленнее
- не так просто тестировать как REST

из плюсов:
- SOAP используется когда нет возможности использовать рест 
  (требование обработать сценарии с состоянием)
- Поддержка устаревших систем, которые были сделаны до введения рест
- Предлагает большой уровень безопасности (как пример PayPal на soap)
- Предлагает транзакции

</details>

[//]: # (WEB-Socker против REST)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            WEB-Socker против REST
        </b>
    </summary>
<br>

Разница в принципе обращения. 

Rest однонаправленный кидает реквест на сервер и тот присылает ответ

Web-Soket - многонаправленный, сокет кидает запрос на подключение,
потом подключается, потом общаются друг с другом, в конце закрывая конект

- веб сокеты подходят для прямого обращения, например игр
- у них нет разделения на url тело и хедеры, они сразу отправляют данные, следовательно быстрее
- сервер может задать вопрос клиенту, а не только клиент-серверу
- сохраняет состояние сеанса

из минусов:
- только вертикальное масштабирование
- зависят от IP адреса и номера порта
- требуется память для хранения данных

</details>

[//]: # (Что такое Payload)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Что такое Payload
        </b>
    </summary>
<br>

Payload - тело запроса которое несет необходимую информацию.
(обычно относят к POST запросам)

</details> 

[//]: # (JSON vs XML)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            JSON vs XML
        </b>
    </summary>
<br>

Разница в логическом использовании. 

XML создавался как дескриптор, где теги и иерархия позволяют описать правила 

JSON создавался для передачи данных. И имеет более удобную структуру для
работы именно с передачей данных.

Это не значит что JSON нельзя использовать для описания, а XML для передачи данных,
но одно предпочтительней другому в разных ситуациях. (мы можем считать в уме, но 
пользуемся калькулятором)

</details>

[//]: # (Структура Rest URL)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Структура Rest URL
        </b>
    </summary>
<br>

общий структурный вид для запроса - /:entities[/:id][/?:params]
entity — название сущности, во множественном числе
id opt. — первичный ключ объекта. Если первичный ключ составной, то части указываются через слэш.
params opt. — дополнительные параметры выборки для списочных запросов

GET /:entities/:id    - get element by id
GET /:entities/       - get all elements
POST /:entities/      - add element
PUT /:entities/:id       - update element

- используйте существительные во множественном числе
- при использовании длинного имени используйте подчеркивание или дефис authorized-users
- только строчные буквы
- поддержка обратной совместимости
- использование http методов
- используйте значение как иерархию /users/{id}/address

</details>

[//]: # (Идемпотентный метод/Безопасный метод)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Идемпотентный метод/Безопасный метод
        </b>
    </summary>
<br>

Метод HTTP является идемпотентным, если повторный идентичный запрос,
сделанный один или несколько раз подряд, имеет один и тот же эффект,
не изменяющий состояние сервера.
Другими словами, идемпотентный метод не должен иметь никаких побочных эффектов (side-effects),
кроме сбора статистики или подобных операций.
Корректно реализованные методы GET, HEAD, PUT и DELETE идемпотентны,
но не метод POST.

Безопасные методы — это те, которые не изменяют внутренние ресурсы. 
Эти методы можно кэшировать и извлекать без какого-либо воздействия на ресурс.
(OPTIONS, GET, HEAD)

</details>

[//]: # (Параметры в ресте)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Параметры в ресте
        </b>
    </summary>
<br>

QUERY Parameters
Параметры QUERY появляются в URL после знака вопроса (?) После имени ресурса:
http://myserver.com/resource-name?param1=value1&param2=value2

PATH Parameters
{server_host}/students/{student_id}

HEADER Parameters
BODY Params

Лучшая практика для разработки RESTful API заключается в том, что параметры пути
используются для идентификации конкретного ресурса или ресурсов,
а параметры запроса используются для сортировки / фильтрации этих ресурсов.

</details>

[//]: # (Лучшие практики написания рестов)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Лучшие практики написания рестов
        </b>
    </summary>
<br>

- По возможности используйте JSON
- Используйте по возможности не более 3-4 уровней вложенности
- Множественное число
- В случае ошибки, REST должен возвращать не только статус но и описывающее предложение
- Если возвращается большой поток данных, по возможности применяйте фильтрацию
- Базовые принципы безопасности со стороны сервера
- Не забывать про кеширование
- Управление версиями апи, при этом не отключая старые версии, а используя пересылку

</details>

[//]: # (Как можно протестировать веб-службы RESTful?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Как можно протестировать веб-службы RESTful?
        </b>
    </summary>
<br>

- Воспользоваться Postman. Где можно создавать сьюты тестовых данных и запускать их
- Воспользоваться Swagger.

</details>
