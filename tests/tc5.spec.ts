import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify Product Quantity Can Be Updated in Cart",async({page,homePage,shopPage,cartPage}) =>{
    await homePage.navigate();
    await homePage.closeAllPopups();
    await homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await shopPage.firstItemName.waitFor({state:'visible'});
    await shopPage.firstItemAddCart.click();
    await shopPage.cartLink.click();
    await page.waitForURL(/cart/);
    await page.reload();
    await cartPage.quantityTextBox.fill("2");
    await cartPage.updateCartButton.click();
    await expect(cartPage.cartUpdateLabel).toBeVisible();
})