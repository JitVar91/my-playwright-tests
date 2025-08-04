const {test, expect} = require('@playwright/test');

test('HideSeek', async({page})=>
{
  
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/#/");

    await page.waitForLoadState('networkidle');

   expect(page.locator(".displayed-class")).toBeVisible()
   await page.screenshot({path : "Hide2.png"});
 
   //console.log(expect(page.locator(".displayed-class")).toBeVisible());

   await page.locator("input[value='Hide']").click();
   await page.screenshot({path : "Hide1.png"});

   expect(page.locator(".displayed-class")).toBeHidden()

   


    await page.locator("input[value='Alert']").click();

 

    page.on('dialog',dialog=> dialog.accept());


    await page.locator("input[value='Confirm']").click();



    page.on('dialog2',dialog=> dialog.accept());


        await page.locator("input[value='Confirm']").click();



    page.on('dialog3',dialog=> dialog.dismiss());

    await page.getByRole('button', {name:'Mouse Hover'}).hover();

      


    await page.getByText('Reload').click();


await page.waitForLoadState('networkidle');


const f = page.frameLocator('#courses-iframe');

//await f.waitForLoadState('networkidle');
    
await f.getByText('Learning Paths').nth(0).click();

await page.waitForLoadState('networkidle');

console.log(await f.getByText('Learning Path is a ', { exact: false }).textContent());


//page.frameLocator('#courses-iframe').locator("div[class='inner-box'] h1").toBeVisible();
});