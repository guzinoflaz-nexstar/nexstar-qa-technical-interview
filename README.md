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

# 🧪 Playwright Challenge (The Guardian)

Using **Playwright + TypeScript**, complete the test in:  
`tests/guardian-challenge.spec.ts`

### Your task:

1. Navigate to: https://www.theguardian.com/international  
2. Locate the **first article headline** on the homepage  
3. Store the headline text  
4. Click the article  
5. On the article page, retrieve the `<h1>` headline  
6. Validate that the article headline **matches or contains** the homepage headline

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
