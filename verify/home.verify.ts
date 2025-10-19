import { Page, expect, Locator } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";

export async function checkMenuLink (page: Page,linkName:Locator, urlPart:string) {
    const f_homePage = new homePage(page);
    await f_homePage.allDepartList.click({delay:2000});
    await linkName.click();
    await expect(page).toHaveURL(RegExp(urlPart));

}