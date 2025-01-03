<h1>Spring JDBC</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (Can you explain the role of JdbcTemplate in Spring JDBC?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the role of JdbcTemplate in Spring JDBC?
        </b>
    </summary>
<br>

It provides a simplified approach to handle
the complexities associated with standard JDBC
such as establishing database connections, handling exceptions,
processing result sets, and managing database resources.

- **Connection Management:** JdbcTemplate automates database connection,
  preparing statements, and handling transactions
- **Exception Handling:** translates standard SQLExceptions to
  Spring's DataAccessException hierarchy exceptions
- **Query Execution and Result Set:**  provides convenient methods
  to execute SQL queries, updates, and stored procedures.
- **Resource Management:** JdbcTemplate automatically closes the resources
  (like ResultSet, PreparedStatement, and Connection)

Common use cases:

* Executing SQL Queries // SQL Statements // Procedures
* Query For Map

</details>

[//]: # (How does Spring JDBC compare with other data access technologies 
        supported by Spring, like Spring Data JPA or Hibernate?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring JDBC compare with other data access technologies 
            supported by Spring, like Spring Data JPA or Hibernate?
        </b>
    </summary>
<br>

1. Spring JDBC: This is a low-level data access technology
   that provides a simplified approach to the standard JDBC.

2. Hibernate offers comprehensive
   ORM features and abstractions for complex models

3. Spring Data JPA feeds into the Spring ecosystem much better
   but can be excessive for simple applications.

</details>

[//]: # (What potential issues might arise if Spring JDBC and Spring JPA 
        are used within the same application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What potential issues might arise if Spring JDBC and Spring JPA 
            are used within the same application?
        </b>
    </summary>
<br>

1. Transaction Management: Both JPA and JDBC have their own methods
   for managing transactions.
   If you are not careful, this could lead to conflicts
   and inconsistencies within the application,
   especially if both technologies are used within the same transaction.

2. Complexity: Using two different data access technologies
   within the same application adds unnecessary complexity to your code.
   This could make the application more difficult to maintain and debug.

3. Performance: JPA caches entities at the first level
   (the Persistence Context) and possibly at a second level (the L2 cache) as well.
   If you update the database directly with JDBC and bypass these caches,
   your JPA access might work on stale or invalidated data
   which could result in unpredictable behavior and bugs.

4. Consistency in Codebase: Mixing two data access technologies
   can lead to a lack of consistency across your codebase.
   This could create misunderstandings among developers and lead to potential bugs.

5. Error Handling: JPA and JDBC handle exceptions differently.
   Without proper planning, using both can make error
   handling more complex and less predictable.

</details>

[//]: # (How does Spring JDBC handle database transactions?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring JDBC handle database transactions?
        </b>
    </summary>
<br>

- **Programmatically:**
  You can use PlatformTransactionManager directly to control transactions
  programmatically, using the PlatformTransactionManager’s
  getTransaction(), commit(), and rollback() methods.

- **Declarative:**
  You use @Transactional annotation to specify the transaction behavior
  on a method, and Spring AOP takes care of wrapping the method
  with transaction control code.
    - more preferable because of the creation of clean core

</details>

[//]: # (Could you provide more information about @Transactional?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Could you provide more information about @Transactional?
        </b>
    </summary>
<br>

When a method annotated with @Transactional is triggered,
Spring ensures it will be run within a transaction.

- **Propagation:** defines how transactions relate to each other
    - REQUIRED (if a current transaction exists, then it will be used,
      else a new transaction is started)
    - REQUIRES_NEW (a new transaction is always started)
    - SUPPORTS (reuse current transaction if exists,
      else execute non-transactional).
- Isolation
- Timeout
- Rollback Rules: by default roll back on runtime exceptions.
  However, you can customize the rollback rules by defining
  which exceptions would cause a rollback (rollbackFor)
  and which exceptions would not (noRollbackFor)
- Read-Only Flag: For transactions that only read data

</details>

[//]: # (How does Spring JDBC handle exception translation?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring JDBC handle exception translation?
        </b>
    </summary>
<br>

Spring JDBC translates standard SQLExceptions into a hierarchy of meaningful,
unchecked DataAccessExceptions by using the interfaces,
providing a consistent, easy-to-use approach to handling SQL exceptions.

**SQLStateSQLExceptionTranslator:** This implementation uses the SQLState code
returned by the database to determine what Spring DataAccessException
subclass to throw.

**SQLErrorCodeSQLExceptionTranslator:** This implementation uses
the vendor-specific error code returned by the database,
plus the SQLState code, to determine the DataAccessException.
SQLErrorCodes are specified in xml files which can be customized
for different databases.

</details>

[//]: # (Can you explain how Spring JDBC supports row mapping?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how Spring JDBC supports row mapping?
        </b>
    </summary>
<br>

Spring JDBC supports row mapping through the RowMapper interface,
which includes the mapRow() method to map a ResultSet row into an object.

Additionally, Spring provides BeanPropertyRowMapper,
a convenient implementation of RowMapper
when column names match target object field names.

</details>

[//]: # (Can you explain the difference between 
        JdbcTemplate and NamedParameterJdbcTemplate in Spring JDBC?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain the difference between 
            JdbcTemplate and NamedParameterJdbcTemplate in Spring JDBC?
        </b>
    </summary>
<br>

JdbcTemplate and NamedParameterJdbcTemplate
are both key classes in Spring JDBC
and provide different ways of passing parameters to SQL queries:

1. JdbcTemplate: This is the classic Spring JDBC approach
   for interacting with a relational database.
   Parameters in a query are provided as placeholders using '?'
   sign and are passed as arguments in an array to the query methods.

```java
String sql = "SELECT * FROM users WHERE id = ?";
User user = jdbcTemplate.queryForObject
                            (sql, new Object[]{id}, new UserRowMapper());
```

While this approach works perfectly fine for small numbers of parameters,
it can get complex and prone to errors
if there are many parameters due to the possibility of order mix-up.

2. NamedParameterJdbcTemplate: This is an extension of JdbcTemplate
   that supports named parameters instead of the traditional placeholder ('?').
   This approach improves code readability and maintainability,
   especially when there are many query parameters.

It uses a `SqlParameterSource`
(such as `MapSqlParameterSource` or `BeanPropertySqlParameterSource`)
or a simple Java `Map` to provide the named parameters.

```
String sql = "SELECT * FROM users WHERE id = :id";
MapSqlParameterSource params = new MapSqlParameterSource();
params.addValue("id", id);
User user = namedParameterJdbcTemplate.queryForObject(sql, params, 
    new UserRowMapper());
```

</details>

[//]: # (How would you configure a DataSource in Spring JDBC?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you configure a DataSource in Spring JDBC?
        </b>
    </summary>
<br>

1. Java-Based Configuration:

In this method, you create a configuration class annotated
with `@Configuration`.
Inside, you declare a `@Bean` method that returns a `DataSource`.

```java

@Configuration
public class DataSourceConfig {

    @Bean
    public DataSource dataSource() {
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setDriverClassName("com.mysql.cj.jdbc.Driver");
        hikariConfig.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        hikariConfig.setUsername("username");
        hikariConfig.setPassword("password");

        return new HikariDataSource(hikariConfig);
    }
}
```

2. XML-Based Configuration:

You can also configure a `DataSource` using an XML file.
Here's an example of XML configuration file
using DBCP (Database Connection Pool) for pooling:

```xml

<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource">
    <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
    <property name="url" value="jdbc:mysql://localhost:3306/mydb"/>
    <property name="username" value="username"/>
    <property name="password" value="password"/>
</bean>
```

</details>

[//]: # (How does Spring JDBC handle connection pooling?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring JDBC handle connection pooling?
        </b>
    </summary>
<br>

Spring JDBC handles connection pooling indirectly via a DataSource object,
which can be configured to use a specific connection pool implementation
such as HikariCP, Apache DBCP, or C3P0.

</details>

[//]: # (How does Spring JDBC handle SQL NULL values?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring JDBC handle SQL NULL values?
        </b>
    </summary>
<br>

By default if ResultSet handles primitive param null it will return
default value like 0 for int

For Objects ResultSet will return Null value

</details>

[//]: # (How would you handle large datasets using Spring JDBC?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle large datasets using Spring JDBC?
        </b>
    </summary>
<br>

If we need to get data:

1. PagingAndSortingRepository interface: Instead of retrieving all data at once,
   fetch it in smaller chunks
2. Control Fetch Size of a result set
3. Use Appropriate SQL not to get unnecessary data
4. Batch Processing: allows executing a group of SQL queries as a single
   (improving performance for large-scale operations)

If we don't want to store all data in memory

1. ResultSet Streaming: ResultSetExtractor and stream instead of holding.
   (but other operations with this connection will be closed)

</details>

[//]: # (Can you explain how to handle CLOB and BLOB types in Spring JDBC?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to handle CLOB and BLOB types in Spring JDBC?
        </b>
    </summary>
<br>

The LobHandler interface in Spring JDBC is used
to handle LOB (Large Object) fields in databases
such as CLOB and BLOB
data types, simplifying their handling in a database-neutral manner.

Spring JDBC provides methods to handle CLOB (Character Large Object)
and BLOB (Binary Large Object) types independently of the underlying database

```
String sql = "SELECT clob_column, blob_column FROM my_table WHERE id = ?";

jdbcTemplate.query(sql, new Object[]{id}, new ResultSetExtractor<Void>() {

    public Void extractData(ResultSet rs) throws SQLException, DataAccessException {
        if (rs.next()) {
            LobHandler lobHandler = new DefaultLobHandler();

            // Handling CLOB
            String clobData = lobHandler.getClobAsString(rs, "clob_column");

            // Handling BLOB
            byte[] blobData = lobHandler.getBlobAsBytes(rs, "blob_column");
        }
        return null;
    }
});
```

</details>

[//]: # (How does Spring JDBC support stored procedures and functions?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Spring JDBC support stored procedures and functions?
        </b>
    </summary>
<br>

Spring JDBC supports the calling of stored procedures
and functions using the SimpleJdbcCall and StoredProcedure classes.
These provide a simple and more rigid approach, respectively,
allowing developers to choose the right approach to cover their needs.

1. SimpleJdbcCall: This is often the preferred approach due to its simplicity.
2. Extends StoredProcedure: more execution control

</details>

[//]: # (Can you explain how to expose 
        the JdbcCursorItemReader class in Spring JDBC?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            Can you explain how to expose 
            the JdbcCursorItemReader class in Spring JDBC?
        </b>
    </summary>
<br>

JdbcCursorItemReader is an ItemReader provided
in Spring Batch for reading database records
incrementally through a cursor.
It can efficiently handle large datasets
without the risk of running out of memory.

</details>

[//]: # (How would you handle database connection 
        retries in a Spring JDBC application?)
<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            How would you handle database connection
            retries in a Spring JDBC application?
        </b>
    </summary>
<br>

* **DataSource Connection Pool:** DataSource can be configured
* **Manual Retries:**
* **Spring Retry:** exponential backoff (doWithRetry method),
  consider using Spring Retry.

</details>
