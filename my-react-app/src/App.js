import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './App.css';
import Home_Page from "./Home_Page";
import MainStock from "./MainStock";
import { BrowserRouter as Router, Routes,Route, Switch, BrowserRouter } from "react-router-dom";
import AddStock from "./AddStock";
import Login from "./Login";
import ExcelTable from "./ExcelTable";
import StockDetailInfo from "./StockDetailInfo";
import Candel_Chart from "./Candel_chart";
import F_O from "./F&O";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Mainstock" element={<MainStock />}/>
        <Route path="/AddStock" element={<AddStock />} />
        <Route path="/GetStock" element={<ExcelTable />} />
        <Route path="/StockDetailInfo/:stock_name" element={<StockDetailInfo />} />
        <Route path="/Candel" element={<Candel_Chart />} />
        <Route path="/F_O" element={<F_O />} />
      </Routes>
    </Router>
  );
};


export default App;