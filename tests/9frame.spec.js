const {test, expect} = require('@playwright/test');

test('HideSeek', async({page})=>
{
  
  
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/#/");

   

    
    const frame1 = page.frameLocator('#courses-iframe');
   await frame1.locator("a[href='learning-path']:visible").click();

//await frame1.locator("li a[href='lifetime-access']:visible").click();
   
    //await frame1.getByRole('link',{name:'Learning paths'}).click();
    await page.waitForLoadState('networkidle');

      //console.log(await frame1.locator(".text h2").textContent());


      console.log(await frame1.locator(".text").nth(0).textContent());
});