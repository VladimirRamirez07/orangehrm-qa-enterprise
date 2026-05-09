import { Page, Locator } from '@playwright/test';

export class EmployeePage {
  readonly page: Page;
  readonly addEmployeeButton: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly saveButton: Locator;
  readonly searchInput: Locator;
  readonly employeeNameInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeButton = page.locator('button:has-text("Add")');
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.middleNameInput = page.locator('input[name="middleName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.employeeIdInput = page.locator('.oxd-form .oxd-input').nth(4);
    this.saveButton = page.locator('button[type="submit"]');
    this.searchInput = page.locator('.oxd-table-filter');
    this.employeeNameInput = page.locator('.oxd-autocomplete-text-input input').first();
    this.searchButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('/web/index.php/pim/viewEmployeeList');
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }

  async fillEmployeeForm(firstName: string, middleName: string, lastName: string) {
    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);
  }

  async saveEmployee() {
    await this.saveButton.click();
  }

  async searchEmployee(name: string) {
    await this.employeeNameInput.fill(name);
    await this.searchButton.click();
  }
}