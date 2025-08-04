const { test, expect, request } = require('@playwright/test');

const {APIUTILS} = require('./UTILS/APIUTILS');

const loginPayLoad = { userEmail: "MickJ2@gmail.com", userPassword: "Test@1234" };

const orderPayLoad = {orders: [{country: "Cuba", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]};

let response;   

test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const aPIUTILS = new APIUTILS(apiContext,loginPayLoad);
    response = await aPIUTILS.createOrder(orderPayLoad);
/// Token utils
    
// Order
   
   


});



test('API Login', async ({ page }) => {


   page.addInitScript(arg => {


        window.localStorage.setItem('token', arg);

    }, response.token);


    await page.goto("https://rahulshettyacademy.com/client");


    //Verify Transaction Order


    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.waitForSelector("tr.ng-star-inserted");


    const orders = await page.locator("tr[class='ng-star-inserted']")

    const counto = await orders.count();

    console.log("Count of Prod: "+counto);


   for (let i = 0; i < counto; ++i) {
        if (await orders.nth(i).locator("th[scope='row']").textContent() === response.orderI) {
            await orders.nth(i).locator("button[class='btn btn-primary']").click();
            const valu1 = i;
            console.log("Index Value :"+valu1);
            break;
           
        }
    }


    console.log("Selected Order from View: " + await page.locator("[class='col-text -main']").textContent());


});