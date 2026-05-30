import { expect } from "@playwright/test";
import { BasePage} from "./basePage";

export class Profile extends BasePage {
  constructor(page) {
    super(page);
    this.UsernameInput = this.page.getByRole("textbox", { name: "Username" });
    this.passwordInput = this.page.getByRole("textbox", { name: "Password" });
    this.usernameErrorMessage = this.page.getByText("Epic sadface: Sorry, this user has been locked out.");
    this.successMsg = this.page.getByText("Thank you for your order!"); 
  
     this.firstInput = this.page.locator('[data-test="firstName"]')
     this.secondInput = this.page.locator('[data-test="lastName"]');
     this.postalInput = this.page.locator('[data-test="postalCode"]');


}


MenuLocator(){
       return this.page.getByRole('button', { name: 'Open Menu' });
}

 ResetAppLocator() {
    return this.page.getByText("Reset App State");
  }

 LogoutLocator() {
    return this.page.getByText("Logout");
  }  


CloseMenuLocator(){
       return this.page.getByRole('button', { name: 'Close Menu' });
}

hiddenMenuLocator(){
  return this.page.locator('[class="bm-menu-wrap"]');
}


continueLocator(){
     return this.page.locator('[id="continue"]');
}

  async enterUserName(Username) {
    await this.UsernameInput.fill(Username);
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


async Totalprice() {

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

  async login(Username, password) {
    await this.enterUserName(Username);
    await this.enterPassword(password);
    await this.clickButton("Login");
    await this.page.waitForTimeout(2000);
  }

 async CheckOut_validate_Name_TotalPrice( firstName, lastName, postalCode) {
    await this.enterFirstName(firstName);
    await this.enterSecondName(lastName);
    await this.enterPostalCode(postalCode);
    await this.continueLocator().click();
    await this.page.waitForURL("**/checkout-step-two.html");

    await expect(this.page.locator('[data-test="item-1-title-link"]')).toBeVisible();
    await expect(this.page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await expect(this.page.locator('[data-test="item-0-title-link"]')).toBeVisible();
    await this.Totalprice();
     await this.clickButton("Finish");
    await expect(this.successMsg).toBeVisible();
  }

   async CheckOut_validate_addFirstItem_Price( firstName, lastName, postalCode) {
    await this.enterFirstName(firstName);
    await this.enterSecondName(lastName);
    await this.enterPostalCode(postalCode);
    await this.continueLocator().click();
    await this.page.waitForURL("**/checkout-step-two.html");
    await expect(this.page.locator('[data-test="item-3-title-link"]')).toBeVisible();
    await this.Totalprice();
     await this.clickButton("Finish");
    await expect(this.successMsg).toBeVisible();
  }

async ResetState(){
  await this.MenuLocator().click();
  await this.ResetAppLocator().click();
  await this.page.waitForTimeout(2000);
  await this.CloseMenuLocator().click();
  await this.page.waitForTimeout(2000);
}  

async Logout(){
await this.page.waitForLoadState('networkidle'); 
await this.MenuLocator().click();
await expect(this.hiddenMenuLocator()).toBeVisible();
await this.ResetAppLocator().click();
await this.LogoutLocator().click();
await this.page.waitForURL("https://www.saucedemo.com/");
} 


}