[//]: # (SPRING)

<details>
    <summary>
        <b><big><big><big>
            SPRING
        </big></big></big></b>
    </summary>

[//]: # (Плюсы минсы спринга)
<br>
<details>
    <summary>
        <b><big><big><big>
            Плюсы и минусы спринга
        </big></big></big></b>
    </summary>

**плюсы**
+ множество компонентов
+ возможность работы с аспектами AOP
+ легкая настройка Model View Controller
+ реализация Inversion of control

**минусы**
- порог входа (много практик, подходов, документации)
- это фреймворк
- в некоторых ситуациях может быть медленнее

</details>

[//]: # (Что такое IoC)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что такое IoC
        </big></big></big></b>
    </summary>

IoC - архитектурное решение которое использует Spring Container который реализует принципы
DI и DL, для того чтобы управлять зависимостями автоматически

DI - @Autowired когда спринг сам внедряет зависимость
DL - getBean() когда мы руками можем забрать эту зависимость для использования

</details>

[//]: # (Типы бинов)
<br>
<details>
    <summary>
        <b><big><big><big>
            Типы бинов
        </big></big></big></b>
    </summary>

Singleton: областью определения bean-компонента при использовании этого будет один экземпляр для каждого контейнера IoC.
Prototype: здесь областью определения одного компонента может быть любое количество экземпляров объекта.
Request: областью определения bean-компонента является HTTP-запрос.
Session: здесь областью определения bean-компонента является HTTP-сеанс.
Global-session: областью определения bean-компонента здесь является глобальный HTTP-сеанс.

</details>

[//]: # (ЖЦ бина)
<br>
<details>
    <summary>
        <b><big><big><big>
            ЖЦ бина
        </big></big></big></b>
    </summary>

- конструктор объекта
- внедрение зависимости
- пре инит с aware интерфейсами (с базовой информацией бина)
- инициализация (@PostCostruct / initMethod / afterPropertiesSet())
- пост инит (BeanPostProssesor.postProcAfterInit())

- @PreDestroy
- destroy
- DisposableBean.destroy()
![](https://itsobes.ru/assets/JavaSobes/303.jpg)

</details>

[//]: # (Что можно аннотировать)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что можно аннотировать/ Что будет если подходит несколько компонентов
        </big></big></big></b>
    </summary>

- поле
- метод
- конструктор

Если подходит несколько компонентов спринг выбьет ошибку. Решить проблему поможет аннотация @qulifier

</details>

[//]: # (Как можно конфигурировать спринг)
<br>
<details>
    <summary>
        <b><big><big><big>
            Как можно конфигурировать спринг
        </big></big></big></b>
    </summary>

Конфигурация на основе XML:
+ самый старый способ которые имеет множество примеров и немного трики кейсов
+ сконцентрирован в 1 или нескольких xml файлах

- xml, высокий порог входа надо знать проперти
- увидишь ошибки только при запуске приложения

Конфигурация на основе аннотаций:
вместо использования xml внутри xml описывается что контекст будет annotation-config
далее аннотации расставляются как в джава конфиге, (@Component, @Service, @Repo
ComponentScan, и так далее)

+ Простота и легкость использования

- децентрализованность, без дополнительных тулов не посмотреть как связаны файлы
и они могут быть разбросаны по многим местам монолита, что неудобно

Конфигурация на основе джава:
Аннотировал класс как @Configuration, далее аннотируешь методы создания объектов 
с помощью аннотации @Bean

+ централизованность
+ возможность дополнительной кастомной логики

</details>

[//]: # (AOP)
<br>
<details>
    <summary>
        <b><big><big><big>
            AOP
        </big></big></big></b>
    </summary>

**АОП** предоставляет возможность для динамического добавления сквозных логики до, после или вокруг фактической логики 
с помощью простых подключаемых функций.

Главная цель AOP простота поддержки существующего кода. Мы можем обвернуть проблемное место и дописать дополнительную
логику в случае если изменения в уже существующей повлекут за собой большую стоимость.

Еще логику которая обварачивает существующую можно дублировать для нескольких методов.
А так же ее просто менять или редактировать для всех методов разом.

Существует 2 типа реализации Spring AOP:
- Использование XML-файлов конфигурации
- Использование стиля аннотации AspectJ

Основные элементы AOP:
Advice - (аналог метода с условием) определяет когда, вызывается метод (до, после возврата, после выброса, после, вокруг (при вызове метода))
Aspect - (аналог класса) является классом для advice методов
Joinpoint - (аналог аннотации) определенная точка в приложении в которой должен вызваться advice
Pointcut - (условие) - выражение которое помагает определить необходимый advice и определить вызываться ему или нет

Spring AOP реализован по шаблону прокси, создает объект обварачивая существующий объект вызывая 
необходимые методы до или после своей отработки

</details>

</details>

[//]: # (SPRING BOOT)

<details>
    <summary>
        <b><big><big><big>
            SPRING BOOT
        </big></big></big></b>
    </summary>

[//]: # (Что такое Spring Boot?)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что такое Spring Boot?
        </big></big></big></b>
     </summary>

Spring Boot — это модуль Spring, который предоставляет функцию RAD
(Rapid Application Development) для среды Spring.

Собой он представляет библиотеку в которую сразу интегрировано множество
модулей которые можно использовать на ходу.

+ Быстрая настройка (я могу поднять собственное спринг рест приложение за 15 минут)
+ Внутри работает томкат, не надо развертывать вар файлы
+ Упрощенная конфигурация POM
+ Не требует дополнительной конфигурации (XML)
+ Как итог увеличивает производительность и сокращает объем работы

- Он тяжелый.
- При внедрении от него будет сложно отказаться

</details>

[//]: # (Что такое Spring Boot стартеры?)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что такое Spring Boot стартеры?
        </big></big></big></b>
     </summary>

Стартеры — это набор удобных дескрипторов зависимостей,
которые мы можем включить в наше приложение.

Spring Boot предоставляет встроенные стартеры,
которые упрощают и ускоряют разработку.
Например, если мы хотим JPA для доступа к базе данных,
просто подключаем зависимость spring-boot-starter-data-jpa

</details>

</details>
