# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Senario_03.spec.js >> Add To Cart First Item >> Sort Products and add to Cart First Item >> Validate Sort, Add To Cart First Item and Checkout
- Location: tests\Senario_03.spec.js:22:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '@playwright/test';
  3  | import { Profile } from '../pageObjects/profile';
  4  | import { Product } from '../pageObjects/product';
  5  | 
  6  | 
  7  | const Username = "performance_glitch_user";
  8  | const password = "secret_sauce";
  9  | const firstName = "Sazia";
  10 | const lastName = "Afrin";
  11 | const postalCode = "1234";
  12 | 
  13 | test.describe("Add To Cart First Item", () => {
  14 | test.describe("Sort Products and add to Cart First Item", () => {
  15 | let profile;
  16 | let product;
  17 | 
  18 |   test.beforeEach(async ({ page }) => {
  19 |     await page.goto("https://www.saucedemo.com/");
  20 |   });
  21 | 
  22 |   test("Validate Sort, Add To Cart First Item and Checkout", async ({ page }) => {
  23 |    profile = new Profile(page);
  24 |    product = new Product(page);
  25 |   
  26 |     await profile.login(Username, password);
  27 |     await page.waitForLoadState("networkidle");
  28 |     await page.waitForTimeout(2000);
  29 |     await expect(page).toHaveTitle("Swag Labs");
  30 |     await page.waitForTimeout(2000);
  31 |     await profile.ResetState();
  32 |     await product.addToCartButtonFirstItem();
  33 |     await product.clickOnCart();
  34 |     await page.waitForURL("**/cart.html");
  35 |     await product.clickButton("Checkout");
  36 |     await profile.CheckOut( firstName, lastName, postalCode);
  37 |     await profile.Logout();
> 38 |     await page.waitForTimeout(2000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  39 |   });
  40 | 
  41 | });
  42 | 
  43 | })
```