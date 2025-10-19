import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {shopPage} from "../page-objects/shop.page.ts";

test("Verify Product Can Be Added to Shopping Cart",async({page}) =>{
    const test_homePage = new homePage(page);
    const test_shopPage = new shopPage(page);
    await test_homePage.navigate();
    await test_homePage.closeAllPopups();
    await test_homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await test_shopPage.firstItemName.waitFor({state:'visible'});
    const itemName = await test_shopPage.firstItemName.textContent();
    const itemPrice = await test_shopPage.firstItemPrice.textContent();
    await test_shopPage.firstItemAddCart.click();
    await expect(test_shopPage.cartAddItemAlert).toBeVisible();
    await expect(test_shopPage.cartQuantityIcon).toHaveText("1");
    await expect(test_shopPage.cartItemNameDropdown).toHaveText(String(itemName).trim());
    await expect(test_shopPage.carttotalPriceDropdown).toHaveText(String(itemPrice).trim());
})