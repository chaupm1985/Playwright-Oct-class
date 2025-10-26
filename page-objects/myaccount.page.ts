import {Locator,Page} from "@playwright/test";
export class myAccountPage{
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly allDepartList: Locator;
    readonly electComItem: Locator;

    constructor(private page:Page){
       this.username = page.getByRole('textbox', { name: 'Username or email address *' })
       this.password = page.getByRole('textbox', { name: 'Password *' })
       this.loginButton = page.getByRole('button', { name: 'Log in' })
       this.allDepartList = page.getByText('All departments')
       this.electComItem = page.getByRole('link', { name: ' Electronic Components &' })
    }

    async login(page:Page,username:string, password:string){
        await page.waitForURL(/my-account/);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}
