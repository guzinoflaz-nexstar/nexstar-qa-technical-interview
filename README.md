# Nexstar QA Technical Interview — Playwright Coding Challenge

Welcome!  
This repository contains the environment for the **Live Playwright Coding Challenge**.

You do NOT need to install anything locally.  
Everything runs inside **GitHub Codespaces**.

---

## 🚀 Open Interview Environment (One-Click)

Click below to instantly launch a ready-to-use Codespace:

👉 https://github.com/codespaces/new/guzinoflaz-nexstar/nexstar-qa-technical-interview?quickstart=1

This will automatically:

- Create a new Codespace  
- Install dependencies  
- Install Playwright browsers  
- Open a VS Code environment in your browser  

No setup is required.

---

# 🧪 Playwright Challenge

Using **Playwright + TypeScript** complete the tasks below:

### Task

File `tests/headline-challenge.spec.ts`

Test requirements:

1. Navigate to: https://www.theguardian.com/international  
2. Locate the **first article headline** on the homepage  
3. Store the headline text 
4. Click the article  
5. On the article page, retrieve the article headline
6. Validate that the article headline **matches or contains** the homepage headline
7. The test must have the tag `@test_headline`

**Important**: Prioritize Playwright's built-in functions over CSS selectors.


#### Submit Responses

> This is a **public repository** and you most likely do NOT have write access.
> When you push, GitHub will offer to create a **fork** under account your accept it. 
> Your Pull Request then goes from **your fork -> this repository**.

1. Open `tests/headline-challenge.spec.ts` and replace the placeholder
   with your solution.
2. Run the test and make sure it passes:
   `npx playwright test --grep @test_headline`
3. Open the **Source Control** tab.
4. **Stage** your change (hover the file, click the `+`).
5. Type a commit message, then click **Commit** (the check mark).
6. Click **Publish Branch** (or **Sync Changes**). If you are told you lack
   permission to push, allow GitHub to create/use your fork.
7. Click **Create Pull Request**. Make sure the direction is:
   `your-fork:challenge  ->  guzinoflaz-nexstar/nexstar-qa-technical-interview:main`
8. Set the PR title to your full name and click **Create pull request**.

> If GitHub says *"There isn't anything to compare"*, your solution is not
> yet committed go back to steps 3-5.

---

## ▶️ Running the Tests

Inside the Codespaces terminal:

```bash
npx playwright test

To view the HTML report:
npx playwright show-report

📁 Project Structure
├── tests/
│   └── guardian-challenge.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
