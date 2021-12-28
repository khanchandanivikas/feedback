import React from "react";
import { Link } from "react-router-dom";
import "../style/planned.css";

const Planned = () => {
  return (
    <div>
      <h4>Planned (2)</h4>
      <p>Ideas prioritized for research</p>
      <div>
        <div className="planned-task">
          <p>
            <i className="fas fa-circle"></i> Planned
          </p>
          <Link to="/comments">
            <h5>More comprehensive reports</h5>
          </Link>
          <p>
            It would be great to see a more detailed breakdown of solutions.
          </p>
          <button>Feature</button>
          <div className="stats">
            <div className="feedback-upvote-roadmap">
              <i className="fas fa-chevron-up"></i>
              <button className="upvote">112</button>
            </div>
            <p>
              <i className="fas fa-comment"></i> 2
            </p>
          </div>
        </div>
        <div className="planned-task">
          <p>
            <i className="fas fa-circle"></i> Planned
          </p>
          <h5>More comprehensive reports</h5>
          <p>
            It would be great to see a more detailed breakdown of solutions.
          </p>
          <button>Feature</button>
          <div className="stats">
            <div className="feedback-upvote-roadmap">
              <i className="fas fa-chevron-up"></i>
              <button className="upvote">112</button>
            </div>
            <p>
              <i className="fas fa-comment"></i> 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planned;
