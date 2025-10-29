import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {myAccountPage} from "../page-objects/myaccount.page.ts";

test("Verify New User Can Register Successfully",async({page}) =>{
        const test_homePage = new homePage(page);
        const test_myAccountPage = new myAccountPage(page);
        await test_homePage.navigate();
        await test_homePage.closeAllPopups();
        await test_homePage.loginButton.click();
        await test_myAccountPage.emailTextbox.fill("abc@test.net");
        await test_myAccountPage.registerButton.click();
        await expect(test_myAccountPage.welcomeLabel).toBeVisible();   
});