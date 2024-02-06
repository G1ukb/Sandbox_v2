<h1>SQL</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What is SQL)
<br>
<details>
      <summary>
          <b><big><big><big>
              What is SQL
          </big></big></big></b>
      </summary>

SQL (Structured Query Language) is a special language designed to work with databases.
Using the SQL database, you can set the structure, organize data sampling.
according to some specific criteria, deleting and changing data.

</details>

[//]: # (What is a DBMS)
<br>
<details>
    <summary>
        <b><big><big><big>
            What is a DBMS + main functions
        </big></big></big></b>
    </summary>

DBMS (Database Management System) - software that communicates
with the user, applications and the database itself for data collection and analysis.
The DBMS allows the user to interact with the database.
The data stored in the database can be changed, retrieved and deleted.

DBMS == SQL Server

- database data management;
- logging of changes;
- backup and recovery of the database after failures;
- support for database languages.

</details>

[//]: # (DBMS types)
<br>
<details>
     <summary>
         <b><big><big><big>
              Types of DBMS
         </big></big></big></b>
     </summary>

**Relational (RSQL)** - supports SQL.
Relationships between objects look like tables that
are related to each other by PK and FK relations

**Non-relational (NoSQL)** - partially supports SQL (not all types)
Relations between objects are represented as non-relational, it can be
tables, a single document (json) or described by xml and so on

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