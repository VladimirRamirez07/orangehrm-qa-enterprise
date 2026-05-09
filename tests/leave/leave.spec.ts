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
    await expect(page).toHaveURL(/viewLeaveModule/);
  });

  test('TC08 - Aplicar una solicitud de Leave', async ({ page }) => {
    const leavePage = new LeavePage(page);
    await leavePage.goto();
    await leavePage.applyLeave(
      leaveData.leaveType,
      leaveData.fromDate,
      leaveData.toDate,
      leaveData.comment
    );
    const message = await leavePage.getSuccessMessage();
    expect(message).toContain('Successfully Saved');
  });

});