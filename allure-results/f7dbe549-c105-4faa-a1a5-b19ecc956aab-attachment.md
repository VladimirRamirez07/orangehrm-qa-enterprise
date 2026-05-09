# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave\leave.spec.ts >> Leave - OrangeHRM >> TC08 - Aplicar una solicitud de Leave
- Location: tests\leave\leave.spec.ts:21:7

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-select-text').first()
    - locator resolved to <div data-v-67d2aedf="" data-v-13cf171c="" class="oxd-select-text oxd-select-text--active">…</div>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Leave" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Admin User
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - link "Apply" [ref=e133]:
              - /url: "#"
          - listitem [ref=e134] [cursor=pointer]:
            - link "My Leave" [ref=e135]:
              - /url: "#"
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Entitlements
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Reports
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Configure
              - generic [ref=e144]: 
          - listitem [ref=e145] [cursor=pointer]:
            - link "Leave List" [ref=e146]:
              - /url: "#"
          - listitem [ref=e147] [cursor=pointer]:
            - link "Assign Leave" [ref=e148]:
              - /url: "#"
          - button "" [ref=e150] [cursor=pointer]:
            - generic [ref=e151]: 
  - generic [ref=e152]:
    - generic [ref=e155]:
      - heading "Apply Leave" [level=6] [ref=e156]
      - separator [ref=e157]
      - paragraph [ref=e158]: No Leave Types with Leave Balance
    - generic [ref=e159]:
      - paragraph [ref=e160]: OrangeHRM OS 5.8.1
      - paragraph [ref=e161]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e162] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LeavePage {
  4  |   readonly page: Page;
  5  |   readonly applyLeaveButton: Locator;
  6  |   readonly leaveTypeDropdown: Locator;
  7  |   readonly fromDateInput: Locator;
  8  |   readonly toDateInput: Locator;
  9  |   readonly commentInput: Locator;
  10 |   readonly applyButton: Locator;
  11 |   readonly successMessage: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 |     this.applyLeaveButton = page.locator('a:has-text("Apply")');
  16 |     this.leaveTypeDropdown = page.locator('.oxd-select-text').first();
  17 |     this.fromDateInput = page.locator('input[placeholder="yyyy-dd-mm"]').first();
  18 |     this.toDateInput = page.locator('input[placeholder="yyyy-dd-mm"]').last();
  19 |     this.commentInput = page.locator('textarea.oxd-textarea');
  20 |     this.applyButton = page.locator('button[type="submit"]');
  21 |     this.successMessage = page.locator('.oxd-toast-content');
  22 |   }
  23 | 
  24 |   async goto() {
  25 |     await this.page.goto('/web/index.php/leave/viewLeaveModule');
  26 |   }
  27 | 
  28 |   async applyLeave(leaveType: string, fromDate: string, toDate: string, comment: string) {
  29 |     await this.applyLeaveButton.click();
> 30 |     await this.leaveTypeDropdown.click();
     |                                  ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  31 |     await this.page.locator(`.oxd-select-option:has-text("${leaveType}")`).click();
  32 |     await this.fromDateInput.fill(fromDate);
  33 |     await this.toDateInput.fill(toDate);
  34 |     await this.commentInput.fill(comment);
  35 |     await this.applyButton.click();
  36 |   }
  37 | 
  38 |   async getSuccessMessage(): Promise<string> {
  39 |     return await this.successMessage.innerText();
  40 |   }
  41 | }
```