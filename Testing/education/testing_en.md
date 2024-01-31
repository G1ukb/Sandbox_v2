[//]: # (Testing)
<br>
<details>
    <summary>
        <b><big><big><big>
            Testing
        </big></big></big></b>
    </summary>

[//]: # (What is divided into, what happens)
<br>
<details>
    <summary>
        <b><big><big><big>
            What is divided into, what happens
        </big></big></big></b>
    </summary>

![](https://elearn.epam.com/assets/courseware/v1/410860fdf29f9661f24af61a730de38d/asset-v1:EPAM+EngXBootcamp+2020+type@asset+block/The_High_Cost_of_Bugs_Tools_1.png)

- **Functional** testing
  (quality assurance of black box testing of a function)
    - **By approaches** (Regressive or domain)
        - depends on the main area of test creation
    - **By levels** (Smoke or Critical)
        - how many tests do we need and how deep do we go.
    - **By Type** (Compatibility or Usability)
        - what specific tests we will choose to solve some possible problems
    - **By disciplines** (Manual or automatic)
        - comparison of manual and automatic control for a number of parameters
- **Non-functional** testing
  (a wide range of external event tests that will affect our application in some way).
  **Are divided into:**
    - performance
    - safety
    - reliability
    - maintainability
    - usability
    - possibility of support

**According to the positivity of the scenario:**
- **Positive** – checking the software for compliance with the expected behavior.
  The main task of testing is to check whether the program works correctly.
- **Negative** – checks if the software will work if
  when user behavior differs from what is expected.

**By code access**
- **White box testing** - testing of a software product with access to the code.
- **Black box testing** - testing without access to the product code.
- **Grey box testing** - testing based on limited knowledge of the internal structure.
  In this case, the tester does not work with the software product code,
  but he is familiar with the internal structure of the program and the interaction between the components.
</details>

[//]: # (Auto tests vs manual tests)
<br>
<details>
    <summary>
        <b><big><big><big>
            Auto Tests vs. Manual Tests
        </big></big></big></b>
    </summary>

- **Automatic testing**
  (The automatic code checking software checks the source code
  against a predefined set of rules or best practices.
  The verification program or tool will usually display a list of warnings,
  which are violations of predefined programming standards.)
    - Checks source code against rules or practices
    - Local (self) code checking
    - Instant check
- **Manual testing**
  (Peer reviews or manual code reviews consist of reading line by line
  source code to identify potential problems.)
    - Ability to avoid design errors
    - Opportunity to learn and share knowledge for team members:

**Pros:**
- Lower cost early on
- Each execution is slightly different - has a certain randomness
- Easily adapts to environmental changes
- Flexibility
- Can be supported by tools
- Can detect small changes that tools can't because it doesn't look at them
- Fast execution - fast feedback

**Minuses:**
- Painstaking work
- Some tasks are difficult to complete manually
- Can be monotonous and boring
- Less accurate than automated tests

**Best for:**
- Usability testing
- Studies of the work done
- Testing accessibility

</details>

[//]: # (Automation Metrics vs Manual Testing)
<br>
<details>
    <summary>
        <b><big><big><big>
            Automation Metrics vs Manual Testing
        </big></big></big></b>
    </summary>

Test automation is an important part of the software development lifecycle

Test automation metrics:
- **return on investment (ROI)**.
  ![](https://elearn.epam.com/assets/courseware/v1/f331b444beb13eae406ff8cfe5940dbf/asset-v1:EPAM+EngXBootcamp+2020+type@asset+block/Test_automation_metrics__ROI__1_.svg)
- **coverage**
  ![](https://elearn.epam.com/assets/courseware/v1/4a71494e3423095ceeb666113bc48b37/asset-v1:EPAM+EngXBootcamp+2020+type@asset+block/Group.svg)
- **a priority**
  ![](https://elearn.epam.com/assets/courseware/v1/57aeaabf306f279a8af02a99808068ee/asset-v1:EPAM+EngXBootcamp+2020+type@asset+block/Test_automation_metrics__Coverage.svg)
  There are four squares:
    1. high priority, low cost automation;
    2. high priority, high cost;
    3. low priority, low cost;
    4. low priority, high cost.

Automation can save time and money if used correctly,
but for maximum savings in testing costs, you need to find
the right balance between manual and automated testing.

</details>

[//]: # (Test levels)
<br>
<details>
    <summary>
        <b><big><big><big>
            Test levels
        </big></big></big></b>
    </summary>

- **Module / Unit-testing** - checking the correct operation of individual modules of the project.
  This type of testing can be performed by the developers themselves.
    - Checking a separate class
    - Check the correctness and operability of the code
    - Verifies satisfaction of business requirements.
    - Provides the best quality, but does not catch all errors in the program
- **Integration Testing** - checking the interaction between several modules of the project.
- **System** - checking the operation of the entire system for compliance with the stated requirements for
  software product.
- **Functional** - emulate the behavior of the end user of the system.
- **Smoke testing** - very small tests that are run before the system starts
  to make sure it works.
- **Regression test** - test emulating the behavior of a real error
- **Acceptance test** - compliance test
- **Penetration test** - checking the system for various vulnerabilities.
- **Fuzzing test** - the idea is to feed the system a random,
  knowingly incorrect or unexpected input data stream.

</details>

[//]: # (Unit testing)
<br>
<details>
    <summary>
        <b><big><big><big>
            unit testing
        </big></big></big></b>
    </summary>

Checking that the code is working properly.
Some of the important features of a unit test include:

- Checks the functionality of the smallest elements of the application
- Written by developers
- Easy to run in IDE
- Runs relatively fast
- Easily integrates with CI (continuous integration)

**Why Unit tests**
- Fix/Find defects as development progresses
- Support of the project in the required state

If you're working without unit tests, you'll start wasting time trying to figure out
how the old code works and make sure your change didn't break it.

![](https://elearn.epam.com/assets/courseware/v1/b29602660b52e306c851053d644af883/asset-v1:EPAM+EngXBootcamp+2020+type@asset+block/Unit_testing___why_.svg)

**Principles of Unit Testing:**
They are described by the rule **F.I.R.S.T.**
- **Fast** - tests should be fast.
  When tests run slowly, you don't want to run them often.
  And if you don't run them often, you won't find problems early enough.
  so that they can be easily corrected.
- **Independent (or Isolated)** - tests should not depend on each other.
  One test should not set the conditions for the next test. In order not to cause a cascade of falls
- **Repeatable** - Tests must be repeatable in any environment.
  Test results should be the same at all times and in all places.
- **Self-validating** - Tests must have a logical inference. They either pass or they don't.
  In case of failure, you do not need to run through the log files and look for the cause of the error.
- **Timeliness** - tests must be written in a timely manner,
  just before the production code.

</details>

[//]: # (Integration testing)
<br>
<details>
    <summary>
        <b><big><big><big>
            Integration testing
        </big></big></big></b>
    </summary>

**Integration Testing** is one of the testing phases where
**individual software modules are combined and tested as a group**.

The purpose of integration testing is to verify compliance
development of functional, acceptance and reliability requirements.

Example: HTTP request handlers should also test
how the end client of this very service will use it.
This means that in fact, for such tests it is necessary
recreate an almost fully functional environment.

There are several **approaches** to integration testing:
- Upwards. First, the modules of the lower levels themselves are tested, and then ascending to the top of the hierarchy.
- Top down. First, the modules of the highest levels themselves are tested, and then in descending order using stubs.
- Big Bang. All modules of all levels are put together and then tested.

Advantages:
- ensures the assembly of the software system during tests.
- checks compliance with the requirements on the part of the user.
- integration testing is necessary to check whether the software modules work as a whole.


</details>

[//]: # (System testing/Functional testing/Smoke testing)
<br>
<details>
    <summary>
        <b><big><big><big>
            System testing/Functional test/Smoke testing
        </big></big></big></b>
    </summary>


**System testing**

**System testing** - one of the phases of testing, carried out
**checking the system as a whole** in order to identify defects

This is a comprehensive test that tests a bunch of several components at once.
The system in this case is perceived as a black box.

**Function test**

A test that is designed to fully emulate the behavior of the end user of the system.
In fact, you must write a robot that will use your system in a test environment.
More often this term is used in relation to the GUI, i.e.
interaction between the user and the graphical interface of the system.

**Smoke testing**

This is a special case of an integration test.
Usually these are very small tests that are run before the system starts,
to make sure that third-party software is working, which is necessary for the correct functioning of our system.
If such tests fail, we can notify the user about the problem or even stop the system from starting.

Such tests are often called smoke tests.
Smoke testing - came from the field of equipment testing,
if, after applying power, smoke and a burning smell appear, then the equipment is faulty.

</details>

[//]: # (Regression/Penetration test/Fuzzing/Acceptance tests)
<br>
<details>
    <summary>
        <b><big><big><big>
            Regression/Penetration test/Fuzzing/Acceptance tests
        </big></big></big></b>
    </summary>


**Regression test**

full or partial selection of already executed test cases,
which are repeated to ensure that the existing
functions work fine.

**Penetration test**

Checking the system for various vulnerabilities.
A good example would be tests that check the escaping of SQL commands (injection protection),
data availability and authorization with an expired token, etc.
The difficulty in writing such tests is taking into account all the bottlenecks.
Usually, public information about known vulnerabilities is used for this.
and exploits of the platform used.

**Fuzz test**

More often a kind of system test or vulnerability test.
The idea is to feed the system a random,
knowingly incorrect or unexpected input data stream.
The purpose of such a test is to try to detect violations of the validation and verification logic,
application logic in edge cases, sudden server crashes,
attempts to detect memory leaks or leaks of information about the internal structure of the system,
via raw error messages (stacktrace)

**Acceptance test**

Acceptance testing is a quality assurance (QA) process
which determines to what extent the application satisfies
end user requirements.

</details>

[//]: # (Test pyramid)
<br>
<details>
    <summary>
        <b><big><big><big>
            Testing Pyramid
        </big></big></big></b>
    </summary>


"Test Pyramid" is an abstraction that means grouping tests into different levels of detail.
It also gives an idea of how many tests should be in each of these groups.

Two **principles** follow from this pyramid:
- Write tests with different details.
- The higher the level, the fewer tests.

**Levels:**
- **Unit tests** - very fast - thousands of tests can be executed in just a few minutes.
    - they are more stable (FIRST rule)
    - help to think about possible places of error
    - help to find errors at earlier stages
    - fast execution time - fast feedback
    - independence on the user interface, database or api
    - easy to write and easy to maintain
- **Integration tests** - API testing is carried out based on the business logic of the software product.
    - used to test several interconnected modules
    - used to check the execution of business logic
    - rid of the difficulties of using the UI (postman pulls the rest)
    - you need to set up a system similar to the real one, which is why the tests are more expensive
- **System (UI) tests** - One UI test can take up to two hours to complete,
  and the execution is two minutes.
    - checking the correctness of the UI
    - checks the business logic from the user's point of view
    - UI tests are slower and harder to write and maintain,
      therefore it is necessary to minimize them.

![](https://qastart.by/images/Pyramid_API.png)

</details>

[//]: # (Test Driven Development)
<br>
<details>
    <summary>
        <b><big><big><big>
            Test Driven Development
        </big></big></big></b>
    </summary>

1. In test-driven development, every new feature **begins with writing a test**.
   To write a test, a developer must clearly understand the specifications and requirements of a feature.

2. In the second step, **run all tests** and see if the new test fails.

3. **Write the code that will cause the test to pass.**
   The new code written at this stage is not perfect.
   At this point, the **only purpose** of the written code is to pass the test.
   The programmer should not write code that goes beyond the functions tested by the test.
   (Can recline into parts 1-2)

4. **Verifying that all tests passed** (may shift to parts 1-3)

5. Repeat until all tests pass and there are no new requirements.
   This is followed by the **refactor code** stage.

</details>

</details>