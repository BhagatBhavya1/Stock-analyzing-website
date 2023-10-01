import React, { useState, useEffect } from "react"; // Import useState and useEffect
import ToggleButton from "./Toggle";
import "./DataTable.css";

const DataTable = ({ data, count, searchQuery }) => {
  // Use the count prop to limit the number of rows displayed
  const limitedData = data.slice(0, count);

  // State to store the filtered data
  const [filteredData, setFilteredData] = useState([]);

  // Function to filter the data based on the search query
  const filterData = () => {
    if (!searchQuery) {
      // If the search query is empty, show all data
      setFilteredData(limitedData);
    } else {
      // Filter data based on the search query
      const filtered = limitedData.filter((row) =>
        row.col1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.col2.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.col3.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // Update the filtered data whenever the search query changes
  useEffect(() => {
    filterData();
  }, [searchQuery]);

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
              <td>
                <ToggleButton initialState={false} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
