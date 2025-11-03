import {Locator,Page} from "@playwright/test";
export class MyAccountPage{
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly allDepartList: Locator;
    readonly electComItem: Locator;
    readonly emailTextbox: Locator;
    readonly registerButton: Locator;
    readonly welcomeLabel: Locator;

    constructor(private page:Page){
       this.username = page.getByRole('textbox', { name: 'Username or email address *' })
       this.password = page.getByRole('textbox', { name: 'Password *' })
       this.loginButton = page.getByRole('button', { name: 'Log in' })
       this.emailTextbox = page.getByRole('textbox', { name: 'Email address *', exact: true })
       this.welcomeLabel = page.getByText('Welcome to your account page')
       this.registerButton = page.getByRole('button', { name: 'Register' })
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
