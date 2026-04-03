## Scenario:
    I was working on two different GitHub accounts (A and B) on the same laptop. I cloned a project from account B while logged into account A. When trying to push changes to account B’s repo, I kept getting a permission denied error because Git was using account A’s credentials.
    Approach/Solution:
    I created a new SSH key specifically for account B.
    I copied that SSH key to my laptop.
    I updated the remote URL using:
    git remote set-url origin <account B SSH URL>.
    I ran ssh -T github-<key-name> to test that it was using the correct SSH key.
    After confirming, I pushed the branch, and it worked perfectly—account B had full permission.
