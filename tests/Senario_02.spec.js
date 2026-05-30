// @ts-check
import { test, expect } from '@playwright/test';
import { Profile } from '../pageObjects/profile';
import { Product } from '../pageObjects/product';

test.setTimeout(60000);

const Username = "standard_user";
const password = "secret_sauce";
const firstName = "Sazia";
const lastName = "Afrin";
const postalCode = "1234";

test.describe("Add To Cart", () => {
test.describe("Login with locked user tests", () => {
let profile;
let product;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Validate Add To Cart and Checkout", async ({ page }) => {
   profile = new Profile(page);
   product = new Product(page);
  
    await profile.login(Username, password);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle("Swag Labs");
    await page.waitForTimeout(2000);
    await profile.ResetState();
    await page.waitForTimeout(2000);
    await product.clickOnAddToCart("sauce-labs-backpack");
    await product.clickOnAddToCart("sauce-labs-bolt-t-shirt");
    await product.clickOnAddToCart("sauce-labs-bike-light");
    await product.clickOnCart();
    await page.waitForURL("**/cart.html");
    await product.clickButton("Checkout");
    await page.waitForTimeout(2000);
    await profile.CheckOut_validate_Name_TotalPrice( firstName, lastName, postalCode);
    await profile.Logout();
  });

});

})