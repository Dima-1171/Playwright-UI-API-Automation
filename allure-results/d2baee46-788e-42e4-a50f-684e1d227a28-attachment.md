# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Senario_02.spec.js >> Add To Cart >> Login with standard_user tests >> Validate Add To Cart, Checkout, total price
- Location: tests\Senario_02.spec.js:23:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Sauce Labs Bolt T-Shirt')
Expected: visible
Error: strict mode violation: getByText('Sauce Labs Bolt T-Shirt') resolved to 2 elements:
    1) <div class="inventory_item_name" data-test="inventory-item-name">Sauce Labs Bolt T-Shirt</div> aka locator('[data-test="item-1-title-link"]')
    2) <div class="inventory_item_desc" data-test="inventory-item-desc">Get your testing superhero on with the Sauce Labs…</div> aka getByText('Get your testing superhero on')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Sauce Labs Bolt T-Shirt')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "3"
      - generic [ref=e16]: "Checkout: Overview"
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e26]: Sauce Labs Backpack
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e29]: $29.99
        - generic [ref=e30]:
          - generic [ref=e31]: "1"
          - generic [ref=e32]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e33] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e34]: Sauce Labs Bolt T-Shirt
            - generic [ref=e35]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e37]: $15.99
        - generic [ref=e38]:
          - generic [ref=e39]: "1"
          - generic [ref=e40]:
            - link "Sauce Labs Bike Light" [ref=e41] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e42]: Sauce Labs Bike Light
            - generic [ref=e43]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e45]: $9.99
      - generic [ref=e46]:
        - generic [ref=e47]: "Payment Information:"
        - generic [ref=e48]: "SauceCard #31337"
        - generic [ref=e49]: "Shipping Information:"
        - generic [ref=e50]: Free Pony Express Delivery!
        - generic [ref=e51]: Price Total
        - generic [ref=e52]: "Item total: $55.97"
        - generic [ref=e53]: "Tax: $4.48"
        - generic [ref=e54]: "Total: $60.45"
        - generic [ref=e55]:
          - button "Go back Cancel" [ref=e56] [cursor=pointer]:
            - img "Go back" [ref=e57]
            - text: Cancel
          - button "Finish" [ref=e58] [cursor=pointer]
  - contentinfo [ref=e59]:
    - list [ref=e60]:
      - listitem [ref=e61]:
        - link "Twitter" [ref=e62] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e63]:
        - link "Facebook" [ref=e64] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e65]:
        - link "LinkedIn" [ref=e66] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e67]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  8   |     this.passwordInput = this.page.getByRole("textbox", { name: "Password" });
  9   |     this.usernameErrorMessage = this.page.getByText("Epic sadface: Sorry, this user has been locked out.");
  10  |     this.successMsg = this.page.getByText("Thank you for your order!"); 
  11  |   
  12  |      this.firstInput = this.page.locator('[data-test="firstName"]')
  13  |      this.secondInput = this.page.locator('[data-test="lastName"]');
  14  |      this.postalInput = this.page.locator('[data-test="postalCode"]');
  15  | 
  16  | 
  17  | }
  18  | 
  19  | 
  20  | menuLocator(){
  21  |        return this.page.getByRole('button', { name: 'Open Menu' });
  22  | }
  23  | 
  24  |  resetAppLocator() {
  25  |     return this.page.getByText("Reset App State");
  26  |   }
  27  | 
  28  |  logoutLocator() {
  29  |     return this.page.getByText("Logout");
  30  |   }  
  31  | 
  32  | 
  33  | closeMenuLocator(){
  34  |        return this.page.getByRole('button', { name: 'Close Menu' });
  35  | }
  36  | 
  37  | hiddenMenuLocator(){
  38  |   return this.page.locator('[class="bm-menu-wrap"]');
  39  | }
  40  | 
  41  | 
  42  | continueLocator(){
  43  |      return this.page.locator('[id="continue"]');
  44  | }
  45  | 
  46  |   async enterUserName(Username) {
  47  |     await this.usernameInput.fill(Username);
  48  |   }
  49  | 
  50  |   async enterPassword(password) {
  51  |     await this.passwordInput.fill(password);
  52  |   }
  53  | 
  54  | 
  55  |   async enterFirstName(firstName) {
  56  |     await this.firstInput.fill(firstName);
  57  |   }
  58  | 
  59  |   
  60  |   async enterSecondName(lastName) {
  61  |     await this.secondInput.fill(lastName);
  62  |   }
  63  | 
  64  |     async enterPostalCode(postalCode) {
  65  |     await this.postalInput.fill(postalCode);
  66  |   }
  67  | 
  68  | 
  69  | async totalPrice() {
  70  | 
  71  | const itemTotalText = await this.page.locator('[data-test="subtotal-label"]').textContent();
  72  | 
  73  | const taxText = await this.page.locator('[data-test="tax-label"]').textContent();
  74  | 
  75  | const totalText = await this.page.locator('[data-test="total-label"]').textContent();
  76  | 
  77  | 
  78  | const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
  79  | const tax = parseFloat(taxText.replace('Tax: $', ''));
  80  | const total = parseFloat(totalText.replace('Total: $', ''));
  81  | 
  82  | const expectedTotal = itemTotal + tax;
  83  | 
  84  | // expect(total).toBeCloseTo(expectedTotal, 2);
  85  | expect(total).toStrictEqual(expectedTotal, 2);
  86  | 
  87  | }
  88  | 
  89  |   async loginUser(Username, password) {
  90  |     await this.enterUserName(Username);
  91  |     await this.enterPassword(password);
  92  |     await this.clickButton("Login");
  93  |     await this.page.waitForTimeout(2000);
  94  |   }
  95  | 
  96  |  async checkout_Validate_Name_And_TotalPrice( firstName, lastName, postalCode) {
  97  |     await this.enterFirstName(firstName);
  98  |     await this.enterSecondName(lastName);
  99  |     await this.enterPostalCode(postalCode);
  100 |     await this.continueLocator().click();
  101 |     await this.page.waitForURL("**/checkout-step-two.html");
  102 | 
  103 |     // await expect(this.page.locator('[data-test="item-1-title-link"]')).toBeVisible();
  104 |     // await expect(this.page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  105 |     // await expect(this.page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  106 | 
  107 |     await expect(this.page.getByText("Sauce Labs Backpack")).toBeVisible();
> 108 |     await expect(this.page.getByText("Sauce Labs Bolt T-Shirt")).toBeVisible();
      |                                                                  ^ Error: expect(locator).toBeVisible() failed
  109 |     await expect(this.page.getByText("Sauce Labs Bike Light")).toBeVisible();
  110 |     await this.totalPrice();
  111 |     await this.clickButton("Finish");
  112 |     await expect(this.successMsg).toBeVisible();
  113 |   }
  114 | 
  115 |    async checkout_Validate_AddToCart_FirstItem_And_TotalPrice( firstName, lastName, postalCode) {
  116 |     await this.enterFirstName(firstName);
  117 |     await this.enterSecondName(lastName);
  118 |     await this.enterPostalCode(postalCode);
  119 |     await this.continueLocator().click();
  120 |     await this.page.waitForURL("**/checkout-step-two.html");
  121 |     await expect(this.page.locator('[data-test="item-3-title-link"]')).toBeVisible();
  122 |     await this.totalPrice();
  123 |      await this.clickButton("Finish");
  124 |     await expect(this.successMsg).toBeVisible();
  125 |   }
  126 | 
  127 | async resetState(){
  128 |   await this.menuLocator().click();
  129 |   await this.resetAppLocator().click();
  130 |   await this.page.waitForTimeout(2000);
  131 |   await this.closeMenuLocator().click();
  132 |   await this.page.waitForTimeout(2000);
  133 | }  
  134 | 
  135 | async logoutUser(){
  136 | await this.page.waitForLoadState('networkidle'); 
  137 | await this.menuLocator().click();
  138 | await expect(this.hiddenMenuLocator()).toBeVisible();
  139 | await this.resetAppLocator().click();
  140 | await this.logoutLocator().click();
  141 | await this.page.waitForURL("https://www.saucedemo.com/");
  142 | } 
  143 | 
  144 | 
  145 | }
```