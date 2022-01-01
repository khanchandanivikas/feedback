import React from "react";
import { Link } from "react-router-dom";
import "../style/progress.css";

const Progress = (props) => {
  const progressFeedbacks = props.progressFeedbacks;
  console.log(progressFeedbacks)
  return (
    <div>
      <h4>In-Progress ({progressFeedbacks.length})</h4>
      <p>Currently being developed</p>
      <div>
      {progressFeedbacks.map((progressFeedback) => {
          return (
            <div className="progress-task">
              <p>
                <i className="fas fa-circle"></i> In-Progress
              </p>
              <Link to="/comments">
                <h5>{progressFeedback.title}</h5>
              </Link>
              <p>{progressFeedback.details}</p>
              <button>{progressFeedback.category}</button>
              <div className="stats">
                <div className="feedback-upvote-roadmap">
                  <i className="fas fa-chevron-up"></i>
                  <button className="upvote">{progressFeedback.votes}</button>
                </div>
                <p>
                  <i className="fas fa-comment"></i>{" "}
                  {progressFeedback.comments.length}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Progress;
