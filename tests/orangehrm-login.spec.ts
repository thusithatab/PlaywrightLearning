import {test, expect} from '@playwright/test'

test('has title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveTitle('OrangeHRM')
});

test('is logo visible', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    const logo = await page.getByAltText('company-branding')
    expect(logo).toBeVisible
});

test('login',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{name: 'Log in'}).click;
})