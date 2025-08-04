const { test, expect } = require('@playwright/test');

test('PracticeLog', async({browser})=>

    {
         const context = await  browser.newContext();
         const page = await context.newPage();
         await page.goto("https://rahulshettyacademy.com/client");
   
         const uemail = page.locator("[id='userEmail']");
         const upass = page.locator("[id='userPassword']");
         const ubutton = page.locator("[class='btn btn-block login-btn']"); 
         const pname = 'ZARA COAT 3';
         const products = await page.locator(".card-body");

         await uemail.fill("MickJ2@gmail.com");
         const emailf = await uemail.textContent();
         await upass.fill("Test@1234");
         await ubutton.click();

         await page.waitForLoadState('networkidle');
         await page.locator(".card-body b").first().waitFor();
         console.log(await page.locator("[class='card-body']").allTextContents());
         await page.waitForLoadState('networkidle');
         
            
         const countp = await products.count();
        
         console.log(countp);
         for (let i =0; i< countp; ++i)
         {
            if (await products.nth(i).locator("b").textContent() === pname)
            {
               await products.nth(i).locator("text= Add To Cart").click();
               break;
            }
         }
       
         
         
         await page.locator("[routerlink='/dashboard/cart']").click();
         await page.waitForLoadState('networkidle');
         await page.locator(".cart h3").first().waitFor();
         console.log(await page.locator(".cart h3").allTextContents());
        // console.log(await page.locator("h3:has-text('ZARA COAT 3')").isVisible());
         //await page.locator(".cart h3").first().waitFor();
         //expect(await page.locator("h3:has-text('ZARA COAT 3')").isVisible()).toBeTruthy();


         const bool = console.log(await page.locator("h3:has-text('ZARA COAT 3')").isVisible());
         
         console.log(bool);
         //expect(bool).toBe(true);

        await page.locator("text=Checkout").click()
         //await page.pause();

         await page.locator("[placeholder*='Country']").pressSequentially('ind');
        const dropd = await page.locator(".ta-results");
        await dropd.waitFor();
        const countlist=  await dropd.locator('button').count();
        
        for (let i=0; i< countlist; ++i)
        {
             const text = await dropd.locator("[type='button']").nth(i).textContent();
            if (text === ' India')
            {
              await dropd.locator("[type='button']").nth(i).click();
              break;
            }
        };
       
        
        
        //const emailc = page.locator("label[type='text']");
       //console.log(emailc.textContent());
        //await page.pause();
        
        console.log(await page.locator("label[type='text']").textContent());
        expect(page.locator("label[type='text']")).toHaveText("MickJ2@gmail.com");

        await page.locator("[value='4542 9931 9292 2293']").fill("4555 9999 9292 2221")

        await page.locator('select.input.ddl').nth(0).selectOption('07');
            
        await page.locator('select.input.ddl').nth(1).selectOption('17');

        await page.locator("[class='input txt']").nth(0).fill("156");

        await page.locator("[class='input txt']").nth(1).fill("Mick Wazaski");

        await page.locator("[class='btnn action__submit ng-star-inserted']").click();

        await page.locator("[class='btn btn-primary mt-3 mb-3']").waitFor();

        console.log(await page.locator("[class='hero-primary']").textContent());
        
       expect(await page.locator("[class='hero-primary']")).toHaveText(" Thankyou for the order. ");     

       console.log(await page.locator("label[class='ng-star-inserted']").textContent());


const rawText = await page.locator("label[class='ng-star-inserted']").textContent();
const justNumbers = rawText.replace(/\|/g, '').trim(); // \D matches non-digit characters
console.log(`Selected Order from Checkout: : ${justNumbers}`);

      await page.locator("label[routerlink='/dashboard/myorders']").click();
   // await page.locator("button[routerlink='/dashboard/myorders']").click();

await page.waitForSelector("tr.ng-star-inserted");


      const orders = await page.locator("tr[class='ng-star-inserted']")

      const counto = await orders.count();

      console.log(counto);
    

      const ids = justNumbers;
      console.log(ids);
      //console.log(await orders.nth(0).locator("th[scope='row']").textContent());
        
      for (let i =0; i< counto; ++i)
         {
            if (await orders.nth(i).locator("th[scope='row']").textContent() === ids)
            {
               await orders.nth(i).locator("button[class='btn btn-primary']").click();
               const valu1 = i;
               console.log(valu1);
               break;
               //console.log("Selected Order from View Button :" + await orders.nth(i).locator("button[class='btn btn-primary']").textContent());
            }
         }
       

       console.log("Selected Order from View: " + await page.locator("[class='col-text -main']").textContent());



        await page.pause();
    }
)