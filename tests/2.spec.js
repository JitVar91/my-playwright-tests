const test = require('@playwright/test');
const expect = require('@playwright/test');

test('PracticeLog', async({browser})=>

    {
         const context = await  browser.newContext();
         const page = await context.newPage();
         await page.goto("https://rahulshettyacademy.com/client");
         const Reg1 = page.locator("[class='btn1']");
             const first = page.locator("[id='firstName']"); 
   const last = page.locator("[id='lastName']"); 
    const email = page.locator("[id='userEmail']");
   const mobile = page.locator("[id='userMobile']"); 
   const gender = page.locator("[value='Male']"); 
    const pass = page.locator("[id='userPassword']");
   const cpass = page.locator("[id='confirmPassword']"); 
   const requ = page.locator("[formcontrolname='required']"); 
   const button = page.locator("[class='btn btn-block login-btn']"); 
     const Lbutton = page.locator("[class='btn btn-primary']");      
      const uemail = page.locator("[id='userEmail']");

       const upass = page.locator("[id='userPassword']");
 const ubutton = page.locator("[class='btn btn-block login-btn']"); 
                                   


  // await Reg1.click();
   //await first.fill("Jasona");
   //await last.fill("Micka");
   // await email.fill("MickJ2@gmail.com");
   // await mobile.fill("9234567891");
  //  await gender.setChecked();
  //  await pass.fill("Test@1234");
  //  await cpass.fill("Test@1234");
  //  await requ.click();
  //  await button.click();
  //  await Lbutton.click();

    await uemail.fill("MickJ2@gmail.com");
    await upass.fill("Test@1234");

      await ubutton.click();

     // await page.waitForLoadState('networkidle')
// OR use wait
      await page.locator("[class='card-body']").first().waitFor();
//console.log(await page.locator("[class='card-body']").nth(0).textContent());
console.log(await page.locator("[class='card-body']").allTextContents());





    
    }
)