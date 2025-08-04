const {test} = require('@playwright/test');
const {expect} = require('@playwright/test')
 test.only('Browser context test', async ({browser})=>
{
      
      const context = await browser.newContext();
      const page = await context.newPage();
      
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      const userN = page.locator("[id='username']");
      const passW = page.locator("[name='password']");
      const signB = page.locator("[id='signInBtn']");
      await userN.fill("rahulshetty");
      await userN.fill("");
      await userN.fill("rahulshettyacademy");
      await passW.fill("passowrd");
      await signB.click();
      console.log(await page.locator("[style='display: block;']").textContent());
      await expect(page.locator("[style='display: block;']")).toContainText('Incorrect username/password.');
      await userN.fill("");
      await passW.fill("");
      await userN.fill("rahulshettyacademy");
      await passW.fill("learning");
      await signB.click();
      //console.log(await page.locator("[class='navbar-brand']").click());
      
      //console.log(await page.locator(".card-title a").nth(0).textContent());
console.log(await page.locator(".card-title a").allTextContents());

      //await page.locator("[class='nav-link']").click();

});



 test('Page test', async ({page})=>
{
      await page.goto("https://google.com");
      console.log(await page.title());
      await expect(page).toHaveTitle("Google")
     

});