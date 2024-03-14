<h1>Spring JPA</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What are the key elements and purposes of Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the key elements and purposes of Spring JPA?
        </b>
    </summary>
<br>

Spring JPA (Java Persistence API) is a specification
that helps to standardize the way in which we interact
with databases in Java applications,
by providing a set of concepts and APIs that can make it easier
to work with relational databases.

1. Entities: These are POJO classes that represent tables in a database.
   They are annotated with `@Entity`, and their fields are mapped to columns
   of the database tables.

2. EntityManager: This is an interface that manages
   the persistence operations on entities.
   It provides CRUD (Create, Read, Update, Delete) operations
   as well as operations to manage transactions.

3. Repositories: Spring JPA introduces repository abstractions
   that ease the implementation of data access layers.
   The `JpaRepository` interface provides methods for common database operations.

4. Transaction Management: JPA provides annotations (`@Transactional`)
   to define transaction boundaries, propagation, and isolation levels.

The purpose of Spring JPA is to simplify the development of applications
that need to interact with relational databases.
It provides a high-level API to perform database operations,
abstracting many of the low-level details of JDBC.

</details>

[//]: # (How does Spring JPA handle database transactions?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring JPA handle database transactions?
        </b>
    </summary>
<br>

The `@Transactional` annotation in Spring supports several
attributes that provide control over transaction management.

The key ones are:

1. `propagation`: This attribute is used to control the propagation type
   of the transaction. It can have values like `REQUIRED` (default),
   `REQUIRES_NEW`, `SUPPORTS`, `NOT_SUPPORTED`,
   `MANDATORY`, `NEVER`, and `NESTED`.

2. `isolation`: This attribute is used to control the isolation level
   of the transaction. It can have values like `DEFAULT` (default),
   `READ_UNCOMMITTED`, `READ_COMMITTED`, `REPEATABLE_READ`, and `SERIALIZABLE`.

3. `timeout`: This attribute is used to set the transaction timeout duration.
   It's specified in seconds and defaults to the default timeout
   of the underlying transaction system, or to none if timeouts are not supported.

4. `readOnly`: This attribute is used
   to indicate whether the transaction is read-only.
   It's a hint to the persistence provider
   which might optimize for read interactions.

5. `rollbackFor` and `noRollbackFor`: These attributes
   are used to specify which exceptions should cause a rollback or not.
   By default, a transaction will be rolled back on a `RuntimeException`
   and its subclasses.

6. `value` / `transactionManager`: These attributes are used
   to specify the `PlatformTransactionManager` bean to be used
   for transaction management.

```java

@Transactional(propagation = Propagation.REQUIRES_NEW,
    isolation = Isolation.READ_COMMITTED,
    timeout = 120,
    readOnly = false,
    rollbackFor = Exception.class,
    noRollbackFor = IllegalArgumentException.class)
public void someTransactionMethod() {
    // ...
}
```

</details>

[//]: # (Step-by-step instructions for JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Step-by-step instructions for JPA?
        </b>
    </summary>
<br>

step-by-step guide:

- Inspect the Database Table
- Create an Entity Class and Define Fields and getters and setters
- Define the Primary Key: Use the @Id annotation
- Column Annotations: If a field's name doesn't match
- Specify Relationships: @OneToMany, @ManyToOne, @OneToOne, and @ManyToMany.

Create a Repository Interface:

```java
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
```

Use the Repository: @Autowire the repository in your service class.
You can then use the repository to execute find operations.

```java

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Optional<Employee> findEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }
}
```

</details>

[//]: # (How does Spring JPA handle exception translation?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring JPA handle exception translation?
        </b>
    </summary>
<br>

Spring JPA, like other Spring modules, uses a consistent approach
to exception handling by providing an exception translation mechanism.

By default, JPA throws several types of checked exceptions
(such as `javax.persistence.PersistenceException`).
However, checked exceptions are cumbersome to handle as they need
to be caught or declared to be thrown
at each level of your application that works with the database.

Spring translates these checked exceptions into unchecked exceptions
by implementing a `PersistenceExceptionTranslator`.
It translates JPA-specific persistence exceptions
into Spring's `DataAccessException` hierarchy,
which are unchecked exceptions.

Exception translation is automatically set up when using `@Repository`
on a Spring bean. This is because `@Repository`
includes a function that catches platform-specific exceptions and re-throws
them as one of Spring's unified unchecked exceptions.

</details>

[//]: # (Can you provide a list of basic operations
        that can be performed on a table, such as find?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you provide a list of basic operations 
            that can be performed on a table, such as find?
        </b>
    </summary>
<br>

1. `save(S entity)`: This method is used to save an entity to the database.
   It can be used for both creating new entities and updating existing ones.

2. `findById(ID id)`: This method is used to retrieve an entity by its ID.

3. `existsById(ID id)`: This method is used to check
   if an entity with the given ID exists.

4. `findAll()`: This method is used to retrieve all entities.

5. `count()`: This method is used to get the count of all entities in the table.

6. `deleteById(ID id)`: This method is used to delete an entity by its ID.

7. `delete(S entity)`: This method is used to delete a given entity.

8. `deleteAll()`: This method is used to delete all entities.

9. `findAll(Sort sort)`: This method is used to retrieve
   all entities with the sort parameters.

10. `findAllById(Iterable<ID> ids)`: This method is used to find
    all entities with the given IDs.

</details>

[//]: # (Can you explain how to use the @Query annotation in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use the @Query, @NamedQuery annotation in Spring JPA?
        </b>
    </summary>
<br>

The @Query annotation in Spring JPA is used to execute
custom SQL or JPQL queries that are not easily doable
through Spring's query method conventions.

The ?1 in the query is a positional parameter
and will be replaced with the method's first parameter
or use @Param("name") on method input

```java
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("SELECT e FROM Employee e WHERE e.name = :name")
    List<Employee> findEmployeesByName(@Param("name") String name);

}
```

The @Query annotation can also be used with native SQL
queries by setting the nativeQuery attribute to true

    JPQL query is used from param as Java object
    SQL used from param as database table

The @NamedQuery and @NamedQueries annotations in Spring JPA
are used to define static queries directly on the entity classes.
@NamedQuery is used to declare a single named query while
@NamedQueries is used to group multiple @NamedQuery annotations together.
These queries are parsed at startup,
providing early feedback for syntax errors.

</details>

[//]: # (How would you handle lazy loading and eager loading in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle lazy loading and eager loading in Spring JPA?
        </b>
    </summary>
<br>

- **Eager Loading:** Eager loading means that the related
  entities will be loaded immediately.
  When you load an entity, all its related entities
  will be loaded from the database at the same time.
  This is achieved in JPA using the `EAGER` fetch type.

```java

@OneToMany(mappedBy = "employee", fetch = FetchType.EAGER)
private Set<Department> departments;
```

- **Lazy Loading:** Lazy loading means that the related entities
  will not be loaded from the database immediately.
  Instead, they'll be loaded when the application
  accesses them for the first time.

```java

@OneToMany(mappedBy = "employee", fetch = FetchType.LAZY)
private Set<Department> departments;
```

By default, all `*ToOne` relationships like `@ManyToOne` and `@OneToOne`
are eagerly fetched while all `*ToMany`
relationships like `@OneToMany` and `@ManyToMany` are lazily fetched.

The decision between using lazy loading and eager loading
in your application largely depends on your specific use case,
application's performance requirements, and data access patterns.

Eager loading could be beneficial when you frequently access related data
and/or work with small datasets,
whilst lazy loading could be more suitable when dealing
with large datasets and/or access-related data occasionally.

</details>

[//]: # (How would you handle cascading operations in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle cascading operations in Spring JPA?
        </b>
    </summary>
<br>

cascading operations are operations which are propagated
from the parent object to the child or dependent object.
(or objects in case of oneToMany relation)

These annotations take an array of CascadeType enums,
which include ALL, PERSIST, MERGE, REFRESH, REMOVE, DETACH.

PERSIST: if we save the parent entity, the child will also get saved (Insert)
MERGE: If the state of parent entity is updated, child will also get updated
REFRESH: If we reset the state of an entity, child will also get refreshed.
REMOVE: Delete operation
DETACH: Remove the association between a parent and child.

</details>

[//]: # (Can you explain how to use the 
         @JoinColumn and @JoinTable and @SecondaryTable
         annotations in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use the 
            @JoinColumn and @JoinTable and @SecondaryTable
            annotations in Spring JPA?
        </b>
    </summary>
<br>

The @JoinColumn annotation is used to specify the column
for joining an entity association or element collection,
and is commonly used in
single-direction @OneToOne and @ManyToOne relationships,
and in bidirectional @OneToMany relationships.

The @JoinTable annotation is used to specify a
join table in many-to-many relationships,
and for unidirectional @OneToOne or @OneToMany relationships.

```java

@Entity
public class Employee {

    @Id
    private Long id;

    @ManyToMany
    @JoinTable(
        name = "employee_project",
        joinColumns = @JoinColumn(name = "employee_id"),
        inverseJoinColumns = @JoinColumn(name = "project_id")
    )
    private Set<Project> projects = new HashSet<>();

    // Other fields, getters and setters

}
```

@SecondaryTable annotation in Spring JPA is used to map an entity
to a secondary table in the database.
This annotation is useful when the attributes
of an entity are stored in more than one table
and can lead to performance improvements when correctly used.

</details>

[//]: # (How would you handle versioning in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle versioning in Spring JPA?
        </b>
    </summary>
<br>

Versioning in Spring JPA is handled using the @Version annotation.

It works by automatically incrementing a version field each time
an entity is updated, and causing transactions
that have an outdated version number to fail.

```java

@Version
private Integer version;
```

</details>

[//]: # (How would you handle composite primary keys in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle composite primary keys in Spring JPA?
        </b>
    </summary>
<br>

In Spring Data JPA, composite primary keys can be handled in two ways:

1. `@IdClass`: This annotation is used when you have a
   composite key that can map directly to the entity fields.
   An extra class is needed to hold the key fields.

This class is then passed as a parameter to the `@IdClass` annotation.
The `@Id` annotation is used in the entity class on each of the fields
which make up the composite key.

   ```java

@Entity
@IdClass(EmployeeId.class)
public class Employee {
    @Id
    private Long departmentId;

    @Id
    private Long employeeId;

    // Other fields, getters, setters
}

public class EmployeeId implements Serializable {
    private Long departmentId;
    private Long employeeId;

    // Getters, setters, equals and hashCode
}
   ```

2. `@EmbeddedId` and `@Embeddable`: This approach is used when
   the composite primary key is also serving as an entity in itself.
   An `@Embeddable` class is created to hold the composite key, and
   this is included in the entity class using the `@EmbeddedId` annotation:

   ```java
   @Entity
   public class Employee {

      @EmbeddedId
      private EmployeeId id;

      // Other fields, setters, getters
   }

   @Embeddable
   public class EmployeeId implements Serializable {
      private Long departmentId;
      private Long employeeId;

      // Getters, setters, equals and hashCode
   }
   ```

</details>

[//]: # (How would you handle pagination and sorting in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle pagination and sorting in Spring JPA?
        </b>
    </summary>
<br>

Spring Data JPA makes handling pagination and sorting quite simple.
You have to extend `PagingAndSortingRepository` or `JpaRepository`
in your repository interface. These repositories include methods
related to pagination and sorting that you can use without any implementation.

1. Pagination: `Pageable` is an interface that contains
   requested page information.
   You can pass an instance of `Pageable` to the query method
   to provide pagination information. A `Page` object is returned;
   that includes page content, page number, total number of pages,
   total number of elements, etc.

    ```java
    public interface EmployeeRepository extends JpaRepository<Employee, Long> {
        Page<Employee> findByLastName(String lastName, Pageable pageable);
    }

    // Usage
    Pageable pageable = PageRequest.of(0, 20);  // get 20 elements starting from the first page (page index is 0 based)
    Page<Employee> page = repository.findByLastName("Smith", pageable);
    ```

2. Sorting: `Sort` is an object that holds sort order
   and the properties to sort by.
   You can also pass a `Sort` object to your query method,
   or it can be passed along with `Pageable` instance
   for sorting and pagination together.

    ```java
    public interface EmployeeRepository extends JpaRepository<Employee, Long> {
        List<Employee> findByLastName(String lastName, Sort sort);
    }

    // Usage
    Sort sort = Sort.by(Direction.ASC, "lastName"); // sort ascending by lastName
    List<Employee> employees = repository.findByLastName("Smith", sort);
    ```

</details>

[//]: # (How would you handle auditing in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle auditing in Spring JPA?
        </b>
    </summary>
<br>

Auditing in Spring Data JPA can be handled with
the help of Spring Data's auditing infrastructure.
This feature allows you to automatically capture creation
and modification information directly in the domain classes.

1. Enable Auditing: Initially, to activate these features,
   the `@EnableJpaAuditing` annotation must be placed on one
   of your `@Configuration` classes.

   ```java
   @Configuration
   @EnableJpaAuditing
   public class AppConfig {
        // Other configurations
   }
   ```

2. Add Auditing Information to Entities:
   Next, you declare fields in your entity
   that should be automatically filled with auditing information.
   Usually, this includes fields like `createdBy`,
   `createdDate`, `lastModifiedBy`, and `lastModifiedDate`.

   To have these fields to be automatically managed,
   you include them in your entity classes and annotate
   them with `@CreatedDate`, `@LastModifiedDate`, `@CreatedBy`,
   and `@LastModifiedBy` annotations correspondingly.

```java

@Entity
@EntityListeners(AuditingEntityListener.class) // Required for JPA auditing callback
public class Employee {
    // Regular entity mappings
    @Id
    private Long id;
    private String name;
    // ...

    // Auditing fields
    @CreatedBy
    private String createdBy;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @LastModifiedBy
    private String lastModifiedBy;

    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastModifiedDate;

    // Getters and setters
}
```

Alternatively, extend `Auditable` base class provided by Spring Data JPA,
or more simply, the `AbstractAuditable` base
class if you use a singular primary key class extending `Serializable`.

   ```java

@Entity
public class Employee extends AbstractAuditable<User, Long> {
    // Other fields, getter, setters
} 
   ```

3. Provide AuditorAware Bean:
   For `@CreatedBy` and `@LastModifiedBy` to work, a bean implementing
   `AuditorAware<T>` interface needs to be provided.
   This can be used to tell the auditing infrastructure
   who the current user or system interacting with the application is.

   ```java
   @Bean
   public AuditorAware<String> auditorProvider() {
      return ()-> {
         // Insert logic to return current user
      };
   }
   ```

This way, the fields related to auditing will be automatically
populated whenever we create or update entity instances,
tracking the "when" and "who" of data modifications.

</details>

[//]: # (Can you explain how to use the 
        @EntityListeners annotation in Spring JPA?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to use the 
            @EntityListeners annotation in Spring JPA?
        </b>
    </summary>
<br>

The `@EntityListeners` annotation in Spring JPA is used 
to specify callback listener classes for an entity. 
Callback listeners are used to hook into entity lifecycle events 
like pre-persist (before save), post-persist (after save), 
pre-remove, post-remove, pre-update, post-update, and post-load.

```java
@Entity
@EntityListeners(EmployeeEntityListener.class)
public class Employee {
    @Id
    private Long id;
    private String name;
    // Other fields, getters, and setters
}
```
```java
public class EmployeeEntityListener {

    @PrePersist
    void prePersist(Employee employee) {
        // Code to run before saving an Employee
    }

    @PostPersist
    void postPersist(Employee employee) {
        // Code to run after saving an Employee
    }

    // Similarly for PreRemove, PostRemove, PreUpdate, PostUpdate, and PostLoad
}
```

This can be especially useful for separation of concerns. 
With entity listeners, you can keep auditing, logging, 
and other cross-cutting concerns separate from your actual business logic
and entity definitions.

</details>
