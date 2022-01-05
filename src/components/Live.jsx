import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../style/live.css";

const Live = (props) => {
  let history = useHistory();
  const liveFeedbacks = props.liveFeedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  return (
    <div>
      <h4>Live ({liveFeedbacks.length})</h4>
      <p>Released features</p>
      <div>
        {liveFeedbacks.map((liveFeedback) => {
          return (
            <div key={liveFeedback._id} className="live-task">
              <p>
                <i className="fas fa-circle"></i> Live
              </p>
              <Link to="/comments">
                <h5
                  value={liveFeedback._id}
                  onClick={() => {
                    setFeedbackIdSelected(liveFeedback._id);
                    setFeedbackInfoSelected(liveFeedback);
                    localStorage.setItem(
                      "feedbackInfo",
                      JSON.stringify({
                        title: liveFeedback.title,
                        details: liveFeedback.details,
                        votes: liveFeedback.votes,
                        category: liveFeedback.category,
                        comments: liveFeedback.comments,
                        status: liveFeedback.status,
                      })
                    );
                    localStorage.setItem(
                      "feedbackSelectedId",
                      JSON.stringify({
                        id: liveFeedback._id,
                      })
                    );
                    setTimeout(() => {
                      history.push("/comments");
                    }, 700);
                  }}
                >
                  {liveFeedback.title}
                </h5>
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
