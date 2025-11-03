import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify Homepage element is visible",async({page,homePage}) =>{
    await homePage.navigate();
    await homePage.closeSaleIfexist();
    await homePage.okcookieButton.click();
    await expect(homePage.telelabel).toContainText("(+1800) 000 8808");
    await expect(homePage.addresslabel).toContainText("1730 S. Amphlett Blvd. Suite 200, San Mateo, CA");
    await expect(homePage.loginButton).toBeVisible();
    await homePage.contactlink.click();
    await expect(page).toHaveURL(/contact/);
    await homePage.bloglink.click();
    await expect(page).toHaveURL(/blog/);
    await homePage.offerlink.click();
    await expect(page).toHaveURL(/product-category/);
    await homePage.aboutuslink.click();
    await expect(page).toHaveURL(/about-us/);
    await homePage.shoplink.click();
    await expect(page).toHaveURL(/shop/);
})