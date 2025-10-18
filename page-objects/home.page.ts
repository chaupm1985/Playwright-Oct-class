import {Locator,Page} from "@playwright/test";
import { time } from "console";
import { TIMEOUT } from "dns";
export class homePage{
    readonly loginButton: Locator;
    readonly closeSaleButton: Locator;
    readonly okcookieButton: Locator;
    readonly allDepartList: Locator;
    readonly electComItem: Locator;
    readonly telelabel: Locator;
    readonly addresslabel: Locator;
    readonly pintericon: Locator;
    readonly instaicon: Locator;
    readonly twisticon: Locator;
    readonly faceicon: Locator;
    readonly homelink: Locator;
    readonly aboutuslink:Locator;
    readonly shoplink: Locator;
    readonly offerlink: Locator;
    readonly bloglink: Locator;
    readonly contactlink: Locator;
    readonly searchbarText: Locator;
    readonly searchButton: Locator;
    readonly categoriesMenuButton: Locator;


    constructor(private page:Page){
       this.loginButton = page.getByRole('link', { name: 'Log in / Sign up' });
       this.closeSaleButton = page.getByRole('button', { name: 'Close' });
       this.allDepartList = page.getByText('All departments');
       this.electComItem = page.getByRole('link', { name: /Electronic Components/i });
       this.okcookieButton = page.getByRole('link', { name: 'Ok', exact: true });
       this.telelabel = page.locator('//div[contains(@class,"header-html_block2")]');
       this.addresslabel = page.locator('//div[contains(@class,"header-html_block1")]');
       this.pintericon = page.getByRole('link', { name: 'Pinterest' });
       this.instaicon = page.getByRole('link', { name: 'Instagram' });
       this.twisticon = page.getByRole('link', { name: 'Twitter' });
       this.faceicon = page.getByRole('link', { name: 'Facebook' });
       this.homelink = page.getByRole('link', { name: 'Home' });
       this.aboutuslink = page.locator('#menu-main-menu-1').getByRole('link', { name: 'About Us' });
       this.shoplink = page.locator('#menu-main-menu-1').getByRole('link', { name: 'Shop' });
       this.offerlink = page.getByRole('link', { name: /Offers?/i });
       this.bloglink = page.locator('#menu-main-menu-1').getByRole('link', { name: 'Blog' });
       this.contactlink = page.locator('#menu-main-menu-1').getByRole('link', { name: 'Contact Us' });
       this.searchbarText = page.getByRole('textbox', { name: 'Search input' })
       this.categoriesMenuButton = page.locator('//select[@name="product_cat"]');
       this.searchButton = page.getByRole('button', {name: 'submit'});
    }
    async navigate(){
        await this.page.goto("https://demo.testarchitect.com/")
    }

    async closeSaleIfexist(){
        await this.closeSaleButton.waitFor({ state: 'visible', timeout: 5000 });
        if (await this.closeSaleButton.isVisible()) {
            await this.closeSaleButton.click();
        }
    }

}