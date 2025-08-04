const { test, expect } = require('@playwright/test');

test('Screen Validation1', async ({page}) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.html");

    await page.locator('input[name="username"]').fill('Jason1');
    await page.locator('input[name="password"]').fill('password123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForLoadState('networkidle');

    console.log(await page.getByRole('heading', { level: 1, name: 'Accounts Overview' }).textContent());

    await page.screenshot({ path: "Login1.png" });


    await page.getByRole('link', { name: '18672' }).click();

    await page.screenshot({ path: "AccountDetails1.png" });



});



test('Screen Validation2', async ({page}) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.html");

    await page.locator('input[name="username"]').fill('Jason1');
    await page.locator('input[name="password"]').fill('password123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForLoadState('networkidle');

    console.log(await page.getByRole('heading', { level: 1, name: 'Accounts Overview' }).textContent());

    expect(await page.screenshot({ path: "Login2.png" })).toMatchSnapshot('Login1.png');


    await page.getByRole('link', { name: '18672' }).click();

    expect(await page.screenshot({ path: "AccountDetails2.png" })).toMatchSnapshot('AccountDetails1.png');
    
});