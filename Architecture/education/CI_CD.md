1. what is Ci-cd
2. from what elements ci-cd consists of
2. How would you set up a CI/CD pipeline for a Java-based microservices architecture? What tools would you use and why?
2. Can you explain the role of Maven or Gradle in the CI/CD process for a Java project?
3. How would you handle database schema changes in a CI/CD pipeline for a Java application?
4. What strategies would you use to ensure zero-downtime deployments in a Java-based CI/CD pipeline?
5. How can Docker be integrated into a Java CI/CD pipeline? What are the benefits and challenges?
6. How would you manage environment-specific configurations (like database URLs, API keys, etc.) in a Java CI/CD pipeline?
7. What are some best practices for managing dependencies in a Java project within a CI/CD context?
8. How would you implement automated testing in a CI/CD pipeline for a Java project? What types of tests would you include?
9. Can you describe a scenario where a CI/CD pipeline might fail for a Java project? How would you troubleshoot and resolve this issue?
10. How would you ensure security in a Java-based CI/CD pipeline? What tools or practices would you recommend?
11. How would you handle rollbacks in a Java-based CI/CD pipeline? What tools or strategies would you use?
12. How would you manage version control in a CI/CD pipeline for a Java application?
13. What are the key metrics you would track to measure the effectiveness of a CI/CD pipeline in a Java project?
14. How can Kubernetes be used in a CI/CD pipeline for a Java application? What are the benefits and challenges?
15. How would you handle secret management in a Java-based CI/CD pipeline?
16. What strategies would you use to minimize build time in a CI/CD pipeline for a Java project?
17. How would you incorporate code reviews and pull requests into a Java CI/CD pipeline?
18. Can you describe how to set up a multi-stage build process in a CI/CD pipeline for a Java project?
19. How would you handle failure notifications and alerts in a Java-based CI/CD pipeline? What tools or practices would you recommend?



[//]: # (Что подразумевается под CI-CD)
<br>
<details>
    <summary>
        <b><big><big><big>
            Что подразумевается под CI-CD
        </big></big></big></b>
    </summary>

CI/CD — это способ автоматизации доставки и внедрения новых версий продукта

**CI** позволяет обнаруживать ошибки на ранней стадии или при интеграции кода.
**CD** обеспечивает автоматизацию доставки нового кода с минимальными усилиями.

- Изменения кода имеют меньше непредвиденных последствий.
- Выявление ошибок проще и быстрее.
- Тестируемость улучшается за счет небольших конкретных изменений.
- Обновления проще интегрировать в конечный продукт

Инструменты CI/CD
- Git используется как инструмент системы контроля версий
- Jenkins используется как инструмент непрерывной интеграции
- Selenium используется как инструмент непрерывного тестирования
- Docker используется как инструмент контейнеризации0

</details>

[//]: # (Как можно улучшить CI-CD)
<br>
<details>
    <summary>
        <b><big><big><big>
            Как можно улучшить CI-CD
        </big></big></big></b>
    </summary>

**Делайте коммиты рано и часто** - чем раньше найдется ошибка,
тем меньше проблем возникнет с исправлением
**Оптимизируйте тесты** - чем меньше мануальных тестов, тем проще обнаружить ошибку

</details>
