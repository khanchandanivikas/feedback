import React from "react";
import { Link } from "react-router-dom";
import "../style/live.css";

const Live = (props) => {
  const liveFeedbacks = props.liveFeedbacks;
  return (
    <div>
      <h4>Live ({liveFeedbacks.length})</h4>
      <p>Released features</p>
      <div>
      {liveFeedbacks.map((liveFeedback) => {
          return (
            <div className="live-task">
              <p>
                <i className="fas fa-circle"></i> Live
              </p>
              <Link to="/comments">
                <h5>{liveFeedback.title}</h5>
              </Link>
              <p>{liveFeedback.details}</p>
              <button>{liveFeedback.category}</button>
              <div className="stats">
                <div className="feedback-upvote-roadmap">
                  <i className="fas fa-chevron-up"></i>
                  <button className="upvote">{liveFeedback.votes}</button>
                </div>
                <p>
                  <i className="fas fa-comment"></i>{" "}
                  {liveFeedback.comments.length}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Live;
