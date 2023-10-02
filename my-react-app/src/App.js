import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './App.css';
import Home_Page from "./Home_Page";
import MainStock from "./MainStock";
import { BrowserRouter as Router, Routes,Route, Switch, BrowserRouter } from "react-router-dom";
import AddStock from "./AddStock";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Mainstock" element={<MainStock />}/>
        <Route path="/AddStock" element={<AddStock />} />
      </Routes>
    </Router>
  );
};


export default App;