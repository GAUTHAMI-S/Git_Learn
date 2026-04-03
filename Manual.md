## 🧩 Git Practical Scenarios (Hands-on Guide)

This guide is designed to help you learn Git through real-world scenarios, progressing from beginner to advanced level.


---------------------------------------------------------------------------

## 🟢 LEVEL 1 — Basics (Foundation)

## 1. Initialize & First Commit

    Scenario: You just started a project with a name

    Initialize a git repo

    Create README.md

    Add and commit it

    



---------------------------------------------------------------------------

## 2. Tracking Changes

    Scenario: You added a file app.js and modified it twice.

    Check status

    Stage only specific changes

    Commit with meaningful message


    Comment : used git commit -p to view the changes and stage it.



---------------------------------------------------------------------------

## 3. Ignoring Files

    Scenario: Your project has node_modules/ and .env

    Prevent them from being tracked

    Comment: Pattern used in .gitignore file have rules
             If a specific file give exact name - like .env
             if folder - add a slash at the end - like node_modules/.
             if its a pattern - use wildcards - like *.log
             

---------------------------------------------------------------------------

## 4. Viewing History

    Scenario: You want to check:

    Who changed what

    Commit history in one line

    Changes in a specific commit

    Comment: To view line by line change of the file use - git blame <filename>
    if file is huge : you can narrow down by specifying a range - like git blame -L 100,200 <filename>
    
    To see commit history in a single line - git log --oneline
    To see the changes in a specific commit - git show <commit hash>
    



---------------------------------------------------------------------------

## 🟡 LEVEL 2 — Branching & Workflow

## 5. Feature Branch

    Scenario: You’re building a feature: login-page

    Create a new branch

    Switch to it

    Add code and commit

    Scenario:
    After creating a new branch locally (e.g., feature/login-page), when trying to push it, you get an error: "This branch has no upstream branch."
    Why it happens:
    A new local branch isn't automatically linked to a remote branch. Git doesn't know where to push it.
    Solution:
    Use the command:
    git push --set-upstream origin <branch-name>
    This sets the remote branch as the upstream for your local branch. After this, a simple git push will work, and your branch will be tracked automatically.


---------------------------------------------------------------------------

## 6. Switching Between Work

    Scenario: You’re halfway through login-page, but need to fix a bug in main.

    Switch branches safely

    Comment: git stash = stash every file change
             afterwards - use git stash pop to pop the latest stash
            
---------------------------------------------------------------------------

## 7. Merge Feature

    Scenario: Feature is complete.

    Merge login-page into main

    Delete the branch

    Steps:
        1. Switch to the main branch:
        2. git checkout main
        3. Merge the feature branch into main:
        4. git merge feature/login
        Delete the feature branch locally:
        5. git branch -d feature/login
        (Optional) Delete the feature branch from the remote:
        6. git push origin --delete feature/login
        




---------------------------------------------------------------------------


## 8. Merge Conflict

    Scenario: Two branches modified the same line.

    Trigger a conflict

    Resolve it manually

    Complete the merge



---

🟠 LEVEL 3 — Intermediate (Real Developer Flow)

9. Undo Mistakes

Scenario: You accidentally staged a file.

Unstage it


Scenario: You committed something wrong.

Undo last commit (keep changes)

Undo completely



---

10. Amend Commit

Scenario: You forgot to add a file in last commit.

Add it to previous commit without creating new one



---

11. Stashing Work

Scenario: You are working but suddenly need to switch branch.

Save work temporarily

Switch branch

Come back and restore work



---

12. Multiple Stashes

Scenario: You created multiple stashes.

List them

Apply a specific one

Delete a stash



---

13. Selective Staging

Scenario: One file has multiple changes, but you want to commit only some.

Stage partially



---

🔵 LEVEL 4 — Advanced Git

14. Rebase vs Merge

Scenario: You want a clean history.

Rebase feature branch onto main



---

15. Interactive Rebase

Scenario: Your commits are messy.

Combine commits

Rename commit messages

Remove unnecessary commits



---

16. Cherry Pick

Scenario: You need a specific commit from another branch.

Copy that commit into current branch



---

17. Reset vs Revert

Scenario: You pushed a bad commit.

Undo safely without rewriting history



---

18. Detached HEAD

Scenario: You checkout a specific commit.

Make changes

Recover them properly



---

19. Git Reflog (Life Saver 🚨)

Scenario: You lost a commit after reset.

Recover it



---

🔴 LEVEL 5 — Collaboration (Team Environment)

20. Remote Repository

Scenario: Push your project to GitHub.

Add remote

Push code



---

21. Pull vs Fetch

Scenario: Your teammate pushed changes.

Fetch updates

Merge manually



---

22. Handling Pull Conflicts

Scenario: Your local changes conflict with remote.

Resolve conflicts

Complete pull



---

23. Force Push (Danger Zone ⚠️)

Scenario: You rebased commits already pushed.

Update remote safely



---

24. Working with Forks

Scenario: You forked a repo.

Sync with original repo



---

⚫ LEVEL 6 — Pro Level (Real Engineering Scenarios)

25. Clean History Before PR

Scenario: Before raising PR:

Squash commits

Make history readable



---

26. Bisect (Debugging Tool)

Scenario: A bug was introduced somewhere.

Find the exact commit



---

27. Hooks

Scenario: Prevent bad commits.

Add pre-commit hook



---

28. Submodules

Scenario: Using another repo inside your project.


---

29. Large File Handling

Scenario: You accidentally committed a large file.

Remove it from history



---

30. Real-Life Scenario (🔥 MUST DO)

Scenario: Simulate this workflow:

1. Create feature branch


2. Do multiple commits


3. Stash halfway


4. Switch branch for hotfix


5. Merge hotfix


6. Rebase feature branch


7. Resolve conflicts


8. Squash commits


9. Merge to main


10. Push to remote




---

💡 How to Use This

Don’t just read — DO this:

1. Create a dummy project


2. Solve each scenario manually


3. Break things intentionally


4. Fix using Git









