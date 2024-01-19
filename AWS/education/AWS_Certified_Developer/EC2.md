<h1>EC2</h1>

[//]:# (EC2 Instance Types?)

<details>
    <summary>
        <b><big><big>
            EC2 Instance Types?
        </big></big></b>
    </summary>

- Общего назначения (genetal purpose) - Эти инстансы идеально подходят для приложений, которые используют 
  ресурсы в одинаковых объемах

- Оптимизированные для вычислений - для рабочих нагрузок с пакетной обработкой, перекодировки мультимедиа, 
  высокопроизводительных веб-серверов, высокопроизводительных вычислений (HPC)

- Оптимизированные для памяти - обработкой в ней больших наборов данных.

- Для ускоренных вычислений - для таких операций, как вычисления с плавающей запятой

- Оптимизированные для хранения - чтения и записи к пакетам очень больших данных в локальном хранилище.
    
- Оптимизация для высокопроизводительных вычислений - для приложений, использующих высокопроизводительные процессоры, 
  например для создания крупных, сложных моделей и рабочих нагрузок глубокого обучения.

</details>
<br>

[//]:# (EC2 Instance Pricing Options?)

<details>
    <summary>
        <b><big><big>
            EC2 Instance Pricing Options? (On Demand/Reserved/Spot/Dedicated)
        </big></big></b>
    </summary>

- On Demand - pay the hour or the second
- Reserved - reserved capacity for one or three years. Up to 72% discount
- Spot - purchase unused capacity (90% discount)
- Dedicated - physical ec2 - most expensive

Существует пять способов оплаты инстансов Amazon EC2:
- **по запросу (On-Demand)** (Оплата по часам или минутам)
  - Приложения с краткосрочными, резкими или непредсказуемыми нагрузками
  - Приложения, разрабатываемые или тестируемые на Amazon EC2 впервые
  - Пользователи, которые предпочитают низкую стоимость и гибкость
- **сберегательные планы (Savings Plans)** (низкие цены на использование EC2 
   и в обмен на приверженность постоянному количеству использования)
- зарезервированные инстансы (Reserved)
(это физический сервер EC2, выделенный для вашего использования. Up to 72% discount)
- спотовые инстансы (Spot Instances) (90% discount)
  (запрашивать резервные вычислительные мощности Amazon EC2 со скидкой до 90%)
  - Приложения с гибким временем начала и окончания
  - Пользователи, которым срочно требуются вычислительные ресурсы для больших объемов дополнительной емкости


</details>
<br>

[//]:# (What is EBS?)

<details>
    <summary>
        <b><big><big>
            What is EBS?
        </big></big></b>
    </summary>

Amazon Elastic Block Store (Amazon EBS) - это простой в использовании,
масштабируемый, высокопроизводительный сервис блочного хранилища для EC2

Amazon EBS позволяет постоянно хранить данные в файловой системе даже после выключения инстанса EC2.
Amazon также предоставляет локальное хранилище для инстансов EC2, которое вы можете использовать
во время запуска инстанса, но вы теряете данные при завершении работы инстанса.

Это означает, что если вы хотите сохранить эти данные, вам необходимо сохранить их в Amazon EBS.

</details>
<br>

[//]:# (What types of volumes are offered by EC2)

<details>
    <summary>
        <b><big><big>
            What types of volumes are offered by EC2
        </big></big></b>
    </summary>

- **SSD общего назначения (GP2)** (SSD общего назначения)
  используется для приложений с низкой задержкой, сред разработки и тестирования
- **Выделенный SSD с IOPS (io1)**
  (Высокопроизводительный SSD-том, предназначенный для критически важных приложений с низкой
  задержкой или высокой пропускной способностью)
  используется для больших баз данных и критически важных бизнес-приложений
- **HDD с оптимизированной пропускной способностью (st1)**
  (Недорогой жесткий диск для рабочих нагрузок с высокой пропускной способностью)
  используется для обработки журналов, хранилищ данных и потоковых рабочих нагрузок
- **Холодный HDD (sc1)**
  (Самый дешевый объем жесткого диска, предназначенный для нечасто используемых данных)
  используется как дешевое решение для хранения
- **Provisioned IOPS SSD io2 Block Express** - provides high performance, 
  sub-millisecond latency SAN performance in the cloud. 
  It is suitable for the largest, most critical, 
  high-performance applications like Oracle, SAP HANA, 
  Microsoft SQL Server, and SAS Analytics.. 
  Each volume can support up to 64 TiB and 256,000 IOPS per volume.

</details>
<br>

[//]:# (What is AMI?)

<details>
    <summary>
        <b><big><big>
            What is AMI? What is EC2 Image builder?
        </big></big></b>
    </summary>

AMI (Amazon Machine Images) - is configuration of setup EC2 env.

EC2 Image Builder is a tool there you can build your own EC2 instance 
  by using already worked ec2 instance by coping all settings

This is suitable in situation where you are not created previous ec2 
  and need a quick copy 

</details>
<br>

[//]:# (In order to enable encryption using EC2 and Elastic Block Store, you must?)

<details>
    <summary>
        <b><big><big>
            In order to enable encryption using EC2 and Elastic Block Store, you must?
        </big></big></b>
    </summary>

Configure encryption when creating the EBS volume -
When you create a new, empty EBS volume, you can encrypt it by
enabling encryption for the specific volume creation operation.

</details>
<br>

[//]:# (How you can encrypt AMI if you already have unencrypted AMI?)

<details>
    <summary>
        <b><big><big>
            How you can encrypt AMI if you already have unencrypted AMI?
        </big></big></b>
    </summary>

It is not possible to encrypt an AMI after it has been created. 
You will need to create a copy of the AMI and add encryption for the copy.

</details>
<br>

[//]:# (Where you can store user session state?)

<details>
    <summary>
        <b><big><big>
            Where you can store user session state?
        </big></big></b>
    </summary>

- Store session state in DynamoDB (preferred)
- Use an ElastiCache cluster

</details>
<br>