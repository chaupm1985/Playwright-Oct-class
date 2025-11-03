import { expect } from '@playwright/test';
import { test } from '../common/BaseTest.ts';

test("Verify New User Can Register Successfully",async({page,homePage,myAccountPage}) =>{
        await homePage.navigate();
        await homePage.closeAllPopups();
        await homePage.loginButton.click();
        await myAccountPage.emailTextbox.fill("abc@test.net");
        await myAccountPage.registerButton.click();
        await expect(myAccountPage.welcomeLabel).toBeVisible();   
});