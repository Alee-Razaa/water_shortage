import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const DataVisualization = ({ region }) => {
  // Prepare rainfall data for chart
  const rainfallData = {
    labels: region.rainfallData.map((item) => item.year),
    datasets: [
      {
        label: "Rainfall (mm)",
        data: region.rainfallData.map((item) => item.rainfall),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Rainfall Trends in ${region.name} (2018-2025)`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Rainfall (mm)",
        },
      },
    },
  };

  return (
    <div className="data-visualization">
      <h2>Data Visualization</h2>
      <div className="chart-container">
        <Bar data={rainfallData} options={options} />
      </div>
    </div>
  );
};

export default DataVisualization;
