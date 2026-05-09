import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { EmployeePage } from '../pages/EmployeePage';
import { LeavePage } from '../pages/LeavePage';

type Pages = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  employeePage: EmployeePage;
  leavePage: LeavePage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.ADMIN_USERNAME || 'Admin',
      process.env.ADMIN_PASSWORD || ''
    );
    await page.waitForURL(/dashboard/);
    await use(new DashboardPage(page));
  },
  employeePage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.ADMIN_USERNAME || 'Admin',
      process.env.ADMIN_PASSWORD || ''
    );
    await page.waitForURL(/dashboard/);
    await use(new EmployeePage(page));
  },
  leavePage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.ADMIN_USERNAME || 'Admin',
      process.env.ADMIN_PASSWORD || ''
    );
    await page.waitForURL(/dashboard/);
    await use(new LeavePage(page));
  },
});

export { expect } from '@playwright/test';