// @ts-check
import { test, expect } from '@playwright/test';
import { Profile } from '../pageObjects/profile';
import { Product } from '../pageObjects/product';


const Username = "performance_glitch_user";
const password = "secret_sauce";
const firstName = "Sazia";
const lastName = "Afrin";
const postalCode = "1234";

test.describe("Add To Cart First Item", () => {
test.describe("Sort Products and add to Cart First Item", () => {
let profile;
let product;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Validate Sort, Add To Cart First Item and Checkout", async ({ page }) => {
   profile = new Profile(page);
   product = new Product(page);
  
    await profile.login(Username, password);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle("Swag Labs");
    await page.waitForTimeout(2000);
    await profile.ResetState();
    await product.addToCartButtonFirstItem();
    await product.clickOnCart();
    await page.waitForURL("**/cart.html");
    await product.clickButton("Checkout");
    await profile.CheckOut( firstName, lastName, postalCode);
    await profile.Logout();
    await page.waitForTimeout(2000);
  });

});

})