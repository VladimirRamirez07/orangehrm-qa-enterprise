# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.ts >> Login - OrangeHRM >> TC01 - Login exitoso con credenciales válidas
- Location: tests\auth\login.spec.ts:6:7

# Error details

```
Test timeout of 90000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 90000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly usernameInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly errorMessage: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.usernameInput = page.locator('input[name="username"]');
  13 |     this.passwordInput = page.locator('input[name="password"]');
  14 |     this.loginButton = page.locator('button[type="submit"]');
  15 |     this.errorMessage = page.locator('.oxd-alert-content-text');
  16 |   }
  17 | 
  18 |   async goto() {
> 19 |     await this.page.goto('/web/index.php/auth/login', { 
     |                     ^ TimeoutError: page.goto: Timeout 90000ms exceeded.
  20 |       waitUntil: 'domcontentloaded' 
  21 |     });
  22 |   }
  23 | 
  24 |   async login(username: string, password: string) {
  25 |     await this.usernameInput.fill(username);
  26 |     await this.passwordInput.fill(password);
  27 |     await this.loginButton.click();
  28 |   }
  29 | 
  30 |   async getErrorMessage(): Promise<string> {
  31 |     return await this.errorMessage.innerText();
  32 |   }
  33 | }
```