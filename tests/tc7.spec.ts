import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify Users Can Clear the Shopping Cart",async({page,homePage,myAccountPage,shopPage,cartPage}) =>{
    await homePage.navigate();
    await homePage.closeAllPopups();
    await homePage.loginButton.click();
    await myAccountPage.login(page,"chau.phan@agest.vn","pmc123456");
    await homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await shopPage.firstItemName.waitFor({state:'visible'});
    const itemName = await shopPage.firstItemName.textContent();
    await shopPage.firstItemAddCart.click();
    await shopPage.cartLink.click();
    await page.waitForURL(/cart/);
    await page.reload();
    await expect(page.getByRole('link', { name: String(itemName) })).toBeVisible();
    await cartPage.clearCart.click();
    await expect(cartPage.cartemptyLabel).toBeVisible();
});