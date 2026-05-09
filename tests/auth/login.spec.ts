import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { validUser } from '../../test-data/users';

test.describe('Login - OrangeHRM', () => {

  test('TC01 - Login exitoso con credenciales válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await expect(page).toHaveURL(/dashboard/);
  });

  test('TC02 - Login fallido con contraseña incorrecta', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'wrongpassword');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

  test('TC03 - Login con campos vacíos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(page.locator('.oxd-input-field-error-message').first()).toBeVisible();
  });

});