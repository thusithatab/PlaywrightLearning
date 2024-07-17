import { expect,Page } from "@playwright/test";

export default class DashboardPage{
    page: Page;

    constructor(page:Page){
        this.page = page
    }

    // Locators
    DashboardText = () => this.page.getByRole('link', { name: 'Dashboard' })
    
    // Actions
    public async assertDashboardPageLoaded(){
        await expect(
            this.DashboardText()
        ).toBeVisible()
    }

}