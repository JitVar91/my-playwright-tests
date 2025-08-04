const exceljs = require('exceljs');
const {test, expect} = require('@playwright/test');


async function Edit(myvalue) {

    let rowValues = {row: -1, col:-1};

    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("../VS for Play/download.xlsx");

    const worksheet = workbook.getWorksheet('Sheet1');

    readmy(worksheet,rowValues,myvalue);   

    const cellupdate = worksheet.getCell(rowValues.row, rowValues.col);
    console.log("Old Value : " +cellupdate.value);
    cellupdate.value = "800";
    await workbook.xlsx.writeFile("../VS for Play/download.xlsx");

    console.log("New Value : " +cellupdate.value);
}


async function readmy(worksheet,rowValues,myvalue) {

     worksheet.eachRow((row, rowNumber) => {

     
        row.eachCell((cell, colNumber) => {

            if (cell.value === myvalue) {
               console.log(cell.value);
               console.log(cell.address);
              console.log(rowNumber);
               console.log(colNumber);
                rowValues.row = rowNumber;
                rowValues.col = colNumber+2;
                console.log(rowValues.row );
               console.log(rowValues.col);
                return rowValues;


            }

            else
                return;

                       
        });



    });

}


async function justRead(myvalue) {
    let rowValues = {row: -1, col:-1};

    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("../VS for Play/download.xlsx");

    const worksheet = workbook.getWorksheet('Sheet1');

    readmy(worksheet,rowValues,myvalue);   
}

//Edit('Papaya');




test ('UploadEditExcel', async({page})=>{

 await page.goto("https://rahulshettyacademy.com/upload-download-test/");





const filePath = "C:/Users/jitin/Documents/TOOLS AND SOFTWARE LEARN/Software/VS for Play/download.xlsx";



const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.getByRole('button', { name: 'Download' }).click()
]);

await download.saveAs(filePath);

 

 console.log(await page.locator("div[id='row-5'] div[id='cell-4-undefined']").textContent());

  await page.pause();

 await Edit('Papaya')



  await page.pause();

  await page.waitForLoadState('networkidle');


//const filePath2 = 'C:/Users/jitin/Documents/TOOLS AND SOFTWARE LEARN/Software/VS for Play/download.xlsx';



await page.locator("[class='upload']").setInputFiles(filePath);





 console.log("After Upload : " + await page.locator("div[id='row-2'] div[id='cell-4-undefined']").textContent());

expect(await page.locator("div[id='row-2'] div[id='cell-4-undefined']").textContent()).toBe('800');
  await page.pause();
});


