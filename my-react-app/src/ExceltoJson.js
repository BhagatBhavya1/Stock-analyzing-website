// convertExcelToJson.js
const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('./trial.xlsx');
const firstSheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[firstSheetName];
const dataFromSheet = XLSX.utils.sheet_to_json(worksheet);

const jsonData = JSON.stringify(dataFromSheet, null, 2);
fs.writeFileSync('./trial.xlsx', jsonData, 'utf8');

console.log('Excel data converted to JSON successfully.');
