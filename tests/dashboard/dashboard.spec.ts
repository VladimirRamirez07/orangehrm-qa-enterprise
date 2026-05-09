import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { validUser } from '../../test-data/users';

test.describe('Dashboard - OrangeHRM', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await page.waitForURL(/dashboard/);
  });

  test('TC09 - Dashboard carga correctamente', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const isLoaded = await dashboardPage.isLoaded();
    expect(isLoaded).toBe(true);
  });

  test('TC10 - Verificar título del Dashboard', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.isLoaded();
    const title = await dashboardPage.getPageTitle();
    expect(title).toContain('Dashboard');
  });

});