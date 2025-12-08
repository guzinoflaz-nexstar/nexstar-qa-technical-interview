# Nexstar QA Technical Interview — Playwright Coding Challenge

Welcome!  
This repository contains the environment for the **Live Playwright Coding Challenge**.

You do NOT need to install anything locally.

---

## 👉 Open Interview Environment in GitHub Codespaces

Click below to start coding in your browser (no setup required):

[![Open in GitHub Codespaces](https://img.shields.io/badge/Open_in-Codespaces-blue?logo=github)](https://codespaces.new/YOUR_GITHUB_USERNAME/nexstar-qa-technical-interview)

---

# 🧪 Playwright Challenge (The Guardian)

Using Playwright + TypeScript, complete the test in  
`tests/guardian-challenge.spec.ts`:

1. Navigate to: https://www.theguardian.com/international  
2. Locate the **first article headline** on the homepage  
3. Store the title text  
4. Click the article  
5. On the article page, retrieve the `<h1>` headline  
6. Validate that the article headline **matches or contains** the homepage headline

---

## ▶️ Running the Tests

Inside Codespaces terminal:

```bash
npm install
npx playwright install
npx playwright test
