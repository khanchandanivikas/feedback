import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../style/feedbackLists.css";
import NotFoundCategory from "./NotFoundCategory";

const FeedbackLists = (props) => {
  const feedbacks = props.feedbacks;
  const animation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
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
              <Link to="/comments">
                <h3 className="link">{feedback.title}</h3>
              </Link>
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
