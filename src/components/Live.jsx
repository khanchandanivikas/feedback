import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../style/live.css";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import axios from "axios";

const Live = (props) => {
  let history = useHistory();
  const liveFeedbacks = props.liveFeedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  const loggedIn = props.loggedIn;
  const datos = props.datos;
  const getLiveFeedbacks = props.getLiveFeedbacks;
  const getAllFeedbacks = props.getAllFeedbacks;

  const likeFeedback = async (feedbackId, userId) => {
    if (loggedIn) {
      await axios
        .patch(
          process.env.REACT_APP_BACKEND_URL +
            `/api/feedback/increment/${feedbackId}/${userId}`
        )
        .then((response) => {
          console.log(response);
          getLiveFeedbacks();
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
        .then((response) => {
          console.log(response);
          getLiveFeedbacks();
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
              <button class="btn-category">{liveFeedback.category}</button>
              <div className="stats">
              {liveFeedback.likes.includes(datos.userId) ? (
                  <div
                    onClick={() =>
                      dislikeFeedback(liveFeedback._id, datos.userId)
                    }
                    className="feedback-downvote-roadmap"
                  >
                    <i className="fas fa-chevron-up"></i>
                    <button className="downvote">
                      {liveFeedback.votes}
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      likeFeedback(liveFeedback._id, datos.userId)
                    }
                    className="feedback-upvote-roadmap"
                  >
                    <i className="fas fa-chevron-up"></i>
                    <button className="upvote">{liveFeedback.votes}</button>
                  </div>
                )}
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
