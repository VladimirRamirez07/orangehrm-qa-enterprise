# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: employees\employees.spec.ts >> Employees - OrangeHRM >> TC04 - Navegar a lista de empleados
- Location: tests\employees\employees.spec.ts:8:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /viewEmployeeList/
Received string:  "http://localhost:3000/web/index.php/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × unexpected value "http://localhost:3000/web/index.php/auth/login"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e12]:
        - generic [ref=e14]:
          - generic [ref=e15]:
            - generic [ref=e16]: 
            - generic [ref=e17]: Username
          - textbox "Username" [active] [ref=e19]
        - generic [ref=e21]:
          - generic [ref=e22]:
            - generic [ref=e23]: 
            - generic [ref=e24]: Password
          - textbox "Password" [ref=e26]
        - button "Login" [ref=e28] [cursor=pointer]
        - paragraph [ref=e30] [cursor=pointer]: Forgot your password?
      - generic [ref=e31]:
        - generic [ref=e32]:
          - link [ref=e33] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e36] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e39] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e45]:
          - paragraph [ref=e46]: OrangeHRM OS 5.8.1
          - paragraph [ref=e47]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e48] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e50]
```

# Test source

```ts
  1  | import { test, expect } from '../../utils/fixtures';
  2  | import { newEmployee } from '../../test-data/users';
  3  | 
  4  | test.describe('Employees - OrangeHRM', () => {
  5  | 
  6  |   test.use({ authenticatedPage: undefined });
  7  | 
  8  |   test('TC04 - Navegar a lista de empleados', async ({ authenticatedPage, page, employeePage }) => {
  9  |     await employeePage.goto();
> 10 |     await expect(page).toHaveURL(/viewEmployeeList/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  11 |     await expect(page.locator('h5.oxd-text')).toContainText('Employee Information');
  12 |   });
  13 | 
  14 |   test('TC05 - Agregar nuevo empleado', async ({ authenticatedPage, page, employeePage }) => {
  15 |     await employeePage.goto();
  16 |     await employeePage.clickAddEmployee();
  17 |     await employeePage.fillEmployeeForm(
  18 |       newEmployee.firstName,
  19 |       newEmployee.middleName,
  20 |       newEmployee.lastName
  21 |     );
  22 |     await employeePage.saveEmployee();
  23 |     await expect(page).toHaveURL(/viewPersonalDetails/);
  24 |   });
  25 | 
  26 |   test('TC06 - Buscar empleado existente', async ({ authenticatedPage, page, employeePage }) => {
  27 |     await employeePage.goto();
  28 |     await employeePage.searchEmployee('Admin');
  29 |     await expect(page.locator('.oxd-table-body')).toBeVisible();
  30 |   });
  31 | 
  32 | });
```