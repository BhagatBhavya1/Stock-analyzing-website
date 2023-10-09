import React, { useState ,useEffect} from "react";
import axios from 'axios';
import "./StockTable.css";
// import { Candlestick  } from "react-chartjs-2";
import { Chart } from "react-google-charts";
const Candel_Chart = (stock_name) => {
  const [stocktableData, setstocktableData] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to your Express.js API endpoint
    axios.get('http://127.0.0.1:5000/get_data', {
      params: {
        stock_symbol: stock_name,
      },
    }) // Replace with your API endpoint
      .then((response) => {
        console.log("candel");
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
  const extractedData = stocktableData.map((item) => 
  [`${new Date(item.Date).getDate()} ${new Date(item.Date).toLocaleString('default', { month: 'short' })}`, 
    item['Low Price'],item['Open Price'],item['Close Price'], item['High Price']]);
  console.log(extractedData);
  const data = [['Date', 'Low', 'Open', 'Close', 'High']];
  const dataWithHeader = data.concat(extractedData);
   const options = {
    legend: "none",
    bar: { groupWidth: "100%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
      risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
    },
    backgroundColor: 'transparent',
    vAxis: {
      textStyle: {
        color: 'white', // Set the font color for the vertical axis text to white
      },
    },
    hAxis: {
      textStyle: {
        color: 'white', // Set the font color for the horizontal axis text to white
      },
    },
  };
  return (
    <div>
       <Chart
      chartType="CandlestickChart"
      width="80%"
      height="400px"
      data={dataWithHeader}
      options={options}
    />
    </div>
  );
};

export default Candel_Chart;
