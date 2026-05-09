import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly welcomeMessage: Locator;
  readonly dashboardTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator('.oxd-topbar-header-title');
    this.dashboardTitle = page.locator('h6.oxd-text');
  }

  async isLoaded(): Promise<boolean> {
    await this.page.waitForURL(/dashboard/);
    return true;
  }

  async getPageTitle(): Promise<string> {
    return await this.dashboardTitle.innerText();
  }
}