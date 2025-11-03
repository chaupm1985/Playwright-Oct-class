import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify Guest User Can Complete Checkout",async({page,homePage,shopPage,cartPage,checkoutPage}) =>{
    await homePage.navigate();
    await homePage.closeAllPopups();
    await homePage.shoplink.click();
    await page.waitForURL(/shop/);
    await shopPage.firstItemName.waitFor({state:'visible'});
    await shopPage.firstItemAddCart.click();
    await shopPage.cartLink.click();
    await page.waitForURL(/cart/);
    await page.reload();
    await cartPage.proceedCheckOutButton.click();
    await page.waitForURL(/checkout/);
    await checkoutPage.countryselector.selectOption("Vietnam");
    await checkoutPage.firstnameTextbox.fill("Chau");
    await checkoutPage.lastnameTextbox.fill("Phan");
    await checkoutPage.addressTextbox.fill("123 ABC Street");
    await checkoutPage.cityTextbox.fill("HCM");
    await checkoutPage.phonetextbox.fill("0123456789");
    await checkoutPage.emailtextbox.fill("abc@vn.com");
    await checkoutPage.placeorderbutton.click();
    await expect(checkoutPage.orderthankLabel).toBeVisible();
});