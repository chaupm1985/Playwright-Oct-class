import { test } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {checkMenuLink} from "../verify/home.verify.ts";

test("Verify Main Menu Categories Navigate Correctly",async({page}) =>{
    const test_homePage = new homePage(page);
    await test_homePage.navigate();
    await test_homePage.closeAllPopups();
    await checkMenuLink(page,test_homePage.automobileandmototLink,"automobiles-motorcycles");
    await checkMenuLink(page,test_homePage.carElectLink,"car-electronics");
    await checkMenuLink(page,test_homePage.mobiAccLink,"mobile-phone-accessories");
    await checkMenuLink(page,test_homePage.comandoffLink,"computer-office");
    await checkMenuLink(page,test_homePage.tabletAccLink,"tablet-accessories");
    await checkMenuLink(page,test_homePage.consumElecLink,"consumer-electronics");
    await checkMenuLink(page,test_homePage.elecComSupLink,"electronic-components-supplies");
    await checkMenuLink(page,test_homePage.phoneTeleLink,"phones-telecommunications");
    await checkMenuLink(page,test_homePage.watchLink,"watches");
})