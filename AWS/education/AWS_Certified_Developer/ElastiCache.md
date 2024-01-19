<h1>ElasticCache</h1>

[//]:# (What is ElasticCache?)

<details>
    <summary>
        <b><big><big>
            What is ElasticCache?
        </big></big></b>
    </summary>

ElasticCache Помогает снизить нагрузку на базы данных для рабочих нагрузок с интенсивным чтением.
**За счет кеширования запросов**

- ElasticCache управляется с помощью Redis или Memcached.
- Помогает сделать ваше приложение анонимным.
- AWS берет на себя обслуживание/установку исправлений ОС, оптимизацию, настройку,
  мониторинг, восстановление после сбоев и резервное копирование
- Использование ElasticCache **связано со значительными изменениями кода приложения**.

**Работает по следующему принципу**

- От клиента поступает запрос на получение данных.
- Этот запрос отправляется в ElasticCache
- Если запрос недоступен, запрос отправляется в RDS
- Ответ отправляется на сторону клиента и записывается в ElastiCache
- Таким образом следующий такой-же запрос вернется из кеша
- (Это помогает разгрузить RDS)
- (Кэш должен иметь стратегию аннулирования, чтобы убедиться,
  что там используются только самые последние данные).

</details>
<br>

[//]:# (ElasticCache – Redis vs Memcached)

<details>
    <summary>
        <b><big><big>
            ElasticCache – Redis vs Memcached?
        </big></big></b>
    </summary>

Often, we think about caching to improve
performance while processing a large amount of data.

**Memcached is a distributed memory caching
is well-suited as a cache or a session store.
(For storing larger datasets, Memcached can perform better than Redis)**

Choose Memcached if the following apply for you:

- You need the simplest model possible.
- You need to run large nodes with multiple cores or threads.
- You need the ability to scale out and in,
  adding and removing nodes as demand on your system increases and decreases.
- You need to cache objects.

**Redis is an in-memory data structure store
useful as a cache, database, message broker, and queue.
(Redis uses a single core and shows better performance in storing small datasets)**

Choose Redis if the following apply for you:
- You want to use Redis Functions, Sharded Pub/Sub, or Redis ACL improvements
- You want the ability to tier data between memory and SSD
- You want to authenticate users with role-based access control
- Supports both encryption and dynamically adding or removing shards from your Redis
- You need geospatial indexing
- You don't need to support multiple databases
- You need to sort or rank in-memory datasets.
- You need backup and restore capabilities.

https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SelectEngine.html

</details>
<br>

[//]:# (ElastiCache – Cache Security)

<details>
    <summary>
        <b><big><big>
            ElasticCache – Cache Security
        </big></big></b>
    </summary>

Все кэши в ElasticCache:

- **Не поддерживать аутентификацию IAM.**

AUTH Redis

- Вы можете установить «пароль/токен»
- Это дополнительный уровень безопасности для вашего кеша. (поверх групп безопасности)
- Поддержка SSL в шифровании полета

AUTH Memcached

- Поддерживает аутентификацию на основе SASL (расширенная)

</details>
<br>

[//]:# (ElastiCache Replication)

<details>
    <summary>
        <b><big><big>
            ElasticCache Replication
        </big></big></b>
    </summary>

Репликация для ElasticCache проходи в двух режимах. С включенным или выключенным кластер модом

**Cluster Mode выключен:**

- Один основной узел, до 5 реплик
- Асинхронная репликация
- Основной узел используется для чтения/записи.
- Остальные узлы доступны только для чтения
- Один осколок, все узлы имеют все данные
- Защита от потери данных в случае сбоя узла
- Несколько зон доступности включены по умолчанию для отработки отказа.
- Полезен для масштабирования производительности чтения

![](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/images/ElastiCacheClusters-CSN-Redis-Replicas.png)

**Cluster Mode включен:**

- Данные разделены на сегменты (полезно в масштабе записи)
- Каждый осколок имеет основной и до 5 узлов-реплик (та же концепция, что и раньше)
- Возможность работы в нескольких зонах доступности
- До 500 узлов на кластер:
    - 500 осколков с одним мастером
    - 250 осколков с 1 мастером и 1 репликой
    - 83 осколка с одним мастером и 5 репликами

![](https://digitalcloud.training/wp-content/uploads/2022/01/elasticache-redis-cluster-mode-enabled.jpeg)

</details>
<br>

[//]:# (ElastiCache Caching strategies)

<details>
    <summary>
        <b><big><big>
            ElasticCache Caching strategies
        </big></big></b>
    </summary>

<h3>Lazy Loading / Cache-Aside / Lazy Population</h3>

![](https://miro.medium.com/max/1400/1*pP5PWsso59895EZ8BUYrFw.png)

**Плюсы:**

- Кешируются только запрошенные данные (кеш не заполняется неиспользуемыми данными)
- Отказы узлов не являются фатальными (просто увеличена задержка для прогрева кеша)

**Минусы**

- Штраф за промах кэша, который приводит к 3 обращениям туда и обратно,
  заметной задержке для этого запроса.
- Устаревшие данные: данные могут быть обновлены в базе данных и устарели в кэше.

<h3>Write Through (сквозная запись) - добавление или обновление кеша при
обновлении базы данных</h3>

![](https://miro.medium.com/max/686/1*4c2gEZR3yXkr48lhR5vO2w.png)

**Плюсы:**

- Данные в кеше никогда не устаревают, чтение выполняется быстро
- Штраф за запись против штрафа за чтение (каждая запись требует 2 вызовов)

**Минусы:**

- Отсутствующие данные, пока они не будут добавлены/обновлены в БД.
- Кэширование — большая часть данных никогда не будет прочитана.

<h3>Лучший метод</h3>
Лучший метод это сочетание сквозной записи и ленивой загрузки, потому что
разный тип данных должен записываться в кеш при разных обстоятельствах

</details>
<br>

[//]:# (ElastiCache сache Evictions and Time-to-live [TTL])

<details>
    <summary>
        <b><big><big>
            ElasticCache Cache Evictions and Time-to-live (TTL)
        </big></big></b>
    </summary>

**Удаление кэша может происходить тремя способами:**

- Вы явно удаляете элемент из кеша
- Элемент удален, так как память заполнена и давно не использовалась (LRU).
- Вы устанавливаете срок жизни элемента (или TTL).

**TTL полезен для любого типа данных:**

- TTL может варьироваться от нескольких секунд до часов или дней.
- Если из-за памяти происходит слишком много выселений, следует увеличить или уменьшить масштаб.

</details>
<br>