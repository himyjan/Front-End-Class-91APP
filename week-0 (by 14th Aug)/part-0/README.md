# Week 0 Part 0

## Prepare Project

Git naming convention about remote repository:

* **upstream** means repository created by the owner.

* **origin** means repository forked by you.

From now on, we're going to start the project **STYLiSH**.

1. **Fork** this repository from `upstream` to your GitHub account.
2. **Clone** the repository from `origin` to your **local machine**.
3. Create a `develop` branch from `main` branch in your **local machine**.
4. Change your current branch from `main` to `develop`.

## Assignment

Every time before you start a new assignment, please create a new **feature branch** from the **develop** branch with the following rules and complete the assignment on that branch.

```
Feature branch naming rules:

  feature/[your name]-w[week number]p[part number]

Example: For week 1 part 3

  => feature/max-w1p3
```

1. You should always work in the root folder.
2. Create a html file named `index.html`.
3. Modify `index.html` file, write down simple welcome messages in this page.
4. Make your first commit for the changes with git.
5. Push **feature branch** to `your forked repository`.

## How to Hand-In?

Go to your **forked repository** in GitHub website. Find the **feature branch** on your **forked repository** and make a **pull request** from this branch to `[your_name]-develop` branch of the **upstream repository**. (Please never make a pull request to the `main` branch of the `upstream repository`)

## About Pull Request

- Leave the title unchanged.
- Always include **your online URL**, **short description of what you have done** in the description of pull request.

## Fix Issues

- If your pull request is not accepted, it means that the assignment have issues should be fix. I will mention the issues in the comment.
- Fix issues, push new commits to your repository again. The pull request will automatically update itself, so you don't have to create another pull request for the same assignment.

## Sync Develop Branch

- If your pull request is merged, you should update local `develop` branch by pulling from remote `[your_name]-develop` branch.

## Sample PR

![github com_AppWorks-School_Front-End-Class-Batch16_pull_121 (4)](https://user-images.githubusercontent.com/11663276/173797630-58573dba-d62b-40ea-905e-ea3331e96f59.png)
