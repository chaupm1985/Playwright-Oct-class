import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify Product Search Functionality Works",async({page,homePage,productPage}) =>{
    await homePage.navigate();
    await homePage.closeSaleIfexist();
    await homePage.okcookieButton.click();
    await homePage.categoriesMenuButton.selectOption("All categories");
    await homePage.searchbarText.fill("Camera");
    await homePage.searchbarText.press('Enter');
    await expect(page).toHaveURL(/s=Camera/);
    await expect(productPage.cameracateLink).toBeVisible();
    })