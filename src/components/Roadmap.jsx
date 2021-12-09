import React from "react";
import "../style/roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <div>
        <h3>Roadmap</h3>
        <p>View</p>
      </div>
      <div>
        <p>
          <span className="planned">
            <i className="fas fa-circle"></i>
          </span>{" "}
          Planned
        </p>
        <p>2</p>
      </div>
      <div>
        <p>
          <span className="progress">
            <i className="fas fa-circle"></i>
          </span>{" "}
          In-progress
        </p>
        <p>3</p>
      </div>
      <div>
        <p>
          <span className="live">
            <i className="fas fa-circle"></i>
          </span>{" "}
          Live
        </p>
        <p>1</p>
      </div>
    </div>
  );
};

export default Roadmap;
