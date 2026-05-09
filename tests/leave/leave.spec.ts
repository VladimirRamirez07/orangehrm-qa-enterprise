import { test, expect } from '../../utils/fixtures';

test.describe('Leave - OrangeHRM', () => {

  test('TC07 - Navegar al módulo de Leave', async ({ leavePage, page }) => {
    await leavePage.goto();
    await expect(page).toHaveURL(/leave/);
  });

  test('TC08 - Verificar módulo Apply Leave', async ({ leavePage, page }) => {
    await page.goto('/web/index.php/leave/applyLeave');
    await expect(page).toHaveURL(/applyLeave/);
    await expect(page.locator('h6.oxd-text').nth(1)).toContainText('Apply Leave');
  });

});