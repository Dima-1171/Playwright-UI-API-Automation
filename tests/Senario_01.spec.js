// @ts-check
import { test, expect } from '@playwright/test';
import { Profile } from '../pageObjects/profile';

const password = "secret_sauce";
const Username = "locked_out_user";

test.describe("Login User", () => {
test.describe("Login with locked user tests", () => {
let profile;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });



  test("Validate login with locked user", async ({ page }) => {
   profile = new Profile(page);
    await profile.login(Username, password);
    await page.waitForLoadState("networkidle");
    await expect(profile.usernameErrorMessage).toBeVisible();
  });

});

})