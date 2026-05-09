import { test, expect } from '../../utils/fixtures';

test.describe('Login - OrangeHRM', () => {

  test('TC01 - Login exitoso con credenciales válidas', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login(
      process.env.ADMIN_USERNAME || 'Admin',
      process.env.ADMIN_PASSWORD || ''
    );
    await expect(page).toHaveURL(/dashboard/);
  });

  test('TC02 - Login fallido con contraseña incorrecta', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('Admin', 'wrongpassword');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

  test('TC03 - Login con campos vacíos', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(page.locator('.oxd-input-field-error-message').first()).toBeVisible();
  });

});