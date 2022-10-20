[//]:# (Java Fund)

<details>
    <summary>
        <b><big><big><big>
            Java Fundamentals
        </big></big></big></b>
    </summary>

- Почему был выбран язык Java
- Назови основные принципы ООП
    - Основные концепции каждого из принципов
    - Полностью ли Java OOP
        - Перегрузка и переопределение
    - Какие есть свойства объекта (он уникален, у него есть свой набор параметров, у него есть свой набор поведения)
- Примитивы и Ссылочные типы данных
    - Зачем нужны одни и другие
    - Ситуации использования одних и других
    - Изменение значения примитива, поля, ссылочного типа при передаче в метод
- Конструкторы (+ блоки инициализации)
    - Зачем нам использовать конструкторы
    - Типы конструкторов
    - Блоки инициализации
        - В каком порядке инициализируются
        - Может ли статический конструктор инициализировать обычные поля
        - Может ли описываться блок инициализации, если в классе вообще ничего нет кроме конструктора
- Типы классов Java
    - Enum
        - преимущества использования
        - объекты какой типа хранятся в Enum (enum.this)
    - Abstract Classes Vs Interface
        - Кто для какой цели, что крутого в каждом
- Модификаторы класса, метода, поля, доступа
    - Сигнатура методов, что можно объявить методу
    - Доступ: какие есть, когда какой использовать
    - Модификаторы классов (abstract, final, static)
    - Модификаторы методов (abstract, final, static, native, synchronized)
    - Модификаторы полей   (static, final, transient, volatile)
    - Назначение статики
    - Может ли класс быть статик
- Object.class
    - Как клонировать класс
    - Как правильно контролировать вложенности
- Class.class
    - Рефлекция
* - Можно-ли проинициализировать объект если все его поля приватные? (Да, если написать статику внутри класса которая будет это делать)
* - Два конструктора Cons(String) Cons(Integer) каким образом конструктор 1 может вызвать конструктор 2 (без инита нового объекта) (this)

</details>
<br>

[//]:# (Nested class)

<details>
    <summary>
        <b><big><big><big>
            Nested class
        </big></big></big></b>
    </summary>

- Внутренние классы
    - Зачем они нужны
- Область видимости внутренних классов
    - Вложенный статический класс видит поля верхнего класса?
    - А верхний класс видит ли статические поля вложенного статического класса?
- Зачем нам такое разделение классов?
  - В какой ситуации мне следует использовать какой класс?

</details>
<br>

[//]:# (Serialization)

<details>
    <summary>
        <b><big><big><big>
            Exceptions
        </big></big></big></b>
    </summary>

[Exceptions Interview Link](https://javastudy.ru/interview/exceptions/)

- Дайте определение понятию “исключение”
- Какова иерархия исключений.
    - Как на твой взгляд, почему есть вот такое четкое деление ошибок на Error и Exception
    - Что такое Error? В каком случае используется Error. Приведите пример Error’а.
    - Можешь привести по одной более тебе знакомой ошибке из каждой группы
- Как ведет себя программа при вбрасывании исключения
- Каким образом ты можешь отловить исключения
    - Какие исключение обязаны быть отловлены
    - Что можно делать если ты не хочешь отлавливать checked exсeption в конкретном месте
- Try-catch
    - Имеет ли значение порядок вызовов catch
    - Finally блок
    - В чем особенность блока finally? Всегда ли он исполняется?
    - Если оператор return содержится и в блоке catch и в finally, какой из них “главнее”?
    - Try блок без catch / try блок без finally
    - Try with resources (и почему иногда грязно юзать try-catch)
    - Можно ли не определять try-catch block в checked ошибках
- Написание собственного исключения
    - Когда нужно делать свои ошибки checked / unchecked
    - В чем особенность RuntimeException?
    - Есть ли дополнительные условия к методу, который потенциально может выбросить исключение?

* Почему "грязно" закрывать конекшн внутри try блока (Вываливание недоходя до)
  / После того как конекшн закрывается он дожен быть обвернут в
  try/catch блок, решение чтобы не "грязнить" код?

</details>
<br>

[//]:# (IO/NIO)

<details>
    <summary>
        <b><big><big><big>
            Serialization
        </big></big></big></b>
    </summary>

* Что такое сериализация? Для чего она нам? Приведи примеры сериализации?
* Правила сериализации?
* Что в рамках десериализации/сериализации будет являться успехом?
* Как ведут себя наследники и базовые классы при десериализации?
* Интерфейсы реализуемые при сериализации?
* Изменение поведения сериализации?

</details>
<br>

[//]:# (Annotations)

<details>
    <summary>
        <b><big><big><big>
            IO/NIO
        </big></big></big></b>
    </summary>

* Что такое IO и какие типы io стримов ты знаешь? (byte and character)
  - Приведи примеры I / O стримов? (OutputStream, Writer)
  - Приведи пример I/O реализация в одной связке
* Что делает поток, если его не закрыть?
  - (вопрос к пройденному материалу) Как правильно закрывать поток?
* Как работают следующие элементы класса io: InputStream, OutputStream, Reader, Writer?
  - Для чего реализованы различные потоки ввода вывода
  - (вопрос к пройденному материалу) try-catch область видимости переменных?
 (Базовый класс InputStream представляет классы, которые получают данные из различных источников)
 (Класс OutputStream — это абстрактный класс, определяющий поток вывода байтов.)
 (Потоки символов имеют два основных абстрактных класса, Reader и Writer, которые управляют потоком символов Unicode
 В случае ошибок все методы класса выдают исключение IOException.)
* Что такое RandomAccessFile?
(позволяет перейти к определенной позиции и изменить хранящееся там значение.)
* Какие типы (записи/чтения) файлов бывают?
  - Какой символ сепаратор использовать чтобы находить файл программным методом (/ или \\)?
* Что ты знаешь о классах аддонах в рамках IO?
 (BufferedOutputStream, BufferedInputStream, BufferedWriter — буферизует поток и повышает производительность.)
 
* Причины появления nio
* Принцип работы nio
* Главные отличия nio от io
* Селекторы в nio
* SelectionKey? Получение событий из канала в nio

</details>
<br>

[//]:# (Generics)

<details>
    <summary>
        <b><big><big><big>
            Annotations
        </big></big></big></b>
    </summary>

- Что такое и какая главная причина использования аннотаций?
- Инструкции выполнения аннотаций (по типу выполнения)
    - Надыбать примеры аннотаций под каждый тип?
    - Проблемы не использования override?
- Что можно аннотировать
- value в аннотациях?
- Множественное аннотирование?
- Наследование в аннотациях?
- Правила объявления полей самописных аннотаций?
    - Как указать именно к какой инструкции будет привязана аннотация?
    - Как указать на какие элементы может быть повешана твоя самописная аннотация?
    - Какие типы объектов могут быть возвращены из объявления метода аннотации?
- Что Такое Повторяющиеся Аннотации? И зачем они нам?

</details>
<br>

[//]:# (Collections)

<details>
    <summary>
        <b><big><big><big>
            Generics
        </big></big></big></b>
    </summary>

- Зачем нужны дженерики? Можешь ли ты привести пример того, как дженерики делают программу более гибкой?
- Основная причина, по которой дженерики работают с объектами типа object? (Обртная совместимость)
- Как объявить универсальный класс? метод? поле? интерфейс?
- Какие типы запрещается использовать в обобщенных классах в качестве параметризованных типов? (примитивы)
- Можете ли вы объявить статические поля, типы которых являются параметрами универсального типа? (нет) Почему? (статика жестко привязана к классу)
- Что такое стирание типов?
  - Если при создании экземпляра объекта не указан общий тип, будет ли код компилироваться?
- Чем универсальный метод отличается от универсального типа?
- Что такое параметр ограниченного типа?
  - Правило PECS? Как работает extends и super в дженериках?
  - (*) Валидна ли будет запись <T super что-то>? (Нет, в ней нет особого смысла, потому как T в принимаем значении и так работает как <T extends Object>)
  - Можно ли объявить несколько параметров ограниченного типа?
- Что такое вайлкард?
  - Что такое вайлдкард с верхней/нижней границей?
  - Когда бы вы предпочли использовать вайлдкард с нижней границей по сравнению с типом с верхней границей?
  - Когда бы вы предпочли использовать генерик с нижней границей по сравнению с типом с верхней границей?

- * Могут ли инициализироваться объекты generic типа в generic методе? (Нет (Почему?), Да с помощью рефлекции)
- * Как выглядит код дженерик класса после компеляции?
- * Может ли дженерик класс наследоваться от интерфейса Throwable? (нет, лок на уровне JVM)
  - * и может ли использоваться как подставляемый тип дженерика класс который extends Throwable? (да, а почему нет)
- * Принятые обозначения дженериков? (T - ? R - ? E - ? ....)

</details>
<br>

[//]:# (Multithreading)

<details>
    <summary>
        <b><big><big><big>
            Collections
        </big></big></big></b>
    </summary>

- Что такое коллекции и зачем они нам нужны?
  - Какие типы данных могут хранить коллекции? (любые ссылочные)
- Иерархия коллекций
  - Почему map не является частью коллекций
- Интерфейс Collection?
- Стоимость операций коллекций? (Правило большого О)
- Способы перебора коллекций?
  - Способы перебора Мар?
- Что такое итератор, применимо к коллекциям?
  - Fail save vs Fail fast?
  - Лист итератор?
    - Iterator vs listIterator?
  - Enumeration?
  - Итератор полученный из набора Set?
  - Сортировка коллекций?
    - Comparable vs Comparator?
    - Какой алгоритм используется при дефолтном sort? (быстрая)
- Рассмотреть immutable collections? Зачем нам и в каких ситуациях использовать?
  - Mutable vs Immutable

- Работа List? В каких ситуациях использовать?
  - Как работает с точки зрения памяти?
  - ArrayList vs Linked List? В том числе с точке зрения перфоманса?
    *Самый медленный кейс работы ArrayList?
    (Вставка массива в середину другого (почти заполненного) 7массива (копирование, расширение, копирование))
  - Как расширяется Array List в случае заполнения?
  - Как ведут себя листы при удалении / добавлении / изменении элемента?
- Работа Set? В каких ситуациях использовать? Плюсы и минусы Set?
  - Как раотает с точки зрения памяти?
  - Set vs List?
  - EnumSet? Преимущества перед другими сет?
  - HashSet?
    - Hash Code?
    - Как HashSet поддерживает уникальность?
    - Производительность HashSet?
  - TreeSet?
    - Как работает Красно - Черное дерево?

- Работа Queue? В каких ситуациях использовать?
  - Как раотает с точки зрения памяти?
  - PriorityQueue
  - Array Block Queue
- Работа Map? В каких ситуациях использовать?
  - Как раотает с точки зрения памяти?
  - Map vs LinckedMap
  - Разницу между HashMap, TreeMap, HashTable?

Вопросы с упором на предыдущий материал:
- Clone относительно коллекций

</details>
<br>

[//]:# (GC and JMM)

<details>
    <summary>
        <b><big><big><big>
            Multithreading
        </big></big></big></b>
    </summary>

* Определение процесса / Потока / Потоки демоны
* Псевдопараллельность / Минусы псевдопараллельности (схемотично показать способ работы)
* What are the benefits of using Multithreading? Что по минусам? Когда необходимо юзать?
* Жизненный цикл потоков / Можно ли стартовать Terminated поток? / В каких случаях поток получает статус Blocked?
* Область видимости ресурсов потоками
* Explain volatile variables in Java? Как работает volitile?
* What are the ways of implementing thread in Java? Почему их несколько? Как отличаются и когда юзаются?
* What is Runnable and Callable Interface? Write the difference between them.
* Способы остановки потока? / Остановка Executor с InterruptExeption / Остановка Executor без InterruptExeption
* Приоритет потоков
* What are the wait() and sleep() methods?
* What’s the difference between notify() and notifyAll()?
* Why wait(), notify(), and notifyAll() methods are present in Object class?
* Проблема использования Wait() Stop() Interrupt()?
* What’s the purpose of the join() method? метод yield()
* Deadlocks? Как можно диагностировать дэдлоки в коде? Самый простой пример создания дэдлока (objA: synh(A) synh(B) / objB: synh(B) synh(A))
* Starvation / DeadLock / LiveLock потоков
* How do threads communicate with each other?
* What is the purpose of the finalize() method?
* Explain thread pool?
* What is the synchronization process? Why use it? Что можно передать в synchronized блок?
* What’s the difference between class lock and object lock?
* What is BlockingQueue? Барьеры / Мониторы / Что такое критическая секция?

* happens before

</details>
<br>

<details>
    <summary>
        <b><big><big><big>
            GC and JMM
        </big></big></big></b>
    </summary>

- Что такое модель памяти Java и зачем нам так важно знать как она работает?
  - Что такое стек и куча? Что хранится в каждой из этих структур памяти и как они взаимосвязаны?
  - Что происходит, когда не хватает места в heap для хранения новых объектов?
  - Что происходит, когда не хватает места в стеке?
  - Когда статические переменные загружаются в память?
  - Где храняться примитивные даннные?
  - Как строки представлены в памяти?
  - Можно ли руками контролировать размеры heap памяти (-Xmx<n>m)?
  - Сколько раз нужно переместиться объкту между сурвами чтобы попасть в old?
  - Почему сурвов только два? Не три, не четыре?
    -* При каком проценте заполнения памяти выбивается outOfMem? Почему?
- Что такое сбор мусора и в чем его преимущества?
  - Есть ли недостатки у сборки мусора?
  - Что означает термин «Остановить мир»?
- Виды сборщиков мусора в Java?
- Что такое генерационная сборка мусора и в чем ее приемущество (разобрать флоу работы)?
- Когда объект становится пригодным для удаления сборщиком мусора?
  - Если gc пометил объект как для удаления, можно ли до момента отработки gc его воскресить?
  - Типы ссылок объектов?
  - Из чего строиться дерево объектных ссылок?
- Как запустить сборку мусора из кода Java?

- *Если два объекта ссылаются друг на друга, могут они быть вычещенны сборщиком мусора?
  (вопрос на предыдущее обучение) Как поведет себя программа при большом проценте превышения памяти? (и каком проценте) и почему

</details>
<br>