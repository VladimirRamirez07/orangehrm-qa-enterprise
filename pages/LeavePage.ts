import { Page, Locator } from '@playwright/test';

export class LeavePage {
  readonly page: Page;
  readonly applyLeaveButton: Locator;
  readonly leaveTypeDropdown: Locator;
  readonly fromDateInput: Locator;
  readonly toDateInput: Locator;
  readonly commentInput: Locator;
  readonly applyButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.applyLeaveButton = page.locator('a:has-text("Apply")');
    this.leaveTypeDropdown = page.locator('.oxd-select-text').first();
    this.fromDateInput = page.locator('input[placeholder="yyyy-dd-mm"]').first();
    this.toDateInput = page.locator('input[placeholder="yyyy-dd-mm"]').last();
    this.commentInput = page.locator('textarea.oxd-textarea');
    this.applyButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.oxd-toast-content');
  }

  async goto() {
    await this.page.goto('/web/index.php/leave/viewLeaveModule');
  }

  async applyLeave(leaveType: string, fromDate: string, toDate: string, comment: string) {
    await this.applyLeaveButton.click();
    await this.leaveTypeDropdown.click();
    await this.page.locator(`.oxd-select-option:has-text("${leaveType}")`).click();
    await this.fromDateInput.fill(fromDate);
    await this.toDateInput.fill(toDate);
    await this.commentInput.fill(comment);
    await this.applyButton.click();
  }

  async getSuccessMessage(): Promise<string> {
    return await this.successMessage.innerText();
  }
}