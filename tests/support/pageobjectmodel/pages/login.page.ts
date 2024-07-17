import {expect,Page} from "@playwright/test"

export default class LoginPage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public async goto(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/")
    }
    
    // Locators
    logo = () => this.page.getByAltText('company-branding')
    userName = () => this.page.getByPlaceholder('Username')
    password = () => this.page.getByPlaceholder('Password')
    loginButton = () => this.page.getByRole('button',{name: 'Login'})

    // Actions
    public async login(userName,password) {
        this.assertLoginPageLoaded
        await this.userName().fill(userName)
        await this.password().fill(password)
        await this.loginButton().click()
    }

    public async assertLoginPageLoaded(){
        await expect(
            this.logo()
        ).toBeVisible()
    }

}