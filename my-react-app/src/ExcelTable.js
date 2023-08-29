// ExcelTable.js
import React, { useState } from 'react';
import * as XLSX from 'xlsx'

const ExcelTable = () => {
  const [tableData, setTableData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const dataFromSheet = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setTableData(dataFromSheet);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellData, columnIndex) => (
                <td key={columnIndex}>{cellData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelTable;
