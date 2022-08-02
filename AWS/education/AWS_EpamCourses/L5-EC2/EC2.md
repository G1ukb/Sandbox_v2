## - What hardware is offered by EC2? ##

Amazon EC2 предоставляет широкий выбор типов инстансов, 
оптимизированных для различных вариантов использования. 
Типы экземпляров включают различные комбинации 
ЦП, памяти, хранилища и сетевой емкости и дают вам гибкость в выборе 
подходящего сочетания ресурсов для ваших приложений.

## - What provisioning/billing options are available with EC2? ##

Существует пять способов оплаты инстансов Amazon EC2: 
- по запросу (On-Demand) (Оплата по часам или минутам)
    - Приложения с краткосрочными, резкими или непредсказуемыми нагрузками
    - Приложения, разрабатываемые или тестируемые на Amazon EC2 впервые
    - Пользователи, которые предпочитают низкую стоимость и гибкость
- сберегательные планы (Savings Plans) (низкие цены на использование EC2 и в обмен на приверженность постоянному количеству использования)
- зарезервированные инстансы (Reserved Instances) (это физический сервер EC2, выделенный для вашего использования.)
- спотовые инстансы (Spot Instances) (запрашивать резервные вычислительные мощности Amazon EC2 со скидкой до 90%)
    - Приложения с гибким временем начала и окончания
    - Пользователи, которым срочно требуются вычислительные ресурсы для больших объемов дополнительной емкости
    
## - What is EBS? ##

 Amazon Elastic Block Store (Amazon EBS) - это простой в использовании, 
 масштабируемый, высокопроизводительный сервис блочного хранилища для EC2
 
 Amazon EBS позволяет постоянно хранить данные в файловой системе даже после выключения инстанса EC2.
 Amazon также предоставляет локальное хранилище для инстансов EC2, которое вы можете использовать 
 во время запуска инстанса, но вы теряете данные при завершении работы инстанса.
 
 Это означает, что если вы хотите сохранить эти данные, вам необходимо сохранить их в Amazon EBS.
 
 
## - What types of volumes are offered by EC2? ##

- SSD общего назначения (GP2) (SSD общего назначения)
используется для приложений с низкой задержкой, сред разработки и тестирования
- Выделенный SSD с IOPS (io1)
(Высокопроизводительный SSD-том, предназначенный для критически важных приложений с низкой
 задержкой или высокой пропускной способностью)
 используется для больших баз данных и критически важных бизнес-приложений
- HDD с оптимизированной пропускной способностью (st1)
(Недорогой жесткий диск для рабочих нагрузок с высокой пропускной способностью)
используется для обработки журналов, хранилищ данных и потоковых рабочих нагрузок
- Холодный HDD (sc1)
(Самый дешевый объем жесткого диска, предназначенный для нечасто используемых данных)
используется как дешевое решение для хранения

## - What is the difference between AMI and snapshot in terms of EC2? ##

AMI хранилища экземпляров - это копия корневого тома хранилища экземпляров плюс некоторые метаданные
AMI загрузки EBS (snapshot)- это снимок EBS корневого тома EBS плюс некоторые метаданные, 
такие как архитектура, ядро, имя AMI

Отличие в том что AMI это образ (Лучше использовать если мы хотим сохранить конфигурацию EC2 инста)
А EBS - моментальный снимок состояния который позволяет перезагружаться с данными в любой момент времени
(Например как способ резервного копирования БД)

## - What are regions and availability zones in AWS?

Регионы AWS это географические точки доступности. 
Зоны доступности - это отдельные местоположения в пределах региона AWS, 
которые спроектированы таким образом, чтобы быть изолированными от сбоев в других зонах доступности.

## - (Странный вопрос) How is it possible to install/configure software on a EC2 instance?

EC2 позволяют устанавливать на себя доступное ПО. (sudo yum install links)

## - (Странный вопрос) What keys are created for each EC2 instance? What for?

Пара ключей, состоящая из открытого и закрытого ключей, представляет собой набор учетных данных безопасности,
которые мы используем для подтверждения своей личности при подключении к инстансу Amazon EC2 через SSH.

## - What happens to EC2 instances when they are stopped and started vs re-started?

В большинстве случаев экземпляр переносится на новый базовый хост-компьютер при запуске 
(хотя в некоторых случаях он остается на текущем хосте).

Экземпляр сохраняет свои приватные IPv4-адреса и любые IPv6-адреса при остановке и запуске. 
Но меняет IPv4-адрес и DNC.

## - What is the difference between IAM roles and EC2 (VPC) security groups? ##

Группы безопасности определяют:
- какие компьютеры могут подключаться к вашему экземпляру EC2
- каким портам могут подключаться другие компьютеры

Роли IAM:
- определяют, какие команды API AWS можно выполнять с помощью интерфейса командной строки.
В случае роли это пермишены на выполнение которые накладываются на инстанс

## - Is it possible to decrease the size of an existing EBS volume?

У уже созданного - нет
Но мы можем приатачить дополнительный EBS вольюм 
Или создать Image старого снести, создать новый более большой и затем применить image

## - Is it possible to reuse a EBS volume for multiple instances?

Amazon EBS Multi-Attach позволяет подключить один том SSD с выделенным IOPS (io1 или io2) к 
нескольким инстансам, находящимся в одной зоне доступности. 
Вы можете присоединить несколько томов с поддержкой множественного подключения к экземпляру 
или набору экземпляров. Каждый экземпляр, к которому присоединен том, имеет полное разрешение 
на чтение и запись в общий том.

## - How is it possible to get such metadata as current region/AZ from within a running EC2 instance?

AWS API Url get запрос
http://169.254.169.254/latest/meta-data/

Или например Java SDK static EC2Instance.getMetadata();

## - What are the available elastic load balancer types? What is the key difference between them?

Elastic Load Balancing поддерживает следующие типы балансировщиков нагрузки: 
- балансировщики нагрузки приложений.
    - принимает решения о маршрутизации на уровне приложения (HTTP / HTTPS), 
    поддерживает маршрутизацию на основе путей и может направлять запросы на один или несколько портов 
    в каждом экземпляре контейнера в вашем кластере.
- балансировщики сетевой нагрузки
    - Балансировщик сетевой нагрузки принимает решения о маршрутизации на транспортном уровне (TCP / SSL). 
    Он может обрабатывать миллионы запросов в секунду. 
    После того как балансировщик нагрузки получает соединение, он выбирает цель из 
    целевой группы для правила по умолчанию, используя алгоритм маршрутизации хэша потока.
- классические балансировщики нагрузки
    - Классический балансировщик нагрузки принимает решения о маршрутизации либо на транспортном уровне 
    (TCP / SSL), либо на уровне приложения (HTTP / HTTPS). 
    Классические балансировщики нагрузки в настоящее время требуют фиксированной связи 
    между портом балансировщика нагрузки и портом экземпляра контейнера.
- Балансировщики нагрузки шлюза
    - Балансировщик нагрузки шлюза работает на третьем уровне OSI сетевом уровне. 
    Он прослушивает все IP-пакеты через все порты и пересылает трафик целевой группе, 
    указанной в правиле прослушиваться.

## - What are the key events in EC2 instance lifecycle?

Инстанс Amazon EC2 переходит из одного состояния в другое с момента его запуска до завершения.
Стадии переходов - 
   Start -> Pending -> Running -> Rebooting || Shutting-Down -> Terminating || Stopping -> Stopped

![img](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/instance_lifecycle.png)

## - How does load balancing works? What are its core components?

Балансировщик нагрузки принимает входящий трафик от клиентов и направляет запросы инстансам 
в одной или нескольких зонах доступности. 
Балансировщик нагрузки также отслеживает состояние инстансов и 
обеспечивает маршрутизацию трафика только к работоспособным целям. 

Когда балансировщик нагрузки обнаруживает нездоровый инстанс, 
он прекращает маршрутизацию трафика к этой цели. 
Возобновляя только когда обнаруживает, что цель снова исправна.

## - How is it possible to grant a EC2 instance permissions to access certain AWS resources like S3?

an IAM role

## - What is auto-scaling? How is it related to load balancing?

При использовании эластичной балансировки нагрузки с группой автоматического масштабирования 
нет необходимости регистрировать отдельные экземпляры EC2 в балансировщике нагрузки. 
Экземпляры, запускаемые вашей группой Auto Scaling, автоматически регистрируются в балансировщике нагрузки. 
Точно так же экземпляры, которые прекращены вашей группой Auto Scaling, 
автоматически отменяются из балансировщика нагрузки.
