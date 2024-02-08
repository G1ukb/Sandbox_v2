<h1>Annotations</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>


[//]: # (What is and what is the main reason for using annotations?)

<br>
<details>
    <summary style="font-size: 25px;">
        <b>
            What is and what is the main reason for using annotations?
        </b>
    </summary>
<br>

Annotations are descriptors included in the text of the program,
and are used to store program code metadata,
required at different stages of the program life cycle.

The information stored in annotations can be used by appropriate
handlers to create the necessary auxiliary files
or for marking classes, fields, etc.

</details>
<br>

[//]: # (Instructions to execute annotations by execution type?)

<details>
    <summary style="font-size: 25px;">
        <b>
             Annotation execution instructions (by execution type)?
        </b>
    </summary>
<br>

Instructions for the compiler (Compiler)
@Override
@SuppressWarnings
Build-time instruction
Instruction at Runtime
@Deprecated

</details>
<br>

[//]: # (What types of objects can be returned from an annotation method declaration?)

<details>
    <summary style="font-size: 25px;">
        <b>
             What types of objects can be returned from an annotation method declaration?
        </b>
    </summary>
<br>

The return type must be
- primitive,
- String ,
- class,
- Enum
- an array of one of the previous types.

</details>
<br>

[//]: # (How custom annotations can help improve code)

<details>
    <summary style="font-size: 25px;">
        <b>
             How custom annotations can help improve code
        </b>
    </summary>
<br>

* Reduce coding effort by adding default behavior to methods.
* Adding custom behavior to classes and interfaces
* Save the effort of writing XML descriptors and marker interfaces.

</details>
<br>

[//]: # (Short annotation template)

<details>
    <summary style="font-size: 25px;">
        <b>
          Brief annotation template
        </b>
    </summary>
<br>

@Target (specify type)
@Retention(specify how it works) //SOURCE, CLASS and RUNTIME
</details>
<br>

[//]: # (What is meta annotation)

<details>
    <summary style="font-size: 25px;">
        <b>
          What is meta annotation
        </b>
    </summary>
<br>

Meta annotations are annotations that extend the behavior of already
created annotations.
added via @inherit annotation
</details>
<br>
