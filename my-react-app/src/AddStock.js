import React, { useState } from "react";
import TextField from '@mui/material/TextField'; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home'
// import XLSX from 'xlsx';
import DataTable from "./DataTable";
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';

import PersonIcon from '@mui/icons-material/Person';
import Switch from '@mui/material/Switch';
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import { FaUsers, FaDollarSign, FaChartLine } from 'react-icons';
import MainStock from "./MainStock";

import ToggleButton from "./Toggle";
import "./AddStock.css";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AddStock = () => {
//   const [value, setValue] = React.useState(null);
//   const navigate = useNavigate();
 
  const [name, setName] = useState("");
  
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  // Update the search query based on user input
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };


   const data = [
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Value X" },
    { id: 2, col1: "Row 2", col2: "Data B", col3: "Value Y" },
    { id: 3, col1: "Row 3", col2: "Data C", col3: "Value Z" },
    // Add more data rows as needed
  ];
     

  // Set the desired number of rows to display
  const count = 5;

  const [isNiftyWhite, setIsNiftyWhite] = useState(false);
  
  const [isFNOWhite, setIsFNOWhite] = useState(false);
  const[isStocksWhite,setIsStocksWhite] = useState(false);
  const [isAddStockWhite, setIsAddStockWhite] = useState(true);
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
  return (
       <div className="home-page-nifty">
          <div className="div">
            <div className="frame">

            <div className="search-container">
                <div className="search-box">
                  <input
                    id="input-with-sx"
                    type="text"
                    placeholder="Search the stock you want to add"
                    value={searchQuery} // Bind the input value to the searchQuery state
                    onChange={handleSearchInputChange} // Handle input changes
                  />
                </div>
                <DataTable data={data} count={5} searchQuery={searchQuery} /> {/* Pass searchQuery as a prop */}
              </div>
              

        <div className="desktop-vertical">
              <div className="logo-container">
                <div className="logo">
                  {/* <img className="icon-container" alt="Icon container" src="icon-container.svg" /> */}
                  <div className="text">
                    <h1 className="webby-frames">Kizan Universal</h1>
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
          {isStocksWhite && <Navigate to="/Mainstock" />}
          {/* {isNiftyWhite && <Navigate to="/Mainstock" />} */}

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

export default AddStock;