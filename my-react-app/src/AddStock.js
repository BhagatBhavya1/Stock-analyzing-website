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
      <p>Bhavya</p>
    </div>
  );
};

export default AddStock;