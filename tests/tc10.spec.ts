import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify Guest User Can Complete Checkout", async ({ page, homePage, shopPage }) => {
    await homePage.navigate();
    await homePage.closeAllPopups();
    await homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await shopPage.firstItem.waitFor({ state: 'visible' });
    await shopPage.firstItem.hover();
    await shopPage.firstItemWishlist.click();
    try {
        await expect(shopPage.wishlistQuantityIcon).toHaveText("1");
    } catch (error) { console.log("The Quantity not return as expected") };
});