import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../style/planned.css";

const Planned = (props) => {
  let history = useHistory();
  const plannedFeedbacks = props.plannedFeedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;

  return (
    <div>
      <h4>Planned ({plannedFeedbacks.length})</h4>
      <p>Ideas prioritized for research</p>
      <div>
        {plannedFeedbacks.map((plannedFeedback) => {
          return (
            <div key={plannedFeedback._id} className="planned-task">
              <p>
                <i className="fas fa-circle"></i> Planned
              </p>
              <Link to="/comments">
                <h5
                  value={plannedFeedback._id}
                  onClick={() => {
                    setFeedbackIdSelected(plannedFeedback._id);
                    setFeedbackInfoSelected(plannedFeedback);
                    localStorage.setItem(
                      "feedbackInfo",
                      JSON.stringify({
                        title: plannedFeedback.title,
                        details: plannedFeedback.details,
                        votes: plannedFeedback.votes,
                        category: plannedFeedback.category,
                        comments: plannedFeedback.comments,
                        status: plannedFeedback.status,
                      })
                    );
                    localStorage.setItem(
                      "feedbackSelectedId",
                      JSON.stringify({
                        id: plannedFeedback._id,
                      })
                    );
                    setTimeout(() => {
                      history.push("/comments");
                    }, 700);
                  }}
                >
                  {plannedFeedback.title}
                </h5>
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
