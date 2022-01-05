import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../style/progress.css";

const Progress = (props) => {
  let history = useHistory();
  const progressFeedbacks = props.progressFeedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  return (
    <div>
      <h4>In-Progress ({progressFeedbacks.length})</h4>
      <p>Currently being developed</p>
      <div>
        {progressFeedbacks.map((progressFeedback) => {
          return (
            <div key={progressFeedback._id} className="progress-task">
              <p>
                <i className="fas fa-circle"></i> In-Progress
              </p>
              <Link to="/comments">
                <h5
                  value={progressFeedback._id}
                  onClick={() => {
                    setFeedbackIdSelected(progressFeedback._id);
                    setFeedbackInfoSelected(progressFeedback);
                    localStorage.setItem(
                      "feedbackInfo",
                      JSON.stringify({
                        title: progressFeedback.title,
                        details: progressFeedback.details,
                        votes: progressFeedback.votes,
                        category: progressFeedback.category,
                        comments: progressFeedback.comments,
                        status: progressFeedback.status,
                      })
                    );
                    localStorage.setItem(
                      "feedbackSelectedId",
                      JSON.stringify({
                        id: progressFeedback._id,
                      })
                    );
                    setTimeout(() => {
                      history.push("/comments");
                    }, 700);
                  }}
                >
                  {progressFeedback.title}
                </h5>
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
