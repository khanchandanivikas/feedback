import React from "react";
import { Link } from "react-router-dom";
import "../style/planned.css";

const Planned = (props) => {
  const plannedFeedbacks = props.plannedFeedbacks;
  return (
    <div>
      <h4>Planned ({plannedFeedbacks.length})</h4>
      <p>Ideas prioritized for research</p>
      <div>
        {plannedFeedbacks.map((plannedFeedback) => {
          return (
            <div className="planned-task">
              <p>
                <i className="fas fa-circle"></i> Planned
              </p>
              <Link to="/comments">
                <h5>{plannedFeedback.title}</h5>
              </Link>
              <p>{plannedFeedback.details}</p>
              <button>{plannedFeedback.category}</button>
              <div className="stats">
                <div className="feedback-upvote-roadmap">
                  <i className="fas fa-chevron-up"></i>
                  <button className="upvote">{plannedFeedback.votes}</button>
                </div>
                <p>
                  <i className="fas fa-comment"></i>{" "}
                  {plannedFeedback.comments.length}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Planned;
