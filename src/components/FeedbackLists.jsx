import React from "react";
import { motion } from "framer-motion";
import "../style/feedbackLists.css";
import { useHistory } from "react-router-dom";
import NotFoundCategory from "./NotFoundCategory";

const FeedbackLists = (props) => {
  let history = useHistory();
  const feedbacks = props.feedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
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
            <div className="feedback-upvote">
              <i className="fas fa-chevron-up"></i>
              <button className="upvote">{feedback.votes}</button>
            </div>
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
