import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../style/planned.css";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import axios from "axios";

const Planned = (props) => {
  let history = useHistory();
  const plannedFeedbacks = props.plannedFeedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  const loggedIn = props.loggedIn;
  const datos = props.datos;
  const getPlannedFeedbacks = props.getPlannedFeedbacks;

  const likeFeedback = async (feedbackId, userId) => {
    if (loggedIn) {
      await axios
        .patch(
          process.env.REACT_APP_BACKEND_URL +
            `/api/feedback/increment/${feedbackId}/${userId}`
        )
        .then((response) => {
          console.log(response);
          getPlannedFeedbacks();
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
        .then((response) => {
          console.log(response);
          getPlannedFeedbacks();
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
                {plannedFeedback.likes.includes(datos.userId) ? (
                  <div
                    onClick={() =>
                      dislikeFeedback(plannedFeedback._id, datos.userId)
                    }
                    className="feedback-downvote-roadmap"
                  >
                    <i className="fas fa-chevron-up"></i>
                    <button className="downvote">
                      {plannedFeedback.votes}
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      likeFeedback(plannedFeedback._id, datos.userId)
                    }
                    className="feedback-upvote-roadmap"
                  >
                    <i className="fas fa-chevron-up"></i>
                    <button className="upvote">{plannedFeedback.votes}</button>
                  </div>
                )}
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
