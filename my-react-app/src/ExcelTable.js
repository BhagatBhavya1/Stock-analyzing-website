// ExcelTable.js
import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx'
import axios from 'axios';

const ExcelTable = () => {
  const [stocktableData, setstocktableData] = useState([]);
  useEffect(() => {
    // Make an Axios GET request to your Express.js API endpoint
    axios.get('http://127.0.0.1:5000/get_data') // Replace with your API endpoint
      .then((response) => {
        console.log("get_data called");
        console.log(response.data);
        setstocktableData(response.data)
        // setFilteredData(stockData);
        // filterData();
        // setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      
  }, []);
  return (
    <div>
      <input type="file"/>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Series</th>
            <th>High Price</th>
            <th>Total Traded Value</th>
            <th>52 Week High Price</th>
            <th>52 Week Low Price</th>
          </tr>
        </thead>
        <tbody>
          {stocktableData.map((item, index) => (
            <tr key={index}>
              <td>{item.Symbol}</td>
              <td>{item.Series}</td>
              <td>{item['High Price']}</td>
              <td>{item['Total Traded Value']}</td>
              <td>{item['52 Week High Price']}</td>
              <td>{item['52 Week Low Price']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default ExcelTable;
