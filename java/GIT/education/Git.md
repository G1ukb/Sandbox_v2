<h1>Git</h1> 
<h4> 

[Back to menu](..%2FMenu.md)

</h4>

[//]: # (What is VCS?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is VCS?
        </b>
    </summary>
<br>

VCS stands for Version Control System.
It is a system that tracks changes to a file or set of files over time.
This allows you to revert to previous versions of the file,
see who made changes, and collaborate with others on the same file.

There are many different VCSs available,
each with its own strengths and weaknesses.
Some popular VCSs include Git, SVN, and Mercurial.

</details>
<br>

[//]: # (What is Git?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is Git?
        </b>
    </summary>
<br>

Git is a popular and widely used version control system (VCS).
It is a distributed system, meaning that each developer
has a complete copy of the repository on their local machine.

This allows developers to work offline and commit changes later.
Git is also known for its speed and efficiency.

**Why better than analogs:**

Git has several advantages over other VCSs, such as SVN and Mercurial.
These advantages include:

* **Speed and efficiency:** Git is known for its speed and efficiency,
  making it ideal for large projects with many developers.


* **Distributed nature:** Git's distributed nature allows developers
  to work offline and commit changes later,
  making it a good choice for teams that are spread across different locations.


* **Branching and merging:** Git makes it easy to create and merge branches,
  making it a good choice for projects that require frequent collaboration.


* **Large community and support:** Git has a large and active community,
  which means that there is a lot of support available if you need help.

</details>
<br>

[//]: # (What is a .git repository?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is a .git repository?
        </b>
    </summary>
<br>

A .git repository is a hidden folder created
when you initialize a Git repository.
This folder contains all the information that Git needs to track changes
to your project.

It includes the following files and folders:

* **Objects:** This folder stores all of the Git objects, such as commits, blobs, and trees.
* **Refs:** This folder stores the references to the Git objects.
* **HEAD:** This file points to the current branch.
* **config:** This file stores the Git configuration settings.
* **description:** This file contains a description of the repository.
* **hooks:** This folder contains scripts that can be run at different stages of the Git workflow.
* **index:** This file stores the current state of the working directory.

</details>
<br>

[//]: # (What is a Git config?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is a Git config?
        </b>
    </summary>
<br>

A Git config is a file that stores configuration settings for Git.
These settings control how Git behaves on your system.
There are two main types of Git config files:

* **Global config:** This file stores settings that apply
  to all Git repositories on your system.
  It is located at `~/.gitconfig` on Unix-like systems
  and `C:\Users\<username>\.gitconfig` on Windows.


* **Local config:** This file stores settings that apply to a specific
  Git repository.
  It is located in the `.git` folder of the repository.

You can use the `git config` command to view,
edit, and delete settings in the Git config file.
For example, the following command will show you all the settings
in the global config file:

```
git config --global --list
```

</details>
<br>

[//]: # (What are the sections of Git and the main states of Git files?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What are the sections of Git and the main states of Git files?
        </b>
    </summary>
<br>

**Sections of Git:**

Git is divided into three main sections:

* **Working directory:** This is the directory where you
  work on your project files.
* **Staging area:** This is a temporary area where
  you can stage files before committing them to the repository.
* **Repository:** This is where the history of your project is stored.
  It includes all of the commits, branches, and tags.

**Main states of Git files:**

There are four main states that a Git file can be in:

* **Untracked:** This means that the file is not yet under Git control.
* **Unmodified:** This means that the file is under Git control,
  but it has not been changed since the last commit.
* **Modified:** This means that the file has been changed since the last commit,
  but the changes have not yet been staged.
* **Staged:** This means that the file has been changed
  and the changes have been staged.
  The changes will be included in the next commit.

</details>
<br>

[//]: # (How does Git know that a file has been changed?)
<details>
    <summary style="font-size: 25px;">
        <b>
            How does Git know that a file has been changed?
        </b>
    </summary>
<br>

Git uses a system called **content-addressable storage**
to track changes to files.

This means that Git stores a unique identifier for each version of a file.
When a file is changed, Git creates a new version of the file
and stores a new identifier for it.

This allows Git to track changes to files even if
the file name or contents have changed.

Git uses a **hashing algorithm** to create unique identifiers for files.
A hashing algorithm is a function that takes an input
(in this case, the contents of a file)
and produces a unique output (the hash).
The hash is a fixed-length string of characters
that is always the same for a given input.

When Git creates a new version of a file,
it calculates the hash of the file's contents.
This hash is then stored in the Git repository.
When you want to view a previous version of the file,
Git can use the hash to retrieve the correct version of the file.

![alt-text](https://git-scm.com/book/en/v2/images/deltas.png)

</details>
<br>

[//]: # (What is the difference between fetch and pull in Git?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between fetch and pull in Git?
        </b>
    </summary>
<br>

Both `fetch` and `pull` are Git commands used
to update your local repository with changes from a remote repository.
However, they differ in how they handle the updated information.

**Fetch:**

* **Function:** `fetch` downloads the latest changes from the remote repository
  and stores them in your local repository.
  However, it does not automatically merge them into your current branch.
* **Use case:** Use `fetch` when you want to check for updates
  on the remote repository without affecting your local working directory.

**Pull:**

* **Function:** `pull` is a combination of `fetch` and `merge`.
  It downloads the latest changes from the remote
  repository, stores them in your local repository,
  and then merges them into your current branch.

</details>
<br>

[//]: # (What is the difference between fetch and pull in Git?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between fetch and pull in Git?
        </b>
    </summary>
<br>

Both `fetch` and `pull` are Git commands used
to update your local repository with changes from a remote repository.
However, they differ in how they handle the updated information.

**Fetch:**

* **Function:** `fetch` downloads the latest changes from the remote repository
  and stores them in your local repository.
  However, it does not automatically merge them into your current branch.
* **Use case:** Use `fetch` when you want to check for updates
  on the remote repository without affecting your local working directory.

**Pull:**

* **Function:** `pull` is a combination of `fetch` and `merge`.
  It downloads the latest changes from the remote
  repository, stores them in your local repository,
  and then merges them into your current branch.

</details>
<br>

[//]: # (What is the difference between merge and rebase in Git?)
<details>
    <summary style="font-size: 25px;">
        <b>
            What is the difference between merge and rebase in Git?
        </b>
    </summary>
<br>

Both `merge` and `rebase` are Git commands used to integrate changes
from one branch into another.
However, they differ in how they achieve this integration
and the resulting history.

**Merge:**

* **Function:** `merge` creates a new commit that combines the changes
  from two branches.
  This creates a "merge commit" in the history of your project.
* **Use case:** Use `merge` when you want to preserve the history
  of both branches and clearly show when they were merged.
  This is often preferred when collaborating with others,
  as it provides a clear audit trail of changes.

![alt text](http://blog.alvarezp.org/wp-content/uploads/2019/02/git-merge-commit.jpg)

**Rebase:**

* **Function:** `rebase` replays the commits from one branch on top
  of another branch.
  This rewrites the history of the branch being rebased,
  making it appear as if the commits were made on the target branch
  from the beginning.
* **Use case:** Use `rebase` when you want to clean up the history
  of your project and avoid merge commits.
  This can be useful for personal projects
  or when working with a team that has agreed on a rebasing workflow.

![alt text](http://blog.alvarezp.org/wp-content/uploads/2019/02/git-rebase.jpg)

**In what situation must use:**

* Use `merge` when you want to preserve the history
  of both branches and clearly show when they were merged.

* Use `rebase` when you want to clean up the history
  of your project and avoid merge commits.

</details>
<br>

[//]: # (What is the difference between forks and branches in Git?)
<details>
    <summary style="font-size: 25px;">
        <b>
           What is the difference between forks and branches in Git?
        </b>
    </summary>
<br>

Both forks and branches are tools used in Git for creating
and managing different versions of a project.
However, they differ in their ownership, purpose, and relationship
to the original repository.

**Forks:**

* **Ownership:** A fork is a copy of a repository that is owned
  by a different user or organization than the original repository.


* **Purpose:** Forks are used to create a personal copy of a repository
  where you can make changes without affecting the original repository.
  This is useful for experimenting with new features,
  fixing bugs, or creating your own version of the project.


* **Relationship:** Forks are independent of the original repository.
  Changes made in a fork do not automatically affect
  the original repository, and vice versa.
  You can choose to submit your changes back to the original repository as a
  pull request, but this is not required.

**Branches:**

* **Ownership:** A branch is a separate line of development within the same repository. It is owned by the same user or
  organization as the original repository.


* **Purpose:** Branches are used to isolate different lines of development within a project. This is useful for working
  on a new feature, fixing a bug, or preparing a release.


* **Relationship:** Branches are connected to the main branch (usually called "master") of the repository. Changes made
  in a branch can be merged back into the main branch, or they can be discarded.

**In what situation must use:**

* Use a fork when you want to create a personal copy of a repository
  and make changes without affecting the original repository.


* Use a branch when you want to create a separate line of development
  within the same repository.

</details>
<br>