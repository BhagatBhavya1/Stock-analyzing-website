import React, { useState ,useEffect} from "react";
import axios from 'axios';
import "./StockTable.css";
import { Chart } from "react-google-charts";
// import candel_Chart from "./Candel_chart";
const StockTable = () => {
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

  const extractedData = stocktableData.map((item) => [
    // Format date to display only day and month (e.g., "23 Sept")
    `${new Date(item.Date).getDate()} ${new Date(item.Date).toLocaleString('default', { month: 'short' })}`,
    item['Low Price'],
    item['Open Price'],
    item['Close Price'],
    item['High Price']
  ]);

  const data = [['Date', 'Low', 'Open', 'Close', 'High']];
  const dataWithHeader = data.concat(extractedData);

  const options = {
    legend: "none",
    bar: { groupWidth: "100%" },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" },
      risingColor: { strokeWidth: 0, fill: "#0f9d58" },
    },
    hAxis: {
      // Format the x-axis labels
      textStyle: {
        fontSize: 12, // Adjust the font size as needed
      },
    },
  };
  return (
    <div>
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="90vh" // Set height to 90% of the viewport height
        data={dataWithHeader}
        options={options}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
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
              <td>{item.Date}</td>
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
};

export default StockTable;
