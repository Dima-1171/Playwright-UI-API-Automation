export class BasePage {
  constructor(page) {
    this.page = page;
  }

  buttonLocator(button) {
    return this.page.getByRole("button", { name: button, exact: true });
  }

  async clickButton(button) {
    await this.buttonLocator(button).click();
  }

  async hoverOnButton(button) {
    await this.buttonLocator(button).hover();
  }

}