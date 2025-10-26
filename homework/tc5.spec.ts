import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {shopPage} from "../page-objects/shop.page.ts";
import {cartPage} from "../page-objects/cart.page.ts";

test("Verify Product Quantity Can Be Updated in Cart",async({page}) =>{
    const test_homePage = new homePage(page);
    const test_shopPage = new shopPage(page);
    const test_cartPage = new cartPage(page);
    await test_homePage.navigate();
    await test_homePage.closeAllPopups();
    await test_homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await test_shopPage.firstItemName.waitFor({state:'visible'});
    await test_shopPage.firstItemAddCart.click();
    await test_shopPage.cartLink.click();
    await page.waitForURL(/cart/);
    await page.reload();
    await test_cartPage.quantityTextBox.fill("2");
    await test_cartPage.updateCartButton.click();
    await expect(test_cartPage.cartUpdateLabel).toBeVisible();
})