<h1> RDS </h1>

[//]:# (What is RDS?)

<details>
    <summary>
        <b><big><big>
            What is RDS?
        </big></big></b>
    </summary>

RDS означает службу реляционной базы данных. (Relational Database Service)

**Это управляемая служба БД для БД, использующая SQL в качестве языка запросов.**

Это позволяет создавать базы данных в облаке, которыми управляет AWS.
Среди поддерживаемых языков:
- Postgres
- MySQL
- MariaDB
- Oracle
- Micr. SQL Server
- Aurora (собственная база данных AWS)

**Преимущество перед использованием RDS по сравнению с развертыванием БД на EC2**
- RDS — это управляемая служба
- Автоматический провижен изменений, развертывание патчей
- Непрерывное резервное копирование и восстановление с определенной временной меткой
- Панели мониторинга
- Реплики чтения для повышения производительности чтения
- Настройка в нескольких зонах доступности для аварийного восстановления (аварийное восстановление)
- Возможность масштабирования (вертикальное и горизонтальное)
- Хранилище с поддержкой EBS (gp2 или io1)
- **НО вы не можете подключиться к своим инстансам по SSH** (Хотя с MYSQL у меня получалось)

**Резервные копии RDS**
- Ежедневное полное резервное копирование базы данных (в период обслуживания)
- Журналы транзакций резервируются RDS каждые 5 минут.
- => возможность восстановления на любой момент времени 
  (от самой старой резервной копии до 5 минут назад)
- Срок хранения 7 дней (можно увеличить до 35 дней)
- **может создавать Снимки БД:**
  - Запускается пользователем вручную
  - Сохранение резервной копии столько, сколько вы хотите
  
**Автоматическое масштабирование хранилища**
- Помогает увеличить объем хранилища в вашем экземпляре БД RDS. Динамично
- Когда RDS обнаруживает, что у вас заканчивается свободная база данных
  хранилище, масштабируется автоматически
- Избегайте ручного масштабирования хранилища базы данных. 
- Необходимо установить максимальный порог хранилища (максимальный предел для хранилища БД)
- Автоматически изменять хранилище, если: 
  - Свободное хранилище составляет менее 10% выделенного хранилища. 
  - Нехватка хранилища длится не менее 5минут. 
  - 6 часов с момента последнего изменения 
  - Полезно для приложений с непредсказуемыми рабочими нагрузками 
  - Поддерживает все механизмы баз данных RDS (MariaDB, MySQL, PostgreSQL, SQL Server, Oracle)

</details>
<br>

[//]:# (What is RDS Read replicas? Read replicas vs Multi AZ vs Multi-Region deployments?)

<details>
    <summary>
        <b><big><big>
            What is RDS Read replicas? Read replicas vs Multi AZ?
        </big></big></b>
    </summary>

Amazon RDS Read Replicas provide enhanced performance and durability 
for Amazon RDS database (DB) instances. 
They make it easy to elastically scale out beyond the capacity 
constraints of a single DB instance for **read-heavy database workloads**. 

You can create one or more replicas 
of a given source DB Instance and serve high-volume application
read traffic from multiple copies of your data

![img](https://d1.awsstatic.com/asset-repository/read-replicas-scaling-disaster-recovery.3b8da7093daeb1e87426225caf49e32efe7ae01a.png)

Read replicas vs Multi AZ vs Multi-Region deployments

Multi-AZ deployments
  - **Main purpose is high availability**

Multi-Region deployments
  - **Main purpose is disaster recovery and local performance**

Read replicas
  - **Main purpose is scalability**

https://aws.amazon.com/rds/features/read-replicas/?nc1=h_ls

</details>
<br>

[//]:# (What is RDS pricing?)

<details>
    <summary>
        <b><big><big>
            What is RDS pricing?
        </big></big></b>
    </summary>

Amazon берет деньги за часы работы RDS
За его память и выделенную зарезервированную память

Так же:
AWS **не взимает плату** за данные которые идут **внутри одного региона**
(например между us-west-1a и us-west-1b плата не взимается)

Если **данные идут в разные регионы, AWS взимает плату**
(например между us-west-1a и us-east-1b)

</details>
<br>

[//]:# (What RDS operational [maintenance, monitoring] practices do you know?)

<details>
    <summary>
        <b><big><big>
            What RDS operational (maintenance, monitoring) practices do you know?
        </big></big></b>
    </summary>

Amazon описывает следующие юз кейсы использования:
- Рекламные технологии (потоки кликов, пользовательские события и профили пользователей)
- Игры (списки лидеров, хранилища данных об игроках и игровые состояния).
- Розничная торговля (онлайн-корзины, отслеживание броней и профили клиентов)
- Банковское дело и финансы (обработку транзакций на основе событий, 
  обнаружение мошенничества и сбор измененных данных.).
- Медиа и развлечения (управление цифровыми правами, хранилища пользовательских 
  данных и хранилища метаданных).
- Программное обеспечение как услуга (SaaS) — хранилища метаданных контента, 
  кэши метаданных и хранилища данных графа отношений.

</details>
<br>

[//]:# (What about RDS Encryption? How we can get encrypted DB from decrypted?)

<details>
    <summary>
        <b><big><big>
            What about RDS Encryption? How we can get encrypted DB from decrypted?
        </big></big></b>
    </summary>

**Шифрование в RDS:**
- Шифрование в состоянии покоя
- Возможность шифрования мастер-реплик и реплик чтения с помощью AWS KMS — шифрование AES-256.
- Шифрование должно быть определено во время запуска. (При создании выбираем шифруем или нет)
- Если мастер не зашифрован, реплики чтения не могут быть зашифрованы.
- Прозрачное шифрование данных (Transparent Data Encryption TDE) доступно для Oracle и SQL Server.
  (Это специальный метод шифрования продуктов от microsoft)

**Шифрование в полете**
- SSL-сертификаты для шифрования данных в RDS во время полета
- Предоставить параметры SSL с доверенным сертификатом при подключении к базе данных.
- Для принудительного использования SSL:
  - PostgreSQL: rds.force_ssl=1 в консоли AWS RDS (группы параметров).
  - MySQL: внутри БД:
    GRANT USAGE ON *.* TO 'mysqluser'@'%' REQUIRE SSL;

**Операции шифрования RDS**
- Шифрование резервных копий RDS
- Моментальные снимки незашифрованных баз данных RDS не зашифрованы.
- Моментальные снимки зашифрованных баз данных RDS шифруются
- Может копировать снимок в зашифрованный 

**Чтобы зашифровать, незашифрованную базу данных RDS:**
- Создание моментального снимка незашифрованной базы данных.
- Скопируйте снимок, и включите шифрование для снимка.
- Восстановить базу данных из зашифрованного снимка
- Перенос приложений в новую базу данных и удаление старой базы данных.

</details>
<br>

[//]:# (What about RDS Security – Network & IAM?)

<details>
    <summary>
        <b><big><big>
            What about RDS Security – Network & IAM?
        </big></big></b>
    </summary>

**Сетевая безопасность**
- Базы данных RDS обычно развертываются в частной подсети (private subnet), а не в общедоступной.
- Безопасность RDS работает за счет использования **групп безопасности** 
  (та же концепция, что и для EC2 instances) — 
  контролирует, какой IP/группа безопасности может взаимодействовать с RDS

**Управление доступом**
- Политики IAM помогают контролировать, кто может управлять AWS RDS (через RDS API).
- Для входа в базу данных можно использовать традиционное имя пользователя и пароль.
- Аутентификация на основе IAM может использоваться для входа в RDS MySQL и PostgreSQL.

**RDS — IAM-аутентификация**
- Проверка подлинности базы данных IAM работает с MySQL и PostgreSQL
- Вам не нужен пароль, просто токен аутентификации, полученный через Вызовы API IAM и RDS
- Срок действия токена аутентификации составляет 15 минут.

**Преимущества**
- Сетевой вход/выход должен быть зашифрован с использованием SSL.
- IAM для централизованного управления пользователями вместо БД
- Может использовать роли IAM и экземпляр EC2. профили для легкой интеграции

</details>
<br>

[//]:# (What is difference between OLTP and OLAP?)

<details>
    <summary>
        <b><big><big>
            What is difference between OLTP and OLAP?
        </big></big></b>
    </summary>

OLTP - Online Transaction Processing - processes data from
  transactions in ral-time

OLAP - Online Analytics Processing - process queries to analuze 
  historical data

</details>
<br>

[//]:# (Is RDS suitable for OLTP and OLAP?)

<details>
    <summary>
        <b><big><big>
            Is RDS suitable for OLTP and OLAP?
        </big></big></b>
    </summary>

Yes for OLTP (because of transactions processing)

No for OLAP (there are another services for processing data analysis (RedShift))

</details>
<br>

[//]:# (What is RDS Proxy? How we can increase ab availability?)

<details>
    <summary>
        <b><big><big>
            What is RDS Proxy? How we can increase ab availability?
        </big></big></b>
    </summary>

RDS Proxy have these pluses: 
- Serverless and scales automatically database connections
- Preserves (Сохраняет) app connections during failover
- Detects fail-over and routes requests
- Deployable over Multu-AZ

</details>
<br>

[//]:# (What is MemoryDB?)

<details>
    <summary>
        <b><big><big>
            What is MemoryDB? (Used in redis) ElastiCache vs MemoryDB
        </big></big></b>
    </summary>

1. In-Memory Database
2. Use cases - online gaming with millions users
3. MemoryDB vs ElastiCashe
  MemoryDB store whole dataset in memory without database
  ElastiCache is an in-memory cache for DBs
  
</details>
<br>

[//]:# (How RDS DB snapshot works?)

<details>
    <summary>
        <b><big><big>
            How RDS DB snapshot works?
        </big></big></b>
    </summary>

1. User initiated
2. Point-in-time snapshot
3. no retention period
4. used to back up your DB instance to a known state and restore
   to that specific state at any time

</details>
<br>

[//]:# (What two steps should you take to reduce the RDS CPU utilization?)

<details>
    <summary>
        <b><big><big>
            What two steps should you take to reduce the RDS CPU utilization?
        </big></big></b>
    </summary>

1. Create an ElastiCache cluster and use this to cache your most
   frequently read blog posts.
2. Create multiple RDS read replicas and point multiple EC2 
   instances to these read replicas, thereby spreading the load.

Amazon ElastiCache improves the performance of web applications 
  by allowing you to retrieve information from a fast,
  managed, in-memory system, instead of relying entirely on slower 
  disk-based databases.

Amazon RDS Read Replicas make it easy to elastically scale out beyond 
  the capacity constraints of a single DB instance for read-heavy 
  database workloads.

</details>
<br>

[//]:# (Can we encrypt an existing AMI that is unencrypted? what we should do?)

<details>
    <summary>
        <b><big><big>
            Can we encrypt an existing AMI that is unencrypted? what we should do?
        </big></big></b>
    </summary>

You cannot add encryption to an existing AMI. 
Instead, you will need to create a copy and specify that the copy has encryption enabled.

</details>
<br>

[//]:# (How we improve performance of RDS db?)

<details>
    <summary>
        <b><big><big>
            How we improve performance of RDS DB?
        </big></big></b>
    </summary>

- ElastiCache for **Memcached** can be used to improve read performance of databases;
but it does not have the ability to sort and rank query results.
- ElastiCache for **Redis** can be used to improve read performance of databases, 
and it also has the ability to sort and rank query results.
- Add a read replica to improve performance for read queries.
(A read replica will improve performance for read-only queries
to an RDS database.)

</details>
<br>

[//]:# (RDS vs DynamoDB?)

<details>
    <summary>
        <b><big><big>
            RDS vs DynamoDB?
        </big></big></b>
    </summary>

RDS is relative db like MySQL, postgresSQl
  - not so high scalability as DynamoDB
  - Amazon RDS provides a cost-effective way to manage relational databases in the cloud

DynamoDB is a key-value and document database 
that delivers single-digit millisecond performance at any scale.
  - features flexibility, scalability, and performance.
  - offers high availability out of the box with no need for setup or configuration.
  - automatically replicates your data across multiple Availability Zones

https://cloudacademy.com/blog/amazon-rds-vs-dynamodb-12-differences/

</details>
<br>

[//]:# (S3 vs DynamoDB?)

<details>
    <summary>
        <b><big><big>
            S3 vs DynamoDB?
        </big></big></b>
    </summary>

S3 is a storage solution suitable for images, 
documents, and other files or objects that can be accessed 
by multiple users and services.

DynamoDB is a NoSQL database and not a 
suitable place to store images and text documents.

</details>
<br>