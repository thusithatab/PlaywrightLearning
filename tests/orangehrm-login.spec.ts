import {test, expect} from '@playwright/test'
import LoginPage from './support/pageobjectmodel/pages/login.page';
import DashboardPage from './support/pageobjectmodel/pages/dashboard.page';

test('Login to the system',async({page})=>{

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('Admin','admin123');
    await dashboardPage.assertDashboardPageLoaded();
})