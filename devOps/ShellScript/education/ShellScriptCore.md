<h1>Shell Script Core</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What are some popular shell script commands?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What are some popular shell script commands?
        </b>
    </summary>
<br>

Shell scripting is a powerful tool for automating tasks
in Unix-like operating systems.

1. `#! /bin/bash` (Shebang) -
   This line at the top of the script identifies the script interpreter.

2. Variables - Variables in shell scripting are defined directly,
   like `VARNAME="Hello, World!"`.

3. Command substitution - `$(command)` or `` `command` ``
   will run the command and replace itself with the command’s output.

4. Conditional statements - `if`, `elif`, `else`, and `fi`
   (`fi` - is the end of statement)
   are used to perform conditional operations.

```bash
if [ "$VARNAME" == "value" ]
then
  echo "Condition is true."
fi
```

5. `for` loops - Iterating over a sequence of numbers, files, or strings.

```bash
for i in {1..5}
do
  echo "Number: $i"
done
```

6. `while` loops - Executes a block of statements as long as a condition is true.

7. `case` - This command is used to perform different actions 
based on the value of a variable.

8. `function` or `funcname()` - These commands define a subroutine or function.

9. `read` - Reads user input.

```bash
read -p 'Enter your name: ' name
```

10. `echo` - This command outputs the arguments it is given.

11. `exit` - Ends the shell script and returns a status (0 for success by default).

</details>
<br>



