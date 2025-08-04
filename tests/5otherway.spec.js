const { test, expect } = require('@playwright/test');
 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "MickJ2@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Test@1234");
   await page.getByRole("button", {name:'Login'}).click();
  
   await page.waitForLoadState('networkidle');
  console.log(await page.getByText('ZARA').textContent());

  
   //await page.waitForLoadState('networkidle');
   //await page.locator(".card-body b").first().waitFor();
   /*  const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 */

await page.locator(".card-body").filter({hasText:'ZARA COAT 3'}).getByRole("button",{name:'Add To Cart'}).click();
await page.waitForLoadState('networkidle');
await page.getByRole("listitem").getByText(" Cart").click();
//await page.getByRole("button", {name: ' Cart'}).click();





   /*
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
 &*/
console.log(await page.getByText("ZARA COAT 3").textContent());
await expect(page.getByText("ZARA COAT 3")).toBeVisible();


/*
   await page.locator("text=Checkout").click();
 &*/

await page.getByRole("button",{name:'Checkout'}).click();
await page.waitForLoadState('networkidle');

await page.getByPlaceholder("Select Country").pressSequentially("ind");
//await page.getByRole("button",{name:' India',}).click();
await page.getByText("India",{ exact: true }).click();
await page.locator(".actions").getByText("Place Order ").click();





/*

   await page.locator("[placeholder*='Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 

*/
console.log(await page.getByText("| ").textContent());
//await page.pause();


const rawText = await page.getByText("| ").textContent();
const justNumbers = rawText.replace(/\|/g, '').trim(); // \D matches non-digit characters
console.log(`Selected Order from Checkout: : ${justNumbers}`);

await page.getByText(" Orders History Page ").click();

//await page.getByText(justNumbers).getByRole("button",{name:'View'}).click();


await page.pause();
await page.waitForLoadState('networkidle');
console.log(await page.locator("tr").filter({hasText:justNumbers}).textContent());
await page.locator("tr").filter({hasText:justNumbers}).getByRole("button",{name:'View'}).click();

await page.waitForLoadState('networkidle');



const orderIdDetails =await page.locator(".col-text").textContent();


console.log(expect(justNumbers.includes(orderIdDetails)).toBeTruthy());

await page.pause();
/*
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 


*/

});
 