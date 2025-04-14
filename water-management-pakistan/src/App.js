import React, { useState } from "react";
import { sindhWaterData } from "./data/sindhWaterData";
import Header from "./components/Header";
import RegionSelector from "./components/RegionSelector";
import WaterStatus from "./components/WaterStatus";
import DataVisualization from "./components/DataVisualization";
import ActionList from "./components/ActionList";
import MapView from "./components/MapView";
import "./styles/App.css";

function App() {
  // State to manage selected region, defaults to first region
  const [selectedRegion, setSelectedRegion] = useState(
    sindhWaterData.regions[0]
  );

  // Handler for region selection change
  const handleRegionChange = (regionId) => {
    const region = sindhWaterData.regions.find((r) => r.id === regionId);
    setSelectedRegion(region);
  };

  return (
    <div className="app">
      <Header />

      <div className="dashboard-container">
        {/* Left panel - Region selection and status */}
        <div className="control-panel">
          <RegionSelector
            regions={sindhWaterData.regions}
            selectedRegion={selectedRegion.id}
            onRegionChange={handleRegionChange}
          />
          <WaterStatus region={selectedRegion} />
        </div>

        {/* Main content - Data visualization and actions */}
        <div className="content-panel">
          <MapView region={selectedRegion} />
          <DataVisualization region={selectedRegion} />
          <ActionList region={selectedRegion} />
        </div>
      </div>
    </div>
  );
}

export default App;
