import {Locator,Page} from "@playwright/test";

export class checkoutPage{
    readonly firstnameTextbox:Locator;
    readonly lastnameTextbox:Locator;
    readonly countryselector:Locator;
    readonly addressTextbox:Locator;
    readonly cityTextbox:Locator;
    readonly emailtextbox:Locator;
    readonly phonetextbox:Locator;
    readonly placeorderbutton:Locator;
    readonly validationErrorMessages:Locator;
    readonly orderthankLabel:Locator;


    constructor(private page:Page){
       this.firstnameTextbox = page.getByRole('textbox', { name: 'First name *' });
       this.lastnameTextbox = page.getByRole('textbox', { name: 'Last name *' });
       this.countryselector = page.locator("//select[@id='billing_country']");
       this.addressTextbox = page.getByRole('textbox', { name: 'Street address *' });
       this.cityTextbox = page.getByRole('textbox', { name: 'Town / City *' });
       this.phonetextbox = page.getByRole('textbox', { name: 'Phone *' });
       this.emailtextbox = page.getByRole('textbox', { name: 'Email address *' });
       this.placeorderbutton = page.getByRole('button', { name: 'Place order' });
       this.validationErrorMessages = page.getByRole('alert');
       this.orderthankLabel = page.getByText('Thank you. Your order has');
}
}