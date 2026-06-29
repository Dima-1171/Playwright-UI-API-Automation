import { expect } from "@playwright/test";
import { BasePage} from "./basePage";

export class Profile extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = this.page.getByRole("textbox", { name: "Username" });
    this.passwordInput = this.page.getByRole("textbox", { name: "Password" });
    this.usernameErrorMessage = this.page.getByText("Epic sadface: Sorry, this user has been locked out.");
    this.successMsg = this.page.getByText("Thank you for your order!"); 
  
     this.firstInput = this.page.locator('[data-test="firstName"]')
     this.secondInput = this.page.locator('[data-test="lastName"]');
     this.postalInput = this.page.locator('[data-test="postalCode"]');


}


menuLocator(){
       return this.page.getByRole('button', { name: 'Open Menu' });
}

 resetAppLocator() {
    return this.page.getByText("Reset App State");
  }

 logoutLocator() {
    return this.page.getByText("Logout");
  }  


closeMenuLocator(){
       return this.page.getByRole('button', { name: 'Close Menu' });
}

hiddenMenuLocator(){
  return this.page.locator('[class="bm-menu-wrap"]');
}


continueLocator(){
     return this.page.locator('[id="continue"]');
}

  async enterUserName(Username) {
    await this.usernameInput.fill(Username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }


  async enterFirstName(firstName) {
    await this.firstInput.fill(firstName);
  }

  
  async enterSecondName(lastName) {
    await this.secondInput.fill(lastName);
  }

    async enterPostalCode(postalCode) {
    await this.postalInput.fill(postalCode);
  }


async totalPrice() {

const itemTotalText = await this.page.locator('[data-test="subtotal-label"]').textContent();

const taxText = await this.page.locator('[data-test="tax-label"]').textContent();

const totalText = await this.page.locator('[data-test="total-label"]').textContent();


const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
const tax = parseFloat(taxText.replace('Tax: $', ''));
const total = parseFloat(totalText.replace('Total: $', ''));

const expectedTotal = itemTotal + tax;

// expect(total).toBeCloseTo(expectedTotal, 2);
expect(total).toStrictEqual(expectedTotal, 2);

}

  async loginUser(Username, password) {
    await this.enterUserName(Username);
    await this.enterPassword(password);
    await this.clickButton("Login");
    await this.page.waitForTimeout(2000);
  }

 async checkout_Validate_Name_And_TotalPrice( firstName, lastName, postalCode) {
    await this.enterFirstName(firstName);
    await this.enterSecondName(lastName);
    await this.enterPostalCode(postalCode);
    await this.continueLocator().click();
    await this.page.waitForURL("**/checkout-step-two.html");

    await expect(this.page.locator('[data-test="item-1-title-link"]')).toBeVisible();
    await expect(this.page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await expect(this.page.locator('[data-test="item-0-title-link"]')).toBeVisible();
    await this.totalPrice();
    await this.clickButton("Finish");
    await expect(this.successMsg).toBeVisible();
  }

   async checkout_Validate_AddToCart_FirstItem_And_TotalPrice( firstName, lastName, postalCode) {
    await this.enterFirstName(firstName);
    await this.enterSecondName(lastName);
    await this.enterPostalCode(postalCode);
    await this.continueLocator().click();
    await this.page.waitForURL("**/checkout-step-two.html");
    await expect(this.page.locator('[data-test="item-3-title-link"]')).toBeVisible();
    await this.totalPrice();
     await this.clickButton("Finish");
    await expect(this.successMsg).toBeVisible();
  }

async resetState(){
  await this.menuLocator().click();
  await this.resetAppLocator().click();
  await this.page.waitForTimeout(2000);
  await this.closeMenuLocator().click();
  await this.page.waitForTimeout(2000);
}  

async logoutUser(){
await this.page.waitForLoadState('networkidle'); 
await this.menuLocator().click();
await expect(this.hiddenMenuLocator()).toBeVisible();
await this.resetAppLocator().click();
await this.logoutLocator().click();
await this.page.waitForURL("https://www.saucedemo.com/");
} 


}