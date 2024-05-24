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
import "./F&O.css";
import axios from "axios";
// import StockDetailInfo from "./StockDetailInfo"
import { BrowserRouter as Router,useParams, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom'; 


const F_O = () => {
  // const navigate = useNavigate();
  const { stock_name } = useParams();
  const [name, setName] = useState("");
  const [FNO , setFNO] = useState([]);
  const [isNiftyWhite, setIsNiftyWhite] = useState(false);
  const [isFNOWhite, setIsFNOWhite] = useState(true);
  const[isStocksWhite,setIsStocksWhite] = useState(false);
  const [isAddStockWhite, setIsAddStockWhite] = useState(false);
  const [exp_date,setexpdate] = useState("");
  const [ent_date,setentdate] = useState("");
  const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
  const columns = ["Stock_name","Latest closing price", "PRICE change", "COI change","Analysis"];
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
  const handleExpDateChange = (event) => {
    const newDate = event.target.value;
    setexpdate(newDate);
  };
  const handleEntDateChange = (event) => {
    const newEntDate = event.target.value;

    // Check if the Enter Date is less than the Expiry Date and greater than or equal to today's date
    if (newEntDate < exp_date && newEntDate < today) {
      setentdate(newEntDate);
    } else {
      // Display an error message or handle the validation error as needed
      alert("Invalid Enter Date. Please enter a valid date.");
    }
  };
  
  const fetchData = (enterDate, expiryDate) => {
    // Make an Axios GET request to your API endpoint
    axios
      .get("http://127.0.0.1:5000/fnofetch", {
        params: {
          enterDate: enterDate,
          expiryDate: expiryDate,
        },
      })
      .then((response) => {
        // Handle the API response data
        setFNO(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    // Fetch initial data when the component mounts (you can modify this based on your needs)
    fetchData(ent_date, exp_date);
  }, [ent_date, exp_date]);

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
              value={exp_date} // Bind the value of the input field to the state variable
              onChange={handleExpDateChange}
            />
            <TextField
              type="date"
              label="Enter Date"
              InputLabelProps={{
                shrink: true,
              }}
              value={ent_date} // Bind the value of the input field to the state variable
              onChange={handleEntDateChange}
            />
        </div>
        <div className="FNOTable">
                <table>
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(FNO).map((rowName) => (
                  <tr key={rowName}>
                    <td>{rowName}</td>
                    {columns.slice(1).map((column) => (
                      <td key={column}>{FNO[rowName][column]}</td>
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

              <Button
        className={isNiftyWhite ? 'Stock-button white' : 'Stock-button'}
        variant="outlined"
        startIcon={<Home />}
        onClick={handleNiftyClick}
      >
      ANalysis
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