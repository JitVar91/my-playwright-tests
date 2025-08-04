import { test, expect } from '@playwright/test';

test('Calender check', async ({ page }) =>  {

    const year = "2026";
    const date = "15";
    const monthn = 12;
    const month = "December";
    

 await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
 

 await page.waitForLoadState('networkidle');

 await page.locator("[class='react-date-picker__inputGroup']").click();



 await page.locator("[class='react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from']").click();


  await page.locator("[class='react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from']").click();

 

 await page.locator("[class='react-calendar__tile react-calendar__decade-view__years__year']").getByText(year).click();






 await page.locator("[class='react-calendar__tile react-calendar__year-view__months__month']").getByText(month).click();


 // await page.locator("[class='react-calendar__tile react-calendar__year-view__months__month']").nth(11).click();

  //await page.locator("[class='react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend']").getByText(date).click();

  await page.locator(".react-calendar__month-view__days__day").getByText(date).click();

   await page.pause();

 console.log(await page.locator(".react-date-picker__inputGroup input[name='date']").getAttribute("value"));
 const datev = await page.locator(".react-date-picker__inputGroup input[name='date']").getAttribute("value");

 const inputd = year + '-'+monthn+'-'+date;

 console.log(inputd);
expect(datev).toEqual(inputd);

});