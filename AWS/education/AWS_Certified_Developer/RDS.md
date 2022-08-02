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

[//]:# (What is RDS Read replicas? Read replicas vs Multi AZ?)

<details>
    <summary>
        <b><big><big>
            What is RDS Read replicas? Read replicas vs Multi AZ?
        </big></big></b>
    </summary>

**Read replicas - специальные readonly копии основной базы**  
- До 5 реплик чтения
- В пределах AZ, через AZ или кросс-регион
- Репликация выполняется асинхронно, поэтому операции чтения в конечном итоге непротиворечивы.
- Реплики могут быть повышен до их собственная БД
- Приложения должны обновить соединение строка для чтения реплики

**Пример использования**

У вас есть приложение на которое оказывается большая нагрузка. 
Вы хотите провести тест нагрузки. 
Вы создаете READ REPLICA для выполнения рабочей нагрузки
Работающее основное приложение остается нетронутым и работает в спокойном режиме

**Синхронная репликация (Multi AZ)**
- Одно DNS-имя — автоматическое переключение приложения в режим ожидания
- Повышение доступности
- Аварийное переключение в случае потери AZ, потери сети, экземпляра или сбоя хранилища
- Нет ручного вмешательства в приложения (переключение происходит автоматически средствами AWS)
- Не используется для масштабирования
- Репликация в нескольких зонах доступности предоставляется бесплатно.
- Примечание. Реплики чтения должны быть настроены как несколько 
  зон доступности для аварийного восстановления (DR).

**Работа с нулевым временем простоя (нет необходимости останавливать БД) 
  при синхронной репликации**
- При замене базы данных происходит следующее.
- Делается снимок БД
- Новая БД восстанавливается из снимка в новой AZ
- Установлена синхронизация между двумя базами данных

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