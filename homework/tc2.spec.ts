import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify Product Search Functionality Works",async({page,test_homePage,test_productPage}) =>{
    await test_homePage.navigate();
    await test_homePage.closeSaleIfexist();
    await test_homePage.okcookieButton.click();
    await test_homePage.categoriesMenuButton.selectOption("All categories");
    await test_homePage.searchbarText.fill("Camera");
    await test_homePage.searchbarText.press('Enter');
    await expect(page).toHaveURL(/s=Camera/);
    await expect(test_productPage.cameracateLink).toBeVisible();
    })