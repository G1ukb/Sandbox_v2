[//]: # (SQL)
<br>
<details>
    <summary>
        <b><big><big><big>
            SQL
        </big></big></big></b>
    </summary>

[//]: # (Что такое SQL)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что такое SQL
        </big></big></big></b>
    </summary>

SQL (structured query language) - специальный язык, используемый для работы с базами данных.
С помощью SQL можно задавать структуру базы, организовывать выборку данных
по каким-то определённым критериям, удалять и изменять данные.

</details>

[//]: # (Что такое СУБД)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что такое СУБД + основные функции
        </big></big></big></b>
    </summary>

СУБД (Система Управления Базами Данных) - программное обеспечение, которое взаимодействует
с пользователем, приложениями и самой базой данных для сбора и анализа данных.
СУБД позволяет пользователю взаимодействовать с базой данных.
Данные, хранящиеся в базе данных, могут быть изменены, извлечены и удалены.

СУБД == SQL Server

- управление данными БД;
- логирование изменений;
- резервное копирование и восстановление базы данных после сбоев;
- поддержка языков БД.

</details>

[//]: # (Типы СУБД)
<br>
<details>
    <summary>
        <b><big><big><big>
             Типы СУБД
        </big></big></big></b>
    </summary>

**Реляционная (RSQL)** - поддерживает SQL.
Отношения между объектами выглядит как таблицы которые
связаны между собой PK и FK отношениями

**Нереляционная (NoSQL)** - частично поддерживает SQL (не все виды)
Отношения между объектами представлены как нереляционные это могут быть
таблицы, единый документ (json) или описываться xml и так далее

</details>

[//]: # (SQL vs NoSQL)
<br>
<details>
    <summary>
        <b><big><big><big>
             SQL vs NoSQL
        </big></big></big></b>
    </summary>

- **Вертикальное масштабирование** — заменять в существующей вычислительной
  системе компоненты более мощными и быстрыми
- **Горизонтальное масштабирование** - разбиение системы на более мелкие структурные компоненты и
  разнесение их по отдельным физическим машинам (увеличение количества серверов)

SQL:

Плюсы:
+ Структурированность хранения данных
+ SQL стандартный язык запросов (при переходе от одной SQL БД к другой, изменения будут минимальны)
+ Хорошая вертикальная масштабируемость
+ Они надежны
+ Имеют хорошую поддержку из-за того что существуют достаточно давно
+ Позволяют решать достаточно сложные задачи

Минусы:
- Плохая горизонтальная масштабируемость
- Из-за того что данные распределены по таблицам, может проседать скорость работы
- Достаточно сложная работа с большой базой

NoSQL: подходят для многих мобильных, игровых, интернет‑приложений,
когда **требуются гибкие масштабируемые** базы данных **с высокой производительностью**
и широкими функциональными возможностями, способные обеспечивать **максимальное удобство использования.**

Плюсы:
+ Отличная масштабируемость как вертикально так и горизонтально
+ Гибкая разработка (проходит быстрее)
+ Высокая производительность
+ Широкие функциональные возможности

Минусы:
- Неструктурное хранение данных
- Каждая NoSQL база имеет свой способ работы с данными
- Плохая надежность
- Не очень хорошая поддержка из-за того что некоторые NoSQL еще молодые
- Сложно решать сложные задачи

</details>

[//]: # (Из каких подмножеств состоит SQL DDL/DML/DCL/TCL)
<br>
<details>
    <summary>
        <b><big><big><big>
             Из каких подмножеств состоит SQL (DDL/DML/DCL/TCL)
        </big></big></big></b>
    </summary>

- DDL (Data Definition Language, язык описания данных)
  позволяет выполнять различные операции с базой данных,
  такие как CREATE (создание), ALTER (изменение) и DROP (удаление объектов).
- DML (Data Manipulation Language, язык управления данными)
  позволяет получать доступ к данным и манипулировать ими,
  например, вставлять, обновлять, удалять и извлекать данные из базы данных.
- DCL (Data Control Language, язык контролирования данных)
  позволяет контролировать доступ к базе данных.
  Пример — GRANT (предоставить права), REVOKE (отозвать права).
- TCL (Transaction Control Language) - контроль над DML командами
  Пример - СOMMIT/ROLLBACK

</details>

[//]: # (Materialized View vs View)
<br>
<details>
    <summary>
        <b><big><big><big>
             Materialized View vs View
        </big></big></big></b>
    </summary>

View:
- View таблицы никогда не сохраняются, только отображается.
- Представление - это виртуальная таблица,
  сформированная из одной или нескольких базовых таблиц или представлений

+ Представление обновляется каждый раз, когда используется виртуальная таблица
+ Не требует дискового пространства для хранения
- (Главное) Медленная обработка

Materialized View:
- Материализованное представление хранится на диске.
- Материализованное представление является физической копией базовой таблицы (На момент создания)
- Материализованное представление должно обновляться вручную или с использованием триггеров.

+ Быстрая обработка
+ Материализованный вид использует пространство памяти.

</details>

[//]: # (Понятие целостности данных)
<br>
<details>
    <summary>
        <b><big><big><big>
             Понятие целостности данных
        </big></big></big></b>
    </summary>

Целостность данных – это полнота, точность и единообразие данных.
Для поддержания целостности данных в реляционных БД используется ряд инструментов.
Целостность данных обеспечивается при помощи constraint.
Эти ограничения целостности позволяют применять практические правила к данным в таблицах
и гарантировать точность и надежность данных.

</details>

[//]: # (Ограничения constraints)
<br>
<details>
    <summary>
        <b><big><big><big>
            Ограничения (constraints)
        </big></big></big></b>
    </summary>

Ограничения (constraints) используются для указания ограничения на тип данных таблицы. 
Они могут быть указаны при создании или изменении таблицы. Пример ограничений:

- NOT NULL      - гарантирует, что столбец не может иметь значение NULL
- UNIQUE        - гарантирует, что все значения в столбце разные
- PRIMARY KEY   - комбинация NOT NULL и UNIQUE. Уникально идентифицирует каждую строку в таблице
- FOREIGN KEY   - уникально идентифицирует строку / запись в другой таблице
- CHECK         - Гарантирует, что все значения в столбце удовлетворяют определенному условию
- DEFAULT       - устанавливает значение по умолчанию для столбца, если значение не указано
- INDEX         - используется для очень быстрого создания и извлечения данных из базы данных
- AUTO_INCREMENT- позволяет автоматически генерировать уникальный номер
  при добавлении новой записи в таблицу.

</details>

[//]: # (Индексирование колонок)
<br>
<details>
    <summary>
        <b><big><big><big>
            Индексирование колонок
        </big></big></big></b>
    </summary>

Индексы являются методами повышения производительности, позволяя извлекать
информацию из базы данных с более высокой скоростью и производительностью.

Индекс базы данных во многом сходен с индексом (алфавитным указателем) книги.
Когда нам нужно быстро найти какую-либо тему в книге, мы сначала смотрим в индексе,
на каких страницах книги эта тема рассматривается, а потом сразу же открываем нужную страницу.
Подобным образом, при поиске определенной строки таблицы компонент
Database Engine обращается к индексу, чтобы узнать ее физическое местонахождение.

Индексы имеют две особенности
- Пользователь БД не имеет возможности выбирать поиск по индексу или нет
  Для него система индексирования скрыта, а ей занимается система оптимизирования щапросов

- Индекс базы данных могут меняться при каждом изменении соответствующих данных.

Индекс помогает ускорить запросы на получение данных (SELECT [WHERE]),
но замедляет процесс добавления и изменения записей (INSERT, UPDATE) поскольку таблица при добавлении
так же обновляет индексы.

</details>

[//]: # (Полное сканирование vs Индексирование)
<br>
<details>
    <summary>
        <b><big><big><big>
            Полное сканирование vs Индексирование
        </big></big></big></b>
    </summary>

Если для таблицы отсутствует подходящий индекс, для выборки строк система использует
метод полного сканирования таблицы.
Система последовательно извлекает и исследует каждую строку таблицы
(от первой до последней), и помещает строку в результирующий набор,
если для нее удовлетворяется условие поиска в предложении WHERE.
Таким образом, все строки извлекаются в соответствии с их физическим расположением в памяти.
Этот метод менее эффективен, чем доступ с использованием индексов

Индексы сохраняются в дополнительных структурах базы данных, называющихся страницами индексов.
Для каждой индексируемой строки имеется элемент индекса (index entry),
который сохраняется на странице индексов.
Каждый элемент индекса состоит из ключа индекса и указателя.

Поиск же записей по индексированной таблице осуществляется по сбалансированному АВЛ дереву.

(У каждого узла такого дерева не больше двух узлов, максимум левый и правый
правила которого звучак как Не меньше и Не больше а каждая ветвь дерева
ниже составляет собственное дерево)

Главное отличие полного сканирования от индексирования в том
Что поиск полного сканирования составляет N
Сложность сканирования по дерева стремиться к LogN и зависит от высоты дерева

</details>

[//]: # (Типы индексов)
<br>
<details>
    <summary>
        <b><big><big><big>
            Типы индексов
        </big></big></big></b>
    </summary>

Всего существует два типа индексов – кластеризованные, некластеризованные.

- **Кластеризованный** индекс говорит нам о том, что записи физическии
  (на диске) будут храниться рядом друг с другом.
  Кластеризованный индекс может быть только один
  и создается по умолчанию для каждой таблицы, которая имеет первичный ключ.

Кластеризованный индекс хранит реальные строки данных в листьях индекса.

- **Некластеризованного** индекс содержит только те столбцы,
  по которым определен данный индекс,
  а также содержит указатель на кластерный индекс если он есть или на номер строки.

- **Составной индекс** Такой индекс может содержать более одного столбца.
  Вы можете включить до 16 столбцов в индекс, но их общая длина ограничена 900 байтами.
  Как кластеризованный, так и некластеризованный индексы могут быть составными.

- **Уникальный индекс** Уникальный индекс автоматически создается когда вы
  определяете ограничения столбца: первичный ключ или ограничение на уникальность значений


</details>

[//]: # (Свойство ACID)
<br>
<details>
    <summary>
        <b><big><big><big>
            Свойство ACID
        </big></big></big></b>
    </summary>

Для целостности данных все транзакции в БД должны соответствовать требованиям ACID, т.е.:
- Atomicity (Атомарность)
- Consistency (Консистентность)
- Isolation (Изоляция)
- Durability (Надежность)

Подробнее:

- Атомарность   – Либо транзакция проходит целиком, либо отменяется целиком
  в случае ошибки в цепи операций
  (перфоманс: )
- Consistency   - Все данные, записываемые в БД в рамках транзакции, должны соответствовать
  всем правилам и ограничениям, включая ограничения целостности, каскады и триггеры.
  (перфоманс: валидации)
- Isolation     - Во время выполнения транзакции параллельные транзакции не должны оказывать
  влияние на её результат.
  (перфоманс: сложно реализации изоляции сами по себе бьют по перфомансу)
- Durability    - Если транзакция отработала полностью и завершилась, то все ее изменения
  должны быть сохранены и считаются постоянными
  (перфоманс: проблема оптимизации запросов)

</details>я

[//]: # (Уровни изолированности добавить проблемы)
<br>
<details>
    <summary>
        <b><big><big><big>
            Уровни изолированности (добавить проблемы)
        </big></big></big></b>
    </summary>

- Read uncommitted
  Самая плохая согласованность данных (самая высокая скорость)
  каждая транзакция видит незафиксированные изменения другой транзакции (феномен грязного чтения)

- Read committed
  Для этого уровня параллельно исполняющиеся транзакции видят только
  зафиксированные изменения из других транзакций
  (работа с разными данными)

- Repeatable read
  мы не видим в исполняющейся транзакции измененные и удаленные записи другой транзакцией.
  Но все еще видим вставленные записи из другой транзакции
  (фантомные строки)

- Serializable
  Уровень, при котором транзакции ведут себя как будто ничего более не существует,
  никакого влияния друг на друга нет.

</details>

[//]: # (Что такое нормализация БД и каковы ее приемущества)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что такое нормализация БД и каковы ее приемущества
        </big></big></big></b>
    </summary>

Плюсы:
+ Нормализация нужна для борьбы с избыточностью
+ Как следствие, повышается читаемость самой базы и интуитивность
+ Упрощение расширения и маштабирования
+ Упрощение применения процедур целостности (constraint)
+ Проецирование на языки программирования

Минусы:

- Множество таблиц влияют на производительность всей системы
- Возростает сложность запросов, поскольку надо объединять таблицы
</details>

[//]: # (HAVING vs WHERE)
<br>
<details>
    <summary>
        <b><big><big><big>
            HAVING vs WHERE
        </big></big></big></b>
    </summary>

Having и Where по сути выполняют одно и тоже действие - поиск

Having:
- Having может использоваться на первом месте запроса вместо where
  даже в группе запросов (having A > 0 and B < 0)
- Having может использовать агрегатные функции having max(A) > 1;

Но есть очень важный момент использования Having.
При запросе с группировкой, мы можем использовать дополнительное условие выборки
после группировки только при помощи having
</details>

[//]: # (GROUP BY vs DISTINCT vs ORDER BY)
<br>
<details>
    <summary>
        <b><big><big><big>
            GROUP BY vs DISTINCT vs ORDER BY
        </big></big></big></b>
    </summary>

GROUP BY -> группирует значения
DISTINCT -> выводит уникальные неповторяющиеся значения
ORDER BY -> выводит в порядке (деф возрастания) значения в таблице

Главное различие GROUP BY и DISTINCT, в синтаксисе описания

Пример для DISTINCT:

    SELECT DISTINCT A, B
    FROM Table
    ORDER BY A;

Пример для GROUP BY:

    SELECT *
    FROM Table
    GROUP BY A, B;

(+ GROUP BY может работать с атомарными операторами из-за
того что находится в последней части запроса)

Когда нужен вывод чего-то одного без каких-то дополнительных полей - юзай DISTINCT
Нужна группировка значений воедино, но при этом оставить все левые - юзай GROUP BY

</details>

[//]: # (PRIMARY vs UNIQUE)
<br>
<details>
    <summary>
        <b><big><big><big>
            PRIMARY vs UNIQUE
        </big></big></big></b>
    </summary>

PRIMARY:
- В таблице может быть только одно поле с первичным ключом
- В некоторых СУБД оно не может быть NULL - например, MySQL добавляет NOT NULL
- Первичный ключ - это уникальный идентификатор ключа записи

UNIQUE:
- Может быть более одного уникального ключа в одной таблице
- Уникальный ключ может иметь значения NULL
- Нулл значения между собой не равны, потому UNIQUE может иметь много NULL полей
</details>

[//]: # (DELETE vs TRUNCATE vs DROP)
<br>
<details>
    <summary>
        <b><big><big><big>
            DELETE vs TRUNCATE vs DROP
        </big></big></big></b>
    </summary>

DROP        - удаляет таблицы (удаление таблицы базы данных)
DELETE      - для удаления одной или нескольких строк в таблице (с применением условия)
TRUNCATE    - удаляет все строки из таблицы (работает быстрее чем DELETE, но нельзя вешать условия)

</details>

[//]: # (Типы JOIN'ов)
<br>
<details>
    <summary>
        <b><big><big><big>
            Типы JOIN'ов
        </big></big></big></b>
    </summary>

![atler-text](https://www.techagilist.com/wp-content/uploads/2018/07/sql-joins.png)

</details>

[//]: # (Подзапрос / Типы подзапросов)
<br>
<details>
    <summary>
        <b><big><big><big>
            Подзапрос / Типы подзапросов
        </big></big></big></b>
    </summary>

SQL подзапрос — это запрос, вложенный в другой запрос;

По типам запросы используются в:
- В инструкции SELECT;
- В инструкции FROM;
- В условии WHERE.
- 
</details>

[//]: # (Функции ранжирования/Выбор четных нечетных записей)
<br>
<details>
    <summary>
        <b><big><big><big>
            Функции ранжирования/Выбор четных нечетных записей
        </big></big></big></b>
    </summary>

**Ранжирующие функции** — это функции, которые возвращают значение для каждой строки группы в
результирующем наборе данных.
На практике они могут быть использованы, например, для простой нумерации списка,
составления рейтинга или постраничной выборки.

Результирующие функции:
- **ROW_NUMBER**() OVER ([ORDER BY столбы группировки]) as [Имя полученной колонки]
  Выводит номер получившейся стоки
- **RANK**() OVER (order by column) [RANK]
  возвращает ранг каждой строки. В отличие от row_number(),
  идет уже анализ значений и в случае нахождения одинаковых, функция возвращает одинаковый ранг
  с пропуском следующего.
  (Если найдет одинаковые значения то выведет 1.2.2.2.5.6.7)
- **DENSE_RANK** over (order by column) [DENSE_RANK]
  возвращает ранг каждой строки, но в отличие от rank,
  в случае нахождения одинаковых значений, возвращает ранг без пропуска следующего.
  (Если найдет одинаковые значения то выведет 1.2.2.2.3.4.4)
- **NTILE**(3)over (order by price desc) [NTILE]
  функция Transact-SQL, которая делит результирующий набор
  на группы по определенному столбцу. Количество групп указывается в качестве параметра.

Используя функцию mod

SELECT * FROM Persons WHERE MOD(PersonId, 2) = 1

</details>

[//]: # (Хранимые процедуры)
<br>
<details>
    <summary>
        <b><big><big><big>
            Хранимые процедуры
        </big></big></big></b>
    </summary>

Хранимые процедуры представляет набор инструкций, которые выполняются как единое целое.
Тем самым хранимые процедуры позволяют упростить комплексные операции
и вынести их в единый объект.

Каждая процедура описывается с помощью BEGIN и END

Пример:

    CREATE PROCEDURE procedure AS
    BEGIN
        SELECT *
        FROM table
    END;

Чтобы вызвать хранимую процедуру используется команда **EXEC** или **EXECUTE**

+ Скорость
+ Логика
+ Код проще
+ Безопасность (она уже скомпилирована)
+ Защита приложния от изменения структуры
+ Процедуры не наш скоуп ответсвеннсти

- Сложность переезда
- Проблема SQL (жесткая привязанность)

</details>

[//]: # (Триггеры)
<br>
<details>
    <summary>
        <b><big><big><big>
            Триггеры
        </big></big></big></b>
    </summary>

Триггеры представляют специальный тип хранимой процедуры,
которая вызывается автоматически при выполнении определенного действия над таблицей
или представлением, в частности, при добавлении, изменении или удалении данных,
то есть при выполнении команд INSERT, UPDATE, DELETE.

    CREATE TRIGGER имя_триггера
    ON {имя_таблицы | имя_представления}
    {AFTER | INSTEAD OF} [INSERT | UPDATE | DELETE]
    AS выражения_sql

(В mySQL есть before но нет INSTEAD OF)

Использование:
- добавление процента на товар
- валидация
</details>

[//]: # (Курсоры)
<br>
<details>
    <summary>
        <b><big><big><big>
            Курсоры
        </big></big></big></b>
    </summary>

Простыми словами курсоры это forEach по результату выборки

Для того чтобы использовать курсор его надо определить

    --объявляем курсор
    DECLARE my_cur CURSOR FOR 
     SELECT number, pole1, pole2 
     FROM test_table_vrem 
   
    --открываем курсор
    OPEN my_cur
    --считываем данные первой строки в наши переменные
    FETCH NEXT FROM my_cur INTO @number, @pole1, @pole2   
    WHILE @@FETCH_STATUS = 0
    BEGIN
        --на каждую итерацию цикла запускаем нашу основную процедуру с нужными параметрами   
        exec dbo.my_proc_test @number, @pole1, @pole2
        --считываем следующую строку курсора
        FETCH NEXT FROM my_cur INTO @number, @pole1, @pole2
    END
    --закрываем курсор
    CLOSE my_cur
</details>

</details>

[//]: # (NoSQL)
<br>
<details>
    <summary>
        <b><big><big><big>
            NoSQL
        </big></big></big></b>
    </summary>

[//]: # (Что такое NoSQL)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что такое NoSQL
        </big></big></big></b>
    </summary>

NoSQL (Not only SQL) - это ряд технологий, подходов, проектов
имеющих существенные отличия от
традиционных СУБД, работающих с языком SQL.

предлагают решения в хранении и управлении данными
в зависимости от необходимости

- "ключ-значение" (key-value store)
  (большая хеш-таблица, содержащая ключи и значения)

- документно-ориентированные (document store)
  (хранит документы, состоящие из тегированных элементов (JSON))

- хранилища семейств колонок (column database)
  (в каждом блоке хранятся данные только из одной колонки)

- графовые базы данных (graph database)
  (сетевая база данных, которая использует узлы и рёбра для отображения и хранения данных)


</details>

[//]: # (Какие проблемы решает NoSQL основные отличия от SQL)
<br>
<details>
    <summary>
        <b><big><big><big>
            Какие проблемы решает NoSQL (основные отличия от SQL)
        </big></big></big></b>
    </summary>

- **schemaless**.
  В отличие от реляционных структура данных не регламентирована
  — в отдельной строке или документе можно добавить произвольное поле
  без предварительного декларативного изменения структуры всей таблицы.

Пример такого изменения на Mongo:

    BasicDBObject order = new BasicDBObject();
    order.put(“totalSum”, total); // раньше мы использовали просто “sum”

решает проблему изменчивости (если база часто меняется)

- **Представление данных в виде агрегатов**.
  NoSQL хранилища оперируют данными(таблицами) как с целостными объектами

Что это нам дает?:

Из минусов:
- Оптимизация только под определенный тип запросов
  (Вставка начинает страдать из-за отсутствия нормализации, но селект работает лучше)
- Сложность в обновлении денормализованных данных

Из плюсов:
- Это дает возможность создания распределенной среды
- В распределенной среде обеспечивается высокая скорость чтения
- Храним объект в том виде, в котором работает приложение

- **Слабые ACID свойства**.
  Мы получаем консистентность (получение максимально актуальных данных)
  в обмен на доступность (гарантия того, что запрос выполниться)

- **Возможность создания распределенных систем**
  С лавинообразным ростом информации в мире и необходимости ее обрабатывать
  за разумное время встала проблема вертикальной
  масштабируемости — рост скорости процессора остановился на 3.5 Ггц,
  скорость чтения с диска также растет тихими темпами,
  плюс цена мощного сервера всегда больше суммарной цены нескольких простых серверов.
  В этой ситуации обычные реляционные базы, даже кластеризованные на массиве дисков,
  не способны решить проблему скорости, масштабируемости и пропускной способности.

Единственный выход из ситуации — горизонтальное масштабирование,
когда несколько независимых серверов соединяются быстрой сетью
и каждый владеет/обрабатывает только часть данных и/или только часть
запросов на чтение-обновление. В такой архитектуре для повышения мощности хранилища
(емкости, времени отклика, пропускной способности)
необходимо лишь добавить новый сервер в кластер — и все.

</details>

[//]: # (Понятие "Репликация", Виды репликации)
<br>
<details>
    <summary>
        <b><big><big><big>
            Понятие "Репликация", Виды репликации
        </big></big></big></b>
    </summary>

Репликация — копирование данных на другие узлы при обновлении.

**master-slave:**
- Есть master сервер который берет на себя функции чтения и записи данных.
- Есть slave сервера которые являются (или получают) реплики мастер сервера
  и с их стороны работает только чтение.

![text-img](https://hsto.org/storage2/fe3/70f/649/fe370f6495f0fccdeb9fe7ac303b2fc9.jpg)

предполагает хорошую масштабируемость на чтение (может происходить с любого узла),
но немасштабируемую запись (только в мастер узел).
Также есть тонкости с обеспечением постоянной доступности
(в случае падения мастера либо вручную, либо автоматически
на его место назначается один из оставшихся узлов).

**peer-to-peer:**
предполагается, что все узлы равны и могут обслуживать как запросы на чтение, так и на запись.

![text-img](https://hsto.org/storage2/7ce/408/bb3/7ce408bb336eb974a0bc50db54f5a4a5.jpg)

- из минусов, мы повышаем накладные расходы на репликацию

</details>

[//]: # (Понятие "Шардинг", Виды шардинга)
<br>
<details>
    <summary>
        <b><big><big><big>
            Понятие "Шардинг", Виды шардинга
        </big></big></big></b>
    </summary>

**Шардинг** — разделение данных между серверами
С ростом количества данных, один сервер не может хранить все данные.
А вертикальное масштабирование сервера является слишком дорогим.

Шардинг решает проблему путём горизонтального масштабирования.
Благодаря данному механизму мы можем подключать дополнительные
сервера для хранения, записи и чтения данных.
(Обработка запросов все еще на корневом узле)

(В NoSQL системах, шардинг является автоматическим)

**Вертикальный шардинг** - это выделение таблицы или группы таблиц на отдельный сервер.

**Горизонтальный шардинг** — это разделение одной таблицы на разные сервера.
Это необходимо использовать для огромных таблиц, которые
не умещаются на одном сервере.
Разделение таблицы на куски делается по такому принципу:

- На нескольких серверах создается одна и та же таблица (только структура, без данных).
- В приложении выбирается условие, по которому будет
  определяться нужное соединение (например, четные на один сервер, а нечетные — на другой).
- Перед каждым обращением к таблице происходит выбор нужного соединения.

- из минусов теряем данные если сервак выйдет из строя

</details>

[//]: # (Понятие "Агригации" )
<br>
<details>
    <summary>
        <b><big><big><big>
            Понятие "Агригации" 
        </big></big></big></b>
    </summary>

Агригация - коллекция связанных объектов,
которая интерпретируется как единое целое.

Простым примером арегации в SQL DB являются атомарные функции (MIN, MAX, COUNT)

В NoSQL системах в которых отсутствует понятия схем, все базируется на агригированных данных
которые на примере Mongo выглядят следующим образом

    // Клиенты {
    "customer": {
    "id": 1,
    "name": "Martin",
    "billingAddress":	[{"city": "Chicago"}],
    "orders":	[
       {
          "id":99,
          "customerld":1,
          "orderIterns":[
          {
             "productld":27,
             "price": 32.45,
             "productName": "NoSQL Distilled"
          }
       ],
       "shippingAddress":[{"city":"Chicago"}]
          "orderPayment":[
          {
             "ccinfo":"1000-1000-1000-1000",
             "txnId":"abelif879rft",
             "billingAddress" : { "city" : "Chicago" }
          }],
       }]
      }
    }

</details>

[//]: # (NoSQL CAP теорема)
<br>
<details>
    <summary>
        <b><big><big><big>
            NoSQL CAP теорема
        </big></big></big></b>
    </summary>

Благодаря появлению распределительных систем и параллельной обработке данных
стало возможным горизонтальное маштабирование системы. Когда система наращивает
вычислительную способность благодаря не качеству а количеству задействованных единиц.

Но при горизонтальном масштабировании есть свои минусы и потому для того
чтобы количественно определить неизбежные компромиссы таких систем сущесвует CAP

В CAP говорится, что в распределенной системе возможно выбрать только 2 из 3-х свойств:

- C (consistency) — согласованность. Каждое чтение даст вам самую последнюю запись.
- A (availability) — доступность. Гарантия того что каждый клиент имеет
  возможность чтения и записи запроса.
- P (partition tolerance) — устойчивость к разделению.
  (Потеря сообщений между компонентами системы не влияет на работоспособность системы.
  В том числе и выход из строя каких-то компонентов)

SQL базы - CA
NoSQL базы - CP

![alt-text](https://www.bigdataschool.ru/wp-content/uploads/2019/12/cap_0.png)

- **CA** (Availability + Consistency — Parition tolerance) Реализуя свойства транзакционности
  и ACID система получает согласованность и доступность, но горизонтально маштабирование
  становится дорогостоящей (перфоманс) операцией.
- **CP** (Consistency + Partition tolerance — Availability)
  Система продолжает корректно читать данные даже при отказе одного из серверов.
  Но в этом случае запись будет обрываться или сильно задерживаться, пока система
  не убедится в своей целостности и согласованности. Но при этом будет отвечать на чтение
  поскольку на сервер представляет из себя репликацию.
- **AP** (Availability + Partition tolerance — Consistency)
  База имеет возможность разделения и гарантирует то, что каждый запрос на чтение и запись
  кореектно отработает, но не гарантирует что данные при чтении будут актуальными.


</details>

[//]: # (NoSQL vs SQL Области применения)
<br>
<details>
    <summary>
        <b><big><big><big>
            NoSQL vs SQL (Области применения)
        </big></big></big></b>
    </summary>

В заключении темы отвечая на вопрос выбора между NoSQL и SQL.
Лучшим вариантом будет работа NoSQL и SQL в спайке.
Разделенный на несколько независимых сервисов проект всегда нуждается в
структурированности и защите обеспечиваемой SQL базами. Но и в то же время
разделенность серверов и репликации мастер сервера обеспечивают так необходимую
скорость работы, и в грамотном сочетании проект начинает работать с тем что конкретно ему надо.

Но и ситуации когда NoSQL и SQL базы тоже возникают из-за неНеобходимости в каких-то
конкретных функциях. Скажем мобильный рынок который не базируется на клиент серверной архитектуре
больше предпочтет SQLite из-за своей легковесности и скорости.

</details>

</details>