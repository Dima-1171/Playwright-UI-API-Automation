import { expect } from "allure-playwright";
import { BasePage } from "./basePage";

const products = ["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"];


export class Product extends BasePage {
  constructor(page) {
    super(page);
    this.cartId = this.page.locator('[id="shopping_cart_container"]');
    this.addToCart = this.page.getByText("Add to cart");
    this.sortContainer = this.page.locator('[data-test="product-sort-container"]');
    // this.sortZtoA = this.page.locator('[data-test="active-option"]');
  }

  // sortContainer(){
  //   return this.page.locator(['data-test="product_sort_container"']);
  // }

  // sortZtoA(){
  //   return this.page.locator(['data-test="active-option"']);
  // }
 
    getFirstSortedProduct() {
    return [...products].sort((a, b) => b.localeCompare(a))[0];;
  }

  firstItemFromList() {
    return this.page.getByText(this.getFirstSortedProduct());
  }

  firstItemGet(){
    return this.page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  }
  

async  addToCartButtonFirstItem() {
    await this.firstItemGet().click();
    // await this.addToCart.click();
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

// async match_firstItem(){
// await expect(this.firstItemGet).toContainEqual.firstItemFromList();
// }


}