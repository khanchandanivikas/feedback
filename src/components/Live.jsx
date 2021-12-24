import React from "react";
import "../style/live.css";

const Live = () => {
  return (
    <div>
      <h4>Live (2)</h4>
      <p>Ideas prioritized for research</p>
      <div>
      <div className="live-task">
          <p>
            <i className="fas fa-circle"></i> Live
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
        <div className="live-task">
          <p>
            <i className="fas fa-circle"></i> Live
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

export default Live;
