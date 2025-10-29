import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';
import {homePage} from "../page-objects/home.page.ts";

test("Verify Homepage element is visible",async({page}) =>{
    const test_homePage = new homePage(page);
    await test_homePage.navigate();
    await test_homePage.closeSaleIfexist();
    await test_homePage.okcookieButton.click();
    await expect(test_homePage.telelabel).toContainText("(+1800) 000 8808");
    await expect(test_homePage.addresslabel).toContainText("1730 S. Amphlett Blvd. Suite 200, San Mateo, CA");
    await expect(test_homePage.loginButton).toBeVisible();
    await test_homePage.contactlink.click();
    await expect(page).toHaveURL(/contact/);
    await test_homePage.bloglink.click();
    await expect(page).toHaveURL(/blog/);
    await test_homePage.offerlink.click();
    await expect(page).toHaveURL(/product-category/);
    await test_homePage.aboutuslink.click();
    await expect(page).toHaveURL(/about-us/);
    await test_homePage.shoplink.click();
    await expect(page).toHaveURL(/shop/);
})