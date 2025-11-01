import { test as base } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {myAccountPage} from "../page-objects/myaccount.page.ts";
import {shopPage} from "../page-objects/shop.page.ts";
import {cartPage} from "../page-objects/cart.page.ts";
import {checkoutPage} from "../page-objects/checkout.page.ts";
import {productPage} from "../page-objects/product.page.ts";

type MyFixtures = {
    test_homePage: homePage;
    test_myAccountPage:myAccountPage;
    test_shopPage:shopPage;
    test_cartPage:cartPage;
    test_checkoutPage:checkoutPage;
    test_productPage:productPage;
};

export const test = base.extend<MyFixtures>({
     test_homePage: async ({ page }, use) => {
         const test_homePage = new homePage(page);
         await use(test_homePage);
     },
     test_myAccountPage: async ({ page }, use) => {
         const test_myAccountPage = new myAccountPage(page);
         await use(test_myAccountPage);
     },
    test_shopPage: async ({ page }, use) => {
         const test_shopPage = new shopPage(page);
         await use(test_shopPage);
     },
    test_cartPage: async ({ page }, use) => {
        const test_cartPage = new cartPage(page);
        await use(test_cartPage);
     },
    test_checkoutPage: async ({ page }, use) => {
        const test_checkoutPage = new checkoutPage(page);
        await use(test_checkoutPage);
     },
    test_productPage: async ({ page }, use) => {
        const test_productPage = new productPage(page);
        await use(test_productPage);
     },
});
