import React, { useState, useEffect } from "react"; // Import useState and useEffect
import ToggleButton from "./Toggle";
import "./DataTable.css";
import axios from 'axios';

const DataTable =  ({data , searchQuery }) => {
  // Use the count prop to limit the number of rows displayed
  // State to store the filtered data
  const [filteredData, setFilteredData] = useState([]);
  // const [stockData , setstockData] = useState([]);
  // useEffect(() => {
  //   // Make an Axios GET request to your Express.js API endpoint
  //   axios.get('http://127.0.0.1:5000/Stock_status_data') // Replace with your API endpoint
  //     .then((response) => {
  //       console.log("call");
  //       setstockData(response.data);
  //       setFilteredData(stockData);
  //       filterData();
  //       // setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
      
  // }, [searchQuery]);
  
  // Function to filter the data based on the search query
  const filterData = () => {
      if (!searchQuery) {
        // If the search query is empty, show all data
        setFilteredData(data);
        console.log("filter",data);
      } else {
      // Filter data based on the search query
        const filtered = data.filter((row) =>
          row.stock_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };
    // Update the filtered data whenever the search query changes
    useEffect(() => {
      filterData();
    }, [searchQuery]);

    const handleToggleChange = (id, newState) => {
      // Update the UI immediately
      console.log("bhavya");
      const updatedData = data.map((row) =>
        row._id === id ? { ...row, status: newState ? 'Active' : 'Inactive', } : row
      );
      setFilteredData(updatedData);
  
      // Send a PUT request to update the state in the backend
      axios.put(`http://127.0.0.1:5000/api/update_stock_state/${id}`, {
        newState: newState ? 'Active' : 'Inactive',
      })
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        console.error('Error updating stock state:', error);
      });
    };
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.stock_name}</td>
              <td>{row.status}</td>
              <td>
              <ToggleButton initialState={row.status === 'Active'} onChange={(newState) => handleToggleChange(row._id, newState)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
