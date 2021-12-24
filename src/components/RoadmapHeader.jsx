import React from "react";
import '../style/roadmapHeader.css';
import { Link } from "react-router-dom";

const RoadmapHeader = () => {
  return (
    <div className="roadmapHeader-container">
      <div>
        <Link to="/">
          <p>
            <i className="fas fa-chevron-left"></i>Go Back
          </p>
        </Link>
        <h2>Roadmap</h2>
      </div>
      <Link to="/addFeedback">
        <button className="btn-add-feedback">+ Add Feedback</button>
      </Link>
    </div>
  );
};

export default RoadmapHeader;
