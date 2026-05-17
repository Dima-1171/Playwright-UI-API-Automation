# Automation Testing Project

## Overview

This project contains:

- UI Automation Testing using Playwright
- API Automation Testing using Postman
- Allure Reporting Integration
- Page Object Model (POM) Architecture

---

# Technologies Used

## UI Testing
- Playwright
- JavaScript
- Page Object Model (POM)
- Allure Report

## API Testing
- Postman
- Newman
- JavaScript Test Scripts

---

# Application Under Test

## UI
```bash
https://www.saucedemo.com/
```

## API
```bash
https://reqres.in/
```

---

# Project Structure

```bash
PLAYWRITE_OSTAD
│
├── tests
├── pageObjects
├── Api_testing
├── allure-report
├── allure-results
├── playwright.config.js
├── package.json
└── README.md
```

---

# UI Test Scenarios

## Scenario 01
Validate login with locked user.

## Scenario 02
Validate add to cart and checkout process.

## Scenario 03
Validate product sorting, add to cart, and checkout.

---

# API Test Scenarios

- Login API validation
- Verify login token
- Dynamic user search validation
- Update user API
- PATCH single field validation
- 4xx error validation

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Dima-1171/Ostad_Assignment_02.git
```

## Install Dependencies

```bash
npm install
```

---

# Execute UI Tests

## Run All Tests

```bash
npm run runAll
```

## Run Sequentially

```bash
npm run runSequence
```

## Run Individual Scenarios

```bash
npm run Senario_1
npm run Senario_2
npm run Senario_3
```

---

# Generate Reports

## Playwright Report

```bash
npm run show_repo
```

## Allure Report

```bash
npm run getreport
```

---

# Execute API Collection

## Run Using Newman

```bash
newman run Api_testing/02_Api_test.json
```

## Run Using CommandLine

newman run "C:\Users\sazia\OneDrive\Desktop\PLAYWRITE_OSTAD\Api_testing\02_Api_test.json"

---

# Key Features

- Page Object Model (POM)
- Reusable methods
- Multi-browser support
- Automated API validation
- Allure Reporting
- Independent and sequential execution

---

# Author

Sazia Afrin Dima