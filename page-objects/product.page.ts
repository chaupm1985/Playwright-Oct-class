import {Locator,Page} from "@playwright/test";
export class productPage{
    readonly cameracateLink: Locator;

    constructor(private page:Page){
       this.cameracateLink = page.getByRole('link', { name: 'Camera & Photo' });
    }
}