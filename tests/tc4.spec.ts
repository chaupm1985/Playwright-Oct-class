import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify Product Can Be Added to Shopping Cart",async({page,homePage,shopPage}) =>{
    await homePage.navigate();
    await homePage.closeAllPopups();
    await homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await shopPage.firstItemName.waitFor({state:'visible'});
    const itemName = await shopPage.firstItemName.textContent();
    const itemPrice = await shopPage.firstItemPrice.textContent();
    await shopPage.firstItemAddCart.click();
    await expect(shopPage.cartAddItemAlert).toBeVisible();
    await expect(shopPage.cartQuantityIcon).toHaveText("1");
    await expect(shopPage.cartItemNameDropdown).toHaveText(String(itemName).trim());
    await expect(shopPage.carttotalPriceDropdown).toHaveText(String(itemPrice).trim());
})