import React from "react";

// Helper function to get status color
const getStatusColor = (status) => {
  switch (status) {
    case "critical":
      return "#ff4d4f";
    case "high":
      return "#ffa940";
    case "moderate":
      return "#faad14";
    case "low":
      return "#52c41a";
    default:
      return "#d9d9d9";
  }
};

const WaterStatus = ({ region }) => {
  return (
    <div className="water-status">
      <h2>Shortage Status</h2>
      <div className="status-indicator">
        <div
          className="status-level"
          style={{ backgroundColor: getStatusColor(region.waterStatus) }}
        >
          {region.waterStatus.toUpperCase()}
        </div>
      </div>

      <div className="status-details">
        <div className="detail-item">
          <span className="detail-label">Annual Rainfall:</span>
          <span className="detail-value">{region.annualRainfall} mm</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Groundwater Level:</span>
          <span className="detail-value">{region.groundwaterLevel} meters</span>
        </div>
      </div>
    </div>
  );
};

export default WaterStatus;
