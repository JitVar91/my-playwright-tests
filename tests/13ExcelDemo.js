const exceljs = require('exceljs');


async function readExcelFile() {

    let rowValues = {row: -1, col:-1};

    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("../VS for Play/download.xlsx");

    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => {

     
        row.eachCell((cell, colNumber) => {

            if (cell.value === "Banana") {
               console.log(cell.value);
               console.log(cell.address);
              console.log(rowNumber);
               console.log(colNumber);
                rowValues.row = rowNumber;
                rowValues.col = colNumber;
                return rowValues;


            }

            else
                return;

                       
        });



    });

    const cellupdate = worksheet.getCell(rowValues.row, rowValues.col);
    console.log(cellupdate.value);


}


async function writeExcelFile() {

    const workbook = new exceljs.Workbook();

    await workbook.xlsx.readFile("../VS for Play/download.xlsx");


    const worksheet = workbook.getWorksheet('Sheet1');
    const celln = worksheet.getCell('B3');
    celln.value = "Jayson2";

    await workbook.xlsx.writeFile("../VS for Play/download.xlsx");


    console.log(worksheet.getCell('B3').value);

}

async function readAgain() {


    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("../VS for Play/download.xlsx");

    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => {

     
        row.eachCell((cell, colNumber) => {

               console.log(cell.value);
        
            });

      

                       
        });


}


async function readAgain2() {

 const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("../VS for Play/download.xlsx");

    const worksheet = workbook.getWorksheet('Sheet1');
    const cellnew = worksheet.getCell('B3');
    console.log(cellnew.value);

}





async function readWriteExcelFile() {

    let rowValues = {row: -1, col:-1};

    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("../VS for Play/download.xlsx");

    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => {

     
        row.eachCell((cell, colNumber) => {

            if (cell.value === "Banana") {
               console.log(cell.value);
               console.log(cell.address);
              console.log(rowNumber);
               console.log(colNumber);
                rowValues.row = rowNumber;
                rowValues.col = colNumber;
                return rowValues;


            }

            else
                return;

                       
        });



    });

    const cellupdate = worksheet.getCell(rowValues.row, rowValues.col);
    console.log("Old Value : " +cellupdate.value);
    cellupdate.value = "Banana2";
    await workbook.xlsx.writeFile("../VS for Play/download.xlsx");

    console.log("New Value : " +cellupdate.value);
}
//readExcelFile();
//writeExcelFile();
//readAgain();
//readAgain2();
readWriteExcelFile();