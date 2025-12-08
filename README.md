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

### Task 1

File `tests/headline-challenge.spec.ts`

Test requirements:

1. Navigate to: https://www.theguardian.com/international  
2. Locate the **first article headline** on the homepage  
3. Store the headline text 
4. Click the article  
5. On the article page, retrieve the article headline  
6. Validate that the article headline **matches or contains** the homepage headline
7. The test must have the tag `@test_headline`

### Task 2

File `tests/hooks-challenge.spec.ts`

Test requirements:

1. Create a test suite that defines a `SITE_URL` variable set to:
https://www.theguardian.com/international
2. Add a setup hook that verifies the site responds with a 200 status code.
3. Add a test case that clicks the site logo in the navigation bar.
4. Assert the value of `SITE_URL` matches the current URL.
4. Add a teardown hook that takes a screenshot.
5. The test must have the tag `@test_hooks`

### Task 3

File `tests/pom-challenge.spec.ts`

Test requirements:

1. Create a test that relies on a Page Object Model with the base URL:
https://www.theguardian.com/international
2. Create a navigation bar component that is accessible from the Page Object.
3. Add a class method that navigates to a section using a value from a custom data structure representing navigation sections (e.g. News, Opinion, Sport, etc.)
4. Assert the page URL matches the section passed to the method.
5. The test must have the tag `@test_pom`


#### Submit Responses

1. Commit your changes.
2. Push them to the `challenge` branch.
3. Create a PR with your name as the title.

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
