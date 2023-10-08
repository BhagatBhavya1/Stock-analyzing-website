import React, { useState } from "react";
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
import "./F&O.css";
// import StockDetailInfo from "./StockDetailInfo"
import { BrowserRouter as Router,useParams, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom'; 


const F_O = () => {
  // const navigate = useNavigate();
  const { stock_name } = useParams();
  const [name, setName] = useState("");
  const [isNiftyWhite, setIsNiftyWhite] = useState(false);
  const [isFNOWhite, setIsFNOWhite] = useState(false);
  const[isStocksWhite,setIsStocksWhite] = useState(true);
  const [isAddStockWhite, setIsAddStockWhite] = useState(false);
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
    // navigate('/AddStock');

  };
   
  return (
   <div className="home-page-nifty">
        <div className="div">
        <div className="frame">
        {/* code goes over here */}
        <div className="date-input">
            <TextField
              type="date"
              label="Expiry Date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
       
    
     <div className="desktop-vertical">
          <div className="logo-container">
            <div className="logo">
              {/* <img className="icon-container" alt="Icon container" src="icon-container.svg" /> */}
              <div className="text">
                <h1 className="webby-frames">Bhavay Universal</h1>
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

export default F_O;