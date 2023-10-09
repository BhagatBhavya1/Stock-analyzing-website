import React, { useState ,useEffect} from "react";
import axios from 'axios';
import "./StockTable.css";
import { Chart } from "react-google-charts";
// import candel_Chart from "./Candel_chart";
const StockTable = (stock_name) => {
  const [stocktableData, setstocktableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Make an Axios GET request to your Express.js API endpoint
    axios.get('http://127.0.0.1:5000/get_data', {
      params: {
        stock_name: stock_name,
      },
    }) // Replace with your API endpoint
      .then((response) => {
        console.log("get_data called");
        console.log(response.data);
        setstocktableData(response.data)
        // setFilteredData(stockData);
        // filterData();
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      
  }, []);

  return (
    <div>
      {isLoading ? ( // Show loading spinner when isLoading is true
        // <Preloader/>
        <div className = "preloader">
        <div className="custom-loader"></div>
      </div>
      ) : (
        <div>
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
      </div>)}
    </div>
  );
};

export default StockTable;
