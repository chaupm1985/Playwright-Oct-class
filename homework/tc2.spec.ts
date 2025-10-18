import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {productPage} from "../page-objects/product.page.ts";

test("Verify Product Search Functionality Works",async({page}) =>{
    const test_homePage = new homePage(page);
    const test_productPage = new productPage(page);
    await test_homePage.navigate();
    await test_homePage.closeSaleIfexist();
    await test_homePage.okcookieButton.click();
    await test_homePage.categoriesMenuButton.selectOption("All categories");
    await test_homePage.searchbarText.fill("Camera");
    await test_homePage.searchbarText.press('Enter');
    await expect(page).toHaveURL(/s=Camera/);
    await expect(test_productPage.cameracateLink).toBeVisible();
    })