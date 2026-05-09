import { test, expect } from '../../utils/fixtures';
import { newEmployee } from '../../test-data/users';

test.describe('Employees - OrangeHRM', () => {

  test('TC04 - Navegar a lista de empleados', async ({ employeePage, page }) => {
    await employeePage.goto();
    await expect(page).toHaveURL(/viewEmployeeList/);
    await expect(page.locator('h5.oxd-text')).toContainText('Employee Information');
  });

  test('TC05 - Agregar nuevo empleado', async ({ employeePage, page }) => {
    await employeePage.goto();
    await employeePage.clickAddEmployee();
    await employeePage.fillEmployeeForm(
      newEmployee.firstName,
      newEmployee.middleName,
      newEmployee.lastName
    );
    await employeePage.saveEmployee();
    await expect(page).toHaveURL(/viewPersonalDetails/);
  });

  test('TC06 - Buscar empleado existente', async ({ employeePage, page }) => {
    await employeePage.goto();
    await employeePage.searchEmployee('Admin');
    await expect(page.locator('.oxd-table-body')).toBeVisible();
  });

});