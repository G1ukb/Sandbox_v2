[//]:# (What is VPC?)

<details>
    <summary>
        <b><big><big>
            What is VPC?
        </big></big></b>
    </summary>

Виртуальное частное облако (VPC) -
это безопасное изолированное частное облако, размещенное в общедоступном облаке.
VPC сочетают в себе масштабируемость и удобство общедоступных облачных вычислений
с изоляцией данных при вычислениях в частном облаке.

</details>
<br>

[//]:# (What is VPC?)

<details>
    <summary>
        <b><big><big>
            What kinds of IP addresses does AWS VPC offer?
        </big></big></b>
    </summary>

В настоящее время Amazon VPC поддерживает пять (5) диапазонов IP-адресов, 
один (1) первичный и четыре (4)
вторичных для IPv4.
Каждый из этих диапазонов может иметь размер от / 28 (в нотации CIDR) до / 16.


</details>
<br>

[//]:# (What happens to different IP address types when an EC2 instance is rebooted, stopped, started?)

<details>
    <summary>
        <b><big><big>
            What happens to different IP address types when an EC2 instance is rebooted, stopped, started?
        </big></big></b>
    </summary>

- private ip's не изменятся
- public ip's и dns изменятся

</details>
<br>

[//]:# (What is elastic IP?)

<details>
    <summary>
        <b><big><big>
            What is elastic IP?
        </big></big></b>
    </summary>

Эластичный IP-адрес - это зарезервированный общедоступный IP-адрес, который вы можете назначить
любому экземпляру EC2 в определенном регионе, пока вы не решите его освободить.

</details>
<br>

[//]:# (How many elastic IPs is it possible to create per account/region?)

<details>
    <summary>
        <b><big><big>
            How many elastic IPs is it possible to create per account/region?
        </big></big></b>
    </summary>

Все учетные записи AWS ограничены пятью эластик IP-адресами в каждом регионе.
Их можно менять за дополнительную плату.

</details>
<br>

[//]:# (What is elastic network interface?)

<details>
    <summary>
        <b><big><big>
            What is elastic network interface?
        </big></big></b>
    </summary>

Elastic Network Interface - это логический сетевой компонент в VPC,
представляющий виртуальную сетевую карту. Он может включать следующие атрибуты:

Основной приватный IPv4-адрес из диапазона IPv4-адресов вашего VPC.
Один или несколько дополнительных приватных IPv4-адресов из диапазона IPv4-адресов вашего VPC.
Один эластичный IP-адрес (IPv4)
Один публичный IPv4-адрес
Один или несколько адресов IPv6
Одна или несколько групп безопасности
MAC-адрес

</details>
<br>

[//]:# (What is CIDR?)

<details>
    <summary>
        <b><big><big>
            What is CIDR?
        </big></big></b>
    </summary>

CIDR, была разработана как альтернатива традиционному разделению на подсети.
Идея состоит в том, что вы можете добавить в сам IP-адрес спецификацию количества значащих битов,
составляющих часть маршрутизации или сети.
127.0.0.0/24 помечает нам, что первые 24 бита данного IP-адреса считаются важными для сетевой маршрутизации.

</details>
<br>

[//]:# (What is NAT?)

<details>
    <summary>
        <b><big><big>
            What is NAT?
        </big></big></b>
    </summary>

Устройства преобразования сетевых адресов Network Address Translation (NAT),
запущенные в общедоступной подсети, позволяют экземплярам в частной 
подсети подключаться к Интернету,
но не позволяют Интернету инициировать соединения с экземплярами.

NAT направляет трафик из частной подсети в Интернет, заменяя 
исходный IP-адрес своим адресом,
а для ответного трафика оно преобразует адрес обратно в частные 
IP-адреса экземпляров.

</details>
<br>

[//]:# (NAT vs VPC vs Internet Gateway (IGW)?)

<details>
    <summary>
        <b><big><big>
            NAT vs VPC?
        </big></big></b>
    </summary>

A Virtual Private Cloud (VPC) and a Network Address Translation (NAT) 
gateway are both components of a network infrastructure, 
but they serve different purposes.

VPC (Virtual Private Cloud): A VPC is a virtual network dedicated 
to your AWS account. It is logically isolated from other virtual 
networks in the AWS Cloud.

NAT (Network Address Translation) Gateway: 
A NAT gateway enables instances in a private subnet 
to connect to the internet or other AWS services, 
but it prevents the internet from initiating connections with those instances

</details>
<br>

[//]:# (What is difference between NAT Gateway and NAT Instance?)

<details>
    <summary>
        <b><big><big>
            What is difference between NAT Gateway and NAT Instance?
        </big></big></b>
    </summary>

Существенное различие в том что GateWay - 
автоматизированная система которая управляется амазоном
а NAT Instance это частный случай более глубокой настройки.

NAT Instance не обеспечивают такую же доступность и пропускную способность,
и его необходимо настраивать в соответствии с потребностями приложения.

Экземпляры NAT должны иметь группы безопасности,
связанные с входящим трафиком из частных подсетей и исходящим трафиком в Интернет.

</details>
<br>

[//]:# (What is security groups?)

<details>
    <summary>
        <b><big><big>
            What is security groups?
        </big></big></b>
    </summary>

A security group controls the traffic allowed 
to reach and leave the resources that it is associated with. 

For example, after you associate a security group with an EC2 instance, 
it controls the inbound and outbound traffic for the instance.

</details>
<br>

[//]:# (What does "local” target mean in terms of an AWS routing table?)

<details>
    <summary>
        <b><big><big>
            What does "local” target mean in terms of an AWS routing table?
        </big></big></b>
    </summary>

Цель => Куда вы хотите отправить трафик для указанного пункта назначения
(если пункт назначения - моя локальная подсеть, укажите цель как "локальную")

</details>
<br>

[//]:# (What is bastion in terms of networking?)

<details>
    <summary>
        <b><big><big>
            What is bastion in terms of networking?
        </big></big></b>
    </summary>

Хост-бастион - это специальный компьютер в сети, специально 
разработанный и настроенный для защиты от атак.
На компьютере обычно размещается одно приложение или процесс,
например прокси-сервер или балансировщик нагрузки,
а все другие службы удаляются или ограничиваются,
чтобы уменьшить угрозу для компьютера.

</details>
<br>
