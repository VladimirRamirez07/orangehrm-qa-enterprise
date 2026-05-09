import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { LeavePage } from '../../pages/LeavePage';
import { validUser, leaveData } from '../../test-data/users';

test.describe('Leave - OrangeHRM', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await page.waitForURL(/dashboard/);
  });

  test('TC07 - Navegar al módulo de Leave', async ({ page }) => {
    const leavePage = new LeavePage(page);
    await leavePage.goto();
    await expect(page).toHaveURL(/leave/);
  });

  test('TC08 - Verificar módulo Apply Leave', async ({ page }) => {
    const leavePage = new LeavePage(page);
    await leavePage.goto();
    await page.goto('http://localhost:3000/web/index.php/leave/applyLeave');
    await expect(page).toHaveURL(/applyLeave/);
    await expect(page.locator('h6.oxd-text').nth(1)).toContainText('Apply Leave');
  });

});