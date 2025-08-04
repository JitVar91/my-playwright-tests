const exceljs = require('exceljs');


async function Edit(myvalue) {

    let rowValues = {row: -1, col:-1};

    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("../VS for Play/download.xlsx");

    const worksheet = workbook.getWorksheet('Sheet1');

    readmy(worksheet,rowValues,myvalue);   

    const cellupdate = worksheet.getCell(rowValues.row, rowValues.col);
    console.log("Old Value : " +cellupdate.value);
    cellupdate.value = "849";
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

Edit('Orange');
//justRead('Kivi2');