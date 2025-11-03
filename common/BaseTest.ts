import { test as base } from '@playwright/test';
import {HomePage} from "../page-objects/home.page.ts";
import {MyAccountPage} from "../page-objects/myaccount.page.ts";
import {ShopPage} from "../page-objects/shop.page.ts";
import {CartPage} from "../page-objects/cart.page.ts";
import {CheckoutPage} from "../page-objects/checkout.page.ts";
import {ProductPage} from "../page-objects/product.page.ts";

type MyFixtures = {
    homePage: HomePage;
    myAccountPage:MyAccountPage;
    shopPage:ShopPage;
    cartPage:CartPage;
    checkoutPage:CheckoutPage;
    productPage:ProductPage;
};

export const test = base.extend<MyFixtures>({
     homePage: async ({ page }, use) => {
         const homePage = new HomePage(page);
         await use(homePage);
     },
     myAccountPage: async ({ page }, use) => {
         const myAccountPage = new MyAccountPage(page);
         await use(myAccountPage);
     },
    shopPage: async ({ page }, use) => {
         const shopPage = new ShopPage(page);
         await use(shopPage);
     },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
     },
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
     },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
     },
});
