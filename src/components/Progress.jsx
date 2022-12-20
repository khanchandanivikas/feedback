import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../style/progress.css";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import axios from "axios";

const Progress = (props) => {
  let history = useHistory();
  const progressFeedbacks = props.progressFeedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  const loggedIn = props.loggedIn;
  const datos = props.datos;
  const getProgressFeedbacks = props.getProgressFeedbacks;
  const getAllFeedbacks = props.getAllFeedbacks;

  const likeFeedback = async (feedbackId, userId) => {
    if (loggedIn) {
      await axios
        .patch(
          process.env.REACT_APP_BACKEND_URL +
            `/api/feedback/increment/${feedbackId}/${userId}`
        )
        .then(() => {
          // console.log(response);
          getProgressFeedbacks();
          getAllFeedbacks("");
          cogoToast.success("Liked");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Not Logged",
        text: "You must be logged in to vote for  a feedback",
        confirmButtonColor: "#4661e6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/signin");
        }
      });
    }
  };

  const dislikeFeedback = async (feedbackId, userId) => {
    if (loggedIn) {
      await axios
        .patch(
          process.env.REACT_APP_BACKEND_URL +
            `/api/feedback/decrement/${feedbackId}/${userId}`
        )
        .then(() => {
          // console.log(response);
          getProgressFeedbacks();
          getAllFeedbacks("");
          cogoToast.success("Disliked");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Not Logged",
        text: "You must be logged in to vote for  a feedback",
        confirmButtonColor: "#4661e6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/signin");
        }
      });
    }
  };

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
                        likes: progressFeedback.likes,
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
              <button className="btn-category">{progressFeedback.category}</button>
              <div className="stats">
                {progressFeedback.likes.includes(datos.userId) ? (
                  <div
                    onClick={() =>
                      dislikeFeedback(progressFeedback._id, datos.userId)
                    }
                    className="feedback-downvote-roadmap"
                  >
                    <i className="fas fa-chevron-up"></i>
                    <button className="downvote">
                      {progressFeedback.votes}
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      likeFeedback(progressFeedback._id, datos.userId)
                    }
                    className="feedback-upvote-roadmap"
                  >
                    <i className="fas fa-chevron-up"></i>
                    <button className="upvote">{progressFeedback.votes}</button>
                  </div>
                )}
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
