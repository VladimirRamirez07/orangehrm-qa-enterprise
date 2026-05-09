# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave\leave.spec.ts >> Leave - OrangeHRM >> TC07 - Navegar al módulo de Leave
- Location: tests\leave\leave.spec.ts:7:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /leave/
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
  2  | 
  3  | test.describe('Leave - OrangeHRM', () => {
  4  | 
  5  |   test.use({ authenticatedPage: undefined });
  6  | 
  7  |   test('TC07 - Navegar al módulo de Leave', async ({ authenticatedPage, page, leavePage }) => {
  8  |     await leavePage.goto();
> 9  |     await expect(page).toHaveURL(/leave/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  10 |   });
  11 | 
  12 |   test('TC08 - Verificar módulo Apply Leave', async ({ authenticatedPage, page }) => {
  13 |     await page.goto('/web/index.php/leave/applyLeave');
  14 |     await expect(page).toHaveURL(/applyLeave/);
  15 |     await expect(page.locator('h6.oxd-text').nth(1)).toContainText('Apply Leave');
  16 |   });
  17 | 
  18 | });
```