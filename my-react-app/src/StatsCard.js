// StatsCard.js
import React from 'react';
import "./stats.css";
const StatsCard = ({ title, value }) => {
  return (
    <div className="stats-card">
      <div className="stats-info">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
