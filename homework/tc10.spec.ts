import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {shopPage} from "../page-objects/shop.page.ts";

test("Verify Guest User Can Complete Checkout",async({page}) =>{
    const test_homePage = new homePage(page);
    const test_shopPage = new shopPage(page);
    await test_homePage.navigate();
    await test_homePage.closeAllPopups();
    await test_homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await test_shopPage.firstItem.waitFor({state:'visible'});
    await test_shopPage.firstItem.hover();
    await test_shopPage.firstItemWishlist.click();
    await expect(test_shopPage.wishlistQuantityIcon).toHaveText("1");
});