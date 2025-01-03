<h1>JVM JMM and GC</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (Can you explain the different types of Garbage Collectors in Java 
        and in what situations to use them?)
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the different types of Garbage Collectors in Java 
            and in what situations to use them?
        </b>
    </summary>
<br>

Java provides several different Garbage Collectors,
each designed to meet different performance or resource requirements.
The four primary Garbage Collectors are the Serial Garbage Collector,
Parallel Garbage Collector, CMS (Concurrent Mark Sweep),
and G1 (Garbage-First).

1. Serial Garbage Collector: This uses a single thread for garbage collection.
   When it runs, it stops all application threads.
   The Serial GC is the simplest garbage collector and uses
   the Mark-Compact collection method for the Old Generation
   and the Copying method for the Young Generation.
   (After 7 passes transfers from young to old)
    - Use when CPU use is more important than latency

2. Parallel Garbage Collector:
   Similar to the Serial Garbage Collector, the Parallel Garbage Collector
   uses the same Mark-Compact and Copying methods for the Old and Young Generations,
   but it uses multiple threads to speed up the process.
   While it also stops all application threads when a collection occurs,
   the multithreading work makes GC pauses shorter than with the Serial GC.
    - Use in medium to large-sized datasets and pause times are not a concern

3. Concurrent Mark Sweep (CMS) Garbage Collector:
   The CMS Garbage Collector tries to minimize application pauses by
   doing most of its work concurrently with the application threads.
   The collection process involves an initial marking phase
   (where live objects are marked),
   a concurrent marking phase (done at the same time as the application threads
   running),
   a remark phase (where the remaining live objects are marked,
   but this stops all application threads),
   and a concurrent sweep phase (where garbage objects are removed).
    - good choice for applications that require short pauses
      and can share CPU power with the garbage collector

4. G1 Garbage Collector:
   Instead of two large generations (i.e., Young and Old),
   memory is divided into a set of uniformly sized heap regions.
   Uses defragmentation mechanism.
   Less CPU and work time but require more memory because of fragmentation
    - Suitable for applications that require large heaps (>4GB),
      mixed GC pauses of predictable duration, and high throughput

</details>
<br>

[//]: # (Can you explain JVM tuning and GC optimization?)
<details>
    <summary style="font-size: 25px;">
        <b>
         Can you explain JVM tuning and GC optimization?
        </b>
    </summary>
<br>

Java Virtual Machine (JVM) tuning and Garbage Collection (GC)
optimization are advanced tasks that will help Java applications
run more efficiently by managing and making efficient
use of available system resources.

JVM Tuning:

1. Heap Size: You can adjust the maximum and initial size of the
   JVM's memory heap with the `-Xmx` and `-Xms` parameters.

2. Stack Size: The `-Xss` parameter allows you to change the stack size
   for each thread.

3. Young Generation Size: Using the `-Xmn` parameter,
   you can control the size of the young generation heap space.

Garbage Collection Optimization:

1. Selecting a Collector: The JVM includes multiple garbage collectors,
   and different ones are suited to different use cases. The right one for your application depends on your specific
   requirements and the characteristics of your
   application.

2. Adjusting Pauses: The `-XX:MaxGCPauseMillis` parameter allows
   you to control the maximum length of GC pauses.

3. Parallel GC Threads: You can adjust the number of threads
   the parallel garbage collector uses with the `-XX:ParallelGCThreads` parameter.

4. Enable Explicit GC: You can control whether calls to `System.gc()`
   trigger garbage collection with the `-XX:+DisableExplicitGC` parameter.

</details>
<br>

##########################################

### Что такое модель памяти Java и зачем нам так важно знать как она работает?

Стек — это часть памяти, которая содержит информацию о вызовах вложенных методов вплоть
до текущей позиции в программе. Он также содержит все локальные переменные и ссылки на объекты в куче,
определенные в текущих выполняемых методах.

Эта структура позволяет среде выполнения возвращаться из метода, зная адрес,
откуда он был вызван, а также очищать все локальные переменные после выхода из метода.
Каждый поток имеет свой собственный стек.

Куча — это большой объем памяти, предназначенный для размещения объектов.
Когда вы создаете объект с новым ключевым словом, он размещается в куче.
Однако ссылка на этот объект находится в стеке.

![img](https://1.bp.blogspot.com/-IjobuH82T1U/XvJSY5dan4I/AAAAAAAACdk/HHQmUZGodfIB4Ik8XBGxgFHugA-Su3MewCLcBGAsYHQ/s640/java-memory-management-and-garbage-collection-working.jpg)

#### Когда статические переменные загружаются в память?

Они загружаются во время выполнения, когда загружается соответствующий класс.

#### Как строки представлены в памяти?

Экземпляр String в Java — это объект с двумя полями: полем значения char[] и хэш-полем int.
Пул строк (внутренний пул строк) — это специальная область хранения в хипе Java.
Когда строка создается и если строка уже существует в пуле, будет возвращена ссылка на существующую
строку вместо создания нового объекта и возврата его ссылки.

### Что такое сбор мусора и в чем его преимущества?

Сборка мусора — это процесс просмотра динамической памяти, определения того,
какие объекты используются, а какие нет, и удаления неиспользуемых объектов.

Память, используемая объектом, на который нет ссылки, может быть восстановлена.

Самым большим преимуществом сборки мусора является то, что он снимает с нас бремя ручного
выделения/освобождения памяти, чтобы мы могли сосредоточиться на решении текущей проблемы.

#### Есть ли недостатки у сборки мусора?

да. Всякий раз, когда запускается сборщик мусора, он влияет на производительность приложения.
Это связано с тем, что все другие потоки в приложении должны быть остановлены,
чтобы поток сборщика мусора мог эффективно выполнять свою работу.

В зависимости от требований приложения это может стать реальной проблемой, неприемлемой для клиента.
Однако эту проблему можно значительно уменьшить или даже устранить за счет умелой оптимизации
и настройки сборщика мусора, а также использования различных алгоритмов GC.

#### Что означает термин «Остановить мир»?

Когда работает поток сборщика мусора, другие потоки останавливаются,
то есть приложение на мгновение останавливается.
Это аналогично уборке дома или фумигации, когда жильцам отказывают в доступе до тех пор,
пока процесс не будет завершен.

### Виды сборщиков мусора в Java?

**Serial GC**
Первый, примитивный. Прямой как палка. Для сборки мусора полностью останавливает JVM и собирает мусор в один поток.

**Parallel GC**
Попытка сделать сборку быстрой и многопоточной. На многоядерных процессорах это хорошо работает.
Но все равно для сборки он требует полного останова JVM. Делится на минор и мажор gc

**CMS GC**
Цель этого GC — отсрочить полную сборку мусора с остановом JVM путем
запуска маленьких и коротких операций по сбору сведений о мусоре,
а потом путём быстрых и коротких операций — убрать, что можно.

Если достигается определенный процент использованного heap, т.е. CMS-сборщик видит,
что не справляется, то JVM останавливается и происходит полная сборка мусора.

**G1 GC**
Делит всю память джавы на сектора и в случае заполнения процентов секторов организует дефрагментацию и перераспределение

### Что такое генерационная сборка мусора и в чем ее приемущество (разобрать флоу работы)?

Генерационный сбор мусора можно приблизительно определить как стратегию,
используемую сборщиком мусора, когда куча делится на несколько секций,
называемых поколениями, каждая из которых будет содержать объекты в соответствии с их «возрастом» в куче.

Всякий раз, когда сборщик мусора работает, первый шаг в этом процессе называется маркировкой.
Здесь сборщик мусора определяет, какие части памяти используются, а какие нет.
Это может занять очень много времени, если необходимо проверить все объекты в системе.

#### Если gc пометил объект как для удаления, можно ли до момента отработки gc его воскресить?

Когда объект становится пригодным для сборки мусора, GC должен запустить для него метод finalize.
Метод finalize гарантированно запускается только один раз, поэтому сборщик мусора помечает объект
как завершенный и дает ему паузу до следующего цикла.

В методе finalize вы можете технически «воскресить» объект, например,
присвоив его статическому полю.
Объект снова станет живым и не подходящим для сборки мусора,
поэтому сборщик мусора не соберет его в следующем цикле.

Однако объект будет помечен как завершенный, поэтому,
когда он снова станет приемлемым, метод finalize вызываться не будет.
По сути, вы можете провернуть этот трюк с «воскрешением» только один раз за время существования объекта.
Имейте в виду, что этот уродливый прием следует использовать только в том случае,
если вы действительно знаете, что делаете, однако понимание этого приема дает некоторое представление о том,
как работает сборщик мусора.

### Как запустить сборку мусора из кода Java?

Вы, как Java-программист, не можете форсировать сборку мусора в Java;
он сработает только в том случае, если JVM решит, что ему нужна сборка мусора на основе размера кучи Java.

Перед удалением объекта из памяти поток сборки мусора вызывает метод finalize()
этого объекта и дает возможность выполнить любую требуемую очистку.
Вы также можете вызвать этот метод объектного кода, однако нет гарантии,
что при вызове этого метода произойдет сборка мусора.

Кроме того, существуют такие методы, как System.gc() и Runtime.gc(),
которые используются для отправки запроса на сборку мусора в JVM, но не гарантируется,
что сборка мусора произойдет.

### Типы ссылок объектов?

- strong reference
- soft reference    (часто используется для кешей, потребляющих большое количество памяти)
- weak reference    (Используется для кешей и для создания цепей связанных между собой объектов)
- phantom reference (Этот тип ссылок используется как альтернатива финализации (для более гибкого освобождения
  ресурсов))

В Java объекты, создаваемые через оператор new создаются по **strong** ссылке.
Сборщик мусора уничтожает такие объекты только тогда, когда на них больше не остается сильных ссылок.

Объекты, созданные через **SoftReference**, будут собраны в случае, если JVM требует память.
То есть имеется гарантия, что все soft reference объекты будут собраны перед тем,
как JVM выбросит OutOfMemoryError

**WeakReference** не спасает объект от финализации, даже если имеется достаточное количество свободной памяти.
Как только на объект не останется strong и soft ссылок, он может быть финализирован.
(убивается при любом проходе)

Объекты, созданные через **PhantomReference**, уничтожаются тогда, когда GC определяют,
что ссылаемые объекты могут быть освобождены.
(т.е. удаление в любой момент, как при outOfMem так и при отсутствии ссылок)






