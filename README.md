# OrangeHRM QA Enterprise 🧪

Enterprise HR system testing with Playwright, TypeScript, Page Object Model and Allure Reports.

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## 📋 Project Overview

End-to-end test automation suite for OrangeHRM, an enterprise HR management system. Tests cover login, employee management, leave management and dashboard functionality using the Page Object Model pattern.

## 🏗️ Project Structure
orangehrm-qa-enterprise/
├── pages/                  # Page Object Models
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── EmployeePage.ts
│   └── LeavePage.ts
├── tests/                  # Test suites
│   ├── auth/
│   ├── dashboard/
│   ├── employees/
│   └── leave/
├── test-data/              # Test data
├── utils/                  # Fixtures and helpers
├── docker-compose.yml      # Local environment
└── playwright.config.ts    # Playwright configuration
## 🧪 Test Cases

| ID | Module | Description | Status |
|---|---|---|---|
| TC01 | Auth | Login with valid credentials | ✅ |
| TC02 | Auth | Login with invalid password | ✅ |
| TC03 | Auth | Login with empty fields | ✅ |
| TC04 | Employees | Navigate to employee list | ✅ |
| TC05 | Employees | Add new employee | ✅ |
| TC06 | Employees | Search existing employee | ✅ |
| TC07 | Leave | Navigate to leave module | ✅ |
| TC08 | Leave | Verify Apply Leave page | ✅ |
| TC09 | Dashboard | Dashboard loads correctly | ✅ |
| TC10 | Dashboard | Verify dashboard title | ✅ |

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Docker Desktop

### Installation

```bash
git clone https://github.com/VladimirRamirez07/orangehrm-qa-enterprise.git
cd orangehrm-qa-enterprise
npm install
npx playwright install chromium
```

### Environment Setup

Create a `.env` file in the root directory:
ORANGEHRM_URL=http://localhost:3000
ADMIN_USERNAME=Admin
ADMIN_PASSWORD=your_password
### Start OrangeHRM locally

```bash
docker compose up -d
```

### Run Tests

```bash
# Run all tests
npm test

# Run specific module
npm run test:auth
npm run test:employees
npm run test:leave
npm run test:dashboard

# Run with browser visible
npm run test:headed
```

### Generate Allure Report

```bash
npm run allure:report
```

## 🛠️ Tech Stack

- **Playwright** - E2E testing framework
- **TypeScript** - Type-safe test code
- **Page Object Model** - Design pattern for maintainability
- **Allure Reports** - Test reporting
- **Docker** - Local OrangeHRM environment
- **GitHub Actions** - CI/CD pipeline