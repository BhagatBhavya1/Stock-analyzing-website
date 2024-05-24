import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField'; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home'
// import XLSX from 'xlsx';
import IconButton from '@mui/material/IconButton';
import ExcelTable from './ExcelTable';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import "./style.css";
import "./Analysis.css";
import axios from "axios";
// import StockDetailInfo from "./StockDetailInfo"
import { BrowserRouter as Router,useParams, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom'; 


const Analysis = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isNiftyWhite, setIsNiftyWhite] = useState(true);
  const [isFNOWhite, setIsFNOWhite] = useState(false);
  const[isStocksWhite,setIsStocksWhite] = useState(false);
  const [isAddStockWhite, setIsAddStockWhite] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [analysis,setanalysis] = useState([]);
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
    setIsFNOWhite(false);
    setIsNiftyWhite(false);
    setIsStocksWhite(false);
  };

  
  const fetchData = (selectedItem) => {
    console.log(selectedItem);
    // Make an Axios GET request to your API endpoint
    axios
      .get("http://127.0.0.1:5000/get_analysis", {
        params: {
          stock_symbol:selectedItem,
        },
      })
      .then((response) => {
        // Handle the API response data
        setanalysis(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    // Fetch initial data when the component mounts (you can modify this based on your needs)
    fetchData(selectedItem);
    // console.log(selectedItem);
  }, [selectedItem]);

  const dropdownItems = [
    { id: 'RELIANCE.NS', name: 'RELIANCE' },
    { id: 'LICI.NS', name: 'LIC' },
    { id: 'HDFCBANK.NS', name: 'HDFC' },
  ];
  
  const handleItemClick = (itemKey) => {
    console.log(itemKey);
    setSelectedItem(itemKey);
  }
  const columns = ["Index", "above", "conf", "t1", "t2", "t3", "t4", "t5", "t6"];

  return (
   <div className="home-page-nifty">
        <div className="div">
        <div className="frame">
        <div className="stock">
      <select onChange={(e) => handleItemClick(e.target.value)}>
        <option value="">Select an item</option>
        {dropdownItems.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {selectedItem && <p>Selected Item: {selectedItem}</p>}
      
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(analysis).map((rowName) => (
            <tr key={rowName}>
              <td>{rowName}</td>
              {columns.slice(1).map((column) => (
                <td key={column}>{analysis[rowName][column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      

    </div>
       
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

            <div>
            <Button
        className={isStocksWhite ? 'Stock-button3 white' : 'Stock-button3'}
        variant="outlined"
        startIcon={<Home />}
        onClick={handleStockClick}
      >
        Stocks
      </Button>
      {isStocksWhite && <Navigate to="/Analysis" />}
              <Button
        className={isNiftyWhite ? 'Stock-button white' : 'Stock-button'}
        variant="outlined"
        startIcon={<Home />}
        onClick={handleNiftyClick}
      >
      ANALYSIS
      </Button>
      <Button
        className={isFNOWhite ? 'Stock-button2 white' : 'Stock-button2'}
        variant="outlined"
        startIcon={<Home />}
        onClick={handleFNClick}
      >
        FNO
      </Button>
      {isFNOWhite && <Navigate to="/F_O" />}
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
        
        <div className="rectangle">
          <div className="button-container">
            <button className="About_us">About us</button>
            <button className="Contact_us">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;