import { test, expect } from '../../utils/fixtures';

test.describe('Dashboard - OrangeHRM', () => {

  test('TC09 - Dashboard carga correctamente', async ({ dashboardPage, page }) => {
    const isLoaded = await dashboardPage.isLoaded();
    expect(isLoaded).toBe(true);
  });

  test('TC10 - Verificar título del Dashboard', async ({ dashboardPage, page }) => {
    await dashboardPage.isLoaded();
    const title = await dashboardPage.getPageTitle();
    expect(title).toContain('Dashboard');
  });

});