const { test, expect } = require('@playwright/test');

 test('GetBy Lable command', async({page}) =>
{
// GETBYLABEL
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");
// GETBYPLACEHOLDER
  await page.getByPlaceholder("Password").fill("Jesus1@christ");
  await page.getByRole("button", {name: 'Submit'}).click();
  console.log(await page.getByText("Success").isVisible());
  console.log(await page.getByText("Success").textContent());
  
  await page.getByRole("link",{name: 'Shop'}).click();

  await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
  
  await page.getByText("Checkout").click();
  await page.pause();


})