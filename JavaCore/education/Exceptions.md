<h1>Exceptions</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (Best practices for using exceptions)

<br>
<details>
    <summary>
        <b><big><big>
         Best practices for using exceptions
        </big></big></b>
    </summary>

- **Be careful what you register**
  Error result logs should not contain private information
- **It's wrong to catch exceptions and do nothing with them**
- **Include a global exception handler to avoid a critical situation in
  important point for you**
- **Do not close the resource with your hands**
- **Dump Early, Catch Later** is the rule to cover
  as much as possible or catch as early as possible
- **Do not forget about log or forward**, do not neglect possible stuffing and logging
- **Explicitly define the exception to be thrown**. The narrower, the more accurate
- **First catch the bottleneck then the wide**

[infoLink](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Java-Exception-handling-best-practices)
</details>
<br>

