// StockTable.js
import React from "react";
import "./StockTable.css";
const StockTable = () => {
  // Define your table content here
  const tableData = [
    // Example data
    {
      column1: "Data 1",
      column2: "Data 2",
      column3: "Data 3",
      column4: "Data 4",
      column5: "Data 5",
      column6: "Data 6",
      column7: "Data 7",
    },
    // Add more rows as needed
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="header-column">Column 1</th>
          <th className="header-column">Column 2</th>
          <th className="header-column">Column 3</th>
          <th className="header-column">Column 4</th>
          <th className="header-column">Column 5</th>
          <th className="header-column">Column 6</th>
          <th className="header-column">Column 7</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
            <td>{row.column4}</td>
            <td>{row.column5}</td>
            <td>{row.column6}</td>
            <td>{row.column7}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
