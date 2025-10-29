import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {myAccountPage} from "../page-objects/myaccount.page.ts";
import {shopPage} from "../page-objects/shop.page.ts";
import {cartPage} from "../page-objects/cart.page.ts";

test("Verify Users Can Clear the Shopping Cart",async({page}) =>{
    const test_homePage = new homePage(page);
    const test_myAccountPage = new myAccountPage(page);
    const test_shopPage = new shopPage(page);
    const test_cartPage = new cartPage(page);
    await test_homePage.navigate();
    await test_homePage.closeAllPopups();
    await test_homePage.loginButton.click();
    await test_myAccountPage.login(page,"chau.phan@agest.vn","pmc123456");
    await test_homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await test_shopPage.firstItemName.waitFor({state:'visible'});
    const itemName = await test_shopPage.firstItemName.textContent();
    await test_shopPage.firstItemAddCart.click();
    await test_shopPage.cartLink.click();
    await page.waitForURL(/cart/);
    await page.reload();
    await expect(page.getByRole('link', { name: String(itemName) })).toBeVisible();
    await test_cartPage.clearCart.click();
    await expect(test_cartPage.cartemptyLabel).toBeVisible();
});