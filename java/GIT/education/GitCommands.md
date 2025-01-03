<h1>Git Commands</h1> 
<h4> 

[Back to menu](../Menu.md)

</h4>

[//]: # (How do you know in Git that a branch 
        has already been merged into the master branch?)
<details>
    <summary style="font-size: 25px;">
        <b>
            How do you know in Git that a branch 
            has already been merged into the master branch?
        </b>
    </summary>
<br>

There are several ways to check 
if a branch has been merged into the master branch in Git:

**1. Using the `git branch --merged master` command:**

This command lists all branches that have been merged into the current branch. 
If the branch you are interested in is listed, 
it means it has been merged into the master branch.

**2. Using the `git log` command:**

This command shows the commit history of a branch. If the last commit of the branch you are interested in is also present in the master branch, it means the branch has been merged.

```
git log branch_name..master
```

**3. Using the GitHub web interface:**

If you are using GitHub, you can check the "Branches" tab of the repository. Merged branches will have a green checkmark next to them.

**4. Using the `git show-branch` command:**

This command shows the relationship between branches. If the branch you are interested in is listed under "merged", it means it has been merged into the master branch.

```
git show-branch master
```

**5. Using the `git branch -vv` command:**

This command shows the relationship between branches, including the number of commits ahead or behind the master branch. If the branch you are interested in is listed as "up to date" with the master branch, it means it has been merged.

```
git branch -vv
```

</details>
<br>


#### Как вы узнаете в GIT, что ветка уже объединена с мастер веткой

- git branch --merged <ветка> - Список веток которые были смержены с текущей
- git branch --no-merged <ветка> - Список веток которые не были смержены с текущей

Этот шаблон особенно полезен, когда над одним проектом работают несколько разработчиков.


### Основные команды и определения

===== Базовая настройка =====

- git init - инициализация git репозитория в фолдере в котором находится cd
- git help - отображает доступные команды (-a все доступные
  / -с все доступные настройки конфига / git откроет помощник в браузере)
- git config --list - Отображаем все настройки которые используются в конфиг файле
  (--local/global/system --list)
- git config --list [p]         - Чтобы внести настройки в конкретный файл конфигурации

===== Работа с коммитами файлов =====

- git add file - Чтобы добавить файл в коммит
- git rm --cached file - Чтобы убрать файл из коммита
- git commit -m "msg"           - Чтобы сделать коммит файлов
- git log - Чтобы посмотреть все коммиты в ветке
- git log -p -1 - Посмотреть изменения в последнем коммите
- git diff - показывает файлы которые претерпели изменения
- git commit --amend -m "msg"   - Исправить сообщение коммита

===== Работа с репозиторием =====

- git remote - Команда работы с репозиториями
- get remote -v - Для просмотра текущих репозиториев
- git remote add pb <name>      - Добавление репозиториев

===== Получение данных ======

- git fetch [remote-name]       - Получение данных из репозитория
- git pull --allow-unrelated-histories https://github.com/G1ukb/Sandbox.git
    - заберет все изменения с ремоута для принудительного мержа

===== Слияние одной ветки с другой =====

- git merge <master>            - Смержить текущую ветку с мастер веткой
  (мастер не меняется но все его изменения уходят в head ветку)
- git rebase <master>           - Команда, которая позволяет разработчикам интегрировать
  изменения из одной ветви в другую.
  git rebase --continue - Чтобы подтвердить rebase
  git rebase --abort - Чтобы отклонить

===== Отправка данных ======

- git push <remote> <branch>    - Чтобы запушить изменения на гит репозиторий
- git push <remote> --force - Force пуш ветки
- git reset --soft <fe613aa1>   - Чтобы веруться в этот коммит и подобрать все изменения при возврате

===== Работа с ветками =====

- git branches -v - Чтобы посмотреть все ветки
- git branches -d имя - удалить ветку
- git checkout имя - переключение между ветками
- git checkout -b имя - создание ветки
- git branch --merged <ветка>   - Список веток которые были смержены с текущей
- git branch --no-merged <ветка>- Список веток которые не были смержены с текущей

git pull request - запрос на внесение изменений
git get - скачивание без слияния
git force push - пуш коммитов с перезаписыванием изменений на сервере

## Practice ##

### @ Инициализация локального репозитория гит + коммит файлов

Для того чтобы инициализировать репозиторий гит нужно дойти до необходимой директории и прописать
git init
После этого будет создан локальный репозиторий
Чтобы закомитить файлы, для начала их нужно добавить используя команду
git add
Если в прекоммит попал файл который нам не нужен, можно воспользоваться командой
git rm --cached file

#### Как вы можете исправить неправильно написанное сообщение коммита

Чтобы исправить любое неправильно подписанное сообщение коммита, вы будете использовать команду
«git commit --amend -m "msg"».
Запустив эту команду, вы можете исправить сообщение об ошибке в редакторе.

#### Как можно откатить коммит

**Если изменения не закоммичены**

Чтобы откатить коммит есть два варианта
сделать git **reset --soft branchHash**
Эта команда отменит последний коммит (но не изменения, которые вы внесли, они сохранятся).

Если последний коммит отвратителен, то можно вообще его удалить
**git reset --hard branchHash**
(но ВСЕ правки, которые не были закоммиченны тоже удаляться)

**git cherry-pick**
Команда используется для того чтобы взять изменения,
внесённые каким-либо коммитом, и попытаться применить их заново в виде нового коммита наверху текущей ветки.
Это может оказаться полезным чтобы забрать парочку коммитов из другой ветки без полного слияния с той веткой.

**Если изменения закоммичены**

git revert commit-sha1

#### Как можно переключаться между коммитами

Команда git checkout позваляет переключаться не только между ветками.
Но и между коммитами