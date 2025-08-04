const {test,expect} = require('@playwright/test');

test('Transfer Funds', async ({page}) => {

      await page.goto("https://parabank.parasoft.com/parabank/index.html");
    
        await page.locator('input[name="username"]').fill('Jason1');
        await page.locator('input[name="password"]').fill('password123');
        await page.getByRole('button', { name: 'Log In' }).click();
        await page.waitForLoadState('networkidle');
    
    
        console.log(await page.getByRole('heading', { level: 1, name: 'Accounts Overview' }).textContent());
        // Check for the specific "Accounts Overview" heading to avoid strict mode violation
        await expect(page.getByRole('heading', { level: 1, name: 'Accounts Overview' })).toBeVisible();
    
        await page.pause();
        await page.screenshot({ path: "Login.png" });
    
    
        await page.getByRole('link', { name: '18672' }).click();
    
        await page.screenshot({ path: "AccountDetails.png" });
        console.log("Account Type : " + await page.locator("[id='accountType']").textContent());
    
        expect(await page.locator("[id='accountType']").textContent()).toEqual('CHECKING');
        console.log("Account id : " + await page.locator("[id='accountId']").textContent());
        console.log("Balance Amt : " + await page.locator("[id='balance']").textContent());
    
        const textamount1 = await page.locator("[id='balance']").textContent()
    
        const amount1 = parseFloat(textamount1.replace(/[$ ]/g, ''));
        console.log("Amount value : " + amount1);
        console.log("Available Balance Amt : " + await page.locator("[id='availableBalance']").textContent());
    
        // Additional actions can be added here if needed
    
    
        /// TRansfer Funds
    
        await page.locator("ul li a[href$='transfer.htm']").click();
        await page.locator("[id='amount']").fill('100');
        await page.locator("[id='toAccountId']").selectOption('22446');
        await page.getByRole("button", { name: 'Transfer' }).click();
    
        await page.waitForLoadState('networkidle');

        expect(await page.locator("div[id='showResult'] h1[class='title']").textContent()).toContain('Transfer Complete');

        console.log(await page.locator("div[id='showResult'] h1[class='title']").textContent());
        await page.locator("[href='overview.htm']").click();
    
        await page.waitForLoadState('networkidle');
    
        await page.locator("[href='activity.htm?id=18672']").click();
        await page.waitForLoadState('networkidle');
        console.log("Balance Amt : " + await page.locator("[id='balance']").textContent());
        console.log("Available Balance Amt : " + await page.locator("[id='availableBalance']").textContent());
    
        const textamount2 = await page.locator("[id='availableBalance']").textContent()
    
        const amount2 = parseFloat(textamount2.replace(/[$ ]/g, ''));
    
        console.log("Available Balance Amt after transfer : " + amount2);
    
        expect(amount2).toEqual(amount1 - 100);

         await page.locator("[href='overview.htm']").click();
    
        await page.waitForLoadState('networkidle');
    
        await page.locator("[href='activity.htm?id=22446']").click();
        await page.waitForLoadState('networkidle');
         console.log("Account id : " + await page.locator("[id='accountId']").textContent());
        console.log("Balance Amt : " + await page.locator("[id='balance']").textContent());
        console.log("Available Balance Amt : " + await page.locator("[id='availableBalance']").textContent());
    
        await page.locator("[id='balance']").screenshot({ path: "TransferFunds.png" });
    
});