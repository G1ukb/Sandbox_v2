## What is VPC?

Виртуальное частное облако (VPC) - 
это безопасное изолированное частное облако, размещенное в общедоступном облаке.
VPC сочетают в себе масштабируемость и удобство общедоступных облачных вычислений 
с изоляцией данных при вычислениях в частном облаке.

## What kinds of IP addresses does AWS VPC offer?

В настоящее время Amazon VPC поддерживает пять (5) диапазонов IP-адресов, один (1) первичный и четыре (4) 
вторичных для IPv4. 
Каждый из этих диапазонов может иметь размер от / 28 (в нотации CIDR) до / 16.

## What happens to different IP address types when an EC2 instance is rebooted, stopped, started?

- private ip's не изменятся
- public ip's и dns изменятся

## What is elastic IP?

Эластичный IP-адрес - это зарезервированный общедоступный IP-адрес, который вы можете назначить 
любому экземпляру EC2 в определенном регионе, пока вы не решите его освободить.

## How many elastic IPs is it possible to create per account/region?

Все учетные записи AWS ограничены пятью эластик IP-адресами в каждом регионе.
Их можно менять за дополнительную плату.

## What is elastic network interface?

Elastic Network Interface - это логический сетевой компонент в VPC, 
представляющий виртуальную сетевую карту. Он может включать следующие атрибуты:

Основной приватный IPv4-адрес из диапазона IPv4-адресов вашего VPC.
Один или несколько дополнительных приватных IPv4-адресов из диапазона IPv4-адресов вашего VPC.
Один эластичный IP-адрес (IPv4)
Один публичный IPv4-адрес
Один или несколько адресов IPv6
Одна или несколько групп безопасности
MAC-адрес

## What is CIDR?

CIDR, была разработана как альтернатива традиционному разделению на подсети. 
Идея состоит в том, что вы можете добавить в сам IP-адрес спецификацию количества значащих битов, 
составляющих часть маршрутизации или сети. 
127.0.0.0/24 помечает нам, что первые 24 бита данного IP-адреса считаются важными для сетевой маршрутизации.

##  What is NAT?

Устройства преобразования сетевых адресов Network Address Translation (NAT), 
запущенные в общедоступной подсети, позволяют экземплярам в частной подсети подключаться к Интернету, 
но не позволяют Интернету инициировать соединения с экземплярами.

NAT направляет трафик из частной подсети в Интернет, заменяя исходный IP-адрес своим адресом, 
а для ответного трафика оно преобразует адрес обратно в частные IP-адреса экземпляров.

### What is difference between NAT Gateway and NAT Instance?

Существенное различие в том что GateWay - автоматизированная система которая управляется амазоном
а NAT Instance это частный случай более глубокой настройки.

NAT Instance не обеспечивают такую же доступность и пропускную способность, 
и его необходимо настраивать в соответствии с потребностями приложения.

Экземпляры NAT должны иметь группы безопасности, 
связанные с входящим трафиком из частных подсетей и исходящим трафиком в Интернет.

## What is the difference between security groups and network ACLs?
Network Access Control List - nACL

Scope:
- Группы безопасности привязаны к экземпляру: (изменения в группе поменяет полиси инстансов)
- Сетевые ACL привязаны к подсети (Изменения в подсети поменяет полиси инстансов подключенных
 к этой подсети)
 
State:
- Группы безопасности сохраняют состояние (любые изменения, примененные к входящему правилу, 
будут автоматически применяться к исходящему правилу)
- Сетевые ACL не сохраняют состояние: это означает, что любые изменения, 
примененные к входящему правилу, не будут применяться к исходящему правилу.

Rules:
- Группы безопасности разрешают только allow правила
- ACL разрешают как allow так deny

## What does "local” target mean in terms of an AWS routing table?

Цель => Куда вы хотите отправить трафик для указанного пункта назначения 
(если пункт назначения - моя локальная подсеть, укажите цель как "локальную")

## What is bastion in terms of networking?

Хост-бастион - это специальный компьютер в сети, специально разработанный и настроенный для защиты от атак.
На компьютере обычно размещается одно приложение или процесс, 
например прокси-сервер или балансировщик нагрузки, а все другие службы удаляются или ограничиваются,
чтобы уменьшить угрозу для компьютера.

