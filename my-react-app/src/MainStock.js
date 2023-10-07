import React, { useState ,useEffect} from "react";
import TextField from '@mui/material/TextField'; 
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home'
// import XLSX from 'xlsx';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import IconButton from '@mui/material/IconButton';
import ExcelTable from './ExcelTable';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io';
import StatsCard from "./StatsCard";
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import { FaUsers, FaDollarSign, FaChartLine } from 'react-icons';
import "./Main_stock.css";
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom'; 
import './Preloader.css';

const MainStock = ({}) => {
  const [value, setValue] = React.useState(null);
  // const navigate = useNavigate();
 
  const [name, setName] = useState("");
  const [isNiftyWhite, setIsNiftyWhite] = useState(false);
  const [isFNOWhite, setIsFNOWhite] = useState(false);
  const[isStocksWhite,setIsStocksWhite] = useState(true);
  const [isAddStockWhite, setIsAddStockWhite] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockData , setstockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();
  const handleProfileClick = () => {
    // Add your logic for what should happen when the profile icon is clicked
    console.log('Profile icon clicked!');
  };
  const handleStockClick = () => {
    setIsNiftyWhite(false);
    setIsFNOWhite(false);
    setIsStocksWhite(true);
    setIsAddStockWhite(false);
  }
 const handleNiftyClick = () => {
    setIsNiftyWhite(true);
    setIsFNOWhite(false);
    setIsStocksWhite(false);
    setIsAddStockWhite(false);
  };

  const handleFNClick = () => {
    setIsFNOWhite(true);
    setIsNiftyWhite(false);
    setIsStocksWhite(false);
    setIsAddStockWhite(false);
  };
  const handleAddStockClick = () => {
    setIsAddStockWhite(true);
    setIsFNOWhite(true);
    setIsNiftyWhite(true);
    setIsStocksWhite(true);
    // navigate('/AddStock');
    // {<Navigate to="/AddStock" />}
    console.log("Add Stock button clicked");
  };
  const navigate = useNavigate();
   const handleStockInfoClick = (stockName) => {
    // Set the selectedStock state to the clicked stock name
    console.log(stockName);
    setSelectedStock(stockName);
    navigate('/StockDetailInfo/'+stockName);
  };

  useEffect(() => {
    // Make an Axios GET request to your Express.js API endpoint
    axios.get('http://127.0.0.1:5000/Stock_status_data') // Replace with your API endpoint
      .then((response) => {
        console.log("call");
        setstockData(response.data);
        // setSearchQuery(null);
        setIsLoading(false); 
        console.log(response.data);
        // setFilteredData(stockData);
        // filterData();
        // setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      
  }, []);

  const activeRows = stockData.filter(item => item.status === 'Active');
  return (
   <div className="home-page-nifty">
    {isLoading ? ( // Show loading spinner when isLoading is true
        // <Preloader/>
        <div className = "preloader">
        <div className="custom-loader"></div>
      </div>
      ) : (
        <div className="div">
          <div className="frame">
            
     <div className="desktop-vertical">
          <div className="logo-container">
            <div className="logo">
              {/* <img className="icon-container" alt="Icon container" src="icon-container.svg" /> */}
              <div className="text">
                <h1 className="webby-frames">Kaizen Universal</h1>
                <div className="for-figma" />
              </div>
            </div>
          </div>
          <div className="buttons-group" />
          <div className="menu">
          <div className="icons-container">
          <a href="#" onClick={handleProfileClick}>
          <Avatar className="icon-container">
          <PersonIcon />
          </Avatar>
          </a>
          <IconButton aria-label="Add" className="icon-container">
          <AddIcon />
          </IconButton>
         
          </div>

          
            <TextField className="Search-bar"
              value={name}
              label="Search for stock"
              onChange={(e) => {
                setName(e.target.value);
              }}

            /> 
            <div>
            <Button
        className={isStocksWhite ? 'Stock-button3 white' : 'Stock-button3'}
        variant="outlined"
        startIcon={<Home />}
        onClick={handleStockClick}
      >
        Stocks
      </Button>

              <Button
        className={isNiftyWhite ? 'Stock-button white' : 'Stock-button'}
        variant="outlined"
        startIcon={<Home />}
        onClick={handleNiftyClick}
      >
        Nifty
      </Button>
      <Button
        className={isFNOWhite ? 'Stock-button2 white' : 'Stock-button2'}
        variant="outlined"
        startIcon={<Home />}
        onClick={handleFNClick}
      >
        FNO
      </Button>
      <Button
              className={isAddStockWhite ? 'Stock-button4 white':'Stock-button4'} // Customize your CSS class as needed
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleAddStockClick}
            >
              Add Stock
      </Button>
        
      {isAddStockWhite && <Navigate to="/AddStock" />}
            </div>
          </div>
        </div>
        
 
  
</div>
<div className="allstocks">
            {activeRows.map((stock, index) => (
              <div className="stockinfo" key={index} onClick={() => handleStockInfoClick(stock.stock_name)}>
                <p className="in-boxinfo" >
                  {stock.stock_name}
                </p>
                <p className="rise1">15.5%</p>
              </div>
            ))}
      
            </div>
 
        <div className="rectangle">
          <div className="button-container">
            <button className="About_us">About us</button>
            <button className="Contact_us">Contact us</button>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default MainStock;