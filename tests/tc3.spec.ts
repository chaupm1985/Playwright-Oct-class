import { test } from '../common/BaseTest.ts';
import {checkMenuLink} from "../verify/home.verify.ts";

test("Verify Main Menu Categories Navigate Correctly",async({page,homePage}) =>{
    test.setTimeout(120_000);
    await homePage.navigate();
    await homePage.closeAllPopups();
    await checkMenuLink(page,homePage.automobileandmototLink,"automobiles-motorcycles");
    await checkMenuLink(page,homePage.carElectLink,"car-electronics");
    await checkMenuLink(page,homePage.mobiAccLink,"mobile-phone-accessories");
    await checkMenuLink(page,homePage.comandoffLink,"computer-office");
    await checkMenuLink(page,homePage.tabletAccLink,"tablet-accessories");
    await checkMenuLink(page,homePage.consumElecLink,"consumer-electronics");
    await checkMenuLink(page,homePage.elecComSupLink,"electronic-components-supplies");
    await checkMenuLink(page,homePage.phoneTeleLink,"phones-telecommunications");
    await checkMenuLink(page,homePage.watchLink,"watches");
})