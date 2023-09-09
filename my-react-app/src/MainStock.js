import React, { useState } from "react";
import TextField from '@mui/material/TextField'; 
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
import "./MainStock.css";

import AddStock from "./AddStock";

const Home_Page = () => {
  const [value, setValue] = React.useState(null);
  // const navigate = useNavigate();
 
  const [name, setName] = useState("");
  const [isNiftyWhite, setIsNiftyWhite] = useState(false);
  const [isFNOWhite, setIsFNOWhite] = useState(false);
  const[isStocksWhite,setIsStocksWhite] = useState(true);
  const [isAddStockWhite, setIsAddStockWhite] = useState(false);
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
    {isAddStockWhite ? (
        <AddStock />
      ) : (
      <div className="div">
       
        <div className="frame">
        <div className="allstocks">
                    <div className="stockinfo" >
            <p className="in-boxinfo">reliance industry</p>
                    <IoMdTrendingUp className="stock-icon" />
                    <p className="rise1">15.2%</p>

        </div>
                <div className="stockinfo2" >
            <p className="in-boxinfo">hdfc bank</p>
                    <IoMdTrendingDown className="stock-icon2" />
                    <p className="rise2">3.21%</p>

        </div>

        </div>

  {/* <div class="content">
    {/* <h1>
      {/* Your heading content */}
    {/* </h1> */}
    {/* <ExcelTable /> } */}
  {/* </div> */} 
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
      )}
    </div>
  );
};

export default Home_Page;