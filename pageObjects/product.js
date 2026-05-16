import { BasePage } from "./basePage";

const products = ["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"];


export class Product extends BasePage {
  constructor(page) {
    super(page);
    this.cartId = this.page.locator('[id="shopping_cart_container"]');
    this.addToCart = this.page.getByText("Add to cart");
  }

 
    getFirstSortedProduct() {
    return [...products].sort((a, b) => b.localeCompare(a))[0];;
  }

  firstItemFromList() {
    return this.page.getByText(this.getFirstSortedProduct());
  }

async  addToCartButtonFirstItem() {
    await this.firstItemFromList().click();
    await this.addToCart.click();
}

addToCartButton(itemName) {
    return this.page.locator(`[name="add-to-cart-${itemName}"]`);
}


async clickOnAddToCart(itemName) {
    await this.addToCartButton(itemName).click();
}

async clickOnCart() {
    await this.cartId.click();
     await this.page.waitForURL("**/cart.html");
}


}