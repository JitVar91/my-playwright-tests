const {test} = require('@playwright/test');
const {expect} = require('@playwright/test')
 test.only('Browser context test', async ({browser})=>
{
      
      const context = await browser.newContext();
      const page = await context.newPage();
      
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      const userN = page.locator("[id='username']");
      const passW = page.locator("[name='password']");
      const Drop = page.locator("select[class='form-control']");
      
      const Rad = page.locator(".radiotextsty").last();
      const signB = page.locator("[id='signInBtn']");
      const ok = page.locator("[id='okayBtn']");
      
      await userN.fill("rahulshettyacademy");
      await passW.fill("learning");
      await Rad.click();
      await expect(Rad).toBeChecked();
      console.log(await Rad.isChecked());
      //await page.pause();
      await ok.click();
      await Drop.selectOption('Teacher');
      await page.pause();
      await page.locator("[id='terms']").click();
      //await page.pause();
      console.log(await page.locator("[id='terms']").isChecked());
      await page.locator("[id='terms']").uncheck();
      //await page.pause();
      expect( await page.locator("[id='terms']").isChecked()).toBeFalsy();

      await signB.click();

}
 )