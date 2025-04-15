import React from "react";

const RegionSelector = ({ regions, selectedRegion, onRegionChange }) => {
  return (
    <div className="region-selector">
      <h2>Select Region</h2>
      <select
        value={selectedRegion}
        onChange={(e) => onRegionChange(parseInt(e.target.value))}
        className="region-dropdown"
      >
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>

      <div className="region-info">
        <h3>{regions.find((r) => r.id === selectedRegion).name}</h3>
        <p>
          Population Affected:{" "}
          {regions
            .find((r) => r.id === selectedRegion)
            .populationAffected.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default RegionSelector;
