import React from "react";

const ActionList = ({ region }) => {
  return (
    <div className="action-list">
      <h2>Take Action in {region.name}</h2>

      <div className="solutions-section">
        <h3>Recommended Solutions</h3>
        <div className="solutions-grid">
          {region.solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <h4>{solution.title}</h4>
              <p>{solution.description}</p>
              <div className="solution-meta">
                <span>Cost: {solution.cost}</span>
                <span>Impact: {solution.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ngo-section">
        <h3>Organizations Working Here</h3>
        <ul className="ngo-list">
          {region.ngos.map((ngo, index) => (
            <li key={index}>
              <strong>{ngo.name}</strong>
              <p>{ngo.focus}</p>
              <a href={`mailto:${ngo.contact}`}>Contact: {ngo.contact}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="personal-actions">
        <h3>What You Can Do</h3>
        <ul>
          <li>Conserve water in your daily activities</li>
          <li>Support local water conservation initiatives</li>
          <li>Spread awareness about water scarcity</li>
          <li>Donate to organizations working in this region</li>
        </ul>
      </div>
    </div>
  );
};

export default ActionList;
