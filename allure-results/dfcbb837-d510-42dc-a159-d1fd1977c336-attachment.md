# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard\dashboard.spec.ts >> Dashboard - OrangeHRM >> TC09 - Dashboard carga correctamente
- Location: tests\dashboard\dashboard.spec.ts:7:7

# Error details

```
Test timeout of 90000ms exceeded.
```

```
TimeoutError: page.waitForURL: Timeout 90000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class DashboardPage {
  4  |   readonly page: Page;
  5  |   readonly welcomeMessage: Locator;
  6  |   readonly dashboardTitle: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.welcomeMessage = page.locator('.oxd-topbar-header-title');
  11 |     this.dashboardTitle = page.locator('h6.oxd-text');
  12 |   }
  13 | 
  14 |   async isLoaded(): Promise<boolean> {
> 15 |     await this.page.waitForURL(/dashboard/);
     |                     ^ TimeoutError: page.waitForURL: Timeout 90000ms exceeded.
  16 |     return true;
  17 |   }
  18 | 
  19 |   async getPageTitle(): Promise<string> {
  20 |     return await this.dashboardTitle.innerText();
  21 |   }
  22 | }
```