import React from "react";
import { motion } from "framer-motion";
import "../style/feedbackLists.css";
import { useHistory } from "react-router-dom";
import NotFoundCategory from "./NotFoundCategory";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import axios from "axios";

const FeedbackLists = (props) => {
  let history = useHistory();
  const feedbacks = props.feedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  const datos = props.datos;
  const loggedIn = props.loggedIn;
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

  const animation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };
  return (
    <div className="feedback-multiple">
      {feedbacks.map((feedback) => {
        return (
          <motion.div
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={feedback._id}
            className="feedback-single"
          >
            {(feedback.likes.includes(datos.userId) && datos) ? (
              <div
                onClick={() => dislikeFeedback(feedback._id, datos.userId)}
                className="feedback-downvote"
              >
                <i className="fas fa-chevron-up"></i>
                <button className="downvote">{feedback.votes}</button>
              </div>
            ) : (
              <div
                onClick={() => likeFeedback(feedback._id, datos.userId)}
                className="feedback-upvote"
              >
                <i className="fas fa-chevron-up"></i>
                <button className="upvote">{feedback.votes}</button>
              </div>
            )}
            <div>
              <h3
                value={feedback._id}
                onClick={() => {
                  setFeedbackIdSelected(feedback._id);
                  setFeedbackInfoSelected(feedback);
                  localStorage.setItem(
                    "feedbackInfo",
                    JSON.stringify({
                      title: feedback.title,
                      details: feedback.details,
                      votes: feedback.votes,
                      category: feedback.category,
                      comments: feedback.comments,
                      status: feedback.status,
                    })
                  );
                  localStorage.setItem(
                    "feedbackSelectedId",
                    JSON.stringify({
                      id: feedback._id,
                    })
                  );
                  setTimeout(() => {
                    history.push("/comments");
                  }, 700);
                }}
                className="link"
              >
                {feedback.title}
              </h3>
              <p>{feedback.details}</p>
              <button>{feedback.category}</button>
            </div>
            <div>
              <i className="fas fa-comment"></i>
              <h4>{feedback.comments.length}</h4>
            </div>
          </motion.div>
        );
      })}
      {feedbacks.length === 0 && <NotFoundCategory />}
    </div>
  );
};

export default FeedbackLists;
